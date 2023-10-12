import React, { useState } from 'react';
import {token} from '../Assets/AuthToken'
import axios from 'axios';
import { getHeaderWithAuthTokenAndProjectID } from '../../utils/config';

function CreatePost() {
  const [newPost, setNewPost] = useState({
      title: '',
      content: '',
      images: '',
  });
  // const [content, setContent] = useState('');
  // const [image, setImage] = useState('');
//   console.log(token);
  // const data = JSON.stringify(newPost);
  // console.log(data);
//  console.log(newPost);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = getHeaderWithAuthTokenAndProjectID();
    try {
      const response = await axios.post(
        'https://academics.newtonschool.co/api/v1/linkedin/post/',
          newPost,
        config,
  
    );
      console.log(response);
  } catch(error){
    console.log(error);
  }
}

  return (
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name='title'
            value={newPost.title}
            onChange={(e) => setNewPost({...newPost,[e.target.name]:e.target.value})}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name='content'
            value={newPost.content}
            onChange={(e) => setNewPost({...newPost,[e.target.name]:e.target.value})}
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name='images'
            value={newPost.images}
            onChange={(e) => setNewPost({...newPost,[e.target.name]:e.target.value})}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
