import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles =  [
    {
        "source": {
            "id": "news24",
            "name": "News24"
        },
        "author": "Compiled by Lynn Butler",
        "title": "Dwaine Pretorius announces sudden Proteas retirement: 'It has been a blast'",
        "description": "Proteas all-rounder Dwaine Pretorius has confirmed his retirement from international cricket with immediate effect.",
        "url": "https://www.news24.com/sport/cricket/proteas/dwaine-pretorius-announces-sudden-proteas-retirement-it-has-been-a-blast-20230109",
        "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3523/6873e6e5c30f446f93846205c3108cac.jpg",
        "publishedAt": "2023-01-09T10:36:37+00:00",
        "content": "<ul><li>Proteas all-rounder Dwaine Pretorius has announced his unexpected retirement from international cricket.</li><li>The 33-year-old has played 30 T20Is, 27 ODIs and three Tests for the Proteas i… [+5369 chars]"
    },
    {
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": null,
        "title": "Pakistan v New Zealand - Cricket - BBC Sport",
        "description": "Find out the in depth batting and bowling figures for Pakistan v New Zealand in the One Day International Series on BBC Sport.",
        "url": "http://www.bbc.co.uk/sport/cricket/scorecard/ECKO55720",
        "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
        "publishedAt": "2023-01-09T09:52:22.2645077Z",
        "content": "<table><tr><th>Batter</th><th>How Out</th><th>Bowler</th><th>Runs</th><th>Balls</th><th>4s</th><th>6s</th><th>Mins</th><th>SR</th></tr>\r\n<tr><th>Total</th><th>(3.0 overs)</th><th>3-for1wickets</th><t… [+1350 chars]"
    },
    {
        "source": {
            "id": "abc-news-au",
            "name": "ABC News (AU)"
        },
        "author": "Simon Smale",
        "title": "Australia's lopsided summer of cricket, beating South Africa and West Indies, unlikely to be an outlier",
        "description": "Australia's summer of cricket was dramatically lopsided, but looking at where both Australia and South Africa go next, there is a concern that mismatches will become the norm.",
        "url": "http://www.abc.net.au/news/2023-01-09/australia-lopsided-summer-of-cricket-south-africa-west-indies/101835674",
        "urlToImage": "https://live-production.wcms.abc-cdn.net.au/3b46848aaa4f5eab50e2519acffa10d0?impolicy=wcms_crop_resize&cropH=1688&cropW=3000&xPos=0&yPos=57&width=862&height=485",
        "publishedAt": "2023-01-08T19:49:03Z",
        "content": "You'll be hard pushed to find anyone who will come away from the summer of cricket with much positivity.\r\nSure, Australia were excellent.\r\nSteve Smith, Marnus Labuschagne, David Warner, Usman Khawaja… [+6227 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
]
  constructor(){
    super()
    console.log("Hello, I am a constructor from News Component");
    this.state = {
      articles : this.articles
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h3>NewsUpdates -Top Headline of Cricket </h3>
        <div className="row">
        {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div> 
        })}

        </div>
        
      </div>
    );
  }
}

export default News;