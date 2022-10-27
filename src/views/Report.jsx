import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RewardTD from "../components/RewardTD";

function Report({ authService, mediumService }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [data, setData] = useState({
    result: [
      {
        v2_2022_9_1: {
          so: 18,
          block: 12151153,
          time: "2022-09-01",
          dailyReward: "1365338737719550385133",
          soLeaderReward: "68266936885977519256.65",
          memberCount: 129,
          delegated: "313596870247000000000",
          extra: " ",
        },
      },
      {
        v2_2022_9_2: {
          so: 18,
          block: 12151154,
          time: "2022-09-01",
          dailyReward: "1365338737719550385133",
          soLeaderReward: "68266936885977519256.65",
          memberCount: 129,
          delegated: "313596870247000000000",
          extra: " ",
        },
      },
    ],
    keys: ["v2_2022_9_1", "v2_2022_9_2"],
  });
  const submit = (e) => {
    e.preventDefault();
    const dateQuery = e.target.start.value.replace(/-/gi, "/");
    const date = dateQuery.split("/");
    setQuery({
      start: `${date[0]}.${date[1]}.${date[2]}`,
      end: `${date[0]}.${parseInt(date[1]) + parseInt(e.target.many.value)}.${
        date[2]
      }`,
      date: dateQuery,
      address: e.target.address.value,
      soID: e.target.soID.value,
      so: e.target.soID.options[e.target.soID.selectedIndex].text,
      many: e.target.many.value,
    });
  };
  useEffect(() => {
    authService.signIn().then((result) => {
      if (!result) {
        navigate("/login");
      }
    });
  });
  useEffect(() => {
    if (query !== "") {
      if (query.address !== "") {
        console.log("엥?");
      } else {
        mediumService.getDailyRewards(query.date, query.soID).then((result) => {
          const object = Object.keys(result);
          setData({ result: result, keys: object });
          console.log(result);
        });
      }
    }
  }, [mediumService, query]);

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
        <div className="mx-auto max-w-7xl py-6 sm:px-6">
          {/* Replace with your content */}
          <form onSubmit={(e) => submit(e)}>
            <div className="flex justify-between items-center mb-10">
              <span className=" text-gray-500">SO:</span>
              <select
                id="soID"
                name="soID"
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mr-9 min-w-[20%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="2">Ryan</option>
                <option value="3">Megan</option>
                <option value="4">Yes</option>
                <option value="5">Genesis</option>
                <option value="6">GenesisAZ</option>
                <option value="7">IBOTIUM</option>
                <option value="8" disabled></option>
                <option value="9" disabled></option>
                <option value="10">KCPonwer</option>
                <option value="11">DA</option>
                <option value="12">B.K.crew</option>
                <option value="13">Main</option>
                <option value="14">ADRF</option>
                <option value="15">kgroup</option>
                <option value="16">GAONNURI</option>
                <option value="17">crown</option>
                <option value="18">sky</option>
                <option value="19">k-star</option>
              </select>
              <span className="text-gray-500">Date :</span>
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
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date start"
                  // eslint-disable-next-line no-octal-escape
                  pattern="([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))"
                />
              </div>
              <select
                id="many"
                name="many"
                required
                className=" -ml-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block m p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="0">1</option>
                <option value="1">2</option>
                <option value="2">3</option>
                <option value="3">4</option>
              </select>
              <span className=" text-gray-500">Wallet address :</span>
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
                  name="address"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="address"
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
              <span className="text-xl">{query.so}</span>
            </div>
            <div className="outline outline-1 outline-gray-300 w-[10%] flex items-center bg-gray-100 justify-center">
              <span className="text-xl font-bold">기간</span>
            </div>
            <div className="outline outline-1 outline-gray-300 w-[40%] flex items-center justify-center">
              <span className="text-xl">
                {query.start} ~ {query.end}
              </span>
            </div>
          </section>

          {/*  Reward Log  */}

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
                {data !== ""
                  ? data.result.map((item, idx) => (
                      <RewardTD key={idx} item={item} date={data.keys[idx]} />
                    ))
                  : ""}
              </tbody>
            </table>
          </section>

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
