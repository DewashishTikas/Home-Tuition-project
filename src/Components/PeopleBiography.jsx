import React from "react";

const PeopleBiography = ({ name, title, photo, children }) => {
  return (
    <div className="shadow-xl rounded-2xl transform duration-100 hover:scale-105 px-10 py-5 bg-gray-300">
      <div className="rounded-[50%] overflow-hidden mx-auto my-4 h-20 w-20">
        <img className="w-full h-full" src={photo} alt="photo" />
      </div>
      <div>
        <h2 className="text-3xl text-center">
          <strong>{name}</strong>
        </h2>
        <h3 className="text-2xl font-medium text-center">{title}</h3>
        <p className="text-base text-center">{children}</p>
      </div>
    </div>
  );
};

export default PeopleBiography;
