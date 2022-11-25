import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { baseURL } from "../../resources/apiClient";
import Navbar from "../NavBar/NavBar";

const CreateDepartment = () => {
  const [report, setReport] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState(0);
  const my_department = useSelector((state) => state.user).department;
  const getCEO = () => {
    // fetch CEO data from backend
    axios
      .get(`${baseURL}/department/list-create-report`)
      .then((res) => {
        setReport(res.data);
      })
      .catch((err) => {});
    axios
      .get(`${baseURL}/department/list-create-subdepartment`)
      .then((res) => {
        setDepartmentList(res.data);
      })
      .catch((err) => {});
  };

  const addDepartment = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}/department/list-create-subreport`, {
        title: name,
        description: description,
        sub_department: department,
      })
      .then((res) => {
        getCEO();
        alert("Sub Department Added Successfully");
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    getCEO();
  }, []);

  console.log(report, "reports");

  return (
    <div>
      <Navbar />
      <div className="mt-10 p-10">
        <div>
          <div className="flex justify-end items-end mb-4">
            <div class="flex space-x-2 justify-center">
              <button
                type="button"
                onClick={(e) => toggleModal(e)}
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Send Report
              </button>
            </div>
          </div>
          <div className="bg-gray-100 flex justify-evenly h-16">
            <div className="w-64 rounded-t-lg bg-green-600 ">
              <span className="flex justify-center items-center p-4 text-white text-bold text-xl">
                My Reports
              </span>
            </div>
            <div className="flex text-gray-400 flex-1 justify-end items-center space-x-4 pr-24"></div>
          </div>
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Report Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Report Description
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            {/* <tbody>{DisplayData}</tbody> */}
            {report.map((items) => {
              const { id, title, description, department, is_active } = items;
              return (
                <tr>
                  <td className="px-6 py-3">{title}</td>
                  <td className="px-6 py-3 font-bold"> {description}</td>
                  <td className="px-6 py-3">
                    {is_active ? "Active" : "Closed"}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="grid place-items-center">
          {showModal ? (
            <div
              id="authentication-modal"
              tabindex="-1"
              aria-hidden="true"
              className=" flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
            >
              <div class="relative w-full max-w-md h-full md:h-auto">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button
                    onClick={() => toggleModal()}
                    type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-toggle="authentication-modal"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Close modal </span>
                  </button>
                  <div class="py-6 px-6 lg:px-8">
                    <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                      Send Report
                    </h3>
                    <form class="space-y-6" action="#">
                      <div>
                        <label
                          for="email"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder=""
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Description
                        </label>
                        <input
                          type="text"
                          name="text"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder=""
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="password"
                          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          To
                        </label>
                        <select
                          value={department}
                          onChange={(e) => setDepartment(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {departmentList?.map((x) => (
                            <option value={x.id}>{x.name}</option>
                          ))}
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => addDepartment(e)}
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CreateDepartment;
