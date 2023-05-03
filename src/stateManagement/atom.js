import { atom } from "recoil";

export const verticalNavState = atom({
  key: "verticalNavState",
  default: "",
});

export const verticalNavUpSideStateSelectedStore = atom({
  key: "sendVerticalNavUpSideStateSelectedStore",
  default: "",
});

export const excelStore = atom({
  key: "sendExcelPayload",
  default: "",
});

export const LeadsMessageReminderSelectedStore = atom({
  key: "sendLeadsMessageReminderSelectedStore",
  default: "",
});

export const LeadsCompanyChatsSelectedStore = atom({
  key: "sendCompanyChatsMessageReminderSelectedStore",
  default: "",
});

// export const LogoutOnOffComponentSelectedStore = atom({
//   key: "sendLogoutComponentSelectedStore",
//   default: "",
// });

export const LeadsDetailsShowSelectedStore = atom({
  key: "sendLeadDetailsShowSelectedStore",
  default: "",
});

export const LogoutShowSelectedStore = atom({
  key: "sendLogoutShowSelectedStore",
  default: "",
});

export const PaymentSelectedStore = atom({
  key: "sendPaymentSelectedStore",
  default: "",
});

export const MontlyAnnualSelectedStore = atom({
  key: "sendMontlyAnnualSelectedStore",
  default: "annual",
});

export const BasicPriceSelectedStore = atom({
  key: "sendBasicPriceSelectedStore",
  default: "",
});

export const StandartPriceSelectedStore = atom({
  key: "sendStandartPriceSelectedStore",
  default: "",
});

export const BusinessPriceSelectedStore = atom({
  key: "sendBusinessPriceSelectedStore",
  default: "",
});

export const ProfessionalPriceSelectedStore = atom({
  key: "sendProfessionalPriceSelectedStore",
  default: "",
});

export const AgentTargetSelectedStore = atom({
  key: "sendAgentTargetSelectedStore",
  default: "",
});

export const LeadColorsSelectedStore = atom({
  key: "LeadColorsSelectedStore",
  default: "",
});

export const CompanyColorsSelectedStore = atom({
  key: "CompanyColorsSelectedStore",
  default: "",
});
