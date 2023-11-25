import { DUMMY_POSTS } from "../../data/posts"; // Replace with the correct path to your post data
import PostHeader from "./post-header";
import classes from "./";
function PostContent() {
  const { image, slug, title, content } = DUMMY_POSTS[0];
  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={classes.conent}>
      <PostHeader title={title} image={imagePath} />
      {content}
    </article>
  );
}

export default PostContent;
