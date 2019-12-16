import React, {Component} from 'react';
import CellContainer from "../CellContainer/CellContainer";

import './MainPage.css';

class MainPage extends Component {
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
    console.log(this.props);

    return (
      <div className='MainPage'>
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

        <CellContainer/>
      </div>
    );
  }
}

export default MainPage;