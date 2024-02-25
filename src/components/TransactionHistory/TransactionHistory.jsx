import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <>
      <table className={css.table}>
        <thead className={css.tableTheard}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tableTbody}>
          {items.map((item) => {
            return (
              <tr key={item.id} className={css.tableLine}>
                <td className={css.tableLineType}>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TransactionHistory;
