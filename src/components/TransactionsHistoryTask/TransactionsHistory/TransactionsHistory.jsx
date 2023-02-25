import { Container } from 'components/GlobalStyles.styled';
import PropTypes from 'prop-types';
import { TransactionsHistotyTr } from '../TransactionsHistoryTr/TransactionsHistoryTr';
import { TableHeader } from '../TransactionsHistoryTr/TransactionsHistoryTr.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <table>
        <TableHeader>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TableHeader>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionsHistotyTr
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
