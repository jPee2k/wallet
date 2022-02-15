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

  const { statisticsBlock, statistics } = styles;
  return (
    <>
      <Formik
        initialValues={{ month: dates.current.month, year: dates.current.year }}
        validationSchema={schema}
        onSubmit={submitHandler}
      >
        {({ submitForm }) => {
          return (
            <Form onChange={submitForm}>
              <MonthSelector name="month" options={months}/>
              <YearSelector name="year" options={years}/>
            </Form>
          );
        }}
      </Formik>

      <div className={statisticsBlock}>
        <div className={statistics}>
          {
            /* TODO -> parse transactionsSummary instead data && category */
            console.log(transactionsSummary)
          }
          <DiagramRenderer data={[]} categories={[]}/>
        </div>
        {/* TODO -> parse transactionsSummary instead data && category */}
        <ExpensesTable data={[]} categories={[]}/>
      </div>
    </>
  );
};

export default DiagramTab;
