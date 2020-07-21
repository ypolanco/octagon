import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './PostDetail.css'
import './PostDetail.css'
import Layout from '../Shared/Layout'
import { getPost, deletePost } from '../services/post'

export default function PostDetail(props) {
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [imgURL, setImgURL] = useState('')
  const { id } = useParams()

  async function getPostToState() {
    let post = await getPost(id)
    setTitle(post.title)
    setName(post.name)
    setContent(post.content)
    setImgURL(post.imgURL)
  }

  useEffect(() => {
    getPostToState()
  })


  return (
    <Layout user={props.user}>
      <div className="postDetail">
        <div>{imgURL}</div>
        <div>{title}</div>
        <div>{name}</div>
        <div>{content}</div>
        {/* <button className="edit-button"><Link className="edit-link" to={`/posts/${post._id}/edit`}>Edit</Link></button>
        <button className="delete-button" onClick={() => deletePost(post._id)}>Delete</button> */}
      </div>
    </Layout>
  )
}
