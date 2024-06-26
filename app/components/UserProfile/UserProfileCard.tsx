"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Rate, Divider } from "rsuite";

import styles from "./user_profile.module.scss";
import NumberFormatter from "@/shared/NumberFormatter";
import { UsersDetailsProps } from "@/types";

const UserProfileCard = () => {
  const [userDetails, setUserDetails] = useState<UsersDetailsProps | null>(
    null
  );

  const getUsersData = () => {
    const getUserDetails = localStorage.getItem("userDetails");
    if (getUserDetails) setUserDetails(JSON.parse(getUserDetails));
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const { info, educationAndEmployment } = userDetails || {};

  const [selectedTab, setSelectedTab] = useState("general-details");

  const handleSelectedTab = (tab: string) => {
    setSelectedTab(tab);
    const tabs = document.querySelectorAll(`.${styles.tab}`);
    tabs.forEach((tab) => tab.classList.remove(styles.active));
    const selected = document.getElementById(tab);
    selected?.classList.add(styles.active);
  };

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
            <div
              className={styles.profile_name}
            >{`${info?.firstName} ${info?.lastName}`}</div>
            <div className={styles.profile_code}>{info?.referralCode}</div>
          </div>
          <Divider vertical className={styles.pipe_after_name} />

          <div className={styles.tier_cont}>
            <div>User&apos;s Tier</div>
            <div className={styles.tier_star}>
              <Rate
                disabled
                defaultValue={Number(info?.tier)}
                max={3}
                size="xs"
                color="yellow"
              />
            </div>
          </div>
          <Divider vertical className={styles.pipe_after_star} />

          <div className={styles.account_info}>
            <div className={styles.acct_amt}>
              <NumberFormatter
                number={Number(educationAndEmployment?.monthlyIncome)}
                type="text"
                prefix="₦"
                thousandSeparator={true}
                decimalScale={2}
                fixedDecimalScale={true}
              />
            </div>
            <Divider vertical className={styles.pipe} />
            <div>{`${info?.account}/${info?.bank}`}</div>
          </div>
        </div>
      </div>

      <div className={styles.user_detail_tab}>
        <div
          className={
            selectedTab === "general-details" ? styles.active_tab : styles.tab
          }
          onClick={() => handleSelectedTab("general-details")}
          id="general-details"
        >
          General Details
        </div>
        <div
          className={
            selectedTab === "documents" ? styles.active_tab : styles.tab
          }
          onClick={() => handleSelectedTab("documents")}
          id="documents"
        >
          Documents
        </div>
        <div
          className={
            selectedTab === "bank-details" ? styles.active_tab : styles.tab
          }
          onClick={() => handleSelectedTab("bank-details")}
          id="bank-details"
        >
          Bank Details
        </div>
        <div
          className={selectedTab === "loans" ? styles.active_tab : styles.tab}
          onClick={() => handleSelectedTab("loans")}
          id="loans"
        >
          Loans
        </div>
        <div
          className={selectedTab === "savings" ? styles.active_tab : styles.tab}
          onClick={() => handleSelectedTab("savings")}
          id="savings"
        >
          Savings
        </div>
        <div
          className={
            selectedTab === "App-and-System" ? styles.active_tab : styles.tab
          }
          onClick={() => handleSelectedTab("App-and-System")}
          id="App-and-System"
        >
          App and System
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
