import {createContext} from "react";
import dayjs from "dayjs";

export interface IData {
  date: string;
  time: string;
  address: string;
  amount: number;
  desc: string;
}

interface IAdd {
  data: IData;
  // onChange: Function
}

export const addContext = createContext<IAdd>({
  data: {
    date: dayjs().format('YYYY-MM'),
    time: dayjs().format('HH:mm'),
    address: '',
    amount: 0,
    desc: ''
  },
  // onChange:Function
})
