// Efecto 3D suave en las tarjetas
document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".card");

    const x = (window.innerWidth - e.pageX) / 100;
    const y = (window.innerHeight - e.pageY) / 100;

    cards.forEach(card => {
        card.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    });
});
