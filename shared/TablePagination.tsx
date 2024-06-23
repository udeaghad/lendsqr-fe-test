'use client';
import React, { useEffect, useState } from 'react'
import { Pagination } from "antd";

const TablePagination = ({data}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(2);

  useEffect(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    setCurrentData(data.slice(start, end));
  }, [currentPage, pageSize, data]);

  const handlePaginateSize = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  return (
    <div>
        <div>
          <div>Showing</div>
          <div>
            <select
              name="pages"
              id="pages"
              onChange={(e) => setPageSize(Number(e.target.value))}
              value={pageSize}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div>
            <span>of {data.length}</span>
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
  )
}

export default TablePagination