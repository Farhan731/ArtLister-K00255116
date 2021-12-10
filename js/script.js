
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

const visToggle = document.querySelector('.eyeIcon');

        const input = document.querySelector('#pwdWrap input');
        
        var password = true;
        
       visToggle.addEventListener('click', function(){
                 if(password) {
                     input.setAttribute('type','text'); // using js dynamically changed the type attribute
                     visToggle.classList.remove('fa-eye');
                     visToggle.classList.add('fa-eye-slash');
                 } else {
                     input.setAttribute('type','password');
                     visToggle.classList.remove('fa-eye-slash');
                     visToggle.classList.add('fa-eye');
                 }
            password = !password;
              });

              var s = $('input'),
    f  = $('form'),
    a = $('.after'),
		m = $('h4');

s.focus(function(){
  if( f.hasClass('open') ) return;
  f.addClass('in');
  setTimeout(function(){
    f.addClass('open');
    f.removeClass('in');
  }, 1300);
});

a.on('click', function(e){
  e.preventDefault();
  if( !f.hasClass('open') ) return;
   s.val('');
  f.addClass('close');
  f.removeClass('open');
  setTimeout(function(){
    f.removeClass('close');
  }, 1300);
})

f.submit(function(e){
  e.preventDefault();
  m.html('Thanks, high five!').addClass('show');
  f.addClass('explode');
  setTimeout(function(){
    s.val('');
    f.removeClass('explode');
    m.removeClass('show');
  }, 3000);
})

const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");

searchBtn.onclick = () => {
  searchBox.classList.add("active");
}

cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}