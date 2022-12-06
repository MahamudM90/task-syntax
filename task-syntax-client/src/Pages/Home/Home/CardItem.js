import React from "react";

const CardItem = ({blog}) => {
  const {photo, label, paragraph} = blog;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl py-6">
        <figure>
          <img className="w-1/2" src={photo} alt={label} />
        </figure>
        <div className="card-body">
          <h2 className="card-title hover:text-primary">{label}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
