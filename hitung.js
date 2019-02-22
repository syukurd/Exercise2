function tambah(){
   var angkasatu= parseInt(document.getElementById("angka1").value);
   var angkadua = parseInt(document.getElementById("angka2").value);
    var hasil = angkasatu + angkadua;
    alert("Hasil dari Penjumlahan " +hasil);
}
function kurang(){
    var angkasatu= parseInt(document.getElementById("angka1").value);
    var angkadua = parseInt(document.getElementById("angka2").value);
     var hasil = angkasatu - angkadua;
     alert(hasil);
 }
 function bagi(){
    var angkasatu= parseFloat(document.getElementById("angka1").value);
    var angkadua = parseFloat(document.getElementById("angka2").value);
     var hasil = angkasatu / angkadua;
     alert(hasil);
 }
 function kali(){
    var angkasatu= parseFloat(document.getElementById("angka1").value);
    var angkadua = parseFloat(document.getElementById("angka2").value);
     var hasil = angkasatu * angkadua;
     alert(hasil);
 }
