// simple interaction example
document.querySelector(".btn-primary").addEventListener("click", () => {
    alert("Go to portfolio section!");
});


document.querySelector('.aboutme-btn').addEventListener('click', () => {
  alert('Download CV clicked!');
});









// HOW IT WORKS


document.querySelectorAll(".howitwork-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    // toggle open/close
    item.classList.toggle("active");
  });
});








document.querySelectorAll('.footerandfriend-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});
