fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const names = data.map(user => user.name);
        console.log(names);
    })
    .catch(error => console.error(error));
/* kita menggunakan method fetch untuk mengambil data dari URL API. method fetch ini akan
mengembalikan promise yang berisi response dari request yang kita kirim. Lalu kita juga menggunakan
method then() yang dimana untuk melakukan pemrosesan terhadap response yang diterima. kita menggunakan
method response.json() untuk mengubah response yang diterima kedalam format JSON */
/* disini kita memakai method then() lagi untuk pemrosesan di baris kedua tadi. kita memetakan (map) data
yang diterima dari API dan yang diambil hanya properti name saja pada tiap objek user. hasil dr pemetaan td disimpan dalam array names
lalu selanjutnya kita juga menggunakan console.log() untuk menampilkan hasil dari pemrosesan dari baris ketiga, yaitu array names.
terakhir, kita memakai method catch() yang dimana utk menanganierror yang mungkin terjadi pada saat proses fetch.
jika terjadi error, error message akan ditampilkan pada console. */