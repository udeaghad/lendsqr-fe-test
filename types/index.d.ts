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
  data: UsersDetailsProps[];
}

declare interface ClickPopupProps {
  items: MenuProps["items"];
  handlePopupClick: (key: string, item: any) => void;
}

declare interface FilterDropDownProps {
  options?: { label: string; value: string }[];
  handleSearch: (key: string, value?: string | string[]) => void;
  leftPosition?: string;
  handleFilterBtn: () => void;
  handleReset: () => void;
}

declare interface NumberFormatterProps {
  number: string | number;
  type: "text" | "input";
  thousandSeparator?: string | boolean;
  prefix?: string;
  decimalScale?: number;
  fixedDecimalScale?: boolean;
}

declare type UsersDetailsProps = {
  id: string;
  info: {
    org: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    bvn: string;
    gender: string;
    mariralStatus: string;
    children: string;
    residentType: string;
    tier: string;
    bank: string;
    account: string;
    referralCode: string;
    status: "Active" | "Inactive" | "Pending" | "Blacklisted";
    dateJoined: string;
  };
  educationAndEmployment: {
    educationLevel: string;
    employStatus: string;
    sector: string;
    employmentDuration: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRequest: string;
  },
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
  };
};

declare type ChildrenProps = {
  children: React.ReactNode;
};

declare interface UsersContextProps {
  userdetails: UsersDetailsProps | null;
  setUserDetails: (details: UsersDetailsProps) => void;
}

declare interface ClickOutSideProps {
  listening: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
  setListening: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

declare interface DataTableProps extends FilterDropDownProps {
  currentData: OverviewTableProps["data"];
  handlePopupClick: (key: string, item: any) => void;
  filterOptions: { label: string; value: string }[];
}

declare interface TablePaginationProps {
  pageSize: number;
  setPageSize: React.Dispatch<React.SetStateAction<number>>;
  userData: OverviewTableProps["data"];
  handlePaginateSize: (page: number, pageSize: number) => void;
  currentPage: number;
}


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
  ClickOutSideProps,
  DataTableProps,
  TablePaginationProps,
};
