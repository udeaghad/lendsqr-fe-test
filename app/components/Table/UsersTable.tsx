"use client";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Image from "next/image";
import { Dropdown, Space, Pagination } from "antd";
import styles from "./table.module.scss";
import { OverviewTableProps } from "../../../types";
import CustomDropDown from "../Dropdown/CustomDropDown";
import { UsersContext } from "../../context/UsersContext";

const UsersTable = ({ data }: OverviewTableProps) => {
  const { setUserDetails } = useContext(UsersContext) || {};

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setCurrentData(data.slice(start, end));
  }, [currentPage, pageSize, data]);

  const handlePopupClick = (key: string, item: any) => {
    if(key === "1") {
      if (setUserDetails) {
        setUserDetails(item);
      }
      router.push(`/dashboard/users/${item?.id}`);
    }
  };

  const handleSearch = (key: string, value?: string | string[]) => {
    console.log("search", { key }, { value });
  };

  const filterOptions = [
    { label: "lendsqr", value: "lendsqr" },
    { label: "opay", value: "opay" },
    { label: "moniepoint", value: "moniepoint" },
    { label: "oneBank", value: "oneBank" },
    { label: "palmpay", value: "palmpay" },
    { label: "alat", value: "alat" },
  ];

  const handlePaginateSize = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };


  return (
    <div>
      <div className={styles.container}>
        <table className={styles.table_container} data-testid="table">
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
            {currentData.map((item) => (
              <tr key={item?.id}>
                <td className={styles.table_row}>{item.info.org}</td>
                <td className={styles.table_row}>{item.info.firstName}</td>
                {/* <td className={`${styles.hide_table_head} ${styles.table_row}`}> */}
                <td className={styles.table_row}>{item.info.email}</td>
                <td className={styles.table_row}>{item.info.phoneNumber}</td>
                <td className={styles.table_row}>{item.info.dateJoined}</td>
                <td className={styles.table_row}>
                  {item.info.status === "Active" ? (
                    <span className={styles.active_status}>
                      {item.info.status}
                    </span>
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
                            <div
                              className={styles.popup_container}

                            >
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
      <div className={styles.pagination_container}>
        <div className={styles.items_number}>
          <div>Showing</div>
          <div>
            <select
              name="pages"
              id="pages"
              onChange={(e) => setPageSize(Number(e.target.value))}
              value={pageSize}
              className={styles.select_paginate_size}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="70">70</option>
              <option value="100">100</option>
            </select>
          </div>
          <div>
            <span>out of {data.length}</span>
          </div>
        </div>
        <Pagination
          total={data.length}
          showSizeChanger={false}
          current={currentPage}
          pageSize={pageSize}
          onChange={(page, pageSize) => {
            handlePaginateSize(page, pageSize);
          }}
        />
      </div>
    </div>
  );
};

export default UsersTable;
