import React from "react";
import "./App.css";
import Home from './containers/Home';
import ContactUs from './containers/ContactUS';
import Header from './components/Header';
import Hero from './components/Hero';
import Post from './containers/Post';
import Footer from './components/Footer';
import AboutUs from './containers/AboutUs'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/post/:postId" component={Post} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;