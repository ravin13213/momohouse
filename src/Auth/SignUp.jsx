import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

function SignUp() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <div className="flex justify-center items-center">
        <form className="shadow-2xl px-5 justify-center flex flex-col shadow-gray-600 h-[500px] w-[500px] rounded-2xl border-2 ">
      
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="h-10 shadow-inner shadow-gray-500 pl-2 rounded-2xl w-96 border-2 border-black"
            placeholder="Enter Your Name"
          />

          
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="h-10 pl-2 shadow-inner shadow-gray-500 rounded-2xl w-96 border-2 border-black"
            placeholder="Enter Your Email"
          />

          
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="h-10 shadow-inner shadow-gray-500 pl-2 rounded-2xl w-96 border-2 border-black"
            placeholder="Enter Your Password"
          />

          
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            className="h-10 shadow-inner shadow-gray-500 pl-2 rounded-2xl w-96 border-2 border-black"
            placeholder="Confirm Your Password"
          />

          
          <button className="bg-blue-600 ml-44 w-20 mt-2 rounded-xl text-white p-1">
            Sign Up
          </button>

          
          <button
            onClick={() => {
              loginWithRedirect();
            }}
            className="flex mt-2 ml-28 w-60 bg-gray-400 p-1 rounded-xl"
          >
            <FcGoogle size={32} />
            Sign Up With Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
