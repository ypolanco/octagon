import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { createPost } from '../services/post.js'



export default function PostCreate() {
  const [input, inputSearch] = useState("");
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [imgURL, setImgURL] = useState('')
  const [created, setCreated] = useState('')
  const [redirect, setRedirect] = useState(false)


  let history = useHistory();

  let post = {
    title: title,
    name: name,
    content: content,
    imgURL: imgURL
  }

  const updateInput = () => {
    inputSearch(post);
    setRedirect(true)
  };


  async function handleSubmit(event) {
    event.preventDefault()
    const created = await createPost(post)
    setCreated(created)
  }

  useEffect(() => {
    if (created) {
      history.push('/posts/')
    }
  }, [created])



  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="form" key="searched">
          <input onChange={event => setTitle(event.target.value)}
            className="title-input"
            placeholder="Enter Your Title"
          />
          <input onChange={event => setName(event.target.value)}
            className="name-input"
            placeholder="Enter Your Name"
          />
          <input onChange={event => setImgURL(event.target.value)}
            className="imgURL-input"
            placeholder="Enter Your Image URL"
          />
          <input onChange={event => setContent(event.target.value)}
            className="content-input"
            placeholder="Enter Your Content"
          />
          <button onClick={updateInput} type="submit" label="Search" className="story-submit">
            Search
            </button>
        </form>
      </div>
    </div>
  )
}
