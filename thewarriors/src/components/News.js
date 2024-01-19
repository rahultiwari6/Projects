import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    articles = [{
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": null,
      "title": "Braves' Acuna confronted by two fans in seventh inning of win - ESPN - ESPN",
      "description": "Atlanta Braves outfielder Ronald Acuna Jr. was confronted by two fans in right field during Monday's game at Coors Field, an encounter that left the star player knocked to the ground in bottom of the seventh inning of a 14-4 victory in Denver.",
      "url": "https://www.espn.com/mlb/story/_/id/38280783/braves-acuna-confronted-two-fans-seventh-inning-win",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0829%2Fr1217101_1296x729_16%2D9.jpg",
      "publishedAt": "2023-08-29T03:52:00Z",
      "content": "Aug 28, 2023, 11:52 PM ET\r\nDENVER -- Atlanta Braves outfielder Ronald Acuna Jr. was confronted by two fans in right field during Monday's game at Coors Field, an encounter that left the star player k… [+2040 chars]"
    }, {
      "source": {
        "id": null,
        "name": "The A.V. Club"
      },
      "author": "Matt Schimkowitz",
      "title": "Former Bachelorette contestant Josh Seiter dead at 36 - The A.V. Club",
      "description": "Days after sharing his mental health struggles on Instagram, Seiter has died",
      "url": "https://www.avclub.com/former-bachelorette-contestant-josh-seiter-dead-at-36-1850782635",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1260e472140417e17d7bb7ccd4d32cb8.png",
      "publishedAt": "2023-08-29T03:23:00Z",
      "content": "Josh Seiter, the former Bachelorette contestant, has died. Per an Instagram post published on Seiters account by his family, the reality TV star died on Monday, August 28, at 36. \r\nIt is with an extr… [+1971 chars]"
    }, {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Natasha Chen, Anna-Maja Rappard, Cheri Mossburg",
      "title": "Hawaiian Electric says power lines started morning fire on August 8, but not afternoon Lahaina Fire - CNN",
      "description": "Hawaiian Electric Company said that power lines falling in high winds seem to have caused a fire during the early morning of August 8, but power lines in West Maui had been de-energized for more than six hours by the time a second afternoon fire began in the …",
      "url": "https://www.cnn.com/2023/08/28/business/hawaiian-electric-power-lines-fire/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230829090052-hawaii-fires-power-lines.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-08-29T02:38:00Z",
      "content": "Hawaiian Electric Company said that power lines falling in high winds seem to have caused a fire during the early morning of August 8, but power lines in West Maui had been de-energized for more than… [+3072 chars]"
    }, {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Satoshi Sugiyama",
      "title": "Toyota halts operations at 12 Japan factories due to system failure - Reuters",
      "description": "Toyota Motor Corp <a href=\"https://www.reuters.com/markets/companies/7203.T\" target=\"_blank\">(7203.T)</a> suspended operations at a dozen assembly plants in Japan on Tuesday due to a malfunction with its production system, the automaker said, likely bringing …",
      "url": "https://www.reuters.com/business/autos-transportation/toyota-halts-operations-12-japan-factories-due-system-failure-nhk-2023-08-29/",
      "urlToImage": "https://www.reuters.com/resizer/IDgu5VD4DOG9wlqfGyhjfpdqjZE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JZ4A2VDLVVKCZB5N2QJTHM2FKE.jpg",
      "publishedAt": "2023-08-29T02:26:08Z",
      "content": "TOKYO, Aug 29 (Reuters) - Toyota Motor Corp (7203.T) suspended operations at a dozen assembly plants in Japan on Tuesday due to a malfunction with its production system, the automaker said, likely br… [+1782 chars]"
    }, {
      "source": {
        "id": null,
        "name": "NDTV News"
      },
      "author": null,
      "title": "Live Parasitic Worm Found In Australian Woman's Brain In World-First Discovery - NDTV",
      "description": "The Ophidascaris robertsi roundworm was pulled from the 64-year-old woman after brain surgery, still alive and wriggling.",
      "url": "https://www.ndtv.com/science/live-parasitic-worm-found-in-australian-womans-brain-in-world-first-discovery-4338020",
      "urlToImage": "https://c.ndtvimg.com/2023-08/skbvn1so_the-live-roundworm-after-it-has-been-removed-from-the-patients-brain_625x300_29_August_23.jpg",
      "publishedAt": "2023-08-29T02:21:17Z",
      "content": "The live roundworm after it has been removed from the patient's brain.\r\nIn the first case of its kind, Australian doctors discovered a live parasitic roundworm measuring 8 centimetres within the brai… [+1878 chars]"
    }, {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Sara Smart, Steve Almasy",
      "title": "University of North Carolina faculty member is killed in campus shooting, and a suspect is in custody, school says - CNN",
      "description": "A University of North Carolina at Chapel Hill faculty member was fatally shot on campus on Monday afternoon, and a suspect is in custody, a school official said.",
      "url": "https://www.cnn.com/2023/08/28/us/university-of-north-carolina-shooting/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230828142731-01-chapel-hill-lockdown-screengrab.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2023-08-29T02:00:00Z",
      "content": "A suspect is in custody after a shooting at the University of North Carolina at Chapel Hill on Monday afternoon left a faculty member dead and prompted students and others to shelter in place for hou… [+2266 chars]"
    }, {
      "source": {
        "id": "cbs-news",
        "name": "CBS News"
      },
      "author": "Aliza Chasan",
      "title": "16-year-old girl stabbed to death by another teen during McDonald's sauce dispute - CBS News",
      "description": "The alleged stabber was taken into custody on charges of second degree murder while armed.",
      "url": "https://www.cbsnews.com/news/mcdonalds-stabbing-sauce-naima-liggon-washington-dc-waldorf-maryland/",
      "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/08/29/f95202bd-7bb5-4710-bcad-70142d0df725/thumbnail/1200x630/49797b8de78348e216b03f4b2a7c0810/gettyimages-1250747815.jpg?v=d305b8f74537e6fcb32d87e8b9acfe15",
      "publishedAt": "2023-08-29T01:36:22Z",
      "content": "A 16-year-old girl allegedly stabbed another teenage girl to death in Washington, D.C., early Sunday, police said. The stabbing happened during an argument over McDonald's sauces, CBS affiliate WUSA-… [+1243 chars]"
    }, {
      "source": {
        "id": null,
        "name": "The Athletic"
      },
      "author": "The Athletic Staff",
      "title": "Browns acquire kicker Dustin Hopkins from Chargers: Why both teams made the trade - The Athletic",
      "description": "It appears Cameron Dicker will be the Chargers' kicker to open the 2023 regular season.",
      "url": "https://theathletic.com/4813005/2023/08/28/dustin-hopkins-trade-chargers-browns/",
      "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/08/28135243/GettyImages-1429706369-scaled.jpg",
      "publishedAt": "2023-08-29T01:35:39Z",
      "content": "By Zac Jackson, Jeff Howe and Daniel Popper\r\nThe Los Angeles Chargers have traded kicker Dustin Hopkins to the Cleveland Browns, the team announced Monday. Heres what you need to know:\r\n<ul><li>The C… [+3081 chars]"
    }, {
      "source": {
        "id": null,
        "name": "Daily Mail"
      },
      "author": "Jake Nisse, Associated",
      "title": "US Open: Coco Gauff attracts A-Listers Barack and Michelle Obama, Mike Tyson, Alec and Hilaria Baldwin, Anna W - Daily Mail",
      "description": "Coco Gauff attracted an A-list crowd to her first-round matchup with Laura Siegemund on Monday night at the US Open, including Barack and Michelle Obama, Mike Tyson and Danny DeVito.",
      "url": "https://www.dailymail.co.uk/sport/tennis/article-12455065/US-Open-Coco-Gauff-Barack-Michelle-Obama-Mike-Tyson-Alec-Hilaria-Baldwin-Anna-Wintour-Danny-DeVito.html",
      "urlToImage": "https://i.dailymail.co.uk/1s/2023/08/29/01/74814979-0-image-a-2_1693270427425.jpg",
      "publishedAt": "2023-08-29T01:14:49Z",
      "content": "Coco Gauff attracted an A-list crowd to her first-round matchup with Laura Siegemund on Monday night at the US Open, including Barack and Michelle Obama, Mike Tyson, Danny DeVito, Anna Wintour and Al… [+4097 chars]"
    }, {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "American Airlines fined for making passengers sit on tarmac - CBS Evening News",
      "description": "American Airlines has been fined more than $4 million for making thousands of passengers wait on tarmacs for hours without being let off their planes.#news #...",
      "url": "https://www.youtube.com/watch?v=ug-vkP_85fo",
      "urlToImage": "https://i.ytimg.com/vi/ug-vkP_85fo/maxresdefault.jpg",
      "publishedAt": "2023-08-29T00:58:18Z",
      "content": null
    }, {
      "source": {
        "id": "ars-technica",
        "name": "Ars Technica"
      },
      "author": "Stephen Clark",
      "title": "US spy satellite agency isn't so silent about new “Silent Barker” mission - Ars Technica",
      "description": "This will be the first launch for ULA's Atlas V rocket in nearly 10 months.",
      "url": "https://arstechnica.com/space/2023/08/us-spy-satellite-agency-isnt-so-silent-about-new-silent-barker-mission/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/08/53141510910_52966857de_k-760x380.jpg",
      "publishedAt": "2023-08-29T00:31:06Z",
      "content": "Enlarge/ United Launch Alliance's Atlas V rocket rolls to its launch pad in Florida before the Silent Barker mission.\r\n27 with \r\n8:45 pm EDT update: The launch of an Atlas V rocket with the Silent Ba… [+7465 chars]"
    }, {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "'We can't let hate prevail,' Biden says after Florida shooting - Reuters",
      "description": null,
      "url": "https://www.youtube.com/watch?v=cMsy-QpsQlg",
      "urlToImage": null,
      "publishedAt": "2023-08-29T00:31:05Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    }, {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "ESPN’s Dan Orlovsky Talks Trey Lance, Dak, Rodgers, Jags & More with Rich Eisen | Full Interview - The Rich Eisen Show",
      "description": "ESPN NFL Analyst Dan Orlovsky and Rich Eisen discuss the 49ers trading Trey Lance to the Dallas Cowboys and how muck 49ers HC Kyle Shanahan is too blame for ...",
      "url": "https://www.youtube.com/watch?v=niWCNmS8Pgk",
      "urlToImage": "https://i.ytimg.com/vi/niWCNmS8Pgk/maxresdefault.jpg",
      "publishedAt": "2023-08-29T00:30:16Z",
      "content": null
    }, {
      "source": {
        "id": "politico",
        "name": "Politico"
      },
      "author": null,
      "title": "Mark Meadows takes stand in bid to derail Georgia criminal charges - POLITICO",
      "description": "The former top Trump aide testified that he viewed nearly everything as part of his official duties — an argument he hopes will give him immunity.",
      "url": "https://www.politico.com/news/2023/08/28/meadows-testimony-georgia-hearing-00113215",
      "urlToImage": "https://static.politico.com/9c/5f/2ff51d864cfe9f071b79bea47788/virus-outbreak-trump-23663.jpg",
      "publishedAt": "2023-08-28T23:58:19Z",
      "content": "It was a 24-hour, seven-day-a-week kind of job, Meadows said during questioning by his lead attorney, George Terwilliger III. It was a very broad responsibility. I found myself on defense a lot with … [+8560 chars]"
    }, {
      "source": {
        "id": null,
        "name": "Variety"
      },
      "author": "Selome Hailu",
      "title": "‘The Idol’ Canceled: Controversial Series From Sam Levinson and the Weeknd Won’t Get Season 2 - Variety",
      "description": "Goodbye, angel. “The Idol” — HBO’s controversy-ridden series from Sam Levinson and Abel “The Weeknd” Tesfaye — has been canceled after one season. “’The Idol&#82…",
      "url": "https://variety.com/2023/tv/news/the-idol-canceled-the-weeknd-hbo-season-2-1235706540/",
      "urlToImage": "https://variety.com/wp-content/uploads/2023/08/abel-the-weeknd-tesfaye-lily-rose-depp_1-e1693261981503.jpg?w=1000&h=563&crop=1",
      "publishedAt": "2023-08-28T23:00:00Z",
      "content": "Goodbye, angel.\r\n“The Idol” — HBO’s controversy-ridden series from Sam Levinson and Abel “The Weeknd” Tesfaye — has been canceled after one season.\r\n“’The Idol’ was one of HBO’s most provocative orig… [+2459 chars]"
    }, {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "The Associated Press",
      "title": "Powerful quake and aftershocks rock Indonesia's Bali and Java islands. No casualties reported - ABC News",
      "description": "A powerful earthquake and two strong aftershocks have rocked Indonesia’s resort island of Bali and other parts of the country, causing panic but no immediate reports of damage or casualties",
      "url": "https://abcnews.go.com/International/wireStory/powerful-earthquakes-rock-indonesias-bali-java-islands-casualties-102631451",
      "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
      "publishedAt": "2023-08-28T22:58:27Z",
      "content": "DENPASAR, Indonesia -- A powerful earthquake and two strong aftershocks rocked Indonesias resort island of Bali and other parts of the country early Tuesday, causing panic but no immediate reports of… [+1958 chars]"
    }, {
      "source": {
        "id": null,
        "name": "PBS"
      },
      "author": null,
      "title": "Judge sets trial date for Trump's election interference case - PBS NewsHour",
      "description": "March 4th, 2024, is the tentative date former President Donald Trump will face trial for federal charges related to his efforts to overturn the 2020 presidential election. It’s the result of a contentious hearing Monday where Trump’s attorneys sparred with sp…",
      "url": "https://www.pbs.org/newshour/show/federal-judge-sets-march-trial-date-for-trumps-federal-election-interference-case",
      "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2023/08/trump-5-1024x683.jpg",
      "publishedAt": "2023-08-28T22:55:23Z",
      "content": "Carrie Johnson:\r\nMark Meadows, the former chief of staff, is arguing he's been charged with crimes in Fulton County, Georgia, for acts that he took while he was the chief of staff as part of his fede… [+640 chars]"
    }, {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Florida receives more than 1,600 complaints after potentially contaminated fuel sold as Idalia looms - WFLA News Channel 8",
      "description": "8 On Your Side Investigator Mahsa Saeidi has what you need to know.",
      "url": "https://www.youtube.com/watch?v=IRWISgpypLw",
      "urlToImage": "https://i.ytimg.com/vi/IRWISgpypLw/maxresdefault.jpg",
      "publishedAt": "2023-08-28T22:48:30Z",
      "content": null
    }, {
      "source": {
        "id": null,
        "name": "AnandTech"
      },
      "author": "Ryan Smith",
      "title": "Hot Chips 2023: Intel Details More on Granite Rapids and Sierra Forest Xeons - AnandTech",
      "description": null,
      "url": "https://www.anandtech.com/show/20034/hot-chips-2023-intel-details-granite-rapids-and-sierra-forest-xeons",
      "urlToImage": "https://images.anandtech.com/doci/20034/HotChips_2023_Intel-Xeons_Carousel_678x452.jpg",
      "publishedAt": "2023-08-28T21:53:30Z",
      "content": "With the annual Hot Chips conference taking place this week, many of the industry’s biggest chip design firms are at the show, talking about their latest and/or upcoming wares. For Intel, it’s a case… [+10944 chars]"
    }, {
      "source": {
        "id": null,
        "name": "Space.com"
      },
      "author": "Mike Wall",
      "title": "India to launch Aditya-L1, its 1st solar probe, on Sept. 2 - Space.com",
      "description": "Aditya-L1 is scheduled to lift off Saturday (Sept. 2) at 2:20 a.m. EDT (0620 GMT).",
      "url": "https://www.space.com/india-launch-aditya-l1-first-solar-probe-sept-2",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/tiacTzbBd7YGeG5FSJrvoV-1200-80.jpg",
      "publishedAt": "2023-08-28T21:30:40Z",
      "content": "India will launch its first sun-studying spacecraft this weekend, if all goes according to plan.\r\nThe Aditya-L1 solar observatory is scheduled to launch Saturday (Sept. 2) at 2:20 a.m. EDT (0620 GMT;… [+3090 chars]"
    }]

    capitalizeFirstLetter= (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  constructor(props){
    super(props);
    console.log(" Hello I am a Constructor from News Component ");
    this.state = {
      articles : this.articles,
      loading: true,
      page:1,
      totalResults:0

    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}- The Warriors`;
  }

  async updateNews(){
    this.props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e80c4f9aa84e444d98342d0c4c135f47&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    this.props.setProgress(30);
    let parsedData= await data.json()
    this.props.setProgress(70);

    console.log(parsedData);
    this.setState({articles:parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading:false,
    
    })
    this.props.setProgress(100);

  }

  async componentDidMount(){
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e80c4f9aa84e444d98342d0c4c135f47&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data= await fetch(url);
    // let parsedData= await data.json()
    // console.log(parsedData);
    // this.setState({articles:parsedData.articles, 
    //   totalResults:parsedData.totalResults,
    //   loading:false
    // })
    this.updateNews();
  }

handlePrevClick = async ()=>{
  console.log("Previous");

  // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e80c4f9aa84e444d98342d0c4c135f47&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  // this.setState({loading:true});

  // let data= await fetch(url);
  //   let parsedData= await data.json();
  //   console.log(parsedData);
  //  this.setState({
  //   page: this.state.page - 1,
  //   articles:parsedData.articles,
  //   loading:false
  // })
  this.setState({page:this.state.page - 1});
  this.updateNews();

}

handleNextClick = async ()=>{
  console.log("Next");
//   if (!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){


//   let url=`https://newsapi.org/v2/top-headlines?country={this.state.props.country}&category=${this.props.category}&apiKey=e80c4f9aa84e444d98342d0c4c135f47&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true});
//   let data= await fetch(url);

//     let parsedData= await data.json();
    

//   this.setState({
//     page: this.state.page + 1,
//     articles:parsedData.articles,
//     loading:false
//   })
// }
this.setState({page:this.state.page + 1});
this.updateNews();



}


fetchMoreData = async() => {
 this.setState({page:this.state.page+1})
 const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e80c4f9aa84e444d98342d0c4c135f47&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles:this.state.articles.concat(parsedData.articles), 
      totalResults:parsedData.totalResults
    
    
    })
 
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'35px 0px', marginTop:'90px'}}> Top {this.capitalizeFirstLetter(this.props.category)} Headlines- The Warriors</h1>
        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
<div className="container">
      <div className="row ">  
      {this.state.articles.map((element)=>{
        return  <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title?element.title.slice(0, 30): " "} description={element.description?element.description.slice(0, 80): " "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div>
      })}

        </div>
        </div>
        </InfiniteScroll>

        
      </div>
    )
  }
}

export default News
