{
    path: ":eventId",
    id: "event-detail",
    loader: eventDetailLoader,
    children: [
      {
        index: true,
        element: <EventDetailPage />,
      },
      {
        path: "edit",
        element: <EditEventPage />,
      },
    ],
  }