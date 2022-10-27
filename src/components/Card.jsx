import React from "react";

function Card({ title, image, created, setShowModal, id, setCurrentTopic }) {
  const date = new Date(created).toString().split(" ");
  return (
    <div
      className="md:max-w-sm rounded shadow-lg cursor-pointer hover:bg-gray-200"
      onClick={() => setCurrentTopic(id)}
    >
      <div
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img
          className="w-full max-h-40"
          src={image ? image : "./image/nope.jpeg"}
          alt="nope"
        />
        <div className="max-h-40">
          <div className="px-6 py-4 min-h-[25%]">
            <div className="font-bold text-xl mb-2 line-clamp-2">{title}</div>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 mr-2">
              {date[0] +
                " " +
                date[2] +
                " " +
                date[1] +
                " " +
                date[3] +
                " " +
                date[4]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
