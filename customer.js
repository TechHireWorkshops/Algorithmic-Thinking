const orders = [
  {
    id: 1,
    customer_name: 'Terry Chamato',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [2, 5, 6],
    total: 342.5,
  },
  {
    id: 2,
    customer_name: 'Beaumont Harddrive',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [5, 8, 2],
    total: 193.23,
  },
  {
    id: 3,
    customer_name: 'Righteous Sebastian',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'cancelled',
    item_ids: [8, 54, 2],
    total: 14.23,
  },
  {
    id: 4,
    customer_name: 'Terry Chamato',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [65, 2, 76],
    total: 432.6,
  },
  {
    id: 5,
    customer_name: 'Havercamp Shatterdome',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [34, 87, 2],
    total: 65.22,
  },
  {
    id: 6,
    customer_name: 'Terry Chamato',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'cancelled',
    item_ids: [45, 1, 7],
    total: 5432.01,
  },
  {
    id: 7,
    customer_name: 'Det. Frank Shark',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [543, 1, 8],
    total: 8.5,
  },
  {
    id: 8,
    customer_name: 'Chaz Steadyfist',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'unfulfilled',
    item_ids: [5, 1, 87],
    total: 112.1,
  },
  {
    id: 9,
    customer_name: 'Beaumont Harddrive',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [12, 44, 1],
    total: 34.74,
  },
  {
    id: 10,
    customer_name: 'Dashell Permanente',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'returned',
    item_ids: [65, 67, 1],
    total: 322.52,
  },
  {
    id: 11,
    customer_name: 'Dashell Permanente',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [2, 5, 6],
    total: 42.5,
  },
  {
    id: 12,
    customer_name: 'Channing Merchandise',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [2, 5, 6],
    total: 342.5,
  },
  {
    id: 13,
    customer_name: 'Terry Chamato',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'cancelled',
    item_ids: [5, 8, 2],
    total: 193.23,
  },
  {
    id: 14,
    customer_name: 'Ponch Gigabyte',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [8, 54, 2],
    total: 14.23,
  },
  {
    id: 15,
    customer_name: 'Chaz Steadyfist',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [65, 2, 76],
    total: 432.6,
  },
  {
    id: 16,
    customer_name: 'DeForest Carmichael',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'unfulfilled',
    item_ids: [34, 87, 2],
    total: 65.22,
  },
  {
    id: 17,
    customer_name: 'Terry Chamato',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [45, 1, 7],
    total: 5432.01,
  },
  {
    id: 18,
    customer_name: 'Terry Chamato',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [543, 1, 8],
    total: 8.5,
  },
  {
    id: 19,
    customer_name: 'Ponch Gigabyte',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [5, 1, 87],
    total: 112.1,
  },
  {
    id: 20,
    customer_name: 'Odell Cigarette',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [12, 44, 1],
    total: 34.74,
  },
  {
    id: 21,
    customer_name: 'Odell Cigarette',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'fulfilled',
    item_ids: [65, 67, 1],
    total: 322.52,
  },
  {
    id: 22,
    customer_name: 'Terry Chamato',
    payment_method: 'pm_1HYIUYCQMk3yp8hqtJQzmieh',
    status: 'cancelled',
    item_ids: [2, 5, 6],
    total: 42.5,
  },
];

const repeatCust = arr => {
arr=arr.filter(order=>order.status==='fulfilled')
  var result = arr.reduce((object, order) => {
    if (object[order.customer_name]) {
      object[order.customer_name]++;
    } else {
      object[order.customer_name] = 1;
    }
    return object;
  }, {});
  const orderNum = Object.values(result)
  const repeaters = orderNum.filter(number => number > 1)
  return repeaters.length/orderNum.length*100
};

console.log(repeatCust(orders));
