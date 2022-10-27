import React, { useState } from "react";

function RewardTD({ item }) {
  const time = Object.keys(item);
  const refiendTime = time[0].replace("v2_", "").replace(/_/gi, "-");
  const data = item[time];
  const gwei = 0.000000000000000001;
  const totalReward = parseInt(data.dailyReward) * gwei;
  const soLeaderReward = parseInt(data.soLeaderReward) * gwei;
  const delegated = parseInt(data.delegated) * gwei;
  return (
    <tr className="border-b border-gray-200 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white dark:bg-gray-800"
      >
        {data.block}
      </th>
      <td className="py-4 px-6">{refiendTime}</td>
      <td className="py-4 px-6 dark:bg-gray-800">{totalReward.toFixed(5)}</td>
      <td className="py-4 px-6">136.28 KOK</td>
      <td className="py-4 px-6">{soLeaderReward.toFixed(5)} KOK</td>
      <td className="py-4 px-6"> {delegated.toFixed(5)}SOP</td>
      <td className="py-4 px-6">{data.memberCount}</td>
    </tr>
  );
}

export default RewardTD;
