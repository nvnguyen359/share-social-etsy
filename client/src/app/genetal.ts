export enum ApiUrl {
  Home = "",
  Report = "report",
  Share = "share",
  Socials = "socials",
  ReportShare = "report-share",
  Listings = "listings",
  Schedule = "schedule",
  Dashboard = "dashboard",
  Account = "account",
}
var links = [
  {
    text: "Home",
    link: `/${ApiUrl.Home}`,
    icon: "home",
  },
  {
    text: "Listings",
    link: `/${ApiUrl.Listings}`,
    icon: "grade",
  },
  {
    text: "Account",
    link: `/${ApiUrl.Account}`,
    icon: "account_circle",
  },
  {
    text: "Schedule",
    link: `/${ApiUrl.Schedule}`,
    icon: "schedule",
  },
  {
    text: "Dashboard",
    link: `/${ApiUrl.Dashboard}`,
    icon: "dashboard",
  },
];
export default links;

export var baseServer = `http://localhost:3178/api`;
export function capitalizeFirstLetter(string: any) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function removeAccents(str: any) {
  return `${str}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

export function delay(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
