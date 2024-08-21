import EventNavigation from "../components/EventNavigation";
import { Outlet } from "react-router-dom";

const EventRoot = () => {
  return (
    <>
      <EventNavigation />
      <Outlet />
    </>
  );
};

export default EventRoot;
