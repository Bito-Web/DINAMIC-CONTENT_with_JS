// --- VARIABLES ---
const section = document.querySelector(".section");
const _1 = document.querySelector("#_1");
const _2 = document.querySelector("#_2");
const _3 = document.querySelector("#_3");

// --- DATA ---
const images = [
    {
        url: "https://picsum.photos/id/201/1920/1080",
        alt: "Image _1"
    },
    {
        url: "https://picsum.photos/id/202/1920/1080",
        alt: "Image _2"
    },
    {
        url: "https://picsum.photos/id/203/1920/1080",
        alt: "Image _3"
    }
]
const text_content = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu."
    },
    {
        text: "Praesent ligula quam, posuere nec fermentum viverra, dignissim eget nisi. Sed non nisl turpis. Vivamus."
    }
] 

// --- HTML TEMPLATES ---
const banner = `
    <div>
        <h2>Banner Nº 1</h2>
        <img src="${images[0].url}" alt="${images[0].alt}"/>
        <p>${text_content[0].text}</p>
    </div>
    <div class="half">
        <div>
            <img src="${images[0].url}" alt="${images[0].alt}"/>
        </div>
        <div>
        <h2>Other content</h2>
            <p>${text_content[0].text}</p>
        </div>
    </div>
`;
const banner_2 = `
    <div>
        <h2>Banner Nº 2</h2>
        <p>${text_content[1].text}</p>
        <img src="${images[1].url}" alt="${images[1].alt}"/>
    </div>
`;
const banner_3 = `
    <div>
        <h2>Banner Nº 3</h2>
        <img src="${images[2].url}" alt="${images[2].alt}"/>
    </div>
    <div class="half">
        <div>
        <h2>Other content</h2>
            <p>${text_content[0].text}</p>
        </div>
        <div>
            <img src="${images[0].url}" alt="${images[0].alt}"/>
        </div>
    </div>
`;

// --- FUNCTIONS ---
function buildHtml(item) {
    section.innerHTML = "";
    section.innerHTML =  item;
}

function itemSelectedStyles(item, item_2, item_3) {
    item.classList.add("selected");
    item_2.classList.remove("selected");
    item_3.classList.remove("selected");

}

function itemClicked(item, object) {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        buildHtml(object);

        if (item.getAttribute("id") == _1.getAttribute("id")) {
            itemSelectedStyles(_1, _2, _3);
        }else if (item.getAttribute("id") == _2.getAttribute("id")) {
            itemSelectedStyles(_2, _1, _3);
        }else if (item.getAttribute("id") == _3.getAttribute("id")) {
            itemSelectedStyles(_3, _2, _1);
        }
    });
}

// --- CALLBACK FUNCTIONS ---
window.addEventListener("load", () => {
    section.innerHTML =  banner;
    itemSelectedStyles(_1, _2, _3);
})
itemClicked(_1, banner);
itemClicked(_2, banner_2);
itemClicked(_3, banner_3);
