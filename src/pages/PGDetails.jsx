import { useParams } from "react-router-dom";
import { pgList } from "../data/pgdata";
function PGDetails() {
  const { id } = useParams();
  const selectedPg = pgList.find(pg => pg.id === Number(id))
  if (!selectedPg) {
    return <p className="text-center mt-20 text-gray-600">PG not found</p>;
  } else {
    return (
      <div className="container">
        <img />
        <div>
          <h2>{selectedPg.name}</h2>
          <p>{selectedPg.type}</p>
          <p>{selectedPg.location}</p>
          <p>{selectedPg.description}</p>
          <p>₹{selectedPg.price}/month</p>
          <button>Back</button>
        </div>
      </div>
    )
  }
}

export default PGDetails;
