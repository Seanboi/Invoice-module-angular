

export interface Invoice{
  id?: number;
  name: string;
  number: string;
  item: string;
  date: Date;
  itemprice: number;
  amount: number;
  approvable: boolean;

}
