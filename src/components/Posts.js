import React from "react";
import PostStatus from "./PostStatus";
import RealPost from "./RealPost";

const Posts = () => {
  return (
    <div>
      {/* PostStatus */}
      <PostStatus />
      {/* Post */}
      <div className="">
        <RealPost />
        <RealPost />
        <RealPost />
        <RealPost />
        <RealPost />
      </div>
    </div>
  );
};

export default Posts;
