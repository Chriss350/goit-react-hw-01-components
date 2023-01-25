import css from './style.module.css';
import { TransactionHistoryItem } from './TransactionHistoryItem';

const TransactionHistory = props => {
  console.log(props);
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
        {props.items.map(item => (
          <TransactionHistoryItem key={item.id} data={item} />
        ))}
      </tbody>
    </table>
  );
};

export { TransactionHistory };
