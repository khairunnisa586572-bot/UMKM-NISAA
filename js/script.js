document.addEventListener("DOMContentLoaded", function () {
    const nomorWA = "6281161666802";
    const tombolPesan = document.querySelectorAll(".buy-button");

    tombolPesan.forEach(function (tombol) {
        tombol.addEventListener("click", function () {
            const namaProduk = tombol.dataset.product;

            const pesan =
                "Halo UMKM Khairunnisa, saya ingin memesan " +
                namaProduk +
                " dengan harga Rp5.000. Apakah masih tersedia?";

            const linkWA =
                "https://wa.me/" +
                nomorWA +
                "?text=" +
                encodeURIComponent(pesan);

            window.open(linkWA, "_blank", "noopener,noreferrer");
        });
    });
});
