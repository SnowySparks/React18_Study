import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";
const RootLayOout = () => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayOout;
