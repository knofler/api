/*
* Shipment dummy data
*
* This contains defalut Shipment dummy data.
*/


import Shipment from './model';

export default function shipmentData() {
  Shipment.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    Shipment.find({}).remove(function () {
      Shipment.create({
        name: 'Steak',
        info: 'This is shipment info',
        product_id: '5c98704d8a04420022be9412',
        shipping: 3,
        shipped_status: 'Shipped',
        produced_by: 'David Hick ',
        img: 'http:res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_steak.jpg',
        cost: 13,
        available: 'In Stock',
        carted_by: 'Rumman Ahmed',
        quantity: 5,
        created_at: '2008-04-17T11:01:00.000Z',
      }, {
        name: 'Hainanese Chicken',
        info: 'This is shipment info',
        product_id: '5c98704d8a04420022be9412',
        shipping: 3,
        shipped_status: 'Shipped',
        produced_by: 'Paul Simon',
        img: 'http:res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_hainanese_chicken.jpg',
        cost: 63,
        available: 'Out of Stock',
        carted_by: 'Rumman Ahmed',
        quantity: 1,
        created_at: '2008-04-17T11:01:00.000Z',
      }, {
        name: 'Lamb Shanks',
        info: 'This is shipment info',
        product_id: '5c98704d8a04420022be9412',
        shipping: 3,
        shipped_status: 'Shipped',
        produced_by: 'Rumman Ahmed',
        img: 'http:res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_lamb_shanks.jpg',
        cost: 22,
        available: 'Pre Order',
        carted_by: 'Rumman Ahmed',
        quantity: 3,
        created_at: '2008-04-17T11:01:00.000Z',
      }, {
        name: 'Spaghetti Bolognese',
        info: 'This is shipment info',
        product_id: '5c98704d8a04420022be9412',
        shipping: 3,
        shipped_status: 'Shipped',
        produced_by: 'Roger Waters',
        img: 'http:res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_spaghetti_bolognese.jpg',
        cost: 61,
        available: 'Not Available',
        carted_by: 'Rumman Ahmed',
        quantity: 4,
        created_at: '2008-04-17T11:01:00.000Z',
      }, (error) => {
        if (!error) {
          console.log('ready to go!');
        }
      });
    });
  });
}
