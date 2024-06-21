import styles from './dashboard.module.scss'
import OverviewCard from '@/app/components/OverviewCard/OverviewCard';

export default function Dashboard() {
  
  return <div className={styles.container}>
    <h3 className={styles.heading}>Users</h3>
    <div className={styles.overview_card}>
      <OverviewCard color="#DF18FF" icons="/assets/user_icon_bg.png" count="2453" title="users" />
      <OverviewCard color="#5718FF" icons="/assets/active_users_icon.png" count="2453" title="ACTIVE USERS" />
      <OverviewCard color="#F55F44" icons="/assets/users_loan_icons.png" count="12453" title="USERS WITH LOANS"/>
      <OverviewCard color="#FF3366" icons="/assets/users_savings_icon.png" count="102453" title="USERS with savings" />
    </div>
  </div>;
}
