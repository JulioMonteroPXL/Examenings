const orders = [
    { orderID: 1, date: new Date('2023-06-11'), totalPrice: 898, iban: 'BE41-063-0123456-10'},
    { orderID: 2, date: new Date('2023-07-07'), totalPrice: 496, iban: 'BE96-002-0123456-10'},
    { orderID: 3, date: new Date('2023-10-23'), totalPrice: 579, iban: 'BE31-185-0123456-10'},
    { orderID: 4, date: new Date('2023-12-16'), totalPrice: 238, iban: 'BE41-185-0123456-10'},
    { orderID: 5, date: new Date('2024-01-07'), totalPrice: 789, iban: 'BE96-065-0123456-10'}
];
const orderLines = [
    { orderLineID: 1, orderID: 1, productCategory: 'Graphics Card', quantity: 2, price: 699, description: 'Nvidia RTX 3080' },
    { orderLineID: 2, orderID: 1, productCategory: 'Headset', quantity: 1, price: 99, description: 'Logitech G533' },
    { orderLineID: 3, orderID: 2, productCategory: 'Keyboard', quantity: 3, price: 129, description: 'Corsair K70' },
    { orderLineID: 4, orderID: 2, productCategory: 'Mouse', quantity: 2, price: 49, description: 'Logitech G502' },
    { orderLineID: 5, orderID: 3, productCategory: 'Graphics Card', quantity: 1, price: 649, description: 'AMD Radeon RX 6800 XT' },
    { orderLineID: 6, orderID: 3, productCategory: 'Keyboard', quantity: 2, price: 149, description: 'Razer Huntsman Elite' },
    { orderLineID: 7, orderID: 4, productCategory: 'Mouse', quantity: 3, price: 29, description: 'Logitech G203' },
    { orderLineID: 8, orderID: 4, productCategory: 'Headset', quantity: 2, price: 79, description: 'HyperX Cloud II' },
    { orderLineID: 9, orderID: 5, productCategory: 'Graphics Card', quantity: 3, price: 499, description: 'Nvidia RTX 3070' },
    { orderLineID: 10, orderID: 5, productCategory: 'Mouse', quantity: 1, price: 39, description: 'Logitech G305' },
    { orderLineID: 11, orderID: 5, productCategory: 'Headset', quantity: 1, price: 129, description: 'SteelSeries Arctis 7' },
    { orderLineID: 12, orderID: 5, productCategory: 'Keyboard', quantity: 1, price: 99, description: 'Logitech G413' },
    { orderLineID: 13, orderID: 5, productCategory: 'Keyboard', quantity: 2, price: 99, description: 'Logitech G413 (new edition)' }
];

function createOrderSelect() {
    const orderContainer = document.createElement('div');
    const select = document.createElement('select');
    select.id = 'orderSelect';

    orders.forEach(order => {
        const option = document.createElement('option');
        option.value = order.orderID;
        option.textContent = `order ${order.orderID} - ${order.date.toLocaleDateString('en-US', {
            month: 'long', day: 'numeric', year: 'numeric'
        })}`;
        select.appendChild(option);
    });

    orderContainer.appendChild(select);
    document.body.appendChild(orderContainer);
    // Add event listener to the select element
    select.addEventListener('change', displayOrderDetails);
// Display details for the first order by default
    displayOrderDetails();
}
// Function to display order details
function displayOrderDetails() {
    let orderDetails = document.getElementById('orderDetails');
    if (!orderDetails) {
        orderDetails = document.createElement('div');
        orderDetails.id = 'orderDetails';
        document.body.appendChild(orderDetails);
    }
    orderDetails.innerHTML = '';

    const selectedOrderId= parseInt(document.getElementById('orderSelect').value);
    const selectedOrderLines = orderLines.filter(line => line.orderID === selectedOrderId);
    const selectedOrder =orders.find(order => order.orderID === selectedOrderId);

    //sort the products based on criteria mentioned

    selectedOrderLines.sort((a,b) => {
      if (a.price === b.price) {
          return b.description.length - a.description.length;
      }
      return a.price - b.price;
    });

    const ul = document.createElement('ul');

    selectedOrderLines.forEach(line => {
        const li = document.createElement('li');
        const totalLinePrice = line.quantity * line.price;
        li.textContent = `${line.productCategory} - ${line.description} - ${line.quantity} x ${line.price} EUR = ${totalLinePrice} EUR`;
        ul.appendChild(li);
    });

    orderDetails.appendChild(ul);

    const orderTotal = selectedOrderLines.reduce((total, line) => total + (line.quantity * line.price), 0);

    const totalPriceElement = document.createElement('p');

    totalPriceElement.textContent = `Total Price: ${orderTotal} EUR`;

    const averagePrice = orders.reduce((sum, order) => sum + order.totalPrice, 0) / orders.length;

    if (orderTotal > averagePrice) {
        totalPriceElement.style.color = 'green';
        totalPriceElement.style.fontWeight = 'bold';
    } else {
        totalPriceElement.style.color = 'red';
        totalPriceElement.style.fontStyle = 'italic';
    }
    orderDetails.appendChild(totalPriceElement);

    const bankLogo = document.createElement('img');
    bankLogo.width = 200;
    const ibanSegment = parseInt(selectedOrder.iban.split('-')[1]);

    if (ibanSegment >= 1 && ibanSegment <= 49){
        bankLogo.src = `./assets/BNP-Paribas.jpg`;
        bankLogo.alt = 'bnp paribas';
    } else if (ibanSegment >= 50 && ibanSegment <= 99){
        bankLogo.src = `./assets/belfius.png`;
        bankLogo.alt = 'belfius';
    } else if (ibanSegment === 185){
        bankLogo.src = `./assets/ing.png`;
        bankLogo.alt = 'ing';
    } else {
        bankLogo.alt = 'unkmonw bank';
    }
    orderDetails.appendChild(bankLogo);
}

createOrderSelect();