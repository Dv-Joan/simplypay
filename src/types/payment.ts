export interface IPayment {
  id: string;
  company: string;
  date: string;
  amount: number;
  exchange: string;
  companyLogo: string;
  message?: string;
  type: "income" | "expense";
}
