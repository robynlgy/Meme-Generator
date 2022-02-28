const form = document.querySelector("form");
const memeSection = document.querySelector("#memeSection");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let meme = document.createElement('div');
  let top_text = document.createElement('div');
  let bottom_text = document.createElement('div');
  let img = document.createElement('img');
  let del = document.createElement('div');

  let wrap_top_text = document.createElement('div');
  wrap_top_text.classList.add("wrap_top_text", 'p-1');
  let wrap_bottom_text = document.createElement('div');
  wrap_bottom_text.classList.add("wrap_bottom_text", 'p-1');


  meme.classList.add('meme', 'col-lg-7', 'mb-4', 'p-1');
  img.src = form.elements.imgLink.value;
  top_text.classList.add("top_text");
  top_text.innerText = form.elements.topText.value;
  bottom_text.classList.add("bottom_text");
  bottom_text.innerText = form.elements.bottomText.value;
  del.innerText = "\u2716";
  del.classList.add("del");

  wrap_top_text.appendChild(top_text);
  wrap_bottom_text.appendChild(bottom_text);
  meme.appendChild(wrap_top_text);
  meme.appendChild(img);
  meme.appendChild(wrap_bottom_text);
  meme.appendChild(del);
  memeSection.appendChild(meme);

  meme.addEventListener('mouseenter', function () {
    del.classList.remove('d-none');
  });
  meme.addEventListener('mouseleave', function () {
    del.classList.add('d-none');
  });

  meme.addEventListener('click', function (e) {
    meme.remove();
  });
  // Clear form
  form.elements.imgLink.value = '';
  form.elements.topText.value = '';
  form.elements.bottomText.value = '';
});

