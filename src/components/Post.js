import React from 'react';
import './App.css'


const Post = ({ post }) => {
    return (
        <div className="card">
            <img src={post.coverImage} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.brief}</p>
            <button><a href="https://heavenly.hashnode.dev/">Read More</a></button>
        </div>
    )
}

export default Post;