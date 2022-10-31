import React from "react";
import RewardTB from "./RewardTB";

function RewardTD({ item }) {
  return (
    <section className="overflow-x-auto relative shadow-md sm:rounded-lg mb-10">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr className="border-b">
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
              Block Number
            </th>
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
              Date
            </th>
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
              SO Total Reward
            </th>
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
              5% <br /> 운영수익
            </th>
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
              SO Leader <br /> Total Reward
            </th>
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
              Delegate
            </th>
            <th scope="col" className="py-3 px-6 bg-gray-50 dark:bg-gray-800">
              Members
            </th>
          </tr>
        </thead>
        <tbody>
          {item
            ? item.map((item, idx) => <RewardTB item={item} key={idx} />)
            : ""}
        </tbody>
      </table>
    </section>
  );
}

export default RewardTD;
