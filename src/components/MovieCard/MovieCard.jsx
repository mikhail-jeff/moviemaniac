/* eslint-disable react/prop-types */
import "./MovieCard.css";
import Star from "../../assets/star.png";

const MovieCard = ({ movie }) => {
	const { id, original_title, release_date, vote_average, overview, poster_path } = movie;

	return (
		<a
			href={`https://www.themoviedb.org/movie/${id}`}
			target="_blank"
			className="movie_card">
			<img
				src={`https://image.tmdb.org/t/p/w500${poster_path}`}
				alt="movie poster"
				className="movie_poster"
			/>

			<div className="movie_details">
				<h3 className="movie_details_heading">{original_title}</h3>

				<div className="movie_date_rate">
					<p className="date">{release_date}</p>
					<div className="rating">
						<p>{Math.round(vote_average)}</p>
						<img
							className="card_emoji"
							src={Star}
							alt="rating icon"
						/>
					</div>
				</div>

				<p className="movie_description">{overview.slice(0, 100) + "..."}</p>
			</div>
		</a>
	);
};

export default MovieCard;
