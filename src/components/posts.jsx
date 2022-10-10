import React from 'react';
import PostsList from "./postsList";
import Post from "./post";
import { useParams } from 'react-router-dom';

const Posts = () => {
  const posts =[
    {id: 1, label: "Post 1"},
    {id: 2, label: "Post 2"},
    {id: 3, label: "Post 3"}
  ];  
  const params = useParams();
  const {postId} = params;

  return (
    <>{postId ? <Post posts={posts} id={postId} /> : <PostsList posts={posts} /> }</>
  );
};

export default Posts;