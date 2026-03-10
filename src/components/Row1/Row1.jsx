import classes from "./Row1.module.css";
import Component1 from "./Step1/Component1"
import Component2 from "./Step2/Component2";
import Component3 from "./Step3/Component3";
import Component4 from "./Step4/Component4";
import Component5 from "./Step5/Component5";
export default function Row1() {
  return (
    <>
      <div className={classes.Row1}>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
      </div>
    </>
  );
}
