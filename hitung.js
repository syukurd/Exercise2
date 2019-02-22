function tambah() {
    var angkasatu = parseInt(document.getElementById("angka1").value);
    var angkadua = parseInt(document.getElementById("angka2").value);
    var hasil = angkasatu + angkadua;
    document.getElementById("hasilnya").innerHTML = hasil;
}
function kurang() {
    var angkasatu = parseInt(document.getElementById("angka1").value);
    var angkadua = parseInt(document.getElementById("angka2").value);
    var hasil = angkasatu - angkadua;
    document.getElementById("hasilnya").innerHTML = hasil;
}
function bagi() {
    var angkasatu = parseFloat(document.getElementById("angka1").value);
    var angkadua = parseFloat(document.getElementById("angka2").value);
    var hasil = angkasatu / angkadua;
    document.getElementById("hasilnya").innerHTML = hasil;
}
function kali() {
    var angkasatu = parseFloat(document.getElementById("angka1").value);
    var angkadua = parseFloat(document.getElementById("angka2").value);
    var hasil = angkasatu * angkadua;
    document.getElementById("hasilnya").innerHTML = hasil;



}
function hasil() {
    location.reload();
}
