import PropTypes from 'prop-types';

const TransactionHistoryItem = ({ data }) => {
  return (
    <tr>
      <td>{data.type}</td>
      <td>{data.amount}</td>
      <td>{data.currency}</td>
    </tr>
  );
};

TransactionHistoryItem.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};

export { TransactionHistoryItem };
