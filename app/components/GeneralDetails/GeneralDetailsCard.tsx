import { Divider } from "rsuite";
import styles from "./general_details.module.scss";

const GeneralDetailsCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details_cont}>
        <h5 className={styles.details_heading}>Personal Information</h5>
        <div className={styles.details}>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>Full Name</div>
            <div className={styles.detail_info}>Grace Effiom</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>phone number</div>
            <div className={styles.detail_info}>08012345678</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>email address</div>
            <div className={styles.detail_info_email}>grace@email.com</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>bvn</div>
            <div className={styles.detail_info}>08012345678</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>gender</div>
            <div className={styles.detail_info}>female</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>marital status</div>
            <div className={styles.detail_info}>single</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>children</div>
            <div className={styles.detail_info}>none</div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>type of residence</div>
            <div className={styles.detail_info}>parent's apartment</div>
          </div>
        </div>
      </div>

      <Divider />

      <div>
        <h5 className={styles.details_heading}>education and employment</h5>
        <div className={styles.details}>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>level of education</div>
            <div className={styles.detail_info}>bsc</div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>employment status</div>
            <div className={styles.detail_info}>employed</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>sector of employment</div>
            <div className={styles.detail_info}>fintech</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>duration of employment</div>
            <div className={styles.detail_info}>2 years</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>office email</div>
            <div className={styles.detail_info_email}>grace@email.com</div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>monthly income</div>
            <div className={styles.detail_info}>₦200,000.00-₦400,000.00</div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>loan repayment</div>
            <div className={styles.detail_info}>₦40,000.00</div>
          </div>
        </div>
      </div>

      <Divider />

      <div>
        <h5 className={styles.details_heading}>socials</h5>
        <div className={styles.details}>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>twitter</div>
            <div className={styles.detail_info_email}>@grace_effiom</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>facebook</div>
            <div className={styles.detail_info_email}>grace effiom</div>
          </div>

          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>instagram</div>
            <div className={styles.detail_info_email}>@grace_effiom</div>
          </div>
        </div>
      </div>

      <Divider />

      <div>
        <h5 className={styles.details_heading}>guarantor</h5>
        <div className={styles.details}>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>fullname</div>
            <div className={styles.detail_info}>deborah ogana</div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>phone number</div>
            <div className={styles.detail_info}>08012345678</div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>email address</div>
            <div className={styles.detail_info_email}>debby@gmail.com</div>
          </div>
          <div className={styles.detail_wrapper}>
            <div className={styles.detail_title}>relationship</div>
            <div className={styles.detail_info}>sister</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralDetailsCard;
