const sliderArrowClicked = (direction, carousel) => {
    if (direction == "right") {
        if (carousel.dataset.displayedImage < carousel.dataset.imagesAmount) {
            carousel.dataset.displayedImage++;
        }
    }
    if (direction == "left") {
        if (carousel.dataset.displayedImage > 1) {
            carousel.dataset.displayedImage--;
        }
    }
    carousel.querySelector(".image-number-indicator").innerText =
        carousel.dataset.displayedImage + " / " + carousel.dataset.imagesAmount;
    carousel.querySelector(".images-container").scrollLeft =
        (carousel.dataset.displayedImage - 1) *
        carousel.querySelector(".images-container").clientWidth;
};
document.querySelectorAll(".carousel").forEach((carousel) => {
    // counts the number of images in the carousel
    carousel.dataset.imagesAmount = 0;
    carousel.querySelectorAll(".images-container img").forEach(() => {
        carousel.dataset.imagesAmount++;
        carousel.querySelector(".dots-container").innerHTML += "<div></div>";
    });
    /* for the mobile version, makes the first dot lighter than the others
    so we can understand that we are seeing the first image */
    carousel.querySelector(".dots-container div").classList.add("selected");

    /* for the desktop version, indicates the number of images
    in the carousel and the current image number */
    carousel.dataset.displayedImage = 1;
    carousel.querySelector(".image-number-indicator").innerText =
        carousel.dataset.displayedImage + " / " + carousel.dataset.imagesAmount;

    //changes the selected dot when we change image (mobile version)
    carousel
        .querySelector(".images-container")
        .addEventListener("scroll", (e) => {
            i = Math.round(e.target.scrollLeft / e.target.clientWidth);
            carousel
                .querySelectorAll(".dots-container div")
                .forEach((element) => {
                    element.classList.remove("selected");
                });
            carousel
                .querySelectorAll(".dots-container div")
                [i].classList.add("selected");
            carousel.dataset.displayedImage = i + 1;
        });

    // desktop version, actions when we click on arrows
    carousel.querySelector(".right-arrow").addEventListener("click", () => {
        sliderArrowClicked("right", carousel);
    });
    carousel.querySelector(".left-arrow").addEventListener("click", () => {
        sliderArrowClicked("left", carousel);
    });
});

const setCarouselHeight = () => {
    document.querySelectorAll(".carousel").forEach((carousel) => {
        let imageRatioSum = 0;
        let imagesAmount = 0;
        carousel.querySelectorAll(".images-container img").forEach((img) => {
            if (img.naturalHeight != 0) {
                imageRatioSum += img.naturalWidth / img.naturalHeight;
                imagesAmount++;
            }
        });
        averageImageRatio = imageRatioSum / imagesAmount;
        console.log(imageRatioSum, averageImageRatio);
        let carouselHeight =
            Math.ceil(carousel.clientWidth / averageImageRatio) + "px";
        carousel.style.height = carouselHeight;
    });
};
setCarouselHeight();
window.addEventListener("resize", () => {
    setCarouselHeight();
    document.querySelectorAll(".carousel").forEach((carousel) => {
        carousel.querySelector(".images-container").scrollLeft =
            (carousel.dataset.displayedImage - 1) *
            carousel.querySelector(".images-container").clientWidth;
    });
});
// resets the carousel(s) when we refresh the page
window.onload = () => {
    document
        .querySelectorAll(".carousel")
        .forEach(
            (carousel) =>
                (carousel.querySelector(".images-container").scrollLeft = 0)
        );
};
