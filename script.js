const darkRedTheme = {
    imagePrefix: "rouge",
    styles: {
        primary: "#FE635A",
        "on-background": "#EDE0DE",
        background: "#201A19",
        "on-primary": "#690007",
        neutral20: "#362F2E",
        neutral50: "#7F7574",
        neutral70: "#B4A9A7",
        "surface-variant": "#534341",
    },
};
const lightYellowTheme = {
    imagePrefix: "blanc",
    styles: {
        primary: "#765A00",
        "on-background": "#1E1B16",
        background: "#FFFBFF",
        "on-primary": "#FFFFFF",
        neutral20: "#33302A",
        neutral50: "#7B766F",
        neutral70: "#B0AAA2",
        "surface-variant": "#ECE1CF",
    },
};
const darkYellowTheme = {
    imagePrefix: "noir",
    styles: {
        primary: "#F0C03E",
        "on-background": "#E9E1D9",
        background: "#1E1B16",
        "on-primary": "#3E2E00",
        neutral20: "#33302A",
        neutral50: "#7B766F",
        neutral70: "#B0AAA2",
        "surface-variant": "#47473B",
    },
};
const darkBlueTheme = {
    imagePrefix: "bleu",
    styles: {
        primary: "#B5C4FF",
        "on-background": "#E4E2E6",
        background: "#1B1B1F",
        "on-primary": "#062978",
        neutral20: "#303034",
        neutral50: "#77767A",
        neutral70: "#ACAAAF",
        "surface-variant": "#45464F",
    },
};
const darkGreenTheme = {
    imagePrefix: "vert",
    styles: {
        primary: "#5CE159",
        "on-background": "#E2E3DD",
        background: "#1A1C19",
        "on-primary": "#003A05",
        neutral20: "#2F312D",
        neutral50: "#767873",
        neutral70: "#AAACA6",
        "surface-variant": "#42493F",
    },
};

const setTheme = (theme, event) => {
    for (const key in theme.styles) {
        document
            .querySelector(":root")
            .style.setProperty("--" + key, theme.styles[key]);
        for (
            i = 0;
            i < document.querySelectorAll("#carousel img").length;
            i++
        ) {
            document.querySelectorAll("#carousel img")[i].src =
                "images/" + theme.imagePrefix + "_" + (i + 1) + ".png";
        }
        if (event != undefined) {
            document
                .querySelectorAll("#color-select div")
                .forEach((element) => {
                    element.classList.remove("selected-color");
                });
            event.target.classList.add("selected-color");
        }
    }
};

setTheme(darkBlueTheme);

document.querySelector(".images-container").addEventListener("scroll", (e) => {
    i = Math.round(e.target.scrollLeft / window.innerWidth);

    document.querySelectorAll("#points-container div").forEach((element) => {
        element.classList.remove("selected-point");
    });
    document
        .querySelectorAll("#points-container div")
        [i].classList.add("selected-point");
});
document.querySelector("#buy").addEventListener("click", () => {
    alert('Désolé, le bouton "Acheter" est seulement là pour faire pro...');
});

window.onload = () => {
    document.querySelector(".images-container").scrollLeft = 0;
}