import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const { asPath, query } = useRouter();
  return (
    <div className={styles.container}>
      <>
        <h1>Next.Js Progress Bar Indicator</h1>
        <ul>
          <div className={styles.button}>
            <Link href="/">
              <a className={asPath === "/" ? styles.selected : undefined}>
                Home
              </a>
            </Link>

            <Link href="/about?name=About Us">
              <a
                className={query.slug === "about" ? styles.selected : undefined}
              >
                About Us
              </a>
            </Link>

            <Link href="/blog?name=Blog Post">
              <a
                className={query.slug === "blog" ? styles.selected : undefined}
              >
                Blog Post
              </a>
            </Link>
            <Link href="/contact?name=Contact Us">
              <a
                className={
                  query.slug === "contact" ? styles.selected : undefined
                }
              >
                Contact Us
              </a>
            </Link>
          </div>
        </ul>
      </>
    </div>
  );
};
