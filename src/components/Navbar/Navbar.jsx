import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>MovieManiac</h1>

			<div className="navbar_links">
				<a href="">Popular</a>
				<a href="">Top Rated</a>
				<a href="">Upcoming</a>
			</div>
		</nav>
	);
};

export default Navbar;
