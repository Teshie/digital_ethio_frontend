import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar/NavBar";
import { baseURL } from "../resources/apiClient";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user_type, setUser_type] = useState("");
  const [department, setDepartment] = useState(0);

  const [userType, setUserType] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);

  const fetchData = () => {
    // fetch CEO data from backend
    axios
      .get(`${baseURL}/department/list-create-department`)
      .then((res) => {
        setDepartmentList(res.data);
      })
      .catch((err) => {});

    axios
      .get(`${baseURL}/account/get-user-types`)
      .then((res) => {
        setUserType(res.data);
      })
      .catch((err) => {});
  };
  console.log(departmentList, "departmentList");
  const addDepartment = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}/account/signup`, {
        email: email,
        username: username,
        user_type: user_type,
        department: department,
        password: password,
      })
      .then((res) => {
        fetchData();
        alert("Sub Department Added Successfully");
      })
      .catch((err) => {
        alert(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="p-10">
        {" "}
        <div className="grid place-items-center mt-10">
          <div
            id="authentication-modal"
            tabindex="-1"
            aria-hidden="true"
            className=" flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-10 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
          >
            <div class="relative w-full max-w-md mt-10 h-full md:h-auto">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div class="py-6 px-6 lg:px-8">
                  <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Create Account
                  </h3>
                  <form class="space-y-6" action="#">
                    <div>
                      <label
                        for="email"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Username
                      </label>
                      <input
                        type="text"
                        name="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="enter username"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        name="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="enter email"
                        required
                      />
                    </div>
                    <div>
                      <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="text"
                        name="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="enter email"
                        required
                      />
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Department
                      </label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {/* {departmentList?.map((x) => (
                        <option value={x.id}>{x.name}</option>
                      ))} */}
                        {departmentList?.map((x) => (
                          <option value={x.id}>{x.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        User Type
                      </label>
                      <select
                        value={user_type}
                        onChange={(e) => setUser_type(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {userType?.map((x) => (
                          <option value={x.value}>{x.text}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => addDepartment(e)}
                      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Create
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
