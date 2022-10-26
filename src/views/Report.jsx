import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Report({ authService, mediumService }) {
  const navigate = useNavigate();
  const [date, setDate] = useState({});

  const submit = (e) => {
    e.preventDefault();
    setDate({ start: e.target.start.value, end: e.target.end.value });
    mediumService.getDailyRewards().then((result) => {
      console.log(result.data);
    });
  };
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
          <form onSubmit={(e) => submit(e)}>
            <div className="flex items-center mb-10">
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  name="start"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date start"
                  // eslint-disable-next-line no-octal-escape
                  pattern="([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))"
                />
              </div>
              <span className="mx-4 text-gray-500">to</span>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  name="end"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date end"
                  pattern="([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))"
                />
              </div>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-4">
                찾기
              </button>
            </div>
          </form>

          {/* 대상 */}

          <section className="flex mb-10 w-full justify-center h-10">
            <div className="outline outline-gray-300 flex items-center bg-gray-100 justify-center outline-1 w-[10%]">
              <span className="text-xl font-bold">대상</span>
            </div>
            <div className="outline outline-1 outline-gray-300 w-[40%] flex items-center justify-center">
              <span className="text-xl">ADRF</span>
            </div>
            <div className="outline outline-1 outline-gray-300 w-[10%] flex items-center bg-gray-100 justify-center">
              <span className="text-xl font-bold">기간</span>
            </div>
            <div className="outline outline-1 outline-gray-300 w-[40%] flex items-center justify-center">
              <span className="text-xl">2022.06.09 ~ 2022.09.08</span>
            </div>
          </section>

          {/*  표  */}

          <div className="text-xl mb-4 font-bold">1. Reward Log</div>
          <section className="overflow-x-auto relative shadow-md sm:rounded-lg mb-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr className="border-b">
                  <th
                    scope="col"
                    className="py-3 px-6 bg-gray-50 dark:bg-gray-800"
                  >
                    Block Number
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 bg-gray-50 dark:bg-gray-800"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 bg-gray-50 dark:bg-gray-800"
                  >
                    SO Total Reward
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 bg-gray-50 dark:bg-gray-800"
                  >
                    5% <br /> 운영수익
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 bg-gray-50 dark:bg-gray-800"
                  >
                    SO Leader <br /> Total Reward
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 bg-gray-50 dark:bg-gray-800"
                  >
                    Delegate
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 bg-gray-50 dark:bg-gray-800"
                  >
                    Members
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white dark:bg-gray-800"
                  >
                    12151153
                  </th>
                  <td className="py-4 px-6">2022-09-01</td>
                  <td className="py-4 px-6 dark:bg-gray-800">
                    2,725.56844 KOK
                  </td>
                  <td className="py-4 px-6">136.28 KOK</td>
                  <td className="py-4 px-6">348.05472 KOK</td>
                  <td className="py-4 px-6">5,966,909.40560 SOP</td>
                  <td className="py-4 px-6">695</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white dark:bg-gray-800"
                  >
                    12151153
                  </th>
                  <td className="py-4 px-6">2022-09-01</td>
                  <td className="py-4 px-6 dark:bg-gray-800">
                    2,725.56844 KOK
                  </td>
                  <td className="py-4 px-6">136.28 KOK</td>
                  <td className="py-4 px-6">348.05472 KOK</td>
                  <td className="py-4 px-6">5,966,909.40560 SOP</td>
                  <td className="py-4 px-6">695</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white dark:bg-gray-800"
                  >
                    12151153
                  </th>
                  <td className="py-4 px-6">2022-09-01</td>
                  <td className="py-4 px-6 dark:bg-gray-800">
                    2,725.56844 KOK
                  </td>
                  <td className="py-4 px-6">136.28 KOK</td>
                  <td className="py-4 px-6">348.05472 KOK</td>
                  <td className="py-4 px-6">5,966,909.40560 SOP</td>
                  <td className="py-4 px-6">695</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white dark:bg-gray-800"
                  >
                    12151153
                  </th>
                  <td className="py-4 px-6">2022-09-01</td>
                  <td className="py-4 px-6 dark:bg-gray-800">
                    2,725.56844 KOK
                  </td>
                  <td className="py-4 px-6">136.28 KOK</td>
                  <td className="py-4 px-6">348.05472 KOK</td>
                  <td className="py-4 px-6">5,966,909.40560 SOP</td>
                  <td className="py-4 px-6">695</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Total Reward */}
          <div className="text-xl mb-4 font-bold">2. Total Reward</div>
          <section className="overflow-x-auto relative shadow-md sm:rounded-lg mb-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="col"
                    className="py-3 px-6 bg-gray-50 dark:bg-gray-800"
                  >
                    Date
                  </th>
                  <th scope="col" className="py-3 px-6 bg-gray-50 ">
                    2022. 06. 09
                    <br />~ 2022. 06. 30
                  </th>
                  <th scope="col" className="py-3 px-6 bg-gray-50 ">
                    2022. 06. 09
                    <br />~ 2022. 06. 30
                  </th>
                  <th scope="col" className="py-3 px-6 bg-gray-50 ">
                    2022. 06. 09
                    <br />~ 2022. 06. 30
                  </th>
                  <th scope="col" className="py-3 px-6 bg-gray-50 ">
                    2022. 06. 09
                    <br />~ 2022. 06. 30
                  </th>
                  <th scope="col" className="py-3 px-6 bg-gray-50 ">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    SO Total <br /> Reward
                  </th>
                  <td className="py-4 px-6">7,934.34330 KOK</td>
                  <td className="py-4 px-6  dark:bg-gray-800">
                    63,338.30310 KOK
                  </td>
                  <td className="py-4 px-6">81,938.64884 KOK</td>
                  <td className="py-4 px-6">21,588.17077 KOK</td>
                  <td className="py-4 px-6 font-bold">174,799.46601 KOK</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap  bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    SO Leader <br /> Total Reward
                  </th>
                  <td className="py-4 px-6">7,934.34330 KOK</td>
                  <td className="py-4 px-6  dark:bg-gray-800">
                    63,338.30310 KOK
                  </td>
                  <td className="py-4 px-6">81,938.64884 KOK</td>
                  <td className="py-4 px-6">21,588.17077 KOK</td>
                  <td className="py-4 px-6 font-bold">174,799.46601 KOK</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50  dark:text-white dark:bg-gray-800"
                  >
                    5% <br /> 운영수익
                  </th>
                  <td className="py-4 px-6">7,934.34330 KOK</td>
                  <td className="py-4 px-6  dark:bg-gray-800">
                    63,338.30310 KOK
                  </td>
                  <td className="py-4 px-6">81,938.64884 KOK</td>
                  <td className="py-4 px-6">21,588.17077 KOK</td>
                  <td className="py-4 px-6 font-bold">174,799.46601 KOK</td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* /End replace */}
        </div>
      </main>
    </>
  );
}

export default Report;
