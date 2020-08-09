//Latihan template literal, cara melakukan output string dan variable menggunakan backthick (` `)

let sapa = "Halo Team Up!"; //variable sapa dengan tipe data string
let nama = "Alvin"; //variable nama dengan tipe data string
let umur = 15; //variable umur dengan tipe data int


//Pemanggilan Biasa
let cara1Biasa = sapa + " Namaku " + nama + " umurku " + umur + " tahun, Mohon bantuannya";
console.log(cara1Biasa)

//Pemanggilan Biasa Langsung
console.log(sapa + " Namaku " + nama + " umurku " + umur + " tahun, Mohon bantuannya");

//Pemanggilan ES6
let caraES6 = `${sapa} Namaku ${nama} umurku ${umur} tahun, Mohon bantuannya`;
console.log(caraES6);

//Pemanggilan ES6 Langsung
console.log(`${sapa} Namaku ${nama} umurku ${umur} tahun, Mohon bantuannya`);

//Numeric Prosessing
let angka1 = 10;
let angka2 = 5;
let hasil = angka1 + angka2;

//Output dari pertambahan antara angka1 dan angka2
console.log(hasil);

//Output dari pertambahan antara1 dan angka2 langsung tanpa variable "hasil"
console.log(angka1 + angka2);

//Output dari pertambahan antara1 dan angka2 langsung tanpa variable "hasil" menggunakan ES6 bracket
console.log(`${angka1 + angka2}`);

//Output dari pertambahan dengan menambah string
console.log(angka1 + " + " + angka2 + " = " + (angka1 + angka2));

//Output dari pertambahan dengan menambah string dengan format ES6
console.log(`${angka1} + ${angka2} = ${angka1 + angka2}`); // operator tambah (+) dan simbol samadengan/equal (=) diluar brackets ==> { } <== adalah string


//Bagian Latihan
let tanggal = ""; //Hari, Tanggal Bulan Tahun Jam Menit Submit
let hobi = ""; //Hobi yang diminati
let tugas1 = "Semangat semua, " + sapa + " Sekarang Hari " + tanggal + " Semoga masih semangat " + " Namaku " + nama + " umurku " + umur + " tahun, " + " Hobiku adalah " + hobi + " Mohon bantuannya Semua!";

// Tugas 1
// 1. Tampilkan kalimat diatas pada tampilan console.log 
// 2. ubah kedalam format ES6
// 3. Outputkan Text diatas dengan format ES6

// Tugas 2
// 1. buat 6 variable bernama "operand1", "operand2", "operand3", "operator1", "operator2", "equal" 
// 2. Untuk operator1 gunakan kali(x), untuk operator2 gunakan kurang (-), sedangkan untuk equal bernilai sama dengan (=)
// 3. outputkan ke 6 variable diatas dengan format operand1 * operand3 - operand2 = hasilnya tanpa menambahkan"STRING" didalamnya
