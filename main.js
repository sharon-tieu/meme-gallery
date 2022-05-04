var gallery = document.querySelector('main');

var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://i.guim.co.uk/img/media/3159275f03b6d13012c68de130bdae219f19acd1/43_0_817_490/master/817.jpg?width=1200&quality=85&auto=format&fit=max&s=20f3322cd3d4c7bfdb1c976a4bc2bcd6',
  'https://i.pinimg.com/originals/50/63/9c/50639c1a376a7a9751d761bb0aff1939.jpg',
  'https://filmdaily.co/wp-content/uploads/2020/11/kermitmemes-lede-1300x730.jpg'

];

var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (event) {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
