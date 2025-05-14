document.addEventListener("DOMContentLoaded", function () {
  const revealBtn = document.getElementById("revealBtn");
  const mainContainer = document.getElementById("mainContainer");
  const messageContainer = document.getElementById("messageContainer");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const responseMessage = document.getElementById("responseMessage");

  // Animasi hati
  function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  // Tampilkan pesan utama
  revealBtn.addEventListener("click", function () {
    mainContainer.classList.add("hidden");
    messageContainer.classList.remove("hidden");

    // Mulai animasi hati
    setInterval(createHeart, 300);
  });

  // Tanggapan Ya
  yesBtn.addEventListener("click", function () {
    responseMessage.textContent = "Aku sangat bahagia mendengarnya! ❤️";
    responseMessage.classList.remove("hidden");
    document.body.style.background = "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)";

    // Lebih banyak hati
    setInterval(createHeart, 100);
  });

  // Tanggapan Tidak
  noBtn.addEventListener("mouseover", function () {
    // Buat tombol "Tidak" sulit diklik
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });

  noBtn.addEventListener("click", function () {
    responseMessage.textContent = "Aku akan terus berusaha sampai kamu mau ❤️";
    responseMessage.classList.remove("hidden");
    noBtn.style.transform = "translate(0, 0)";
  });
});
