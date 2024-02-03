import { useState, useEffect } from "react";
import ListPosts from "./Posts/ListPosts";
import { GalleryContainer } from "./Gallery/GalleryContainer";
import { PostsContainer } from "./Posts/PostsContainer";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const url = "http://localhost:5000/api/posts";
export default function Gallery({ user }) {
  /* buttons set sort */
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        setError("");
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Error fetching posts");

        const data = await response.json();
        if (data.response === "False") throw new Error("Posts not found");
        setPosts(data.items);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);


  return (
    <GalleryContainer>
      <PostsContainer>
        <ListPosts error={error} isLoading={isLoading} posts={posts} />
      </PostsContainer>
      <UserContainer>
        <UserInfoContainer>
          <UserInfo
            error={error}
            isLoading={isLoading}
            user={user}
          />
        </UserInfoContainer>
      </UserContainer>
    </GalleryContainer>
  );
}
function UserContainer({ children }) {
  return <div className="userContainer ">{children}</div>;
}
function UserInfoContainer({ children }) {
  return <div className="userInfoContainer ">{children}</div>;
}
function UserInfo({ user, isLoading, error }) {
  return (
    <div className="userInfo">
      <div className="personName">
        <h2>{user}</h2>
      </div>
      <div className="favorite quote">
        {isLoading && <Loader />}
        {!isLoading && !error && (
          <div>
            <strong>Some Information</strong> <br></br>
          </div>
        )}
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );
}
