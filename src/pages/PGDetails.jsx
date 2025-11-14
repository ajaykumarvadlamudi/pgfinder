import { useParams } from "react-router-dom";
import { pgList } from "../data/pgdata";
import SharingOptions from "../components/SharingOptions";
import FoodPlan from "../components/FoodPlan";
import { useState } from "react";
function PGDetails() {
  const { id } = useParams();
  const selectedPg = pgList.find((pg) => pg.id === Number(id));

  if (!selectedPg) {
    return <p className="text-center mt-20 text-gray-600">PG not found</p>;
  }
  const [pgData,setPgData]=useState(selectedPg)
  const [message, setMessage] = useState("")
  const [showToast, setShowToast] = useState(false)
  function handleBooking(type){
          const updateSharing = pgData.sharingOptions.map(option=>
            option.type===type && option.vacancy >0 ? {...option,vacancy:option.vacancy-1} : option
        )
        setPgData({...pgData,sharingOptions:updateSharing})
        setMessage(`You booked a ${type}-Sharing room successfully!`);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          setMessage("");
          }, 3000);
  }
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {showToast && (
        <div className="fixed top-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg transition">
          {message}
        </div>
      )}
      <img src={pgData.image} alt={pgData.name} className="w-full h-64 object-cover rounded-2xl shadow-md mb-6"/>
      <h2 className="text-3xl font-bold text-gray-800 mb-2"> {pgData.name} </h2>
      <p className="text-gray-500 mb-4">{pgData.location}</p>
      <p className="text-gray-700 leading-relaxed">{pgData.description} </p>
      <SharingOptions sharingOptions={pgData.sharingOptions} 
      onBook={handleBooking}/>
      <FoodPlan foodPlan={pgData.foodPlan} />
      <div className="mt-10 text-center">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default PGDetails;

