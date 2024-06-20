import React from "react";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import styles from "./navBar.module.scss";
import bell from "../../../public/assets/np_notification_2425223_000000.png";
import userPix from "../../../public/assets/user-pix.png";
import dropDown from "../../../public/assets/np_dropdown_615120_0000001.png";

const NavBar = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div className={styles.hamburger}>
          <IoMdMenu size={30} />
        </div>
        <div className={styles.logo_container}>
          <div className={styles.logo} />
        </div>
        <div className={styles.nav_items}>
          <div className={styles.docs_container}>
            <div>Docs</div>
          </div>
          <div className={styles.bell_container}>
            <Image src={bell} alt="bell" width={25} height={25} />
          </div>
          <div className={styles.user_profile}>
            <div className={styles.user_pix_container}>
              <Image
                src={userPix}
                alt="userPix"
                width={50}
                height={50}
                className={styles.user_pix}
              />
            </div>
            <div className={styles.name_container}>
              <div>Adedeji</div>
            </div>
            <div>
              <Image src={dropDown} alt="dropDown" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
