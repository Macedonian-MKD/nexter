const sidebar = document.querySelector(".sidebar");
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".nav-btn-close");
const allNavLinks = document.querySelectorAll('.main-nav__link')

openMenu.addEventListener('click', function(){
    sidebar.classList.add('nav-open');
  });
  
  closeMenu.addEventListener('click', function(){
    sidebar.classList.remove('nav-open');
  })

allNavLinks.forEach(val=>{
    val.addEventListener('click',()=>{
        sidebar.classList.remove('nav-open');
    })
})

const allLinks = document.querySelectorAll('a:link');
for(const link of allLinks){
  link.addEventListener('click', clickHandler);
}

function clickHandler(event){
  event.preventDefault();
  const href = this.getAttribute('href');
  if(href === "#"){
    window.scrollTo({top:0, behavior:"smooth"});
  }
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({top:offsetTop, behavior:"smooth"});
}