window.onload = function() {
  const images = document.querySelector('.featured-works__images');

  images.addEventListener('click', (e) => {
    if (e.target.tagName !== 'IMG') return;
    const img = e.target;
    const src = img.getAttribute('src');
    let appearImage = "<div id='appear-image-div'></div>";
    appearImage = appearImage.concat(`<img id="appear-image" src='${src}'></img>`);
    document.querySelector('body').insertAdjacentHTML('afterbegin', appearImage);
    document.getElementById('appear-image-div').addEventListener('click', (e) => {
      e.target.remove();
      document.getElementById('appear-image').remove();
    });
  });
}
