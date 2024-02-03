import PostContainer from "./PostContainer";
import Loader from "../Loader";
import ErrorMessage from "../ErrorMessage";

export default function ListPosts({
  isLoading,
  posts,
  user,
  onFavorite,
  error,
}) {
  const numPosts = posts.length;

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !error && numPosts > 0 ? (
        <ul className="posts">
          {posts.map((post) => (
            <PostContainer
              key={post.title}
              post={post}
              onFavorite={onFavorite}
            />
          ))}
        </ul>
      ) : (
        <p>{user} has no posts yet!</p>
      )}
      {error && <ErrorMessage message={error} />}
    </>
  );
}
