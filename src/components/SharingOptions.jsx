function SharingOptions(props) {
  if (!props.sharingOptions || props.sharingOptions.length === 0) {
    return <p className="text-gray-600 mt-4">No sharing options available.</p>;
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">
        Sharing Options
      </h3>
      <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
        {props.sharingOptions.map((option) => (
          <div key={option.type} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
            <span className="font-medium text-gray-700">{option.type} Sharing </span>
            <span className="text-blue-600 font-semibold">₹{option.price} </span>
            <span className={`text-sm ${ option.vacancy > 0 ? "text-green-600" : "text-red-500"}`}>
              {option.vacancy > 0? `Vacancies: ${option.vacancy}`: "No Vacancy"}
            </span>
            {/* Book Now Button */}
        <button
          onClick={()=>props.onBook(option.type)}
          disabled={option.vacancy === 0}
          className={`ml-4 px-3 py-1 rounded-md text-white ${option.vacancy > 0 ? "bg-blue-600 hover:bg-blue-700":"bg-gray-400 cursor-not-allowed"}`}>
          Book Now
        </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SharingOptions;
