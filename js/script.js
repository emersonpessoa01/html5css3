let scrollTop = document.querySelector(".scrollTop");
window.onscroll = () => {
  scrollTop.classList.toggle("active", window.scrollY > 450);

  /* OUTRA LÓGICA PARA SURGIR BOTÃO */
  // if (
  //   document.body.scrollTop > 200 ||
  //   document.documentElement.scrollTop > 200
  // ) {
  //   scrollTop.style.display = "block";
  // } else {
  //   scrollTop.style.display = "none";
  // }
};

scrollTop.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};