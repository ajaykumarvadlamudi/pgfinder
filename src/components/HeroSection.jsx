import { pgList } from "../data/pgdata"
function HeroSection(){
    return(
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Find Your Perfect PG</h2>
        <p className="text-lg mb-6">
          Search verified PGs near your office or college in Hyderabad.
        </p>
        <div className="max-w-lg mx-auto flex bg-white rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search by location..."
            className="flex-grow p-3 text-gray-700 focus:outline-none"
          />
          <button className="bg-blue-600 px-6 text-white font-semibold hover:bg-blue-700">
            Search
          </button>
        </div>
      </section>
    )
}
export default HeroSection