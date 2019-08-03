import { reject } from "q";

const baseUrl = 'http://localhost:3050/api/cars';

export const getAllCars = () => {
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}`).then((response) => {
            if (!response.ok) {
                console.log(`ERROR: ${response.status} - ${response.statusText}`);
                resolve([]);
            } else {
                response.json().then((cars) => {
                    resolve(cars);
                })
            }
        }).catch((err) => {
            console.log(` ${err}`);
            reject(err);
        });
    });
}

export const getCarById = (id) => {
    return new Promise((resolve, _) => {
        fetch(`${baseUrl}/${id}`).then((response) => {
            if (!response.ok) {
                console.log(`ERROR: ${response.status} - ${response.statusText}`);
                reject();
            } else {
                response.json().then((car) => {
                    resolve(car);
                })
            }
        }).catch((err) => {
            console.log(` ${err}`);
            reject(err);
        });
    });
}

export const addCar = (car) => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            car['car_id'] = (data.length + 1);
            data.push(car);
            resolve('ok'); // TODO: Check with browser
        }, 500);
    });
};