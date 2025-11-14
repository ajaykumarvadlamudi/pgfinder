function Register(){
    return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      
      {/* Company Name */}
      <div className="flex justify-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          ABC Company
        </h1>
      </div>

      {/* Register Card */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        
        {/* Heading */}
        <div className="mb-6">
          <p className="text-gray-900 dark:text-white text-2xl font-bold tracking-tight">
            Create Account
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Join the platform to find the best PGs around you.
          </p>
        </div>

        <div className="flex flex-col gap-5">

          {/* Full Name */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">
              Full Name
            </p>
            <input
              type="text"
              placeholder="Enter your full name"
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          {/* Email */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">
              Email
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          {/* Phone Number */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">
              Phone Number
            </p>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          {/* Gender */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">
              Gender
            </p>
            <select
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </label>

          {/* Password */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">
              Password
            </p>
            <input
              type="password"
              placeholder="Enter password"
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          {/* Confirm Password */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">
              Confirm Password
            </p>
            <input
              type="password"
              placeholder="Confirm password"
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          {/* Create Account Button */}
          <button
            type="button"
            className="h-12 w-full bg-blue-600 text-white font-bold rounded-lg 
                       hover:bg-blue-700 transition focus:outline-none focus:ring-2 
                       focus:ring-blue-500"
          >
            Create Account
          </button>

          {/* Footer */}
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            Already have an account?{" "}
            <a 
              href="/login" 
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Login
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}
export default Register;