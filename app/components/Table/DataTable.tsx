"use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Image from "next/image";
import { Dropdown, Space } from "antd";
import styles from "./table.module.scss";
import { DataTableProps } from "../../../types";
import CustomDropDown from "../Dropdown/CustomDropDown";

const DataTable = ({
  filterOptions,
  handleSearch,
  handleFilterBtn,
  handleReset,
  currentData,
  handlePopupClick,
}: DataTableProps) => {
  return (
    <table className={styles.table_container} data-testid="table">
      <thead className={styles.table_heading} data-testid="table_header">
        <tr>
          <th className={styles.thead}>
            <div className={styles.table_head}>
              <div>Organization</div>
              <div data-testid="custom_dropdown">
                <CustomDropDown
                  options={filterOptions}
                  handleSearch={handleSearch}
                  handleFilterBtn={handleFilterBtn}
                  handleReset={handleReset}
                />
              </div>
            </div>
          </th>
          <th className={styles.thead}>
            <div className={styles.table_head}>
              <div>Username</div>
              <div data-testid="custom_dropdown">
                <CustomDropDown
                  options={filterOptions}
                  handleSearch={handleSearch}
                  handleFilterBtn={handleFilterBtn}
                  handleReset={handleReset}
                />
              </div>
            </div>
          </th>
          <th className={styles.thead}>
            <div className={styles.table_head}>
              <div>Email</div>
              <div data-testid="custom_dropdown">
                <CustomDropDown
                  options={filterOptions}
                  handleSearch={handleSearch}
                  handleFilterBtn={handleFilterBtn}
                  handleReset={handleReset}
                />
              </div>
            </div>
          </th>
          <th className={styles.thead}>
            <div className={styles.table_head}>
              <div>Phone Number</div>
              <div data-testid="custom_dropdown">
                <CustomDropDown
                  options={filterOptions}
                  handleSearch={handleSearch}
                  handleFilterBtn={handleFilterBtn}
                  handleReset={handleReset}
                />
              </div>
            </div>
          </th>
          <th className={styles.thead}>
            <div className={styles.table_head}>
              <div>Date Joined</div>
              <div data-testid="custom_dropdown">
                <CustomDropDown
                  options={filterOptions}
                  handleSearch={handleSearch}
                  handleFilterBtn={handleFilterBtn}
                  handleReset={handleReset}
                />
              </div>
            </div>
          </th>
          <th className={styles.thead}>
            <div className={styles.table_head}>
              <div>Status</div>
              <div data-testid="custom_dropdown">
                <CustomDropDown
                  options={filterOptions}
                  handleSearch={handleSearch}
                  handleFilterBtn={handleFilterBtn}
                  handleReset={handleReset}
                />
              </div>
            </div>
          </th>
          <th className={styles.thead} />
        </tr>
      </thead>
      <tbody className={styles.table_body} data-testid="table_body">
        {currentData.map((item) => (
          <tr key={item?.id}>
            <td className={styles.table_row}>{item.info.org}</td>
            <td className={styles.table_row}>{item.info.firstName}</td>
            {/* <td className={`${styles.hide_table_head} ${styles.table_row}`}> */}
            <td className={styles.table_row}>{item.info.email}</td>
            <td className={styles.table_row}>{item.info.phoneNumber}</td>
            <td className={styles.table_row}>
              {new Date(item.info.dateJoined).toDateString()}
            </td>
            <td className={styles.table_row}>
              {item.info.status === "Active" ? (
                <span className={styles.active_status}>{item.info.status}</span>
              ) : item.info.status === "Inactive" ? (
                <span className={styles.inactive_status}>
                  {item.info.status}
                </span>
              ) : item.info.status === "Pending" ? (
                <span className={styles.pending_status}>
                  {item.info.status}
                </span>
              ) : item.info.status === "Blacklisted" ? (
                <span className={styles.blacklisted_status}>
                  {item.info.status}
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
                        <div className={styles.popup_container}>
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
  );
};

export default DataTable;
