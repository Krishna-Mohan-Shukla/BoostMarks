window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("main-content").style.display = "block";
});

 const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Load saved mode from localStorage
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️ ';
  }

  darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      darkModeToggle.textContent = '☀️';
      localStorage.setItem('darkMode', 'enabled');
    } else {
      darkModeToggle.textContent = '🌙 ';
      localStorage.setItem('darkMode', 'disabled');
    }
  });

//      window.addEventListener("load", function () {
//         AOS.init();
//     });

//  window.addEventListener("load", function () {
//     setTimeout(() => {
//       window.scrollTo(0, 1);
//       window.scrollTo(0, 0);
//     }, 100);
//   });

//    AOS.init({
//     once: true,
//     delay: 50,
//     duration: 800,
//     easing: 'ease-in-out'
//   });


//   window.addEventListener("load", () => {
//     AOS.refresh();
//   });