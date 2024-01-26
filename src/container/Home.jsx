import React from 'react'
import PropTypes from 'prop-types'
import {Footer, Header,Jobs } from '../container';

const Home = props => {
  return (
    <div>
    <Header />
    <div className=" my-4"></div>
  
    <Jobs />
    <div className=" my-4"></div>
    <Footer/>
  </div>
  )
}

Home.propTypes = {}

export default Home