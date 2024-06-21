import { IoFilter } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import styles from "./table.module.scss";
import { OverviewTableProps } from "../../../types";

const UsersTable = ({ data }: OverviewTableProps) => {
  return (
    <div className={styles.container}>
      <table className={styles.table_container}>
        <thead className={styles.table_heading}>
          <tr>
            <th className={styles.thead}>
              <div className={styles.table_head}>
                <div>Organization</div>
                <IoFilter size={12} cursor="pointer" />
              </div>
            </th>
            <th className={styles.thead}>
              <div className={styles.table_head}>
                Username
                <IoFilter size={12} style={{ cursor: "pointer" }} />
              </div>
            </th>
            <th className={styles.thead}>
              <div className={styles.table_head}>
                Email
                <IoFilter size={12} style={{ cursor: "pointer" }} />
              </div>
            </th>
            <th className={styles.thead}>
              <div className={styles.table_head}>
                Phone Number
                <IoFilter size={12} style={{ cursor: "pointer" }} />
              </div>
            </th>
            <th className={styles.thead}>
              <div className={styles.table_head}>
                Date Joined
                <IoFilter size={12} style={{ cursor: "pointer" }} />
              </div>
            </th>
            <th className={styles.thead}>
              <div className={styles.table_head}>
                Status
                <IoFilter size={12} style={{ cursor: "pointer" }} />
              </div>
            </th>
            <th className={styles.thead}/>
          </tr>
        </thead>
        <tbody className={styles.table_body}>
          {data.map((item, index) => (
            <tr key={index}>
              <td className={styles.table_row}>{item.organization}</td>
              <td className={styles.table_row}>{item.username}</td>
              {/* <td className={`${styles.hide_table_head} ${styles.table_row}`}> */}
              <td className={styles.table_row}>
                {item.email}
              </td>
              <td className={styles.table_row}>
                {item.phoneNumber}
              </td>
              <td className={styles.table_row}>
                {item.dateJoined}
              </td>
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
              <td className={styles.table_row}>
                <div>
                  <HiOutlineDotsVertical
                    size={14}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
