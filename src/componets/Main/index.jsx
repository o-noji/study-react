import classes from "src/componets/Main/Main.module.css";
import { Headline } from "src/componets/Headline";
import { Links } from "src/componets/Links";
import { useCallback, useState } from "react";

const ITEMS = [
  {
    href: "https://nextjs.org/docs",
    title: "Documentation \u2192",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "httpshttps://nextjs.org/learn://nextjs.org/docs",
    title: "Learn \u2192",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/canary/examples",
    title: "Examples \u2192",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy \u2192",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export const Main = (props) => {
  const [items, setItems] = useState(ITEMS);
  const handlereduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);
  return (
    <main className={classes.main}>
      <Headline page={props.page} handlereduce={handlereduce}>
        <code className={classes.code}>{items.length}</code>
      </Headline>
      <Links items={items} />
    </main>
  );
};
