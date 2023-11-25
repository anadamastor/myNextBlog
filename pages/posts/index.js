import AllPosts from "../../components/posts/all-posts";
import { DUMMY_POSTS } from "../../data/posts";
function AllPostsPage() {
  return (
    <h1>
      ALL POSTS
      <AllPosts posts={DUMMY_POSTS} />
    </h1>
  );
}
export default AllPostsPage;
