import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

function AllPosts(props) {
  const { posts } = props;
  return (
    <article className={classes.posts}>
      <PostsGrid posts={posts}></PostsGrid>
    </article>
  );
}

export default AllPosts;
