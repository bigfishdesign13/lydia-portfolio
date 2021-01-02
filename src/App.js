import React, { Component } from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import Container from 'react-bootstrap/Container'
import PageMeta from './utils/PageMeta'
import FontLoader from './utils/FontLoader'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Splash from './components/pages/Splash'
import About from './components/pages/About'
import Photos from './components/pages/Photos'

class App extends Component {
  state = { 
    loading: true,
    slides: '',
    photo: '',
    name: '',
  };
  
  componentDidMount() {
    var _this = this;
    this.serverRequest = 
      fetch("./data/slides.json")
        .then((result) => result.json())
        .then((result) => {
          console.log(result.photo);
          _this.setState({
            name: result.name,
            photo: result.photo,
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
        <FontLoader />
        <Nav />
        
        <Container>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/photos">
              <Photos />
            </Route>
            <Route path="/">
              <Splash name={this.state.name} photo={this.state.photo} />
            </Route>
          </Switch>
        </Container>
      </>
    )
  }

  render_() {
    return (
      <div className="App">
        <PageMeta pageTitle="Lydia Brutvan Photo Resume 2017-2020" />
        <Loader />
      </div>
    );
  }
}

export default App;
