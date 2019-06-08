/*
* Chef dummy data
*
* This contains defalut Chef dummy data.
*/


import Chef from './model';

export default function chefData() {
  Chef.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    Chef.find({}).remove(function () {
      Chef.create({
        name: 'Putul',
        age: 42,
        sex: 'Female',
        skills: 'Beef',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        address: '9 husting street',
        popular: 'true',
        suburb: 'Woodcroft',
        postcode: 2567,
        country: 'Australia',
        phone: '0456789023',
        ethnicity: 'Bengali',
        created_at: '2008-04-17T11:01:00.000Z',
      }, {
        name: 'Putul',
        age: 42,
        sex: 'Female',
        skills: 'Beef',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        address: '9 husting street',
        popular: 'true',
        suburb: 'Woodcroft',
        postcode: 2567,
        country: 'Australia',
        phone: '0456789023',
        ethnicity: 'Bengali',
        created_at: '2008-04-17T11:01:00.000Z',
      }, {
        name: 'Putul',
        age: 42,
        sex: 'Female',
        skills: 'Beef',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        address: '9 husting street',
        popular: 'true',
        suburb: 'Woodcroft',
        postcode: 2567,
        country: 'Australia',
        phone: '0456789023',
        ethnicity: 'Bengali',
        created_at: '2008-04-17T11:01:00.000Z',
      }, {
        name: 'Putul',
        age: 42,
        sex: 'Female',
        skills: 'Beef',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        address: '9 husting street',
        popular: 'true',
        suburb: 'Woodcroft',
        postcode: 2567,
        country: 'Australia',
        phone: '0456789023',
        ethnicity: 'Bengali',
        created_at: '2008-04-17T11:01:00.000Z',
      }, {
        name: 'Putul',
        age: 42,
        sex: 'Female',
        skills: 'Beef',
        latitude: '-33.7061491',
        longitude: '150.90369529999998',
        address: '9 husting street',
        popular: 'true',
        suburb: 'Woodcroft',
        postcode: 2567,
        country: 'Australia',
        phone: '0456789023',
        ethnicity: 'Bengali',
        created_at: '2008-04-17T11:01:00.000Z',
      }, (error) => {
        if (!error) {
            console.log('ready to go!');
          }
      });
    });
  });
}
