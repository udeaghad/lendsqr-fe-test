'use client';
import styles from "../dashboard.module.scss";
import OverviewCard from "@/app/components/OverviewCard/OverviewCard";
import UsersTable from "@/app/components/Table/UsersTable"; 
import getUsersData from "../../../data/usersData.json";

export default function Dashboard() {
  const data = JSON.parse(JSON.stringify(getUsersData));
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Users</h3>
      <div className={styles.overview_card}>
        <OverviewCard
          icons="/assets/user_icon_bg.png"
          count="2453"
          title="users"
        />
        <OverviewCard
          icons="/assets/active_users_icon.png"
          count="2453"
          title="ACTIVE USERS"
        />
        <OverviewCard
          icons="/assets/users_loan_icons.png"
          count="12453"
          title="USERS WITH LOANS"
        />
        <OverviewCard
          icons="/assets/users_savings_icon.png"
          count="102453"
          title="USERS with savings"
        />
      </div>

      <div>
        <UsersTable data={data.data} />
      </div>
    </div>
  );
}
