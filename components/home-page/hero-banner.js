import classes from "./hero-banner.module.css";

import Image from "next/image";
function HeroBanner() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/data/posts/cat.jpg" width={300} height={200} />
      </div>
      <h1>Ervis' Blog</h1>
      <p>Welcome to my amazing blog</p>
    </section>
  );
}

export default HeroBanner;
