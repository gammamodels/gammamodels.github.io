// https://stackoverflow.com/a/21070237

IMPORTED_MATHJAX = false;

function addScript(src) {
  var s = document.createElement('script');
  s.setAttribute('src', src);
  s.setAttribute('async', true);
  document.body.appendChild(s);
  console.log(s);
}

function show(elements, specifiedDisplay) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].innerHTML = elements[index].getAttribute('latex');
    // console.log(elements[index].getAttribute('latex'));
  }

  if (!IMPORTED_MATHJAX) {
    addScript("https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js");
    IMPORTED_MATHJAX = true;
  } else {
    MathJax.typeset();
  }

}

function hide(elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].innerHTML = elements[index].getAttribute('raw');
  }
}

function switch_listener(event) {
	if (event.currentTarget.checked) {
		show(document.querySelectorAll('.mathjax'));
    document.querySelector('.latex_font').style.color = '#bb2222';
	} else {
		hide(document.querySelectorAll('.mathjax'));
    document.querySelector('.latex_font').style.color = '#969696';
	}
}

const checkbox = document.getElementById('latex_checkbox')
checkbox.addEventListener('change', switch_listener)
