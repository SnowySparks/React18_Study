//pages/EventsPage.jsx
import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
}

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch Events" }), {
    //   status: 500,
    // });
    throw json({ message: "Could not fetch Events" }, { status: 500 });
  } else {
    return response;
  }
};

export default EventsPage;
