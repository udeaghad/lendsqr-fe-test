import Image from "next/image";
import styles from "../../dashboard.module.scss";
import UserProfileCard from "@/app/components/UserProfile/UserProfileCard";
import GeneralDetailsCard from "@/app/components/GeneralDetails/GeneralDetailsCard";
import Link from "next/link";

const UserDetails = () => {
  return (
    <div className={styles.container}>
      <Link href="/dashboard/users" className={styles.nav_arrow}>
        <div>
          <Image
            src="/assets/np_back_3007750_000000.png"
            alt="user icon"
            width={30}
            height={30}
          />
        </div>
        <div>
          <span>Back to Users</span>
        </div>
      </Link>

      <div className={styles.page_name_cont}>
        <div className={styles.page_name}>
          <span>User Details</span>
        </div>

        <div className={styles.action_btn_cont}>
          <div>
            <button className={styles.blacklist_btn}>Blacklist User</button>
          </div>

          <div>
            <button className={styles.activate_btn}>Activate User</button>
          </div>
        </div>
      </div>

      <div>
        <UserProfileCard />
      </div>

      <div>
        <GeneralDetailsCard />
      </div>
    </div>
  );
};

export default UserDetails;
