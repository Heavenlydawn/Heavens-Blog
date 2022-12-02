import React from "react";
import Post from "./Post";
import "./App.css";

const query = `
    {
      user(username: "Heavenly") {
        publication {
          posts{
            slug
            title
            brief
            coverImage
          }
        }
      }
    }
  `;

class Blogposts extends React.Component {
  state = {
    posts: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    const response = await fetch("https://api.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    const ApiResponse = await response.json();

    console.log(ApiResponse.data.user.publication.posts);
    this.setState({
      posts: ApiResponse.data.user.publication.posts,
      loading: false,
    });
  };

  render() {
    return (
      <div class="container">
        {this.state.posts.map((post, index) => (
          <a key={index} href={`https://heavenly.hashnode.dev/${post.slug}`}>
            <Post post={post} />
          </a>
        ))}
      </div>
    );
  }
}

export default Blogposts;
