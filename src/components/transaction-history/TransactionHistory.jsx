import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

//створюємо компонент TransactionHistory для одного елемента списку транзакцій
export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistoryTable}>
    <thead className={css.headersRow}>
      <tr className={css.valuesRow}>
        <th className={css.columnHeader}>Type</th>
        <th className={css.columnHeader}>Amount</th>
        <th className={css.columnHeader}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {/*перебираємо масив транзакцій і викликаємо компонент TransactionHistoryItem*/}
      {items.map(item => (
        <tr key={item.id} className={css.valuesRow}>
          <td className={css.columnValue}>{item.type}</td>
          <td className={css.columnValue}>{item.amount}</td>
          <td className={css.columnValue}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

//зазначаємо типи пропсів
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
