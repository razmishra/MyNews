import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {

  pageSize=5
  apiKey = process.env.REACT_APP_API_KEY
  
  state={
    progress:10
  }

  setProgress=(progress) => {
    this.setState({
      progress:progress
    })
  }

  render() {
    return (
      <Router>
      <div>
        <NavBar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route  exact path ="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="/" pagesize={this.pageSize} country={"in"} category={"general"} />}/>
          <Route exact path ="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pagesize={this.pageSize} country={"in"} category={"general"} />}/>
          <Route  exact path ="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pagesize={this.pageSize} country={"in"} category={"science"} />}/>
          <Route  exact path ="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pagesize={this.pageSize} country={"in"} category={"technology"} />}/>
          <Route  exact path ="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="business" pagesize={this.pageSize} country={"in"} category={"business"} />}/>
          <Route  exact path ="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pagesize={this.pageSize} country={"in"} category={"entertainment"} />}/>
          <Route  exact path ="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="health" pagesize={this.pageSize} country={"in"} category={"health"} />}/>
          <Route  exact path ="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key="sports" pagesize={this.pageSize} country={"in"} category={"sports"} />}/>
        </Routes>
      </div>
      </Router>
    )
  }
}