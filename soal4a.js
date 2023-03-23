// mencari bilangan ganjil dari array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12];
const findOddNumbers = (arr) => {
    return new Promise((resolve, reject) => {
        const oddArr = arr.filter((num) => num % 2 !== 0);
        if (oddArr.length > 0) {
            resolve(oddArr);
        } else {
            reject('Tidak ada bilangan ganjil pada array.');
        }
    });
};

findOddNumbers(arr)
    .then((result) => {
        console.log('Bilangan ganjil dari array:', result);
    })
    .catch((error) => {
        console.log(error);
    });
/* kode diatas menggunakan promise dan method filter() untuk mencari biloangan ganjil dari sebuah array.
sebuah array disimpan didalam variabel arr. kemudian, sebuah function findOddNumbers() dibuat menggunakan promise
function tsb menerima satu parameter berupa array. Didalam function ini, method filter() ini akan digunakan untuk
mencari bilangan ganjil dari array yang diberikan. jika terdapat bilangan ganjil dalam array, maka promise akan mengoutputkan
hasil bilangan ganjil. tapi kalai tidak terdapat bilangan ganjil, maka promise akan memberi error message.
    function findOddNumbers() dipanggil dengan array arr sbg parameternya. kemudian dengan memakai method then catch, promise
yang dihasilkan akan dihandle dengan menampilkan bilangan ganjil jika si promise di resolve atau justru kita ditampilakn error message
jika promisenya di reject */

// menampilkan data dari API
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Terjadi kesalahan pada server.');
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error.message);
            });
    });
};

fetchData(apiUrl)
    .then((result) => {
        console.log('Data dari API:', result);
    })
    .catch((error) => {
        console.log(error);
    });
