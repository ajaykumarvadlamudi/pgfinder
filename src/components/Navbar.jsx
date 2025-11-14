import { Link } from "react-router-dom";
function Navbar() {
    return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">PG Finder</h1>
        <ul className="flex gap-6 text-lg *:hover:text-blue-200 *:cursor-pointer">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add PG</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
    )
}
export default Navbar;