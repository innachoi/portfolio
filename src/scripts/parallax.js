
const parallax = document.querySelector('.parallax')

function moveLayersDependOnScroll(wScroll, layers, coef) {
  Array.from(layers).forEach(layer => {
    const divider = layer.dataset.speed;
    const offset = wScroll * divider / coef;

    layer.style.transform = `translateY(-${offset}%)`;
  })
}

let parallaxOptions = {
  element: parallax,
  coef: 10
}

const layers = parallaxOptions.element.children

window.addEventListener('scroll', e => {
  const wScroll = window.pageYOffset;
  moveLayersDependOnScroll(wScroll, layers, parallaxOptions.coef)
})