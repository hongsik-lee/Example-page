let header = document.querySelector(".main-header");
let headerHeight = header.offsetHeight;

window.onscroll = function () {
  let windowTop = window.scrollY;
  if (windowTop >= headerHeight) {
    header.classList.add("drop");
  } else {
    header.classList.remove("drop");
  }
};

function goToLink(event, url) {
  var type = event.type;

  if (type === 'click' || (type === 'keydown' && event.keyCode === 13)) {
    window.location.href = url;

    event.preventDefault();
    event.stopPropagation();
  }
}