"use client";
import { Dropdown, Space, Select, Input, DatePicker } from "antd";
import { IoFilter } from "react-icons/io5";
import styles from "./dropdown.module.scss";
import { FilterDropDownProps } from "@/types";

const CustomDropDown = ({ options, handleSearch, leftPosition }: FilterDropDownProps) => {
  const handleDropDown = () => {
    const dropdown = document.querySelector(`.${styles.dropdown_container}`);
    if (dropdown) {
      dropdown.classList.toggle(styles.show);
    }
  };
  return (
    <div>
      <div>
        <IoFilter
          size={12}
          style={{ cursor: "pointer" }}
          onClick={handleDropDown}
        />
      </div>
      <div className={styles.dropdown_container} style={{left: leftPosition}}>
        <div>
          <div className={styles.dropdown_title}>Organization</div>
          <Space>
            <Select
              placeholder={
                <span
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "500",
                  }}
                >
                  Select
                </span>
              }
              className={styles.select}
              onChange={(value) => handleSearch("organization", value)}
              options={options}
            />
          </Space>
        </div>

        <div>
          <div className={styles.dropdown_title}>Username</div>
          <Space>
            <Input
              placeholder="User"
              className={styles.select}
              onChange={(e) => handleSearch("username", e.target.value)}
            />
          </Space>
        </div>

        <div>
          <div className={styles.dropdown_title}>Email</div>
          <Space>
            <Input
              placeholder="Email"
              className={styles.select}
              onChange={(e) => handleSearch("email", e.target.value)}
            />
          </Space>
        </div>

        <div>
          <div className={styles.dropdown_title}>Date</div>
          <Space>
            <DatePicker
              className={styles.select}
              onChange={(date, dateString) => handleSearch("date", dateString)}
              placeholder="Date"
            />
          </Space>
        </div>

        <div>
          <div className={styles.dropdown_title}>Phone Number</div>
          <Space>
            <Input
              placeholder="Phone Number"
              className={styles.select}
              onChange={(e) => handleSearch("phone", e.target.value)}
            />
          </Space>
        </div>

        <div>
          <div className={styles.dropdown_title}>Status</div>
          <Space>
            <Select
              placeholder={
                <span
                  style={{ textTransform: "capitalize", fontWeight: "500" }}
                >
                  Select
                </span>
              }
              className={styles.select}
              onChange={(value) => handleSearch("organization", value)}
              options={[
                { label: "Active", value: "active" },
                { label: "Inactive", value: "inactive" },
                { label: "Pending", value: "pending" },
                { label: "Blacklisted", value: "blacklisted" },
              ]}
            />
          </Space>
        </div>

        <div className={styles.btn_container}>
          <button
            className={styles.dropdown_btn_reset}
            type="button"
            onClick={() => handleSearch("reset")}
          >
            Reset
          </button>
          <button
            className={styles.dropdown_btn_filter}
            type="button"
            onClick={() => handleSearch("filter")}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomDropDown;