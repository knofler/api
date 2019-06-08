/*
* Shopcart dummy data
*
* This contains defalut Shopcart dummy data.
*/


import Shopcart from './model';

export default function shopcartData() {
  Shopcart.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    Shopcart.find({}).remove(function () {
      Shopcart.create({
        name: 'Steak',
        produced_by: 'David Hick ',
        img: 'http://res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_steak.jpg',
        cost: 13,
        available: 'In Stock',
        carted_by: 'Rumman Ahmed',
        quantity: 5,
        created_at: '2008-04-17T11:01:00.000Z',
      }, {
        name: 'Hainanese Chicken',
        produced_by: 'Paul Simon',
        img: 'http:res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_hainanese_chicken.jpg',
        cost: 63,
        available: 'Out of Stock',
        carted_by: 'Rumman Ahmed',
        quantity: 1,
        created_at: '2008-04-17T11:01:00.000Z',
      }, {
        name: 'Lamb Shanks',
        produced_by: 'Rumman Ah med',
        img: 'http:res.cloudinary.com/hlmdbpwv9/image/upload/w_400,h_600,c_fit/aircanteen_v2_lamb_shanks.jpg',
        cost: 22,
        available: 'Pre Order',
        carted_by: 'Rumman Ahmed',
        quantity: 3,
        created_at: '2008-04-17T11:01:00.000Z',
      }, {
        name: 'Spaghetti Bolognese',
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
