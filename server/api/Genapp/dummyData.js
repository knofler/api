/*
* Genapp dummy data
*
* This contains defalut Genapp dummy data.
*/


import Genapp from './model';

export default function genappData() {
    Genapp.count().exec((err, count) => {
        if (count > 0) {
            return;
        }
        Genapp.find({}).remove(function () {
            Genapp.create({
                item: `Genapp item`,
                info: 'Lorem ipsssum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                createdBy: `Genapp`,
                created_at: '2008-12-17T11:01:23.460Z',
            }, (error) => {
                if (!error) {
                    console.log('ready to go!');
                }
            });
        });
    });
}