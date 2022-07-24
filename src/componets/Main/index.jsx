import classes from "src/componets/Main/Main.module.css";
import { Headline } from "src/componets/Headline";
import { Links } from "src/componets/Links";

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
