import css from './style.module.css';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import PropTypes from 'prop-types';

const TransactionHistory = ({ data }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map(item => (
          <TransactionHistoryItem key={item.id} data={item} />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  data: PropTypes.array.isRequired,
};

export { TransactionHistory };
