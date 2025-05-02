document.getElementById("formKontak").addEventListener("submit", function(e) {
    e.preventDefault();

    var nama = document.getElementById("nama").value.trim();
    var email = document.getElementById("email").value.trim();
    var pesan = document.getElementById("pesan").value.trim();
     if (nama === "" || email === "" || pesan === "") {
        document.getElementById("pesanStatus").textContent = "Semua kolom harus diisi.";
    }  else {
        alert("Pesan Anda telah dikirim.\nTerima kasih telah menghubungi kami.");
        document.getElementById("formKontak").reset();
        document.getElementById("pesanStatus").textContent = "";
    }
});