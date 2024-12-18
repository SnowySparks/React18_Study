// App.jsx
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader as EventsLoader } from "./pages/EventsPage";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "./pages/EventDetailPage";
import { RouterProvider } from "react-router-dom";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Root from "./pages/Root";
import EventRoot from "./pages/EventRoot";
import ErrorPage from "./pages/ErrorPage";
import { action as manipulateEventAction } from "./components/EventForm";
import NewsletterPage, {
  action as newsletterAction,
} from "./pages/NewsletterPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "events",
          element: <EventRoot />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: EventsLoader,
            },
            {
              path: ":eventId",
              id: "event-detail",
              loader: eventDetailLoader,
              children: [
                {
                  index: true,
                  element: <EventDetailPage />,
                  action: deleteEventAction,
                },
                {
                  path: "edit",
                  element: <EditEventPage />,
                  action: eventDetailLoader,
                },
              ],
            },
            {
              path: "new",
              element: <NewEventPage />,
              action: manipulateEventAction,
            },
          ],
        },
        {
          path: "newsletter",
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
