import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";
import FilterGroup from "../FilterGroup/FilterGroup";

const MovieList = () => {
	const [movies, setMovies] = useState([]);
	const [filterMovies, setFilterMovies] = useState([]);
	const [minRating, setMinRating] = useState(0);

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6d711a4146a8419195121ff9893acc7f");

				const data = await response.json();

				setMovies(data.results);
				setFilterMovies(data.results);
			} catch (error) {
				console.log(error);
			}
		};

		fetchMovies();
	}, []);

	const handleFilterRating = (rate) => {
		if (rate === minRating) {
			setMinRating(0);
			setFilterMovies(movies);
		} else {
			setMinRating(rate);

			const filtered = movies.filter((movie) => movie.vote_average >= rate);

			setFilterMovies(filtered);
		}
	};

	return (
		<section className="movie_list">
			<header className="movie_list_header">
				<h2 className="movie_list_heading">Popular</h2>

				<div className="movie_list_fs">
					<FilterGroup
						minRating={minRating}
						handleFilterRating={handleFilterRating}
						ratings={[8, 7, 6]}
					/>

					<select className="movie_sorting">
						<option value="">SortBy</option>
						<option value="">Date</option>
						<option value="">Rating</option>
					</select>

					<select className="movie_sorting">
						<option value="">Ascending</option>
						<option value="">Descending</option>
					</select>
				</div>
			</header>

			{/* *** MOVIE CARDS */}
			<div className="movie_cards">
				{filterMovies.map((movie) => (
					<MovieCard
						key={movie.id}
						movie={movie}
					/>
				))}
			</div>
		</section>
	);
};

export default MovieList;
