import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country : 'in',
    category : 'general'
  }

  static propTypes = {
    country : PropTypes.string
  }

  constructor(){
    super()
    console.log("Hello, I am a constructor from News Component");
    this.state = {  
      articles : [],
      loading : false,
      page : 1
    }
  }

  //This is used to fetch the data from News API and covert it to text and parsed Data
  async componentDidMount(){
    this.setState({loading:true});
    let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=932bc49f61974e26880612f3d9257b5b&pageSize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, 
      totalResults : parsedData.totalResults,
      loading : false
    }) 
  }
  handlePrevClick= async()=>{
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=932bc49f61974e26880612f3d9257b5b&page=${this.state.page - 1}&pageSize=12`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
    this.setState({
      articles: parsedData.articles,
      page : this.state.page - 1,
      loading : false

    })
  }
  handleNextClick = async()=>{
    if(! (this.state.page +1  >Math.ceil(this.state.totalResults/12))){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=932bc49f61974e26880612f3d9257b5b&page=${this.state.page + 1}&pageSize=12`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    
    this.setState({
      articles: parsedData.articles,
      page : this.state.page + 1,
      loading : false
    })
  }
  }
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin : '40px'}}>NewsUpdates -Top Headline of india </h2>
        {this.state.loading && < Spinner />}
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div> 
        })}

        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>

        <button disabled={this.state.page +1  >Math.ceil(this.state.totalResults/12)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
      </div>
    );
  }
}

export default News;
