import React from "react";
import { Link } from "react-router-dom";

export type MeProps = {
    username: string;
    name: string;
    lastName: string;
    profilePicture: string;
  };

function Me(props: MeProps) {
  return (
    <div className="grid grid-cols-3 py-2">
      <div className="grid place-items-center">
        <Link to={`/${props.username}`}>
        <img src={props.profilePicture} alt="" className="rounded-full" />
        </Link>
      </div>
      <div className="grid col-span-2 grid-rows-2 mx-2">
        <div className="grid text-xs items-end">
          <div>{props.username}</div>
        </div>
        <div className="grid text-xs items-start">
          <div>{props.name} {props.lastName}</div>
        </div>
      </div>
  </div>
  );
}

export default Me;
