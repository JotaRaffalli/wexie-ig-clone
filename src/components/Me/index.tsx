import React from "react";

export type MeProps = {
    username: string;
    name: string;
    lastName: string;
  };

function Me(props: MeProps) {
  return (
    <div>
    <div>{props.username}</div>
    <div>{props.name} {props.lastName}</div>
  </div>
  );
}

export default Me;
