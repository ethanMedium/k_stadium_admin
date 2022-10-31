import React from "react";

function RewardTB({ item }) {
  const gwei = 0.000000000000000001;
  const totalReward = parseInt(item.dailyReward) * gwei;
  const LeaderTotalReward = parseInt(item.dailyRewards) * gwei;
  const profit5 = parseInt(item.soLeaderReward) * gwei;
  const delegated = parseInt(item.delegated) * gwei;
  return (
    <>
      {!item.code ? (
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white dark:bg-gray-800"
          >
            {item.block}
          </th>
          <td className="py-4 px-6">
            {item.time.replace("T00:00:00.000Z", "")}{" "}
          </td>
          <td className="py-4 px-6 dark:bg-gray-800">
            {totalReward.toFixed(5)} KOK
          </td>
          <td className="py-4 px-6">{profit5.toFixed(2)} KOK</td>
          <td className="py-4 px-6"> {LeaderTotalReward.toFixed(5)} KOK</td>
          <td className="py-4 px-6"> {delegated.toFixed(5)} SOP</td>
          <td className="py-4 px-6">{item.memberCount}</td>
        </tr>
      ) : (
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white dark:bg-gray-800">
            No data
          </td>
        </tr>
      )}
    </>
  );
}

export default RewardTB;
