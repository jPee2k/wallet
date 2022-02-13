import React from 'react';
import PropTypes from 'prop-types';
// import styles from './styles.module.scss';

const TRANSACTION_TYPES = { inc: 'INCOME', dec: 'EXPENSE' };

const LabelsRender = ({ data = [], categories = [] }) => {
  if (data.length === 0) {
    return <p>no transactions</p>;
  }
  const { labelsData, totalIncome, totalExpenses } = LabelDataMapper(data, categories);

  return (
    <div>
        <div>
          <div>Category</div>
          <div>Amount</div>
        </div>
        {/* eslint-disable-next-line max-len */}
        {labelsData.map(({ id, categoryName, amountData }) => {
          return (
            <div key={id}>
              <div>{categoryName}</div>
              <div>{amountData}</div>
            </div>
          );
        })}
        <div>
          <div>Total income</div>
          <div>{totalIncome}</div>
        </div>
        <div>
          <div>Total expenses</div>
          <div>{totalExpenses}</div>
        </div>
    </div>
  );
};

const LabelDataMapper = (data, categories) => {
  return data.reduce((result, dataItem) => {
    const { id, categoryId, amount } = dataItem;
    const amountData = Math.abs(amount);

    if (categoryId === '063f1132-ba5d-42b4-951d-44011ca46262') {
      // eslint-disable-next-line no-param-reassign
      result.totalIncome += amountData;
      return result;
    }

    const categoryName = getCategoryNameByID(categories, categoryId);

    const existingResultIndex = result.labelsData.findIndex((existingLabelData) => {
      return existingLabelData.categoryName === categoryName;
    });
    if (existingResultIndex >= 0) {
      // eslint-disable-next-line no-param-reassign
      result.labelsData[existingResultIndex].amountData += amountData;
      // eslint-disable-next-line no-param-reassign
      result.totalExpenses = amountData + result.totalExpenses;
      return result;
    }

    const labelData = { id, categoryName, amountData };
    result.labelsData.push(labelData);
    // eslint-disable-next-line no-param-reassign
    result.totalExpenses = amountData + result.totalExpenses;
    return result;
  }, { labelsData: [], totalIncome: 0, totalExpenses: 0 });
};

LabelsRender.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      transactionDate: PropTypes.string.isRequired,
      type: PropTypes.oneOf([TRANSACTION_TYPES.inc, TRANSACTION_TYPES.dec]).isRequired,
      categoryId: PropTypes.string.isRequired,
      userId: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      balanceAfter: PropTypes.number.isRequired,
      status: PropTypes.string,
    }),
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf([TRANSACTION_TYPES.inc, TRANSACTION_TYPES.dec]).isRequired,
    }),
  ).isRequired,
};

function getCategoryNameByID(categories, id) {
  const currItem = categories.find((category) => category.id === id);
  return currItem?.name || '';
}

export default LabelsRender;
