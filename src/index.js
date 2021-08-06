console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetchBreedPics()
    fetchBreeds()

})

function fetchBreedPics() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => data.message.forEach(pic => addPic(pic))
    )
}

function addPic(pic) {
  let container = document.querySelector('#dog-image-container')
  let newElement = document.createElement('img')
  newElement.src = pic
  container.appendChild(newElement)
}

function fetchBreeds() {
  const url = 'https://dog.ceo/api/breeds/list/all'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let breeds = Object.keys(data.message);
      updateBreeds(breeds);
      addBreedSelectionListener(breeds);
    });
}

function updateBreeds(breeds) {
  let list = document.querySelector('#dog-breeds');
  removeChildren(list);
  breeds.forEach(breed => addBreed(breed));
}

function removeChildren(element) {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
}

function selectBreedsByLetter(letter, breeds) {
  updateBreeds(breeds.filter(breed => breed.startsWith(letter)));
}

function addBreedSelectionListener(breeds) {
  let breedDropdown = document.querySelector('#breed-dropdown');
  breedDropdown.addEventListener('change', (e) => { selectBreedsByLetter(e.target.value, breeds);});
}

function  addBreed(breed) {
  let list = document.querySelector('#dog-breeds');
  let li = document.createElement('li');
  li.innerText = breed;
  list.appendChild(li);
  li.addEventListener('click', updateColor);
}

function updateColor(event) {
  event.target.style.color = 'palevioletred';
}