export enum ApiUrl {
  Home = "home",
  Report = "report",
  Share = "share",
  Socials = "socials",
  ReportShare = "report-share",
}
var links = [
  {
    text: "Trang Chủ",
    link: `/${ApiUrl.Home}`,
    icon: "home",
  },
  {
    text: "Share",
    link: `/${ApiUrl.Share}`,
    icon: "share",
  },
  {
    text: "Mạng Xã Hội",
    link: `/${ApiUrl.Socials}`,
    icon: "people",
  },
  {
    text: "Tiến Trình share",
    link: `/${ApiUrl.ReportShare}`,
    icon: "schedule",
  },
];
export default links;

export var baseServer=`http://localhost:3178/api`;
export function capitalizeFirstLetter(string:any) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function removeAccents(str:any) {
  return `${str}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

export function delay(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}