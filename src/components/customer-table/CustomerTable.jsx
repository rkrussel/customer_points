import React, { useState, useEffect } from 'react'
import { getCustomerData } from '../../api/getCustomerData'
import CustomerRow from '../customer-row/CustomerRow'
import './CustomerTable.css'

const CustomerTable = () => {
  const [customerData, setCustomerData] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCustomerData()
        setCustomerData(response.data)
      } catch (err) {
        console.error('A problem occured', err)
        setError('There was an error.')
      }
    }
    fetchData()
  }, [])

  if (customerData.length) {
    return (
      <table>
        <thead>
          <tr>
            <th>Order #</th>
            <th>Customer Name</th>
            <th>Transactions</th>
            <th>Points Value</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customerInfo) => {
            return (
              <CustomerRow key={customerInfo.orderNumber} {...customerInfo} />
            )
          })}
        </tbody>
      </table>
    )
  } else if (error) {
    return <div>{error}</div>
  } else {
    return <div>No Customer Data Available</div>
  }
}

export default CustomerTable
