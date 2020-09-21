import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
	state = {
		isLoading: true,
		count: 0,
		movies: [],
	};

	add = () => {
		this.setState((current) => ({
			count: current.count + 1,
		}));
	};

	minus = () => {
		this.setState((current) => ({
			count: current.count - 1,
		}));
	};

	getMovies = async () => {
		const {
			data: {
				data: { movies },
			},
		} = await axios.get('https://yts-proxy.now.sh/list_movies.json');
		this.setState({ movies: movies, isLoading: false });
	};

	componentDidMount() {
		// setTimeout(() => {
		// 	this.setState({
		// 		isLoading: false,
		// 	});
		// }, 3000);
		this.getMovies();
	}

	render() {
		const { isLoading, movies } = this.state;
		return (
			<section className='container'>
				{isLoading ? (
					<div className='loader'>
						<span className='loader_text'>Loading...</span>
					</div>
				) : (
					<div className='movies'>
						{movies.map((movie) => {
							return (
								<Movie
									id={movie.id}
									year={movie.year}
									title={movie.title}
									summary={movie.summary}
									poster={movie.medium_cover_image}
									genres={movie.genres}
								/>
							);
						})}
					</div>
				)}
				{/* <h1>The number is: {this.state.count}</h1>
				<button onClick={this.add}>Add</button>
				<button onClick={this.minus}>Minus</button> */}
			</section>
		);
	}
}

export default Home;
