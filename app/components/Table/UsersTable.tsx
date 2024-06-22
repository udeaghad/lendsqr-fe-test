"use client";
import { IoFilter } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Image from "next/image";

import { Dropdown, Space } from "antd";
import styles from "./table.module.scss";
import { OverviewTableProps } from "../../../types";
import CustomDropDown from "../Dropdown/CustomDropDown";

const UsersTable = ({ data }: OverviewTableProps) => {
  const handlePopupClick = (key: string, item: any) => {
    console.log("clicked", { key }, { item });
  };

  const handleSearch = (key: string, value?: string | string[]) => {
    console.log("search", { key }, { value });
  };

  const filterOptions = [
    { label: "ABC", value: "ABC" },
    { label: "DEF", value: "DEF" },
    { label: "GHI", value: "GHI" },
  ];

  return (
    <div className={styles.container}>
      <table className={styles.table_container} data-testid='table'>
        <thead className={styles.table_heading} data-testid="table_header">
          <tr>
            <th className={styles.thead}>
              <div className={styles.table_head}>
                <div>Organization</div>
                <CustomDropDown
                  options={filterOptions}
                  handleSearch={handleSearch}
                />
              </div>
            </th>
            <th className={styles.thead}>
              <div className={styles.table_head}>
                Username
                <CustomDropDown
                  options={filterOptions}
                  handleSearch={handleSearch}
                />
              </div>
            </th>
            <th className={styles.thead}>
              <div className={styles.table_head}>
                Email
                <CustomDropDown
                  options={filterOptions}
                  handleSearch={handleSearch}
                />
              </div>
            </th>
            <th className={styles.thead}>
              <div className={styles.table_head}>
                Phone Number
                <CustomDropDown
                  options={filterOptions}
                  handleSearch={handleSearch}
                />
              </div>
            </th>
            <th className={styles.thead}>
              <div className={styles.table_head}>
                Date Joined
                <CustomDropDown
                  options={filterOptions}
                  handleSearch={handleSearch}
                />
              </div>
            </th>
            <th className={styles.thead}>
              <div className={styles.table_head}>
                Status
                <CustomDropDown
                  options={filterOptions}
                  handleSearch={handleSearch}
                />
              </div>
            </th>
            <th className={styles.thead} />
          </tr>
        </thead>
        <tbody className={styles.table_body} data-testid="table_body">
          {data.map((item, index) => (
            <tr key={index}>
              <td className={styles.table_row}>{item.organization}</td>
              <td className={styles.table_row}>{item.username}</td>
              {/* <td className={`${styles.hide_table_head} ${styles.table_row}`}> */}
              <td className={styles.table_row}>{item.email}</td>
              <td className={styles.table_row}>{item.phoneNumber}</td>
              <td className={styles.table_row}>{item.dateJoined}</td>
              <td className={styles.table_row}>
                {item.status === "Active" ? (
                  <span className={styles.active_status}>{item.status}</span>
                ) : item.status === "Inactive" ? (
                  <span className={styles.inactive_status}>{item.status}</span>
                ) : item.status === "Pending" ? (
                  <span className={styles.pending_status}>{item.status}</span>
                ) : item.status === "Blacklisted" ? (
                  <span className={styles.blacklisted_status}>
                    {item.status}
                  </span>
                ) : (
                  ""
                )}
              </td>
              <td className={styles.table_row} data-testid="more_icon">
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: "1",
                        label: (
                          <div className={styles.popup_container} >
                            <Image
                              src="/assets/np_view_1214519_0000001.png"
                              alt="view details"
                              width={14}
                              height={14}
                              
                            />
                            <span>View Details</span>
                          </div>
                        ),
                      },
                      {
                        key: "2",
                        label: (
                          <div className={styles.popup_container}>
                            <Image
                              src="/assets/np_delete-friend_3248001_0000001.png"
                              alt="blacklist users"
                              width={14}
                              height={14}
                            />
                            <span>Blacklist User</span>
                          </div>
                        ),
                      },
                      {
                        key: "3",
                        label: (
                          <div className={styles.popup_container}>
                            <Image
                              src="/assets/np_user_2995993_0000001.png"
                              alt="activate users"
                              width={14}
                              height={14}
                            />
                            <span>Activate User</span>
                          </div>
                        ),
                      },
                    ],
                    onClick: (e) => handlePopupClick(e.key, item),
                  }}
                  trigger={["click"]}
                >
                  <Space>
                    <HiOutlineDotsVertical
                      size={14}
                      style={{ cursor: "pointer" }}
                    />
                  </Space>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
