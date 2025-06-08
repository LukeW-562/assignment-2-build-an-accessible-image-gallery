const scrollBar = document.getElementById('scrollBar')
const displayArea = document.getElementById('displayArea')

let images=[
    {
        src: './images/IMG_1106.jpg', 
        alt: `A closeup of a red,
        rusted boat's nameplate. The nameplate reads Foxtrot 
        Three in bold, white lettering. There are solar panels 
        to the left of the nameplate, and a warning symbol 
        above it. Behind the boat the sky is cloudy.`     
    }, {
        src: './images/IMG_1109.jpg', 
        alt: `A closeup of the bow of a 
        boat. It is heavily worn, revealing the rusted bare metal 
        below the red paint in areas. It is chained in place, and 
        a grey sky hangs above it.`
    }, {
        src: './images/IMG_1112.jpg', 
        alt: `An image of A red lightship named Sevenstones 
        anchored in a body of water under a cloudy sky. The 
        ship features a central lighthouse-style tower, 
        numerous solar panels on its deck, and is tethered to
         a yellow mooring buoy. Buildings and trees are 
         visible on the distant shoreline in the background.`
    },{
        src: '/images/IMG_1192.jpg',
        alt: `An image of a black, white and orange dredging boat,
        with shipping containers and large cranes 
        lining the background. The bow is lined with tyres, 
        and a yellow dredging arm sits on the deck. The sky above 
        is cloudy.`
    }
]

function createThumbnails() {
    images.forEach(function (image, index) {
        let imageElem = document.createElement('img')
        imageElem.src = image.src
        imageElem.alt = image.alt
        imageElem.addEventListener('click', function() {
            createBigImage(image)
            currentImageIndex = index
        })
        scrollBar.appendChild(imageElem)
    })
}
createThumbnails()

function createBigImage(imgDetails) {
    displayArea.innerHTML = ''
    const bigImage = document.createElement('img')
    bigImage.src = imgDetails.src
    bigImage.alt = imgDetails.alt
    displayArea.appendChild(bigImage)
}