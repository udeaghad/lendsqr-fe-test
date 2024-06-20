import Image from "next/image";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import styles from "./navBar.module.scss";
import bell from "../../../public/assets/np_notification_2425223_000000.png";
import userPix from "../../../public/assets/user-pix.png";
import dropDown from "../../../public/assets/np_dropdown_615120_0000001.png";
import { TopBarProps } from "../../../types";

const TopBar = ({ isCollapsed, setIsCollapsed }: TopBarProps) => {
  return (
    <header className={styles.main_container}>
      <div className={styles.container}>
        {isCollapsed ? (
          <div
            className={styles.hamburger}
            onClick={() => setIsCollapsed(false)}
          >
            <IoMdMenu size={30} />
          </div>
        ) : (
          <div
            className={styles.hamburger}
            onClick={() => setIsCollapsed(true)}
          >
            <IoMdClose size={20} />
          </div>
        )}

        <div className={styles.logo_container}>
          <div className={styles.logo} />
        </div>
        <div className={styles.search_container}>
          <input
            type="text"
            placeholder="Search for anything"
            className={styles.search_input}
          />
          <div className={styles.search_icon}>
            <IoSearchOutline color="white" size={24}/>
          </div>
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
    </header>
  );
};

export default TopBar;
