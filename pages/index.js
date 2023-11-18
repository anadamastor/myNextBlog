import FeaturedPosts from "../components/home-page/featured-posts";
import HeroBanner from "../components/home-page/hero-banner";
import { DUMMY_POSTS } from "../data/posts";

function HomePage() {
  return (
    <>
      <h1> HOMEPAGE </h1>
      <HeroBanner />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
export default HomePage;
