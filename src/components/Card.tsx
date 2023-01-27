import React, { FC } from "react";
import "./card.css";

export interface TCard {
  _id: string;
  number: number;
}

interface TProps extends TCard {
  handleDelete: (_id: string) => void;
}

const Card: FC<TProps> = ({ _id, number, handleDelete }) => {
  return (
    <>
      {(
        <div className="card">
          <div className="h1_center">
            <h1>{number}</h1>
          </div>

          <button onClick={() => handleDelete(_id)}>X</button>
        </div>
      )}
    </>
  );
};

export default Card;
