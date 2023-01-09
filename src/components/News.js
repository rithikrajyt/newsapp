import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor(){
    super()
    console.log("Hello, I am a constructor from News Component");
    this.state = {  
      articles : [],
      loading : false
    }
  }

  //This is used to fetch the data from News API and covert it to text and parsed Data
  async componentDidMount(){
    
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=932bc49f61974e26880612f3d9257b5b";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles}) 
  }
  render() {
    return (
      <div className="container my-3">
        <h3>NewsUpdates -Top Headline of india </h3>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div> 
        })}

        </div>
        
      </div>
    );
  }
}

export default News;
