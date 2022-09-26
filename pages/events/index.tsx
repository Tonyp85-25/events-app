import type {
  GetStaticProps,
  NextComponentType,
  NextPage,
  NextPageContext,
} from "next";
import { ComponentProps } from "react";

import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../data/dummy-data";
import { EventData } from "../../data/types";

interface EventListProps {
  events: EventData[];
}
const EventListPage = (props: EventListProps) => {
  const { events } = props;

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: { events },
    revalidate: 10,
  };
}

export default EventListPage;
