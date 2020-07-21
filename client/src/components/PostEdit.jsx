import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getPost, updatePost } from "../services/post";
import Layout from "../Shared/Layout";

export default function PostEdit(props) {
  const [input, inputSearch] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [created, setCreated] = useState("");
  const [redirect, setRedirect] = useState(false);

  let { id } = useParams();

  let post = {
    title: title,
    name: name,
    content: content,
    imgURL: imgURL,
  };

  const updateInput = () => {
    inputSearch(post);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const created = await updatePost(id, post);
    setCreated(created);
  }

  return (
    <Layout user={props.user}>
      <div className="post-edit">
        <div className="image-container">
          <img className="edit-post-image" src={imgURL} alt={name} />
          <form onSubmit={handleSubmit}>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={imgURL}
              name="imgURL"
              required
              onChange={(event) => setImgURL(event.target.value)}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-name"
            placeholder="Title"
            value={title}
            name="title"
            required
            autoFocus
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            className="input-name"
            placeholder="Name"
            value={name}
            name="name"
            required
            autoFocus
            onChange={(event) => setName(event.target.value)}
          />
          <textarea
            className="text-content"
            rows={10}
            cols={78}
            placeholder="Content"
            value={content}
            name="content"
            required
            onChange={(event) => setContent(event.target.value)}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
}
