import React, {Component} from 'react';
import nanoid from 'nanoid';

import AddMovieForm from "../../Components/AddMovieForm/AddMovieForm";
import MovieTab from '../../Components/Movie/MovieTab';
import './SecondPage.css';

class SecondPage extends Component {
  state = {
    text: '',
    movies: [],
  };

  changeText = (event) => {
    const text = event.target.value;

    this.setState({text: text})
  };

  addMovie = () => {
    const movies = [...this.state.movies];
    const newTask = {text: this.state.text, id: nanoid()};

    movies.push(newTask);

    this.setState({movies});
  };

  deleteMovie = (id) => {
    const movies = [...this.state.movies];
    const movieIndex = movies.findIndex(task => task.id === id);

    movies.splice(movieIndex, 1);

    this.setState({movies});
  };

  editText = (event, id) => {
    const movies = [...this.state.movies];
    const index = movies.findIndex(movie => movie.id === id);
    const movie = {...movies[index]};

    movie.text = event.target.value;

    movies[index] = movie;

    this.setState({movies})
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
    const movies = this.state.movies.map(movie => (<MovieTab
      key={movie.id}
      text={movie.text}
      delete={() => this.deleteMovie(movie.id)}
      editText={(event) => this.editText(event, movie.id)}
    />));

    return (
      <div className='SecondApp'>
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

        <div className="MovieApp">
          < AddMovieForm onChange={this.changeText} add={this.addMovie}/>
          <div>
            {movies}
          </div>
        </div>
      </div>
    );
  }
}

export default SecondPage;
