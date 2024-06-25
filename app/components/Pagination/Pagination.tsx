"use client";

import { Pagination } from "antd";
import styles from "./pagination.module.scss";
import { TablePaginationProps } from "@/types";



const TablePagination = ({
  pageSize,
  setPageSize,
  userData,
  handlePaginateSize,
  currentPage,
}: TablePaginationProps) => {
  return (
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
  );
};

export default TablePagination;
