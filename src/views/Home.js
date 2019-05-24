import React from 'react';
import moviesData from '../data/movies.json'
import MovieCard from '../components/MovieCard'
const Api_Key = 'af30f455efed1a004d1a1aeaa1954223';
class Home extends React.Component {
  state = {
   ...moviesData,
  }
   componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${Api_Key}`).then((res) => res.json()).then((data) => {
      const adultMovies = data.results.filter((e) => e.popularity <= 100);
      console.log('adultos', adultMovies);

      this.setState((state, props) => ({
        movies: adultMovies
      }))
    });
   }
  deleteMovie = (movieId) => {
    this.setState((state, props) => {
      const movies = state.movies.filter((movie) => movie.id !== movieId)
      return  {
        movies
      }
    })
  }


    render() {
        const { movies } = this.state
        return <div>
        <h1 className='main-title'>Movie App</h1>
        <div className='content'>
          {movies.map((movie) => <MovieCard deleteMovie={this.deleteMovie} key={movie.id} {...movie} />)}
        </div>
      </div>
    }
}

export default Home