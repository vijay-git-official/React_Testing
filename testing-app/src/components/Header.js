import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className="bg-gray-200 flex justify-between items-center p-4">
                <div>
                    <img
                        className="w-20 rounded-lg p-3"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_O2jhj8US50VOoL9Tn0r2m6WBJzPlJe7JZQ&s"
                        alt="Logo"
                    />
                </div>
                <div className="flex gap-x-8"> {/* Increased spacing between links */}
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact {0}</Link>
                    <Link to="/cart">Cart</Link>
                    <button className="p-1 rounded bg-green-300">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
