const orderDetails = new Promise((resolve, reject) => {
  const response = {
    data: [
      {
        customerName: 'Tony Anderson',
        orderNumber: '564778',
        transactions: [
          { amount: '120.00', date: '2023-06-01' },
          { amount: '42.00', date: '2023-05-01' },
          { amount: '400.00', date: '2023-04-11' },
        ],
      },
      {
        customerName: 'John Smith',
        orderNumber: '1194778',
        transactions: [
          { amount: '10.00', date: '2023-06-01' },
          { amount: '77.00', date: '2023-05-01' },
          { amount: '110.00', date: '2023-04-11' },
        ],
      },
      {
        customerName: 'Sarah Jones',
        orderNumber: '668456',
        transactions: [
          { amount: '107.00', date: '2023-06-01' },
          { amount: '44.00', date: '2023-05-01' },
          { amount: '93.00', date: '2023-04-11' },
        ],
      },
      {
        customerName: 'Marcus Davidson',
        orderNumber: '9212124',
        transactions: [{ amount: '167.00', date: '2023-06-01' }],
      },
      {
        customerName: 'Emily Thomas',
        orderNumber: '564889',
        transactions: [
          { amount: '68.00', date: '2023-06-01' },
          { amount: '55.00', date: '2023-05-01' },
        ],
      },
      {
        customerName: 'Rich Krussel',
        orderNumber: '88997745',
        transactions: [{ amount: '122.00', date: '2023-06-01' }],
      },
    ],
  }
  if (response) {
    resolve(response)
  } else {
    reject('An Error occured')
  }
})

export const getCustomerData = () => {
  return orderDetails
}
