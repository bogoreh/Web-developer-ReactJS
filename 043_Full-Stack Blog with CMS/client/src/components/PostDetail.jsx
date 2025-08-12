import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setPost(res.data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
      <p>Updated at: {new Date(post.updatedAt).toLocaleString()}</p>
      <Link to={`/edit/${post.id}`}>Edit</Link>
    </div>
  );
};

export default PostDetail;