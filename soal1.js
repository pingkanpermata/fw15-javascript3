/* Javascript adalah bahasa pemrograman yang synchronous by default.
Walaupun begitu, pada Javascript Server Side (NodeJS) terdapat beberapa operasi yang asynchronous.
Di Javascript, ada 2 macam operasi yaitu operasi synchronous dan asynchronous. */
// Synchronous
/* Secara sederhana synchronous adalah proses pengeksekusian kode
yang dijalankan secara berurutan kode yang tertulis */
// contoh :
console.log("pingkan");
console.log("permata");
console.log("arianto");
console.log(26);
console.log(1997);
/* dalam kasus synchronous diatas dapat disimpulkan, output yang didapatkan
dari kode diatas sesuai dengan urutan yang kita tulis */
/* jadi, proses synchronous sama seperti proses antrean teller bank, disaat kita
berniat untuk menyetor uang melalui teller bank, kita wajib mengikuti aturan yang dinamakan "antrian" 
kita belum bisa melakukan transaksi jika semua orang didepan kita belum menyelesaikan transaksinya*/

// Asynchronous
/* berbeda dengan synchronous, proses asynchronous adalah proses yang dimana 
pengeksekusian kode yang tidak sesuai dengan urutan yang ada atau bisa disebut
menjalankan perintah selanjutnya tanpa menunggu perintah sebelumnya selesai. */
// contoh :
console.log("pingkan");
setTimeout(function() {
    console.log(1997);
}, 3000);
console.log("lahir pada tahun ");
/* disini fungsi timeout digunakan agar fungsi yang diberikan sebagai argumen (console.log(1997))
itu akan dijalankan setelah 3000 milidetik atau 3 detik sejak program kita dijalankan.
dengan begitu, ketika program yang kita buat dijalankan, maka secara tidak langsung mengeksekusi
si console.log(1997), tetapi menunggu selama 3 detik terlebih dahulu sebelum akhirnya menjalankan
kode tersebut. */
/* nah, secara keseluruhan perintah dijalankan bersamaan namun hasil utk console.log(1997) dicetak di akhir,
karena proses setTimeout belum selesai, tanpa menunggu proses setTimeout tersebut maka 
perintah selnajutnya dijalankan. */
/* Jadi, proses asynchronous bisa dianalogikan dengan sistem pemesanan pada cafe, meja A memesan pada
pukul 12.00 tanpa menunggu makanan meja A tiba, meja B bisa memesan makanan pada pukul 12.15, namun hasil yang 
didapatkan sesuai apa yang dipesan meja A dan meja B. Jika meja A memesan nasi goreng 2 piring, sementara meja B hanya memesan
nasi telor, maka meja B bisa mendapatkan makanan lebih dulu dibanding meja A */