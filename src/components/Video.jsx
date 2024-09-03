import classes from "../styles/Video.module.css";
import thumbnail from "../assets/3.jpg";

export default function video(){
    return(
        <a href="quiz.html">
            <div className={classes.video}>
              <img src={thumbnail} alt="" />
              <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
              <div className={classes.qmeta}>
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
              </div>
            </div>
          </a>
    );
}