import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SideBar from "./../../app/components/NavBar/SideBar";

describe("SideBar component", () => {
  it("should renders the SideBar correctly when collapsed", () => {
    render(<SideBar isCollapsed={true} />);
    expect(screen.getByTestId("sidebar-switch-org")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar-dashboard")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar-logout")).toBeInTheDocument();
  });

  it("should renders the SideBar correctly when expanded", () => {
    render(<SideBar isCollapsed={false} />);
    expect(screen.getByTestId("menu-switch-org")).toBeInTheDocument();
    expect(screen.getByTestId("menu-dashboard")).toBeInTheDocument();
    expect(screen.getByTestId("menu-logout")).toBeInTheDocument();
  });

  it("should toggles selection correctly", () => {
    render(<SideBar isCollapsed={false} />);

    const dashboardItem = screen.getByTestId("sidebar-dashboard");
    fireEvent.click(dashboardItem);
    expect(dashboardItem).toHaveClass("navItem_active");

    const usersItem = screen.getByTestId("sidebar-Users");
    fireEvent.click(usersItem);
    expect(usersItem).toHaveClass("navItem_active");
  });

  it("should renders links correctly on the side bar", () => {
    render(<SideBar isCollapsed={false} />);

    const dashboardLink = screen.getByTestId("sidebar-dashboard");
    expect(dashboardLink).toBeInTheDocument();
    expect(dashboardLink.innerHTML).toContain("Dashboard");
    expect(dashboardLink.innerHTML).not.toContain("dashboard");

    const usersLink = screen.getByTestId("sidebar-Users");
    expect(usersLink).toBeInTheDocument();
    expect(usersLink.innerHTML).toContain("Users");
    expect(usersLink.innerHTML).not.toContain("users");

    const guarantorsLink = screen.getByTestId("sidebar-Guarantors");
    expect(guarantorsLink).toBeInTheDocument();
    expect(guarantorsLink.innerHTML).toContain("Guarantors");
    expect(guarantorsLink.innerHTML).not.toContain("guarantors");

    const logoutLink = screen.getByTestId("sidebar-logout");
    expect(logoutLink).toBeInTheDocument();
    expect(logoutLink.innerHTML).toContain("Logout");
    expect(logoutLink.innerHTML).not.toContain("logout");

    const switchOrgLink = screen.getByTestId("sidebar-switch-org");
    expect(switchOrgLink).toBeInTheDocument();
    expect(switchOrgLink.innerHTML).toContain("Switch Organization");
    expect(switchOrgLink.innerHTML).not.toContain("switch organization");

    const LoansLink = screen.getByTestId("sidebar-Loans");
    expect(LoansLink).toBeInTheDocument();
    expect(LoansLink.innerHTML).toContain("Loans");
    expect(LoansLink.innerHTML).not.toContain("loans");

    const DecisionModels = screen.getByTestId("sidebar-Decision Models");
    expect(DecisionModels).toBeInTheDocument();
    expect(DecisionModels.innerHTML).toContain("Decision Models");
    expect(DecisionModels.innerHTML).not.toContain("decision models");

    const SavingsLink = screen.getByTestId("sidebar-Savings");
    expect(SavingsLink).toBeInTheDocument();
    expect(SavingsLink.innerHTML).toContain("Savings");
    expect(SavingsLink.innerHTML).not.toContain("savings");

    const LoanRequestsLink = screen.getByTestId("sidebar-Loan Requests");
    expect(LoanRequestsLink).toBeInTheDocument();
    expect(LoanRequestsLink.innerHTML).toContain("Loan Requests");
    expect(LoanRequestsLink.innerHTML).not.toContain("loan requests");

    const WhitelistLink = screen.getByTestId("sidebar-Whitelist");
    expect(WhitelistLink).toBeInTheDocument();
    expect(WhitelistLink.innerHTML).toContain("Whitelist");
    expect(WhitelistLink.innerHTML).not.toContain("whitelist");

    const KarmaLink = screen.getByTestId("sidebar-Karma");
    expect(KarmaLink).toBeInTheDocument();
    expect(KarmaLink.innerHTML).toContain("Karma");
    expect(KarmaLink.innerHTML).not.toContain("karma");

    const LoanProductsLink = screen.getByTestId("sidebar-Loan Products");
    expect(LoanProductsLink).toBeInTheDocument();
    expect(LoanProductsLink.innerHTML).toContain("Loan Products");
    expect(LoanProductsLink.innerHTML).not.toContain("loan products");

    const SavingsProductsLink = screen.getByTestId("sidebar-Savings Products");
    expect(SavingsProductsLink).toBeInTheDocument();
    expect(SavingsProductsLink.innerHTML).toContain("Savings Products");
    expect(SavingsProductsLink.innerHTML).not.toContain("savings products");

    const OrganizationLink = screen.getByTestId("sidebar-Organization");
    expect(OrganizationLink).toBeInTheDocument();
    expect(OrganizationLink.innerHTML).toContain("Organization");
    expect(OrganizationLink.innerHTML).not.toContain("organization");

    const FeesandCharggesLink = screen.getByTestId("sidebar-Fees and Chargges");
    expect(FeesandCharggesLink).toBeInTheDocument();
    expect(FeesandCharggesLink.innerHTML).toContain("Fees and Chargges");
    expect(FeesandCharggesLink.innerHTML).not.toContain("Fees and chargges");

    const TransactionLink = screen.getByTestId("sidebar-Transaction");
    expect(TransactionLink).toBeInTheDocument();
    expect(TransactionLink.innerHTML).toContain("Transaction");
    expect(TransactionLink.innerHTML).not.toContain("transaction");

    const ServicesLink = screen.getByTestId("sidebar-Services");
    expect(ServicesLink).toBeInTheDocument();
    expect(ServicesLink.innerHTML).toContain("Services");
    expect(ServicesLink.innerHTML).not.toContain("services");

    const ServiceAccountLink = screen.getByTestId("sidebar-Service Account");
    expect(ServiceAccountLink).toBeInTheDocument();
    expect(ServiceAccountLink.innerHTML).toContain("Service Account");
    expect(ServiceAccountLink.innerHTML).not.toContain("service Account");

    const SettlementsLink = screen.getByTestId("sidebar-Settlements");
    expect(SettlementsLink).toBeInTheDocument();
    expect(SettlementsLink.innerHTML).toContain("Settlements");
    expect(SettlementsLink.innerHTML).not.toContain("settlements");

    const ReportsLink = screen.getByTestId("sidebar-Reports");
    expect(ReportsLink).toBeInTheDocument();
    expect(ReportsLink.innerHTML).toContain("Reports");
    expect(ReportsLink.innerHTML).not.toContain("reports");

    const PreferencesLink = screen.getByTestId("sidebar-Preferences");
    expect(PreferencesLink).toBeInTheDocument();
    expect(PreferencesLink.innerHTML).toContain("Preferences");
    expect(PreferencesLink.innerHTML).not.toContain("preferences");

    const FeesandPricingLink = screen.getByTestId("sidebar-Fees and Pricing");
    expect(FeesandPricingLink).toBeInTheDocument();
    expect(FeesandPricingLink.innerHTML).toContain("Fees and Pricing");
    expect(FeesandPricingLink.innerHTML).not.toContain("fees And pricing");

    const AuditLogsLink = screen.getByTestId("sidebar-Audit Logs");
    expect(AuditLogsLink).toBeInTheDocument();
    expect(AuditLogsLink.innerHTML).toContain("Audit Logs");
    expect(AuditLogsLink.innerHTML).not.toContain("auDit lOgs");

    const SystemsMessagesLink = screen.getByTestId("sidebar-Systems Messages");
    expect(SystemsMessagesLink).toBeInTheDocument();
    expect(SystemsMessagesLink.innerHTML).toContain("Systems Messages");
    expect(SystemsMessagesLink.innerHTML).not.toContain("systems messages");
  });

  it("should handles items without URLs correctly", () => {
    render(<SideBar isCollapsed={false} />);

    const guarantorsItem = screen.getByTestId("sidebar-Guarantors");
    fireEvent.click(guarantorsItem);
    expect(guarantorsItem).toHaveClass("navItem_active");
  });

  it("should renders the SideBar correctly when expanded", () => {
    render(<SideBar isCollapsed={false} />);
    expect(screen.getByTestId("menu-switch-org")).toBeInTheDocument();
    expect(screen.getByTestId("menu-dashboard")).toBeInTheDocument();
    expect(screen.getByTestId("menu-logout")).toBeInTheDocument();
  });

  it("should toggle logout correctly on the sidebar", () => {
    render(<SideBar isCollapsed={false} />);

    const logoutItem = screen.getByTestId("sidebar-logout");
    fireEvent.click(logoutItem);
    expect(logoutItem).toHaveClass("navItem_active");
  });

  it("should render links correctly on the sliding menu bar", () => {
    render(<SideBar isCollapsed={false} />);

    const dashboardLink = screen.getByTestId("menu-dashboard");
    expect(dashboardLink).toBeInTheDocument();
    expect(dashboardLink.innerHTML).toContain("Dashboard");
    expect(dashboardLink.innerHTML).not.toContain("dashboard");

    const usersLink = screen.getByTestId("menu-Users");
    expect(usersLink).toBeInTheDocument();
    expect(usersLink.innerHTML).toContain("Users");
    expect(usersLink.innerHTML).not.toContain("users");

    const guarantorsLink = screen.getByTestId("menu-Guarantors");
    expect(guarantorsLink).toBeInTheDocument();
    expect(guarantorsLink.innerHTML).toContain("Guarantors");
    expect(guarantorsLink.innerHTML).not.toContain("guarantors");

    const logoutLink = screen.getByTestId("menu-logout");
    expect(logoutLink).toBeInTheDocument();
    expect(logoutLink.innerHTML).toContain("Logout");
    expect(logoutLink.innerHTML).not.toContain("logout");

    const switchOrgLink = screen.getByTestId("menu-switch-org");
    expect(switchOrgLink).toBeInTheDocument();
    expect(switchOrgLink.innerHTML).toContain("Switch Organization");
    expect(switchOrgLink.innerHTML).not.toContain("switch organization");

    const LoansLink = screen.getByTestId("menu-Loans");
    expect(LoansLink).toBeInTheDocument();
    expect(LoansLink.innerHTML).toContain("Loans");
    expect(LoansLink.innerHTML).not.toContain("loans");

    const DecisionModels = screen.getByTestId("menu-Decision Models");
    expect(DecisionModels).toBeInTheDocument();
    expect(DecisionModels.innerHTML).toContain("Decision Models");
    expect(DecisionModels.innerHTML).not.toContain("decision models");

    const SavingsLink = screen.getByTestId("menu-Savings");
    expect(SavingsLink).toBeInTheDocument();
    expect(SavingsLink.innerHTML).toContain("Savings");
    expect(SavingsLink.innerHTML).not.toContain("savings");

    const LoanRequestsLink = screen.getByTestId("menu-Loan Requests");
    expect(LoanRequestsLink).toBeInTheDocument();
    expect(LoanRequestsLink.innerHTML).toContain("Loan Requests");
    expect(LoanRequestsLink.innerHTML).not.toContain("loan requests");

    const WhitelistLink = screen.getByTestId("menu-Whitelist");
    expect(WhitelistLink).toBeInTheDocument();
    expect(WhitelistLink.innerHTML).toContain("Whitelist");
    expect(WhitelistLink.innerHTML).not.toContain("whitelist");

    const KarmaLink = screen.getByTestId("menu-Karma");
    expect(KarmaLink).toBeInTheDocument();
    expect(KarmaLink.innerHTML).toContain("Karma");
    expect(KarmaLink.innerHTML).not.toContain("karma");
  });

  it("should render dashboard titles on the sidebar", () => {
    render(<SideBar isCollapsed={false} />);
    expect(screen.getByTestId("title-CUSTOMERS")).toBeInTheDocument();
    expect(screen.getByTestId("title-CUSTOMERS").innerHTML).not.toContain(
      "customers"
    );

    expect(screen.getByTestId("title-BUSINESS")).toBeInTheDocument();
    expect(screen.getByTestId("title-BUSINESS").innerHTML).not.toContain(
      "business"
    );

    expect(screen.getByTestId("title-SETTINGS")).toBeInTheDocument();
    expect(screen.getByTestId("title-SETTINGS").innerHTML).not.toContain(
      "settings"
    );
  });
});
