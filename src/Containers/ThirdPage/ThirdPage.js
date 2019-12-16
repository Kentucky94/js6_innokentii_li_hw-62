import React, {Component} from 'react';
import './ThirdPage.css';

class ThirdPage extends Component {
  state = {
    joke: null,
  };

  newJoke = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    if(response.ok){
      const joke = await response.json();

      this.setState({joke: joke.value})
    }
  };

  toMainPage = () => {
    this.props.history.push({
      pathname: '/'
    });
  };

  toSecondPage = () => {
    this.props.history.push({
      pathname: '/page2'
    });
  };

  toThirdPage = () => {
    this.props.history.push({
      pathname: '/page3'
    });
  };

  render() {
    return (
      <div className='ThirdApp'>
        <ul className="nav nav-pills nav-fill justify-content-around my-4">
          <li className="nav-item mx-3">
            <button className="nav-link" onClick={this.toMainPage}>App1</button>
          </li>
          <li className="nav-item mx-3">
            <button className="nav-link" onClick={this.toSecondPage}>App2</button>
          </li>
          <li className="nav-item mx-3">
            <button className="nav-link" onClick={this.toThirdPage}>App3</button>
          </li>
        </ul>

        <div className="JokeApp">
          {this.state.joke}
          <div style={{padding: '20px', textAlign: 'center'}}>
            <button onClick={this.newJoke}>New Joke</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdPage;