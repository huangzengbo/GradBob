import * as React from 'react';
import SummaryView from '../../views/SummaryView';
import { useAppContext } from '../../context/app';
import { calculateSummaryPrice } from './Summary.adaptor';
import { ads } from '../../constant/ads';
import { discounts } from '../../constant/discounts';
import { users } from '../../constant/users';
import { iUser } from '../../types/user';

export default function Summary() {
  const { state } = useAppContext();
  const summaryUser: iUser = users.find((user: iUser)=>user.id === state.userId) || users[0];
  const summaryPrice: number = calculateSummaryPrice(state, ads, discounts, summaryUser);
  return (
    <SummaryView price={summaryPrice} />
  );
}
