import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../resources/apiClient";
import { set_token, set_user_data, set_user_status } from "../store/actions";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();
    if (user.username === "") {
      alert("Please Enter username");
    } else if (user.password === "") {
      alert("Please enter password");
    } else if (user.username.length < 4 || user.password.length < 5) {
      alert("username length should be atleast six character");
    } else {
      try {
        axios.post(`${baseURL}/account/login`, user).then(
          (response) => {
            dispatch(set_token(response.data.token));
            dispatch(set_user_data(response.data.user));
            dispatch(
              set_user_status({
                loggedIn: true,
                token: response.data.token,
              })
            );

            console.log(response.data);
            return response.data.user.user_type === "CEO"
              ? navigate("/ceopage")
              : response.data.user.user_type === "SUB"
              ? navigate("/subdepartments")
              : response.data.user.user_type === "HoD"
              ? navigate("/departments")
              : response.data.user.user_type === "CLIENT_ADMIN"
              ? navigate("/client_admin")
              : null;
          },
          (err) => {
            alert("username and password is not valid");
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://emiralfg.com/wp-content/uploads/2021/06/Infografia-2-ERP_Mesa-de-trabajo.jpg"
                class=" object-contain object-center"
                alt="Sample image"
              />
            </div>
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p class="text-center font-semibold mx-4 mb-0">
                    Login to your account
                  </p>
                </div>

                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="username address"
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                </div>

                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                  />
                </div>

                <div class="text-center lg:text-left">
                  <button
                    onClick={(e) => loginHandler(e)}
                    type="button"
                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
