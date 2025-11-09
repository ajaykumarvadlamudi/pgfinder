function Navbar() {
    return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">PG Finder</h1>
        <ul className="flex gap-6 text-lg">
          <li className="hover:text-blue-200 cursor-pointer">Home</li>
          <li className="hover:text-blue-200 cursor-pointer">Add PG</li>
          <li className="hover:text-blue-200 cursor-pointer">Login</li>
        </ul>
      </div>
    </nav>
    )
}
export default Navbar;