document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("message-form");
    const displayBox = document.getElementById("display-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const tanggalLahir = document.getElementById("tanggal-lahir").value;
        const jenisKelamin = document.querySelector('input[name="gender"]:checked').value;
        const pesan = document.getElementById("pesan").value;
        const currentTime = new Date().toString();

        displayBox.innerHTML = `
            <p><strong>Current time :</strong> ${currentTime}</p>
            <p><strong>Nama :</strong> ${nama}</p>
            <p><strong>Tanggal Lahir :</strong> ${tanggalLahir}</p>
            <p><strong>Jenis Kelamin :</strong> ${jenisKelamin}</p>
            <p><strong>Pesan :</strong> ${pesan}</p>
        `;
    });
});
