import React, { Component } from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import PageMeta from './utils/PageMeta'
import FontLoader from './utils/FontLoader'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Splash from './components/pages/Splash'
import About from './components/pages/About'
import Photos from './components/pages/Photos'
import styles from './App.module.scss'

import SimpleReactLightbox from "simple-react-lightbox";

class App extends Component {
  state = { 
    loading: true,
    slides: '',
    about: '',
    photo: '',
    name: '',
  };
  
  componentDidMount() {
    var _this = this;
    this.serverRequest = 
      fetch("./data/slides.json")
        .then((result) => result.json())
        .then((result) => {
          // console.log(result.photo);
          _this.setState({
            // name: result.name,
            // photo: result.photo,
            splash: result.splash,
            slides: result.slides
          });
        })
        .catch((error) => {
          console.log(error);
          this.wait();
        });

    this.wait(2000);
  }

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      // login: 'Kris',
      // name: 'Krissanawat',
      // company: 'myself',
      // blog: 'programmingwithmosh.com/author/krissanawat',
      // location: 'Chaingmai, Thialadn',
      // bio: 'JavaScript Developer',
      loading: false
    });
  };

  render() {
    if (this.state.loading) return <Loader />;
    // let { name, blog, company, location, bio } = this.state;
    // let details = { name, blog, company, location, bio };

    return (
      <>
      <SimpleReactLightbox>
        <FontLoader />
        <Nav />
        <div className={styles.background}></div>
        
        <Container>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/photos">
              <Photos slides={this.state.slides} />
            </Route>
            <Route path="/">
              <Splash splash={this.state.splash} />
            </Route>
          </Switch>
        </Container>
      </SimpleReactLightbox>
      </>
    )
  }

  render_() {
    return (
      <div className="App">
        <PageMeta pageTitle="Lydia Brutvan | New Paltz High School Class of 2021" />
        <Loader />
      </div>
    );
  }
}

export default App;
