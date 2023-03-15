/*tugas ke 4 Javascript
1. Lengkapilah form dari latihan 15js menggunakan CSS dan table 
2. Perbagus tampilannya 
3. Lengkapi perhitungannya dengan:
- pembagian
- perkalian
- pangkat
4. jika form input dari angka 1 dan 2 kosong dan user klik button, 
maka tampilkan "Maaf angka belum terisi"


*/

// Plus Function
function tambah(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 + a2;
    
    if(a1 && a2){
        frm.hasil.value = total;
    }else{
        alert('data tidak boleh dalam keadaan kosong')
        return false
    }
}

// Minus Function
function kurang(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 - a2;

    if(a1 && a2){
        frm.hasil.value = total;
    }else{
        alert('data tidak boleh dalam keadaan kosong')
        return false
    }

}

// Multiply Function 
function dikali(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 * a2;

    if(a1 && a2){
        frm.hasil.value = total;
    }else{
        alert('data tidak boleh dalam keadaan kosong')
        return false
    }

}

// Divided Function
function dibagi(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 / a2;

    if(a1 && a2){
        frm.hasil.value = total;
    }else{
        alert('data tidak boleh dalam keadaan kosong')
        return false
    }

}

// Ranking(per-pangkat) Function
function dipangkatkan(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = Math.pow (a1,a2);

    if(a1 && a2){
        frm.hasil.value = total;
    }else{
        alert('data tidak boleh dalam keadaan kosong')
        return false
    }

}