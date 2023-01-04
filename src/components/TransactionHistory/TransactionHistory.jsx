import PropTypes from 'prop-types'
import css from './TransactionHistory.module.css'

export const Transaction = ({ transactions }) => {
    return (
        <table className={css.transaction}>
            <thead>
                <tr className={css.transaction__title}>
                   <th>Type</th>
                   <th>Amount</th>
                   <th>Currency</th>
                </tr>
            </thead>
            
            {transactions.map(transaction =>
                <tbody key={transaction.id}>
                    <tr>
                      <td>{transaction.type}</td>
                      <td>{transaction.amount}</td>
                      <td>{transaction.currency}</td>
                    </tr>
                </tbody>
            )}
        </table>
    );
};

Transaction.propTypes = {
    transactions: PropTypes.arrayOf( PropTypes.shape({
       id: PropTypes.string.isRequired,
       type: PropTypes.string.isRequired,
       amount: PropTypes.string.isRequired,
       currency: PropTypes.string.isRequired,
    })).isRequired,
};