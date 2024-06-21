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
  color: string;
  icons: string;
  title: string;
  count: string;
}

export type { LoginData, LoginFormProps, SideBarProps, TopBarProps, OverviewCardProps };
