import Image from "next/image";

import { OverviewCardProps } from "../../../types";
import styles from "./overview_card.module.scss";
import NumberFormatter from "@/utils/NumberFormatter";

const OverviewCard = ({ color, icons, title, count }: OverviewCardProps) => {
  return (
    <div className={styles.card_container}>
      <div
        className={styles.icon_container}

      >
        <Image src={icons} alt="icon" width={40} height={40} />
      </div>
      <div className={styles.title_container}>
        <span>{title}</span>
      </div>
      <div className={styles.number_container}>
        <NumberFormatter number={count} type="text" thousandSeparator={true} />
      </div>
    </div>
  );
};

export default OverviewCard;
