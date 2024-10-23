import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
 
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }; 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
  
    try {
      const res = await axios.post("/auth/login", credentials);
      console.log("Full response data:", res.data); 
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");  
    } catch (err) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: err.response?.data || { message: "Login failed" },
      });
    }
  };
  

  return (
    <>
    {/* <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div> */}
    
    <div className="font-[sans-serif] bg-white flex items-center justify-center md:h-screen p-4">
  <div className="shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] max-w-6xl max-md:max-w-lg rounded-md p-6">
    <div className="grid md:grid-cols-2 items-center gap-8">
      <div className="max-md:order-1 lg:min-w-[450px]">
        <img
          src="https://readymadeui.com/signin-image.webp"
          className="lg:w-11/12 w-full object-cover"
          alt="login-image"
        />
      </div>
      
      {/* Login Form Section */}
      <div className="flex flex-col mb-12 max-md:order-2">
        <h3 className="text-4xl font-extrabold text-blue mb-6">Login</h3>

        {/* Username Input */}
        <div className="relative flex items-center mb-6">
          <input
            type="text"
            id="username"
            className="w-full text-sm border-b border-gray-300 text-gray-800 focus:border-blue px-2 py-3 outline-none"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>

        {/* Password Input */}
        <div className="relative flex items-center mb-6">
          <input
            type={passwordVisible ? "text" : "password"}
            className="w-full text-sm border-b border-gray-300 text-gray-800 focus:border-blue px-2 py-3 outline-none"
            placeholder="Enter password"
            onChange={handleChange}
            id="password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            onClick={togglePasswordVisibility}
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
            viewBox="0 0 128 128"
          >
            <path
              d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
              data-original="#000000"
            ></path>
          </svg>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            onClick={handleClick}
            className="w-full shadow-xl py-2.5 px-5 text-sm font-semibold rounded-xl text-white bg-blue hover:bg-[#005a59] focus:outline-none"
          >
            Login
          </button>
          {error && <span>{error.message}</span>}
          <p className="text-gray-800 text-sm text-center mt-6">
            Do not have an account{" "}
            <Link to="/register">
              <span className="text-blue-600 font-semibold hover:underline text-blue ml-1 whitespace-nowrap">
                Register here
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>

  );
};

export default Login;