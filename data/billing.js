export const billing = {
  title: "Billing",
  description: `
  At Marroquin Truck & Trailer Repair, we want to make it as easy as possible for you to pay for our diesel mechanic services. Here are some of the payment options we accept:`,
  payment_types: [
    {
      name: 'Cash'
    },
    {
      name: 'Checks'
    },
    {
      name: "Major credit cards, including:",
      sub_types: [
        {
          name: 'Visa'
        },
        {
          name: "American Express"
        }
      ]
    },
    {
      name: "Mobile payment options, such as:",
      sub_types: [
        {
          name: 'PayPal'
        },
        {
          name: "Venmo"
        }
      ]
    },
    {
      name: "Financing options for qualified customers"
    },
  ],
  bottom_text: `Don't hesitate to contact us if you have any questions about our payment options or need help choosing the one that works best for you. We're here to help.`
}