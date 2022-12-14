const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function makeGallery(imagesArray) {
  const parentGalleryElement = document.querySelector('.gallery');

  parentGalleryElement.style.display = 'flex';
  parentGalleryElement.style.flexDirection = 'column';
  parentGalleryElement.style.listStyle = 'none';
  parentGalleryElement.style.gap = '30px';

  const galleryMarkup = imagesArray
    .map(
      image =>
        `<li><img src='${image.url}' alt='${image.alt}' width="450"></li>`,
    )
    .join('');

  parentGalleryElement.insertAdjacentHTML('afterbegin', galleryMarkup);
}

makeGallery(images);
