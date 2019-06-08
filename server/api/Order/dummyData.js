/*
* Order dummy data
*
* This contains defalut Order dummy data.
*/


import Order from './model';

export default function orderData() {
  Order.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    Order.find({}).remove(function () {
      Order.create({
        items: 'Steak',
        info: 'This is a steak info',
        product_id: '5c98704d8a04420022be9412',
        produced_by: 'David Hick test',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_steak.jpg',
        totalCost: 13,
        subTotal: 7,
        shipping: 2,
        quantity: 3,
        location: 'The Ponds',
        ordered_by: 'Rumman Ahmed',
        created_at: '2008-04-17T11:01:00.000Z',
      },
        (error) => {
          if (!error) {
            console.log('ready to go!');
          }
        });
    });
  });
}
