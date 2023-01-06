import { type } from '@testing-library/user-event/dist/type';
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
            
            {transactions.map(({id, type, amount, currency }) =>
                <tbody key={id}>
                    <tr>
                      <td>{type}</td>
                      <td>{amount}</td>
                      <td>{currency}</td>
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