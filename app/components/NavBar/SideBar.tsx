"use client";
import { Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "./navBar.module.scss";
import { SideBarProps } from "../../../types";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const SideBar = ({ isCollapsed }: SideBarProps) => {
  const dashboardItems = [
    {
      title: "CUSTOMERS",
      subtitles: [
        {
          name: "Users",
          icons: "/assets/user-friends.png",
          url: "/dashboard",
        },
        {
          name: "Guarantors",
          icons: "/assets/users.png",
          url: "#",
        },
        {
          name: "Loans",
          icons: "/assets/sack.png",
          url: "#",
        },
        {
          name: "Decision Models",
          icons: "/assets/handshake-regular.png",
          url: "#",
        },
        {
          name: "Savings",
          icons: "/assets/piggy-bank.png",
          url: "#",
        },
        {
          name: "Loan Requests",
          icons: "/assets/Group_104.png",
          url: "#",
        },
        {
          name: "Whitelist",
          icons: "/assets/user-check.png",
          url: "#",
        },
        {
          name: "Karma",
          icons: "/assets/user-times.png",
          url: "#",
        },
      ],
    },
    {
      title: "BUSINESS",
      subtitles: [
        {
          name: "Organization",
          icons: "/assets/briefcase.png",
          url: "#",
        },
        {
          name: "Loan Products",
          icons: "/assets/Group_104.png",
          url: "#",
        },
        {
          name: "Savings Products",
          icons: "/assets/np_bank_148501_0000001.png",
          url: "#",
        },
        {
          name: "Fees and Chargges",
          icons: "/assets/coins-solid.png",
          url: "#",
        },
        {
          name: "Transaction",
          icons: "/assets/icon.png",
          url: "#",
        },
        {
          name: "Services",
          icons: "/assets/galaxy.png",
          url: "#",
        },
        {
          name: "Service account",
          icons: "/assets/user-cog.png",
          url: "#",
        },
        {
          name: "Settlements",
          icons: "/assets/scroll.png",
          url: "#",
        },
        {
          name: "Reports",
          icons: "/assets/chart-bar.png",
          url: "#",
        },
      ],
    },
    {
      title: "SETTINGS",
      subtitles: [
        {
          name: "Preferences",
          icons: "/assets/sliders-h.png",
          url: "#",
        },
        {
          name: "Fees and Pricing",
          icons: "/assets/badge-percent.png",
          url: "#",
        },
        {
          name: "Audit logs",
          icons: "/assets/clipboard-list.png",
          url: "#",
        },
        {
          name: "Systems Messages",
          icons: "/assets/tire.png",
          url: "#",
        },
      ],
    },
  ];
  return (
    <div className={styles.menu_container}>
      <div className={isCollapsed ? styles.hide_menu : styles.show_menu}>
        <Menu
          style={{
            width: 220,
            fontSize: "12px",
            height: 500,
            overflowY: "auto",
          }}
          defaultSelectedKeys={["sub1"]}
          defaultOpenKeys={["title1"]}
          mode="inline"
          expandIcon={() => <MdKeyboardArrowDown color="#545f7d" size={20} />}
        >
          <Menu.Item key="switch">
            <div className={styles.navItem_switch}>
              <div className={styles.icon_container}>
                <Image
                  src="/assets/briefcase.png"
                  alt="switch"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
              </div>
              <div style={{ fontSize: "14px" }}>Switch Organization</div>
              <div className={styles.icon_container}>
                <Image
                  src="/assets/np_next_2236826_0000002.png"
                  alt="switch"
                  width={24}
                  height={24}
                  style={{ width: "12px", height: "12px" }}
                />
              </div>
            </div>
          </Menu.Item>
          <Menu.Item key="dashboard">
            <div className={styles.navItem}>
              <div className={styles.icon_container}>
                <Image
                  src="/assets/home1.png"
                  alt="switch"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
              </div>
              <div style={{ fontSize: "14px" }}>Dashboard</div>
            </div>
          </Menu.Item>
          {dashboardItems.map((item, index) => (
            <SubMenu
              key={`title${index + 1}`}
              title={<span style={{ color: "#545f7d" }}>{item.title}</span>}
              className={styles.submenu}
            >
              {item.subtitles.map((subtitle, index) => (
                <MenuItemGroup key={`subgrp${index + 1}`}>
                  <Menu.Item key={`sub${index + 1}`}>
                    <div className={styles.navItem}>
                      <div>
                        <Image
                          src={subtitle.icons}
                          alt={subtitle.name}
                          width={24}
                          height={24}
                          className={styles.icon}
                        />
                      </div>
                      <Link href={subtitle.url}>{subtitle.name}</Link>
                    </div>
                  </Menu.Item>
                </MenuItemGroup>
              ))}
            </SubMenu>
          ))}
          <Menu.Divider />
          <Menu.Item key="logout">
            <div className={styles.navItem}>
              <div className={styles.icon_container}>
                <Image
                  src="/assets/sign-out.png"
                  alt="switch"
                  width={24}
                  height={24}
                  className={styles.icon}
                />
              </div>
              <div style={{ fontSize: "14px" }}>Logout</div>
            </div>
          </Menu.Item>
          <div className={styles.version_text}>
            <span>v1.2.0</span>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default SideBar;
