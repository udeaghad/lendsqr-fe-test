"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Pagination } from "antd";
import styles from "./table.module.scss";
import { OverviewTableProps } from "../../../types";

import DataTable from "./DataTable";
import TablePagination from "../Pagination/Pagination";

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
    const { field, value } = searchValue;
    if (field === "") {
      return;
    } else if (field === "organization") {
      const filteredData = userData.filter((item) =>
        item.info.org.toLowerCase().includes(value.toLowerCase())
      );

      setUserData(filteredData);
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
      setUserData(data);
      setSearchValue({ field: "", value: "" });
    }
  };

  const handleFilterBtn = () => {
    filterData();
  };

  const handleReset = () => {
    setUserData(data);
  };

  const handleSearch = (key: string, value?: string | string[]) => {
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

      <div>
        <TablePagination
          pageSize={pageSize}
          setPageSize={setPageSize}
          userData={userData}
          handlePaginateSize={handlePaginateSize}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default UsersTable;
