import Image from "next/image";
import styles from "../../dashboard.module.scss";
import UserProfileCard from "@/app/components/UserProfile/UserProfileCard";

const UserDetails = () => {
  return (
    <div className={styles.container}>
      <div>
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
      </div>

      <div>
        <span>User Details</span>
      </div>

      <div>
        <span>Blacklist User</span>
      </div>

      <div>
        <span>Activate User</span>
      </div>

      <div>
        <UserProfileCard/>
      </div>
    </div>
  );
};

export default UserDetails;
