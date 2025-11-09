import { pgList } from "../data/pgdata";
import { useNavigate } from "react-router-dom";
function PGGrid(props) {
  const navigate = useNavigate();
  return (
    <section className="container mx-auto py-16 px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {pgList.map(pg => {
        const minPrice = Math.min(...pg.sharingOptions.map(o => o.price))
        return (
          <div key={pg.id} className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden" >
            <img src={pg.image} alt={pg.name} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{pg.name}</h3>
              <p className="text-blue-600 font-bold mt-2">Starts at ₹{minPrice}/month</p>
              <button onClick={() => navigate(`/pg/${pg.id}`)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        )
      })}
    </section>
  )
}
export default PGGrid