import { Link } from "react-router-dom";
function Login(){
     return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      {/* Company Name */}
      <div className="flex justify-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          PG Finder
        </h1>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        
        {/* Heading */}
        <div className="mb-6">
          <p className="text-gray-900 dark:text-white text-2xl font-bold tracking-tight">
            Welcome Back
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Please enter your details to login.
          </p>
        </div>

        <div className="flex flex-col gap-5">

          {/* Email Input */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1"> Email</p>
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          {/* Password Input */}
          <label className="flex flex-col">
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium mb-1">
              Password
            </p>
            <input
              type="password"
              placeholder="Enter your password"
              className="h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          {/* Forgot Password */}
          <div className="text-right -mt-2">
            <Link to="/forgot-password" className="text-blue-600 text-sm hover:underline dark:text-blue-400">Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="h-12 w-full bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>

          {/* Footer Links */}
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            Don’t have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline dark:text-blue-400">Sign up</Link>
            
          </p>
        </div>
      </div>
    </div>
  );
}
export default Login;