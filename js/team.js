// const teamList = document.querySelector(".team__list");
// const buttonTeam = document.querySelectorAll('.team__button');
// const svgTeam = document.querySelectorAll('.team__svg');
const openItem = item => {
  const container = item.closest(".team__item");
  const contentWrapper = container.find(".team__desc-wrapper");
  const contentBlock = contentWrapper.find(".team__desc");
  const reqHeight = contentBlock.height();
  const svgBlock = container.find(".team__svg");

  container.addClass("activeteam");
  svgBlock.addClass("team__svg--active")
  contentWrapper.height(reqHeight);
}

const closeEveryItem = container => {
  const items = container.find(".team__desc-wrapper");
  const itemContainer = container.find(".team__item");
  const itemSvgBlock = container.find(".team__svg");

  itemContainer.removeClass("activeteam");
  itemSvgBlock.removeClass("team__svg--active");
  items.height(0);
}

$(".team__button").click(e => {
  const $this = $(e.currentTarget);
  const container = $this.closest(".team__list");
  const elemContainer = $this.closest(".team__item");


  if (elemContainer.hasClass("activeteam")) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }
})


// buttonTeam.addEventListener("click", function (e) {
//     const this = e.currentTarget;
//     openItem(this);
//     .classList.add("team__desc--active");
// })


// $(buttonTeam).click(e=>{
//   const $this = $(e.currentTarget);

//   openItem($this);
// })



















// for (let index = 0; index < buttonTeam.length; index++) {
//   const button = buttonTeam[index];
  
//   button.addEventListener("click", function (e) {
//     const target = e.target;
//     const desc = target.;
//     console.log("piy", desc);

    
     // const target = e.target;
    // const desc = target.nextElementSibling;
    // console.log("dese", desc);
    // desc.classList.add("team__desc--active");
//   });
// }



// linkModalMenu.forEach(item => {
//   item.addEventListener("click", function(e) {
//     linkModalMenu.forEach(el=>{el.classList.remove("mmlinkactive");});
//   item.classList.add("mmlinkactive")
//   if (item.classList.contains("mmlinkactive")) {
//     modalMenu.classList.remove("modalmenu-on");
//   } 
// })
// })




// for(i = 0; i < buttonTeam.length; i++){
//   buttonTeam[i].addEventListener('click', function(event){
//     event.preventDefault();
