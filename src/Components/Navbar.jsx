import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="border-b-4 border-green-700 text-center fixed-top-0 bg-green-600 font-bold w-full text-lg text-white">
            <ul>
                <li className="inline-block py-4">
                    <Link to="/" className="pl-6 pr-8 ">
                        Home
                    </Link>
                    <Link to="/about" className="pl-6 pr-8 ">
                        About
                    </Link>
                    <Link to="/article-list" className="pl-6 pr-8 ">
                        Articles List
                    </Link>
                    <Link to="/article/:name" className="pl-6 pr-8 ">
                        Article
                    </Link>
                </li>
            </ul>

        </nav>
    )
}
export default Navbar;