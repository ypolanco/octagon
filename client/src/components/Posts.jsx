import React, { useEffect, useState } from "react";
import Layout from "../Shared/Layout";
import { getPosts } from "../services/post";
import Post from "./Post";
import { Link } from "react-router-dom";

function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    getPostsToState();
  }, [loaded]);

  async function getPostsToState() {
    let newPosts = await getPosts();
    setPosts(newPosts);
  }


  return (
    <Layout user={props.user}>
      {posts.map((post) => (
        <div>
          <Link to={"/post/" + post._id} key={post._id}>
            <h1 key={post.title}>{post.title}</h1>
            <h3 key={post.name}>{post.name}</h3>
            <img src={post.imgURL} alt="Image" key={post.imgURL} />
            <p key={post.content}>{post.content}</p>
          </Link>
        </div>
      ))}
    </Layout>
  );
}

export default Posts;
