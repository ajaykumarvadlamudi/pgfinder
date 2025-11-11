function FoodPlan({ foodPlan }) {
  if (!foodPlan) return null;

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">Food Plan</h3>
      <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
        <p className="text-gray-700 mb-1">
          <strong>Type:</strong> {foodPlan.type}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Veg Days:</strong> {foodPlan.schedule.veg.join(", ")}
        </p>
        <p className="text-gray-700 mb-1">
          <strong>Non-Veg Days:</strong>{" "}
          {foodPlan.schedule.nonVeg.join(", ")}
        </p>
        <p className="text-gray-600 mt-2">{foodPlan.details}</p>
      </div>
    </div>
  );
}

export default FoodPlan;
