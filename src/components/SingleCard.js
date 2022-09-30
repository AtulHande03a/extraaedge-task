import React from "react";

const SingleCard = ({ name, email, phone, website, username }) => {
  return (
    <>
      <div className="image-container flex flex-center ">
        <img
          src={`https://avatars.dicebear.com/v2/avataaars/{${username}}.svg?options[mood][]=happy`}
          alt={username}
          class="card-image responsive-img image-height"
        />
      </div>

      <div>
        <div className="mb-0-5 mt-0-5">
          <h4>{name}</h4>
        </div>

        <p>
          <i className="fa-solid fa-envelope mr-0-5"></i>
          {email}
        </p>
        <p>
          <i className="fa-solid fa-phone-flip mr-0-5"></i>
          {phone}
        </p>

        <p>
          <i class="fa-solid fa-link mr-0-5"></i>
          {website}
        </p>
      </div>
      <div className="flex space-around icons-container ">
        <i className="fa-regular fa-heart icon-heart-color"></i>
        <i class="fa-regular fa-pen-to-square "></i>
        <i className="fa-regular fa-trash-can "></i>
      </div>
    </>
  );
};

export default SingleCard;
