import React from "react";

import SingleCard from "./SingleCard";

const Cards = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        return (
          <>
            <div className="card-verticle flex flex-column m-1 card-size p-1">
              <SingleCard {...user} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default Cards;
