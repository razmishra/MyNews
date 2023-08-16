import React, { Component } from 'react'
import loading from "./spinner.gif"

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-4' src={loading} alt="" style={{width:'40px', height:'40px'}} />
      </div>
    )
  }
}
