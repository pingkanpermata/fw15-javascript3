// mendapatkan data user dari API
// const getUserData = (username) => {
//     return new Promise((resolve, reject) => {
//         try {
//             fetch(`https://api.github.com/users/${username}`)
//                 .then((response) => response.json())
//                 .then((data) => resolve(data));
//         } catch (error) {
//             reject(`Error: ${error.message}`);
//         }
//     });
// };

// const username = prompt('Masukkan nama pengguna Github:');

// getUserData(username)
//     .then((userData) => {
//         console.log(userData);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
/* Fungsi getData() digunakan untuk mengambil data pengguna dari githubAPI
dengan memberikan username pengguna sbg parameternya. function ini memakai fetch()
utk memanggil endpoint API dan mengambil responsenya dalam format JSON
berdasarkan kode diatas, user diminta utk memasukkan username github melalui prompt dan fungsi
getUserData() dipanggil menggunakan parameter username tsb. jika responsenya diterima, maka data
user akan ditampilkan di console. Jika gagal, maka error message akan ditampilkan juga di console. */

// mencari rata-rata dari sebuah array
const calculateAverage = (arr) => {
    return new Promise((resolve, reject) => {
        try {
            const sum = arr.reduce((acc, curr) => acc + curr, 0);
            const avg = sum / arr.length;
            resolve(avg);
        } catch (error) {
            reject(error.message);
        }
    });
};

// Contoh penggunaan
const arr = [1, 2, 3, 4, 5];
calculateAverage(arr)
    .then((result) => console.log(`Rata-rata: ${result}`))
    .catch((error) => console.error(error));
/* didalam function calculateAverage, kita membuat sebuah promise memakai keyword new Promise. 
didalam promise itu kita melakukan penghitungan rata-rata dan jika berhasil, maka dikembalikan
nilai rata-rata tsb dengan memakai resolve(avg), tetapi jika ada error saat penghitungan, 
maka kita lempar error tsb menggunakan throw new error dan menangkapnya dengan try catch. */