/* eslint-disable react/prop-types */
const FilterGroup = ({ minRating, handleFilterRating, ratings }) => {
	return (
		<ul className="movie_filter">
			{ratings.map((rate) => (
				<li
					key={rate}
					className={minRating === rate ? "movie_filter_item active" : "movie_filter_item"}
					onClick={() => handleFilterRating(rate)}>
					{rate}+ ⭐
				</li>
			))}
		</ul>
	);
};

export default FilterGroup;
