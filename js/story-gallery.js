const storyGallery = [
    {
        num: '0',
        title: 'this is a title',
        src: 'img/amisch/amisch-1.jpg',
        description: 'this is the image description'
    },
    {
        num: '1',
        title: 'this is a title',
        src: 'img/amisch/amisch-2.jpg',
        description: 'this is the image description'
    },
    {
        num: '2',
        title: 'this is a title',
        src: 'img/amisch/amisch-3.jpg',
        description: 'this is the image description'
    },
    {
        num: '3',
        title: 'this is a title',
        src: 'img/amisch/amisch-4.jpg',
        description: 'this is the image description'
    },
    {
        num: '4',
        title: 'this is a title',
        src: 'img/amisch/amisch-5.jpg',
        description: 'this is the image description'
    },
    {
        num: '5',
        title: 'this is a title',
        src: 'img/amisch/amisch-6.jpg',
        description: 'this is the image description'
    },
    {
        num: '6',
        title: 'this is a title',
        src: 'img/amisch/amisch-7.jpg',
        description: 'this is the image description'
    },
];

const storyScrollerContainer = document.getElementById('story-gallery-scroller');
const storyGalleryBody = document.getElementById('story-gallery-img-enlarged');

storyScrollerContainer.addEventListener('click', (e) => {
    if (e.target.className === 'img-container') {
        let img = e.target.children[0];
        let imgDataNum = parseInt(img.getAttribute('data-img'));
        
        storyGalleryBody.style.backgroundImage = `url("${storyGallery[imgDataNum].src}")`;
        console.log(storyGallery[imgDataNum].src);
    }
});