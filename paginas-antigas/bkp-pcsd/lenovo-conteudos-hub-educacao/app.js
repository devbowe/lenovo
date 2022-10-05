const cardsContent = {
    page1: [
        {
            image: "images/hub_edu-blog-article-02.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-02.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-02.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-02.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-02.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-02.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-02.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-02.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-02.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-02.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-02.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-02.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
    ],

    page2: [
        {
            image: "images/hub_edu-blog-article-03.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-03.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-03.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-03.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
    ],

    page3: [
        {
            image: "images/hub_edu-blog-article-01.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-01.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-01.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
        {
            image: "images/hub_edu-blog-article-01.png",
            type: "Artigo",
            title: "Lenovo e a educação: como temos contribuído para inovação no setor",
            url: "google.com",
        },
    ],
};

const gridPagination = document.querySelector("[data-grid-cards-pagination]");

function createArticleCard(image, type, title, url) {
    const header = document.createElement("header");
    const headerImage = document.createElement("img");
    headerImage.setAttribute("src", image);
    headerImage.setAttribute("aria-hidden", "true");
    headerImage.setAttribute("loading", "lazy");
    headerImage.setAttribute("alt", "");
    header.appendChild(headerImage);

    const main = document.createElement("main");
    const mainSpan = document.createElement("span");
    mainSpan.textContent = type;
    const mainH3 = document.createElement("h3");
    mainH3.textContent = title;
    main.appendChild(mainSpan);
    main.appendChild(mainH3);

    const footer = document.createElement("footer");
    const footerLink = document.createElement("a");
    footerLink.innerHTML = "Descubra mais <span>&#8250;</span>";
    footerLink.setAttribute("href", url);
    footerLink.setAttribute("target", "_blank");
    footer.appendChild(footerLink);

    // article
    const article = document.createElement("article");
    article.classList.add("article-card");

    article.appendChild(header);
    article.appendChild(main);
    article.appendChild(footer);

    return article;
}

function generateCardsList(page) {
    cardsContent[page].forEach((card) => {
        const newCard = createArticleCard(
            card.image,
            card.type,
            card.title,
            card.url
        );

        gridPagination.appendChild(newCard);
    });
}

const buttons = Array.from(document.querySelectorAll("[data-page]"));
buttons[0].classList.add("current");

function changeCurrentButton(newCurrent) {
    buttons.forEach((button) => button.classList.remove("current"));

    buttons[newCurrent - 1].classList.add("current");
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const pageNumber = button.getAttribute("data-page");
        const pageSlug = `page${pageNumber}`;

        gridPagination.innerHTML = "";

        generateCardsList(pageSlug);
        changeCurrentButton(pageNumber);
    });
});

generateCardsList("page1");
