import classes from "src/componets/Headline/Headline.module.css";

export const Headline = (props) => {
  return (
    <div>
      <h1 className={classes.title}>{props.page} pages</h1>

      <p className={classes.description}>
        アイテムの数は {props.children} 個です。
      </p>

      <button onClick={props.handlereduce}>減らす</button>
    </div>
  );
};
