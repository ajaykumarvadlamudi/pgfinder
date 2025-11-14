// AddPG.jsx
export default function AddPG() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      
      {/* Page Title */}
      <div className="flex justify-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Add New PG
        </h1>
      </div>

      {/* Card */}
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        
        {/* PG Basic Info */}
        <div className="mb-6">
          <p className="text-gray-900 dark:text-white text-2xl font-bold tracking-tight">
            PG Details
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Fill in the details to list your PG.
          </p>
        </div>

        <div className="flex flex-col gap-5">

          {/* PG Name */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">PG Name</p>
            <input
              type="text"
              placeholder="Enter PG Name"
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          {/* Location */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">Location</p>
            <input
              type="text"
              placeholder="Enter full address / area"
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          {/* Image URL */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">Image URL</p>
            <input
              type="text"
              placeholder="Enter image URL"
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          {/* Description */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">Description</p>
            <textarea
              placeholder="Describe your PG"
              className="min-h-[100px] px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </label>

          {/* Sharing Options Section Title */}
          <div className="pt-4">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">Sharing Options</p>
          </div>

          {/* Room Type */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">Room Sharing Type</p>
            <select
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Select sharing type</option>
              <option>1 Sharing</option>
              <option>2 Sharing</option>
              <option>3 Sharing</option>
              <option>4 Sharing</option>
            </select>
          </label>

          {/* Price */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">Price (per month)</p>
            <input
              type="number"
              placeholder="Enter price"
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          {/* Vacancy */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">Vacancy</p>
            <input
              type="number"
              placeholder="Enter number of beds available"
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          {/* Food Plan Section Title */}
          <div className="pt-4">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">Food Plan</p>
          </div>

          {/* Food Type */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">Food Type</p>
            <select
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Veg</option>
              <option>Non-Veg</option>
              <option>Mixed</option>
            </select>
          </label>

          {/* Food Details */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">Food Details</p>
            <textarea
              placeholder="Describe food plan (days, schedule, etc.)"
              className="min-h-[100px] px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </label>

          {/* Submit Button */}
          <button
            type="button"
            className="h-12 w-full mt-4 bg-blue-600 text-white font-bold rounded-lg 
                       hover:bg-blue-700 transition focus:outline-none focus:ring-2 
                       focus:ring-blue-500"
          >
            Submit PG Details
          </button>

        </div>
      </div>
    </div>
  );
}

