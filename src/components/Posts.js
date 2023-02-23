import React from "react";
import PostStatus from "./PostStatus";
import RealPost from "./RealPost";

const getPost = async () => {
  const res = await fetch(
    `https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies`
  );

  const result = await res.json();
  return result;
};

const Posts = async () => {
  const data = await getPost();
  return (
    <div>
      {/* PostStatus */}
      <PostStatus />
      {/* Post */}
      <div className="">
        {data.map((post) => (
          <RealPost PostImg={post.Poster} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
