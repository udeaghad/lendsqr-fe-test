"use client";
import { useEffect, useRef, useState } from "react";
import { Space, Select, Input, DatePicker } from "antd";
import { IoFilter } from "react-icons/io5";
import styles from "./dropdown.module.scss";
import { FilterDropDownProps } from "@/types";
import ClickOutSide from "@/shared/ClickOutSide";

const CustomDropDown = ({
  options,
  handleSearch,
  leftPosition,
  handleFilterBtn,
  handleReset,
}: FilterDropDownProps) => {
  const [selectField, setSelectField] = useState<
    Record<string, string | string[]>
  >({
    organization: "",
    username: "",
    email: "",
    date: "",
    phone: "",
    status: "",
  });

  const menuRef = useRef<HTMLDivElement>(null);
  const [listening, setListening] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleDropDown = () => {
    const dropdown = document.querySelector(`.${styles.dropdown_container}`);
    if (dropdown) {
      dropdown.classList.toggle(styles.show);
    }
  };

  ClickOutSide({
    listening,
    menuRef,
    setListening,
    setIsOpen,
  });

  // const handleCloseBtn = () => {
  //   const dropdown = document.querySelector(`.${styles.dropdown_container}`);
  //   if (dropdown) {
  //     dropdown.classList.remove(styles.show);
  //   }
  // };
  return (
    <div data-testid="dropdown" ref={menuRef} onClick={toggle}>
      <div data-testid="dropdown_icon">
        <IoFilter
          size={12}
          style={{ cursor: "pointer" }}
          onClick={handleDropDown}
        />
      </div>
      <div className={styles.dropdown_container} style={{ left: leftPosition }}>
        <div>
          <div className={styles.dropdown_title}>Organization</div>
          <Space>
            <Select
              placeholder={
                <span
                  style={{
                    fontWeight: "500",
                  }}
                >
                  Select
                </span>
              }
              className={styles.select}
              onChange={(value) => {
                handleSearch("organization", value);
                setSelectField((prev) => ({
                  ...prev,
                  organization: value,
                }));
              }}
              options={options}
              value={selectField.organization}
            />
          </Space>
        </div>

        <div>
          <div className={styles.dropdown_title}>Username</div>
          <Space>
            <Input
              placeholder="User"
              className={styles.select}
              onChange={(e) => {
                handleSearch("username", e.target.value);
                setSelectField((prev) => ({
                  ...prev,
                  username: e.target.value,
                }));
              }}
              value={selectField.username}
            />
          </Space>
        </div>

        <div>
          <div className={styles.dropdown_title}>Email</div>
          <Space>
            <Input
              placeholder="Email"
              className={styles.select}
              onChange={(e) => {
                handleSearch("email", e.target.value);
                setSelectField((prev) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
              value={selectField.email}
            />
          </Space>
        </div>

        <div>
          <div className={styles.dropdown_title}>Date</div>
          <Space>
            <DatePicker
              className={styles.select}
              onChange={(date, dateString) => {
                handleSearch("date", dateString);
                // setSelectField((prev) => ({
                //   ...prev,
                //   date: dateString,
                // }));
              }}
              placeholder="Date"
              // value={selectField.date}
            />
          </Space>
        </div>

        <div>
          <div className={styles.dropdown_title}>Phone Number</div>
          <Space>
            <Input
              placeholder="Phone Number"
              className={styles.select}
              onChange={(e) => {
                handleSearch("phone", e.target.value);
                setSelectField((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }));
              }}
              value={selectField.phone}
            />
          </Space>
        </div>

        <div>
          <div className={styles.dropdown_title}>Status</div>
          <Space>
            <Select
              data-testid="dropdown_select"
              placeholder={
                <span
                  style={{ textTransform: "capitalize", fontWeight: "500" }}
                >
                  Select
                </span>
              }
              className={styles.select}
              onChange={(value) => {
                handleSearch("status", value);
                setSelectField((prev) => ({
                  ...prev,
                  status: value,
                }));
              }}
              options={[
                { label: "Active", value: "active" },
                { label: "Inactive", value: "inactive" },
                { label: "Pending", value: "pending" },
                { label: "Blacklisted", value: "blacklisted" },
              ]}
              value={selectField.status}
            />
          </Space>
        </div>

        <div className={styles.btn_container}>
          <button
            className={styles.dropdown_btn_reset}
            type="button"
            onClick={() => {
              handleReset();
              setSelectField({
                organization: "",
                username: "",
                email: "",
                date: "",
                phone: "",
                status: "",
              });
            }}
            data-testid="dropdown_reset"
          >
            Reset
          </button>
          <button
            className={styles.dropdown_btn_filter}
            type="button"
            onClick={() => {
              handleFilterBtn();
              handleDropDown();
            }}
            data-testid="dropdown_filter"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomDropDown;
