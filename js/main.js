let bmi_math = document.getElementById("hitung");
let tb_cm = document.getElementById("tinggi");
let bb = document.getElementById("berat");
let result = document.getElementById("result");
let keterangan = document.getElementById("keterangan");
let reset = document.getElementById("reset");
// Hitung BMI
bmi_math.addEventListener("click", function () {
  let tb = tb_cm.value / 100;
  let bmi = Number(bb.value / (tb * tb)).toFixed(2);

  //When the BMI is less than 18.5, you can see the text below
  if (bmi < 18.5) {
    result.innerHTML = "<b> Hasil: </b> <br>" + bmi;
    result.classList.add =
      "animate__animated animate__bounce animate__delay-2s";
    keterangan.innerHTML = `Hasil perhitungan menunjukkan bahwa Anda memiliki berat badan <b>kurang atau tergolong kurus</b>. Hasil ini berdasarkan angka BMI Anda yang berada di bawah 18.5. Sebagai solusinya, Anda membutuhkan asupan kalori tambahan sebanyak 300-500 kkal per hari. Perbaiki juga pola makan dan pola hidup untuk mendapatkan berat badan ideal.`;
  }

  //If BMI is >=18.5 and <=24.9
  else if (bmi >= 18.5 && bmi <= 24.9) {
    result.innerHTML = "<b> Hasil: </b> <br>" + bmi;
    result.classList.add =
      "animate__animated animate__bounce animate__delay-2s";
    keterangan.innerHTML = "Normal/Ideal 😍";
  }

  //If BMI is >= 25 and <= 29.9
  else if (bmi >= 25 && bmi <= 29.9) {
    result.innerHTML = "<b> Hasil: </b> <br>" + bmi;
    result.classList.add =
      "animate__animated animate__bounce animate__delay-2s";
    keterangan.innerHTML = `Hasil perhitungan menunjukkan bahwa Anda memiliki berat badan <b>berlebih atau gemuk</b>. Hasil ini berdasarkan angka BMI Anda yang ada di antara angka 25 sampai 29.9. Sebagai solusinya, Anda harus mengurangi asupan asupan kalori harian sekitar 300-500 kkal. Mulai sekarang coba lebih perhatikan kalori dari makanan dan minuman yang Anda konsumsi.`;
  }

  //If BMI is <= 30
  else if (bmi >= 30) {
    result.classList.add =
      "animate__animated animate__bounce animate__delay-2s";
    result.innerHTML = "<b> Hasil: </b> <br>" + bmi;
    keterangan.innerHTML = `Hasil perhitungan menunjukkan bahwa Anda tergolong <b>obesitas</b>. Hasil ini berdasarkan angka BMI Anda lebih dari 30. Perlu diketahui bahwa obesitas lebih parah daripada gemuk. Seseorang yang gemuk belum tentu obesitas, sedangkan seseorang yang obesitas sudah dipastikan gemuk. Jika dibiarkan, bisa berisiko menderita berbagai penyakit serius. Cara menurunkan berat badan yaitu dengan mengurangi asupan kalori harian sekitar 300-500 kkal. Cara ini dapat membantu menurunkan berat badan sebesar 0,5-1 kg per minggu. Mengurangi asupan kalori saja tidak cukup. Anda perlu melakukan olahraga rutin untuk mendapatkan berat badan ideal.`;
  }
});
// Reset Hasil 
reset.addEventListener("click", function () {
  result.innerHTML = "";
  keterangan.innerHTML = "";
});
