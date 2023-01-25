const TransactionHistoryItem = props => {
  console.log(props);
  return (
    <tr>
      <td>{props.data.type}</td>
      <td>{props.data.amount}</td>
      <td>{props.data.currency}</td>
    </tr>
  );
};

export { TransactionHistoryItem };
