import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getTransactionsFromState } from '../app/slices/selectors.js';

const useGetMonthsAndYears = () => {
  const transactions = useSelector(getTransactionsFromState);

  const [months, setMonths] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    setMonths(getDateFrom(transactions).listOfMonth);
    setYears(getDateFrom(transactions).listOfYears);
  }, [transactions]);
  return { months, years };
};

function getDateFrom(transactions = []) {
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December',
  ];

  const months = transactions.map(({ transactionDate }) => new Date(transactionDate).getMonth());
  const listOfMonth = Array.from(new Set(months))
    .sort((a, b) => a - b)
    .map((monthIndex) => ({ name: monthNames[monthIndex], value: monthIndex + 1 }));

  const years = transactions.map(({ transactionDate }) => new Date(transactionDate).getFullYear());
  const uniqYears = Array.from(new Set(years)).sort((a, b) => a - b);
  return { listOfMonth, listOfYears: uniqYears };
}

export default useGetMonthsAndYears;
