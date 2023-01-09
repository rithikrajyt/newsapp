import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    
    let {title,description, imageUrl, newsUrl} = this.props;
    return (
        <div className="my-3">
        <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src={!imageUrl?"https://img.freepik.com/free-vector/breaking-news-concept_23-2148514216.jpg?w=996&t=st=1673266847~exp=1673267447~hmac=c207ddedfb858142b054c793beb30f59d3b43198cf4027500f6551509f65a88f":imageUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
      </div>
    )
  }
}

export default NewsItem
