//pages/EventsPage.jsx
import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const data = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data.events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

const loaderEvent = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch Events" }), {
    //   status: 500,
    // });
    throw json({ message: "Could not fetch Events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
export const loader = () => {
  return defer({
    events: loaderEvent(),
  });
};

export default EventsPage;
