import type { MenuProps } from "antd";

declare type LoginData = {
  email: string;
  password: string;
};

declare interface LoginFormProps {
  isPasswordVisible: boolean;
  onSubmit: (data: LoginData) => void;
  togglePasswordVisibility: () => void;
}

// declare type NavDashboardItemProps = {
//   dashboardItems: {
//     title: string;
//     subtitles: NavDashboardItemSubtitleProps[];
//   }[];
// };

// declare interface NavDashboardItemSubtitleProps {
//   name: string;
//   icons: string;
//   url: string;
// }

declare interface SideBarProps {
  isCollapsed: boolean;
}
declare interface TopBarProps {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
}
declare interface OverviewCardProps {
  icons: string;
  title: string;
  count: string | number;
}

declare interface OverviewTableProps {
  data: {
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    status: string;
  }[];
}

declare interface ClickPopupProps {
  items: MenuProps["items"];
  handlePopupClick: (key: string, item: any) => void;
}

declare interface FilterDropDownProps {
  options: { label: string; value: string }[];
  handleSearch: (key: string, value?: string | string[]) => void;
  // handleInputs: (key: string, value: string) => void;
  // handleDate: (key: string, value: string | string[]) => void;
  leftPosition?: string;
}

declare interface NumberFormatterProps {
  number: string | number;
  type: "text" | "input";
  thousandSeparator?: string | boolean;
  prefix?: string;
  decimalScale?: number;
  fixedDecimalScale?: boolean;
}

declare interface UsersDetailsProps {
  id: string;
  personalInfo: {
    organization: string;
    name: {
      first: string;
      last: string;
    };
    phoneNumber: string;
    email: string;
    bvn: string;
    gender: string;
    maritalStatus: string;
    childern: string;
    residenceType: string;
    tier: string;
    bank: string;
    accountNumber: string;
    referralCode: string;
  };
  educationAndEmployment: {
    educationLevel: string;
    employmentStatus: string;
    sector: string;
    employmentDuration: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: string;
  };
  social: {
    twitter: string;
    facebook: string;
    instagram: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
}

declare interface UsersContextProps {
  users: UsersDetailsProps[];
  setUsers: (users: UsersDetailsProps[]) => void;
}

declare type ChildrenProps = {
  children: React.ReactNode;
};

export type {
  LoginData,
  LoginFormProps,
  SideBarProps,
  TopBarProps,
  NumberFormatterProps,
  OverviewCardProps,
  OverviewTableProps,
  ClickPopupProps,
  FilterDropDownProps,
  UsersDetailsProps,
  UsersContextProps,
  ChildrenProps,
};
