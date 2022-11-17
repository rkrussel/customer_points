import React, {useState, useEffect} from 'react'
import { getOrderDetails } from '../api/customer-api'
import CustomerRow from './CustomerRow'

const CustomerTable = () => {
	const [customerData, setCustomerData] = useState([]);
	const [error, setError] = useState();

	const fetchData = async () => {
		try {
			const orderDetails = await getOrderDetails();
			setCustomerData(orderDetails.data);
		} catch (err) {
			console.error('A problem occured', err);
			setError('There was an error.');
		}
	}

	useEffect(() => {
		fetchData();
	}, []);
	
	if (customerData) {
		return (
			<table>
				<thead>
					<tr>
						<th>Order #</th>
						<th>Customer Name</th>
						<th>Ammount</th>
						<th>Points Value</th>
					</tr>
				</thead>
				<tbody>
					{customerData.map(customerInfo => {
								return <CustomerRow key={customerInfo.orderNumber} customerInfo={customerInfo}/>
						})
					}
				</tbody>
			</table>);
	} else if (error) {
		return <div>{error}</div>
	} else {
		return <div>No Customer Data Available</div>
	}
}

export default CustomerTable;