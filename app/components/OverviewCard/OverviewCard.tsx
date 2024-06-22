import Image from "next/image";

import { OverviewCardProps } from "../../../types";
import styles from "./overview_card.module.scss";
import NumberFormatter from "@/shared/NumberFormatter";

const OverviewCard = ({ icons, title, count }: OverviewCardProps) => {
  return (
    <div className={styles.card_container}>
      <div
        className={styles.icon_container}

      >
        <Image src={icons} alt="icon" width={40} height={40} data-testid="card_icon" />
      </div>
      <div className={styles.title_container} data-testid='card_title'>
        <span>{title}</span>
      </div>
      <div className={styles.number_container} data-testid='card_count'>
        <NumberFormatter number={count} type="text" thousandSeparator={true} />
      </div>
    </div>
  );
};

export default OverviewCard;
