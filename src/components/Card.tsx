import React, { FC } from "react";
import "./card.css";

export interface TCard {
  _id: string;
  number: number;
  isDeleted: boolean;
}

interface TProps extends TCard {
  handleDelete: (_id: string) => void;
}

const Card: FC<TProps> = ({ _id, isDeleted, number, handleDelete }) => {
  return (
    <>
      {!isDeleted ? (
        <div className="card">
          <div className="h1_center">
            <h1>{number}</h1>
          </div>

          <button onClick={() => handleDelete(_id)}>X</button>
        </div>
      ) : null}
    </>
  );
};

export default Card;
