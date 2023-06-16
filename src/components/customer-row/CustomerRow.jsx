import React, { useMemo } from 'react'
import { calculatePoints } from '../../helpers/calculatePoints'
import PropTypes from 'prop-types'

const CustomerRow = ({ customerName, orderNumber, transactions }) => {
  const transactionsTotal = useMemo(() => {
    return transactions.reduce(
      (partialSum, transaction) => partialSum + parseInt(transaction.amount),
      0
    )
  }, [transactions])

  const pointsTotal = useMemo(() => {
    return transactions.reduce(
      (partialSum, transaction) =>
        partialSum + calculatePoints(parseInt(transaction.amount)),
      0
    )
  }, [transactions])

  console.log('points total', pointsTotal)

  return (
    <tr>
      <td>{orderNumber}</td>
      <td>{customerName}</td>
      <td>
        {transactions.map((transaction) => {
          return (
            <>
              <span>
                {transaction.date}: ${transaction.amount}
              </span>
              <br />
            </>
          )
        })}
        Total: ${transactionsTotal}
      </td>
      <td>{pointsTotal}</td>
    </tr>
  )
}

CustomerRow.propTypes = {
  customerName: PropTypes.string,
  orderNumber: PropTypes.string,
  transactions: PropTypes.arrayOf(PropTypes.object),
}

export default CustomerRow
