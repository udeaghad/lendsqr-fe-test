"use client";
import { useContext } from "react";
import { Divider } from "rsuite";
import styles from "./general_details.module.scss";
import { UsersContext } from "../../context/UsersContext";
import NumberFormatter from "@/shared/NumberFormatter";

const GeneralDetailsCard = () => {
  const { userdetails } = useContext(UsersContext) || {};
  const { info, educationAndEmployment, guarantor } = userdetails || {};
  return (
    <div className={styles.container}>
      <div className={styles.details_cont}>
        <h5 className={styles.details_heading}>Personal Information</h5>
        <div className={styles.details}>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>Full Name</div>
            <div
              className={styles.detail_info}
            >{`${info?.firstName} ${info?.lastName}`}</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>phone number</div>
            <div className={styles.detail_info}>{info?.phoneNumber}</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>email address</div>
            <div className={styles.detail_info_email}>{info?.email}</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>bvn</div>
            <div className={styles.detail_info}>{info?.bvn}</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>gender</div>
            <div className={styles.detail_info}>{info?.gender}</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>marital status</div>
            <div className={styles.detail_info}>{info?.mariralStatus}</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>children</div>
            <div className={styles.detail_info}>{info?.children}</div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>type of residence</div>
            <div className={styles.detail_info}>{info?.residentType}</div>
          </div>
        </div>
      </div>

      <Divider />

      <div className={styles.details_cont}>
        <h5 className={styles.details_heading}>education and employment</h5>
        <div className={styles.details}>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>level of education</div>
            <div className={styles.detail_info}>
              {educationAndEmployment?.educationLevel}
            </div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>employment status</div>
            <div className={styles.detail_info}>
              {educationAndEmployment?.employStatus}
            </div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>sector of employment</div>
            <div className={styles.detail_info}>
              {educationAndEmployment?.sector}
            </div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>duration of employment</div>
            <div className={styles.detail_info}>
              {educationAndEmployment?.employmentDuration}
            </div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>office email</div>
            <div className={styles.detail_info_email}>
              {educationAndEmployment?.officeEmail}
            </div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>monthly income</div>
            {educationAndEmployment?.monthlyIncome && (
              <div className={styles.detail_info}>
                {
                  <NumberFormatter
                    number={educationAndEmployment?.monthlyIncome}
                    type="text"
                    thousandSeparator={true}
                    prefix="₦"
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                }
              </div>
            )}
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>loan repayment</div>
            {educationAndEmployment?.monthlyIncome && (
              <div className={styles.detail_info}>
                {
                  <NumberFormatter
                    number={educationAndEmployment?.loanRequest}
                    type="text"
                    thousandSeparator={true}
                    prefix="₦"
                    decimalScale={2}
                    fixedDecimalScale={true}
                  />
                }
              </div>
            )}
          </div>
        </div>
      </div>

      <Divider />

      <div className={styles.details_cont}>
        <h5 className={styles.details_heading}>socials</h5>
        <div className={styles.details}>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>twitter</div>
            <div
              className={styles.detail_info_email}
            >{`@${info?.firstName}_${info?.lastName}`}</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>facebook</div>
            <div
              className={styles.detail_info_email}
            >{`${info?.lastName}${info?.firstName[0]}`}</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>instagram</div>
            <div
              className={styles.detail_info_email}
            >{`${info?.firstName}_${info?.lastName}`}</div>
          </div>
        </div>
      </div>

      <Divider />

      <div className={styles.details_cont}>
        <h5 className={styles.details_heading}>guarantor</h5>
        <div className={styles.details}>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>fullname</div>
            <div
              className={styles.detail_info}
            >{`${guarantor?.firstName} ${guarantor?.lastName}`}</div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>phone number</div>
            <div className={styles.detail_info}>{guarantor?.phoneNumber}</div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>email address</div>
            <div className={styles.detail_info_email}>{guarantor?.email}</div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>relationship</div>
            <div className={styles.detail_info}>{guarantor?.relationship}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDetailsCard;
