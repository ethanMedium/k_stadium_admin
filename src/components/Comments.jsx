import React, { useState } from "react";

function Comments({ content, postNumber, topicNumber, name, created }) {
  const [isClicked, setIsClicked] = useState(false);
  const date = new Date(created).toString().split(" ");
  return (
    <div className="relative grid grid-cols-1 gap-4 p-4 mb-2 border rounded-lg cursor-pointer bg-white shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <div className="relative flex gap-4">
        <img
          src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
          className="relative rounded-lg -mb-4 bg-white border h-12 w-12"
          alt=""
          loading="lazy"
        />
        <a
          className="flex flex-col"
          href={`https://forum.kstadium.io/t/${topicNumber}/${postNumber}`}
          rel="noreferrer"
          target="_blank"
        >
          <div className="flex justify-between">
            <p className="relative text-sm whitespace-nowrap truncate overflow-hidden">
              {name}
            </p>
          </div>
          <p className="text-gray-400 text-xs">
            {date[0] + " " + date[2] + " " + date[1]}
          </p>
          <span className="text-gray-400 text-xs">{date[4]}</span>
        </a>
        <div
          className={
            isClicked
              ? "text-gray-500 text-sm word-break: break-all overflow-hidden line-clamp-none "
              : "text-gray-500 text-sm word-break: break-all overflow-hidden line-clamp-3 hover:line-clamp-none"
          }
          onClick={() => setIsClicked(!isClicked)}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default Comments;
