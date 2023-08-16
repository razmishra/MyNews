import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl, source, author, date } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              position: "absolute",
              justifyContent: "right",
              right: "0",
            }}
          >
            <span className="top-0 badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div>
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} at{" "}
                {new Date(date).toLocaleDateString()}
              </small>
            </div>
            <a
              href={newsurl}
              target="__blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
