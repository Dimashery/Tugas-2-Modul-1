let expression = '';

function insert(num) {
    expression += num;
    document.getElementById('result').value = expression; // Menampilkan ekspresi yang diperbarui
}

function calculate() {
    try {
        expression = expression.replace('^', '**');
        let result = eval(expression);
        document.getElementById('result').value = result; // Menampilkan hasil
        expression = ''; // Mengosongkan ekspresi setelah menghitung
    } catch (e) {
        document.getElementById('result').value = 'Error'; // Menangani kesalahan
        expression = '';
    }
}

function clearScreen() {
    expression = ''; // Mengosongkan ekspresi
    document.getElementById('result').value = ''; // Mengosongkan hasil tampilan
}

function deleteLast() {
    expression = expression.slice(0, -1); // Menghapus karakter terakhir dari ekspresi
    document.getElementById('result').value = expression; // Memperbarui tampilan
}
