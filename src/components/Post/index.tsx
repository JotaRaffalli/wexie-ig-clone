import React from "react";

export type PostProps = {
  username: string;
  caption: string;
  img: string;
  likes: number;
};

function Post(props: PostProps) {
  return (
    <div className="flex-column divide-grey mb-4 border-b border-gray-500  ">
      <div className="flex ">{props.username}</div>
      <img src={props.img} alt={props.caption} />
      <div className="flex">Actions</div>
      <div className="flex">
        <p>Total likes {props.likes}</p>
      </div>
      <div className="flex mb-4">
        <span className="font-bold">{props.username}</span> {props.caption}
      </div>
    </div>
  );
}

export default Post;
