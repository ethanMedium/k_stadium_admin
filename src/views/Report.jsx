import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DateRangePicker from "flowbite-datepicker/DateRangePicker";

function Report({ authService }) {
  const navigate = useNavigate();
  useEffect(() => {
    authService.signIn().then((result) => {
      if (!result) {
        navigate("/login");
      }
    });
  });

  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Report
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div date-rangepicker class="flex items-center mb-4">
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                name="start"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date start"
              />
            </div>
            <span class="mx-4 text-gray-500">to</span>
            <div class="relative">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                name="end"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date end"
              />
            </div>
          </div>
          <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                    Product name
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Color
                  </th>
                  <th scope="col" class="py-3 px-6 bg-gray-50 dark:bg-gray-800">
                    Category
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td class="py-4 px-6">Sliver</td>
                  <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">Laptop</td>
                  <td class="py-4 px-6">$2999</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td class="py-4 px-6">White</td>
                  <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    Laptop PC
                  </td>
                  <td class="py-4 px-6">$1999</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Magic Mouse 2
                  </th>
                  <td class="py-4 px-6">Black</td>
                  <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    Accessories
                  </td>
                  <td class="py-4 px-6">$99</td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Google Pixel Phone
                  </th>
                  <td class="py-4 px-6">Gray</td>
                  <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">Phone</td>
                  <td class="py-4 px-6">$799</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Apple Watch 5
                  </th>
                  <td class="py-4 px-6">Red</td>
                  <td class="py-4 px-6 bg-gray-50 dark:bg-gray-800">
                    Wearables
                  </td>
                  <td class="py-4 px-6">$999</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* /End replace */}
        </div>
      </main>
    </>
  );
}

export default Report;
