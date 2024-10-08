import Image from "next/image";
import styles from "./globals.css";
import logo from "../public/logo.jpeg";
import laptopNext from "../public/next-js-laptop.png";
import nextJs from "../public/next-js-logo-2.webp";

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <h3>Bailys Page</h3>
        <Image
          className="logo"
          src={logo}
          width={120}
          height={120}
          alt="my-logo"
        />
        <nav>
          <a href="/">Home</a>
          <a href="/">Explore</a>
          <a href="/">About</a>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>Bailys Page using Next.js</h1>
        <p>
          Welcome to my static Page! My name is Baily Bates and I am a student
          in the Web Development Program at Full Sail University!
        </p>
        <div className="next-js-laptop">
          <Image
            src={laptopNext}
            alt="next-js-laptop"
            width={550}
            height={550}
          />
        </div>
        <div className="next-large-logo">
          <Image src={nextJs} alt="next-large-logo" width={200} height={200} />
        </div>
        <p>
          Next.js offers robust static page features that enhance performance
          and user experience. With static site generation (SSG), pages are
          pre-rendered at build time, resulting in fast load times and improved
          SEO since search engines can easily crawl the static HTML. Developers
          can leverage incremental static regeneration, allowing them to update
          static pages without needing a full rebuild. These features make
          Next.js highly effective for building content-rich websites that
          require both speed and scalability.
        </p>
      </main>
      <footer>
        <nav>
          <a href="/">Home</a>
          <a href="/">Explore</a>
          <a href="/">About</a>
        </nav>
        <p>@ 2024 Bailys Next.js Page</p>
      </footer>
    </div>
  );
}
