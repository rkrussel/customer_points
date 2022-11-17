import React from 'react';
import { calculatePoints } from '../utilities/calculatePoints';

const CustomerRow = ({customerInfo}) => {
	const {customerName, orderNumber, ammount} = customerInfo;
	const points = calculatePoints(ammount);
	
	return (
		<tr>
			<td>{orderNumber}</td>
			<td>{customerName}</td>
			<td>{ammount}</td>
			<td>{points}</td>
		</tr>);
}

export default CustomerRow;