const orderDetails = new Promise((resolve, reject) => {
	const response = {
		data: [
			{
				customerName: 'Tony Anderson',
				orderNumber: '564778',
				ammount: '120.00'
			},    
			{
				customerName: 'John Smith',
				orderNumber: '1194778',
				ammount: '97.27'
			},
			{
				customerName: 'Sarah Jones',
				orderNumber: '668456',
				ammount: '35.27'
			},
			{
				customerName: 'Marcus Davidson',
				orderNumber: '9212124',
				ammount: '167.99'
			},
			{
				customerName: 'Emily Thomas',
				orderNumber: '564889',
				ammount: '355.55'
			},
			{
				customerName: 'Rich Krussel',
				orderNumber: '88997745',
				ammount: '141.11'
			}
		]
	};
	if(response.length) {
		resolve(response);
	} else {
		reject('An Error occured')
	}
});

export const getOrderDetails = () => {
	return orderDetails;
}