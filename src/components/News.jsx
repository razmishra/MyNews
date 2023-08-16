// ac12f40f01c6458e845943afdee2da9a
// 95dd7c9808ea4507add034fabf237d00
// b04470b52ec9452b8b884bbd9ac1d5f5

import { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.toCapitalize(this.props.category)} - MyNews`;
  }

  toCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  async updateNews() {
    this.props.setProgress(5)
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.props.setProgress(15)
    let data = await fetch(url);
    this.props.setProgress(50)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  async componentDidMount() {
    this.updateNews();
  }

  render() {
    return (
      <>
        <h1 className="text-center">
          MyNews -Top {this.toCapitalize(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner text={"Loading..."} />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element,index) => {
                return (
                  <div className="col-md-4" key={index}>
                    <NewsItem
                      title={element.title?element.title : "No Title"}
                      description={element.description?element.description : "No Description"}
                      imageurl={element.urlToImage ? element.urlToImage : "./default-news.png"}
                      newsurl={element.url}
                      source={element.source.name}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

News.propTypes = {
  pagesize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

News.defaultProps = {
  pagesize: 6,
  country: "in",
  category: "general",
};

export default News;
