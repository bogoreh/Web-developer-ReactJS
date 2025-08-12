import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PostForm = ({ edit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  React.useEffect(() => {
    if (edit) {
      const fetchPost = async () => {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      };
      fetchPost();
    }
  }, [edit, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { title, content };

    if (edit) {
      await axios.put(`http://localhost:5000/api/posts/${id}`, post);
    } else {
      await axios.post('http://localhost:5000/api/posts', post);
    }

    navigate('/');
  };

  return (
    <div>
      <h1>{edit ? 'Edit Post' : 'Create Post'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">{edit ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default PostForm;