import React, { useState, useEffect } from "react";
import Layout from "../Shared/Layout";
import "./Post.css";
import { Link, useParams, Redirect } from "react-router-dom";
import { getPost, deletePost } from '../services/post.js'


function Post(props) {
  const [post, setPost] = useState(null)
  const [getrid, setGetrid] = useState(false)


  const { id } = useParams()

  async function getPostToState() {
    let newPost = await getPost(id)
    setPost(newPost)
  }

  useEffect(() => {
    getPostToState()
  }, [])

  const loading = () => {
    if (post) {
      return (
        <div>
          <h1 key={post.title}>{post.title}</h1>
          <h3 key={post.name}>{post.name}</h3>
          <img src={post.imgURL} alt="Image" key={post.imgURL} />
          <p key={post.content}>{post.content}</p>
        </div>
      )
    }
    else {
      return <h1>Loading</h1>
    }
  }

  const postBody = loading()

  const deleteThisPost = () => {
    deletePost(id)
  }

  console.log(useParams())

  return (
    <div className="post">
      <Layout user={props.user}>
        {postBody}
        <button onClick={deleteThisPost}>D-d-d-elete</button>
        <Link to={`/post/${id}/edit`}><button>Edit</button></Link>
      </Layout>
    </div>
  );
}

export default Post;





