import Link from "next/link";
import React from "react";
import Image from "next/image";

import styles from "./event-item.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import { EventData } from "../../data/types";

function EventItem(props: EventData) {
  const { title, image, date, location, id, isFeatured } = props;
  const readableDate = new Date(date).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <Image src={"/" + image} alt={title} width={250} height={160} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
          <div className={styles.actions}>
            <Button link={exploreLink}>
              <span>Explore event</span>
              <span className={styles.icon}>
                <ArrowRightIcon />{" "}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
