import React, { useRef } from 'react';
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';

import schema from './validationSchema.js';
import useTransactionsSummary from '../../../hooks/useTransactionsSummary.js';
import useGetMonthsAndYears from '../../../hooks/useGetMonthsAndYears.js';

import DiagramRenderer from './DiagramRenderer';
import ExpensesTable from './ExpensesTable';
import MonthSelector from './MonthSelector';
import YearSelector from './YearSelector';
import Spinner from '../../../components/Spinner';

import styles from './styles.module.scss';

const DiagramTab = () => {
  const { months, years } = useGetMonthsAndYears();

  const dates = useRef({ month: '', year: '' });
  const { transactionsSummary, setSkip, refetch } = useTransactionsSummary(dates.current);

  const submitHandler = async ({ month, year }, actions) => {
    try {
      if ((month && year) || (!month && !year)) {
        dates.current = { month, year };
        setSkip(false);
        await refetch();
      }
    } catch (err) {
      toast.error(err?.data?.message || 'Oops, something went wrong =(');
    }
    actions.setSubmitting(false);
  };

  const { doughnutDataResult, expensesDataResult } = transactionsSummary
    ? getDiagramTabData(transactionsSummary)
    : { doughnutDataResult: null, expensesDataResult: null };

  const { statisticsBlock, statistics, form } = styles;
  return doughnutDataResult && expensesDataResult ? (
      <div className={statisticsBlock}>
        <div className={statistics}>
          <DiagramRenderer data={doughnutDataResult}/>
            <Formik
              initialValues={{ month: dates.current.month, year: dates.current.year }}
              validationSchema={schema}
              onSubmit={submitHandler}>
              {({ submitForm }) => {
                return (
                  <Form className={form} onChange={submitForm}>
                    <MonthSelector name="month" options={months}/>
                    <YearSelector name="year" options={years}/>
                  </Form>
                );
              }}
            </Formik>
        </div>
        <ExpensesTable data={expensesDataResult}/>
      </div>
  ) : (
    <Spinner/>
  );
};

const getCategoryColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// const getCategoryColor = (categoryName) => {
//   const colors = {
//     'Доход': '#fff',
//     'Семейние росходи': '#bbb'
//   }
//   return colors[categoryName];
// };

const getDiagramTabData = (data) => {
  const { expenseSummary, incomeSummary, categoriesSummary } = data;
  const diagramTabData = categoriesSummary.reduce((accumulator, dataItem) => {
    const { name, total } = dataItem;
    const amountData = Math.abs(total);
    const color = getCategoryColor(name);

    // we are showing only expenses in the table
    if (name === 'Доход') {
      return accumulator;
    }

    // expenses table data mapping logic
    const expensesDataArray = accumulator.expensesDataResult.expensesData;
    const existingResultIndex = expensesDataArray.findIndex((existingExpensesData) => {
      return existingExpensesData.categoryName === name;
    });
    if (existingResultIndex >= 0) {
      accumulator.expensesDataResult.expensesData[existingResultIndex].amountData += amountData;
    } else {
      const expensesData = { categoryName: name, amountData, color };
      accumulator.expensesDataResult.expensesData.push(expensesData);
    }

    // doughnut chart data mapping logic
    const doughnutDataResultLabels = accumulator.doughnutDataResult.labels;
    const existingLabelIndex = doughnutDataResultLabels.indexOf(name);
    if (existingLabelIndex >= 0) {
      accumulator.doughnutDataResult.datasets[0].data[existingLabelIndex] += amountData;
    } else {
      accumulator.doughnutDataResult.labels.push(name);
      accumulator.doughnutDataResult.datasets[0].data.push(amountData);
      accumulator.doughnutDataResult.datasets[0].backgroundColor.push(color);
    }

    return accumulator;
  }, {
    expensesDataResult: { expensesData: [] },
    doughnutDataResult: { labels: [], datasets: [{ data: [], backgroundColor: [] }] },
  });
  diagramTabData.expensesDataResult.totalIncome = incomeSummary;
  diagramTabData.expensesDataResult.totalExpenses = Math.abs(expenseSummary);
  return diagramTabData;
};

export default DiagramTab;
