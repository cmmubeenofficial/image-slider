let flag = 3;

function controller(prevNext) {
  flag = flag + prevNext;
  sildeShow(flag);
}

sildeShow(flag);

function sildeShow(num) {
  let slides = document.getElementsByClassName("slide");

  if(num == slides.length){
    flag = 0;
    num = 0;
  }
  if(num < 0){
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for(let slide of slides){
    slide.style.display = 'none'
  }

  slides[num].style.display = "block";
}
