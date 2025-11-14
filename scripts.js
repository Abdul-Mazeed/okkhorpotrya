(function(){
  // Floating letters randomization
  document.querySelectorAll('.floating-letters span').forEach(s=>{
    s.style.left=Math.random()*100+'vw';
    s.style.animationDelay=Math.random()*-25+'s';
  });

  // Theme switcher
  const switchEl=document.getElementById('themeSwitch');
  if(switchEl){
    switchEl.addEventListener('change',()=>{
      document.documentElement.classList.toggle('dark',switchEl.checked);
      localStorage.setItem('theme',switchEl.checked?'dark':'light');
    });
  }
  if(localStorage.getItem('theme')==='dark'){
    document.documentElement.classList.add('dark');
    if(switchEl) switchEl.checked=true;
  }

  // Auto year in footer
  const y=document.getElementById('year');
  if(y) y.textContent=new Date().getFullYear();

  // Scroll fade-in
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  },{threshold:0.1});
  document.querySelectorAll('section').forEach(s=>observer.observe(s));
})();
document.addEventListener("DOMContentLoaded", () => {

  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("menuOverlay");

  if (hamburger && sideMenu && overlay) {

    // Open / Close
    hamburger.onclick = () => {
      sideMenu.classList.toggle("show");
      hamburger.classList.toggle("active");
      overlay.classList.toggle("show");
    };

    // Close when clicking any menu link
    sideMenu.querySelectorAll("a").forEach(link => {
      link.onclick = () => {
        sideMenu.classList.remove("show");
        hamburger.classList.remove("active");
        overlay.classList.remove("show");
      };
    });

    // Close when clicking outside (overlay)
    overlay.onclick = () => {
      sideMenu.classList.remove("show");
      hamburger.classList.remove("active");
      overlay.classList.remove("show");
    };

  }
});




// --- Donation reveal ---
const donateBtn = document.getElementById("donateReveal");
const donateNumber = document.getElementById("donateNumber");

if (donateBtn && donateNumber) {
  donateBtn.addEventListener("click", () => {
    donateNumber.style.display = "block";
    donateBtn.textContent = "ধন্যবাদ! | THANK YOU";
  });
}

