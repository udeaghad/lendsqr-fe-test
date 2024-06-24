"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { HiOutlineDotsVertical } from "react-icons/hi";
// import Image from "next/image";
import { Pagination } from "antd";
import styles from "./table.module.scss";
import { OverviewTableProps } from "../../../types";
// import CustomDropDown from "../Dropdown/CustomDropDown";
import DataTable from "./DataTable";

const UsersTable = ({ data }: OverviewTableProps) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [currentData, setCurrentData] = useState(data);
  const [userData, setUserData] = useState(data);
  const [searchValue, setSearchValue] = useState({
    field: "",
    value: "",
  });

  useEffect(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setCurrentData(userData.slice(start, end));
  }, [currentPage, pageSize, userData, data]);

  const handlePopupClick = (key: string, item: any) => {
    if (key === "1") {
      localStorage.setItem("userDetails", JSON.stringify(item));
      router.push(`/dashboard/users/${item?.id}`);
    }
  };

  const filterData = () => {
    console.log({ searchValue });
    const { field, value } = searchValue;
    if (field === "") {
      return;
    } else if (field === "organization") {
      const filteredData = userData.filter((item) =>
        item.info.org.toLowerCase().includes(value.toLowerCase())
      );
      console.log("hi", filteredData);
      setUserData(filteredData);
      console.log("hi2", filteredData);
    } else if (field === "username") {
      const filteredData = userData.filter((item) => {
        return (
          item.info.firstName.toLowerCase().includes(value.toLowerCase()) ||
          item.info.lastName.toLowerCase().includes(value.toLowerCase())
        );
      });
      setUserData(filteredData);
    } else if (field === "email") {
      const filteredData = userData.filter((item) =>
        item.info.email.toLowerCase().includes(value.toLowerCase())
      );
      setUserData(filteredData);
    } else if (field === "phoneNumber") {
      const filteredData = userData.filter((item) =>
        item.info.phoneNumber.toLowerCase().includes(value.toLowerCase())
      );
      setUserData(filteredData);
    } else if (field === "date") {
      const filteredData = userData.filter(
        (item) => new Date(item.info.dateJoined) >= new Date(value)
      );
      setUserData(filteredData);
    } else if (field === "status") {
      const filteredData = userData.filter((item) =>
        item.info.status.toLowerCase().includes(value.toLowerCase())
      );
      setUserData(filteredData);
    } else if (field === "reset") {
      console.log("reset");
      setUserData(data);
      setSearchValue({ field: "", value: "" });
    }
  };

  const handleFilterBtn = () => {
    console.log("filter");
    filterData();
  };

  const handleReset = () => {
    console.log("reset");
    setUserData(data);
  };

  useEffect(() => {
    console.log("currentdata", { userData });
  }, [userData]);

  const handleSearch = (key: string, value?: string | string[]) => {
    console.log("search", { key }, { value });
    setSearchValue({ field: key, value: value as string });
  };

  const filterOptions = [
    { label: "", value: "Select" },
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
        <DataTable
          filterOptions={filterOptions}
          handleSearch={handleSearch}
          handleFilterBtn={handleFilterBtn}
          handleReset={handleReset}
          currentData={currentData}
          handlePopupClick={handlePopupClick}
        />
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
            <span>out of {userData.length}</span>
          </div>
        </div>
        <Pagination
          total={userData.length}
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
