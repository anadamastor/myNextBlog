import AllPosts from "../../components/posts/all-posts";
import { DUMMY_POSTS } from "../../data/posts";

function AllPostsPage() {
  return (
    <>
      <h1>ALL POSTS</h1>
      <AllPosts posts={DUMMY_POSTS} />
    </>
  );
}
export default AllPostsPage;
