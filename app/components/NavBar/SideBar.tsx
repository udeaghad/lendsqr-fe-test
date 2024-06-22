"use client";
import { useState } from "react";
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
          url: null,
        },
        {
          name: "Loans",
          icons: "/assets/sack.png",
          url: null,
        },
        {
          name: "Decision Models",
          icons: "/assets/handshake-regular.png",
          url: null,
        },
        {
          name: "Savings",
          icons: "/assets/piggy-bank.png",
          url: null,
        },
        {
          name: "Loan Requests",
          icons: "/assets/Group_104.png",
          url: null,
        },
        {
          name: "Whitelist",
          icons: "/assets/user-check.png",
          url: null,
        },
        {
          name: "Karma",
          icons: "/assets/user-times.png",
          url: null,
        },
      ],
    },
    {
      title: "BUSINESS",
      subtitles: [
        {
          name: "Organization",
          icons: "/assets/briefcase.png",
          url: null,
        },
        {
          name: "Loan Products",
          icons: "/assets/Group_104.png",
          url: null,
        },
        {
          name: "Savings Products",
          icons: "/assets/np_bank_148501_0000001.png",
          url: null,
        },
        {
          name: "Fees and Chargges",
          icons: "/assets/coins-solid.png",
          url: null,
        },
        {
          name: "Transaction",
          icons: "/assets/icon.png",
          url: null,
        },
        {
          name: "Services",
          icons: "/assets/galaxy.png",
          url: null,
        },
        {
          name: "Service Account",
          icons: "/assets/user-cog.png",
          url: null,
        },
        {
          name: "Settlements",
          icons: "/assets/scroll.png",
          url: null,
        },
        {
          name: "Reports",
          icons: "/assets/chart-bar.png",
          url: null,
        },
      ],
    },
    {
      title: "SETTINGS",
      subtitles: [
        {
          name: "Preferences",
          icons: "/assets/sliders-h.png",
          url: null,
        },
        {
          name: "Fees and Pricing",
          icons: "/assets/badge-percent.png",
          url: null,
        },
        {
          name: "Audit Logs",
          icons: "/assets/clipboard-list.png",
          url: null,
        },
        {
          name: "Systems Messages",
          icons: "/assets/tire.png",
          url: null,
        },
      ],
    },
  ];

  const [selectedItem, setSelectedItem] = useState("nav-Users");

  const handleselect = (name: string) => {
    setSelectedItem(`nav-${name}`);
    const navItems = document.querySelectorAll(".navItem");
    navItems.forEach((item) => {
      item.classList.remove("navItem_active");
    });
    const selectedItem = document.getElementById(`nav-${name}`);
    selectedItem?.classList.add("navItem_active");
  };
  return (
    <div className={styles.menu_container}>
      <div className={isCollapsed ? styles.hide_menu : styles.show_menu}>
        <Menu
          style={{
            width: 220,
            fontSize: "12px",
            height: 500,
          }}
          defaultSelectedKeys={["sub1"]}
          defaultOpenKeys={["title1"]}
          mode="inline"
          expandIcon={() => <MdKeyboardArrowDown color="#545f7d" size={20} />}
        >
          <Menu.Item key="switch">
            <div className={styles.navItem_switch} data-testid="menu-switch-org">
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
            <div className={styles.navItem} data-testid="menu-dashboard">
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
                    <div className={styles.navItem} data-testid={`menu-${subtitle.name}`}>
                      <div>
                        <Image
                          src={subtitle.icons}
                          alt={subtitle.name}
                          width={24}
                          height={24}
                          className={styles.icon}
                        />
                      </div>
                      {subtitle.url === null ? (
                        <div style={{ fontSize: "14px" }}>{subtitle.name}</div>
                      ) : (
                        <Link href={subtitle.url} className={styles.link}>
                          {subtitle.name}
                        </Link>
                      )}
                      {/* <Link href={subtitle.url}>{subtitle.name}</Link> */}
                    </div>
                  </Menu.Item>
                </MenuItemGroup>
              ))}
            </SubMenu>
          ))}
          <Menu.Divider />
          <Menu.Item key="logout">
            <div className={styles.navItem} data-testid="menu-logout">
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
      <div className={styles.sidebar}>
        <div className={styles.navItem_switch} data-testid="sidebar-switch-org">
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

        <div
          className={
            selectedItem === `nav-Dashboard`
              ? styles.navItem_active
              : styles.navItem
          }
          data-testid="sidebar-dashboard"
          onClick={() => handleselect("Dashboard")}
        >
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

        <div>
          {dashboardItems.map((item, index) => (
            <div key={index}>
              <div className={styles.dashboardItems} data-testid={`title-${item.title}`}>{item.title}</div>
              {item.subtitles.map((subtitle, index) => (
                <div
                  key={index}
                  className={
                    selectedItem === `nav-${subtitle.name}`
                      ? styles.navItem_active
                      : styles.navItem
                  }
                  data-testid={`sidebar-${subtitle.name}`}
                  id={`nav-${subtitle.name}`}
                  onClick={() => handleselect(subtitle.name)}
                >
                  <div>
                    <Image
                      src={subtitle.icons}
                      alt={subtitle.name}
                      width={24}
                      height={24}
                      className={styles.icon}
                    />
                  </div>
                  {subtitle.url === null ? (
                    <div style={{ fontSize: "14px" }}>{subtitle.name}</div>
                  ) : (
                    <Link href={subtitle.url} className={styles.link}>
                      {subtitle.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className={
            selectedItem === `nav-Logout`
              ? styles.navItem_active
              : styles.navItem
          }
          data-testid="sidebar-logout"
          onClick={() => handleselect("Logout")}>
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
        <div className={styles.version_text}>
          <span>v1.2.0</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
