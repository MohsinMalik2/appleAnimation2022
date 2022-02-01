const mainHtml = document.documentElement;
const cranser = document.getElementById("mainScreen");
const contextCanvas = cranser.getContext("2d");

const heightCount = 148;
const firstOne = index => (
    `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)

const firstImages = () => {
    for (let i = 1; i < heightCount; i++) {
        const img = new Image();
        img.src = firstOne(i);
    }
};

const img = new Image()
img.src = firstOne(1);
cranser.width = 1158;
cranser.height = 770;
img.onload = function() {
    contextCanvas.drawImage(img, 0, 0);
}

const updateImage = index => {
    img.src = firstOne(index);
    contextCanvas.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
    const scrollTop = mainHtml.scrollTop;
    const maxScrollTop = mainHtml.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const imageIndex = Math.min(
        heightCount - 1,
        Math.ceil(scrollFraction * heightCount)
    );

    requestAnimationFrame(() => updateImage(imageIndex + 1))
});

firstImages()