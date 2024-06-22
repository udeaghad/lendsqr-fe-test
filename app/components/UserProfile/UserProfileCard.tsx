import Image from "next/image";
import { Rate, Divider } from "rsuite";

import styles from "./user_profile.module.scss";
import NumberFormatter from "@/shared/NumberFormatter";

const UserProfileCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user_info}>
        <div className={styles.profile_pics}>
          <Image
            src="/assets/avatar.png"
            alt="user icon"
            width={100}
            height={100}
            className={styles.pics}
          />
        </div>
        <div className={styles.profile_info}>
          <div>
            <div className={styles.profile_name}>Grace Effiom</div>
            <div className={styles.profile_code}>LSQFf587g90</div>
          </div>

          <div className={styles.tier_cont}>
            <div>User's Tier</div>
            <div className={styles.tier_star}>
              <Rate
                disabled
                defaultValue={1}
                max={3}
                size="xs"
                color="yellow"
              />
            </div>
          </div>

          <div className={styles.account_info}>
            <div className={styles.acct_amt}>
              <NumberFormatter
                number={500000}
                type="text"
                prefix="₦"
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </div>
            <Divider vertical className={styles.pipe} />
            <div>5554215872/Providus Bank</div>
          </div>
        </div>
      </div>

      <div className={styles.user_detail_tab}>
        <div>General Details</div>
        <div>Documents</div>
        <div>Bank Details</div>
        <div>Loans</div>
        <div>Savings</div>
        <div>App and System</div>
      </div>
    </div>
  );
};

export default UserProfileCard;
