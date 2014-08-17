var buttons = [].slice.call(document.getElementsByClassName('js-change-panel'));
var panels = [].slice.call(document.getElementsByClassName('js-panel'));

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) {
    var eq = buttons.indexOf(this);

    for (i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('is-active');
    }

    for (i = 0; i < panels.length; i++) {
      panels[i].classList.remove('is-active');
    }

    this.classList.toggle('is-active');
    panels[eq].classList.toggle('is-active');
  });
}
