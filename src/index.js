console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const imgJson = fetch(imgUrl)
.then(response => response.json())
.then(data => {return data});