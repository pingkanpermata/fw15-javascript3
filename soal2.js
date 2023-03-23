const hariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
            let cek = dataDay.find((item) => {
                return item === day;
            });

            if (cek) {
                resolve(cek);
            } else {
                reject(new Error("Hari bukan hari kerja"));
            }
        }, 3000);
    });
};

// jika menggunakan then catch
hariKerja("minggu")
.then((result) => {
    console.log(result); 
})
.catch((error) => {
    console.log(error.message); 
});
/* penggunaan then catch ini untuk menangani hasil atau error yang dihasilkan ole si promise.
fungsi then akan dipanggil jika promise ini berhasil, dan fungsi catch akan dipanggil jika
promise menghasilkan error. jadi, penggunaan then catch diatas untuk mengecek apakah hari yang dimasukkan
merupakan hari kerja atau tidak. jika berhasil, maka outputnya akan ditampilkan di blok then
kalau terjadi error, maka akan masuk ke blok catch dan menampilkan pesan error yang diberikan */

// jika menggunakan try catch
const checkHariKerja = async (day) => {
    try {
        const result = await hariKerja(day);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
};
checkHariKerja("sabtu");
