const fetchNews = async () => {
    try {
        const response = await fetch("api/news.JSON");
        if (!response.ok) {
            throw new Error("Failed to fetch News");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching News:", error);
        return [];
    }
};

const renderNews = (news) => {
    const newsContainer = document.querySelector("");
    newsContainer.innerHTML = news
        .map(
            (news)`<section class="news-card">
            <p class="news-card__article">Newsbar</p>
            <p class="news-card__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate</p>
            <p class="news-card__description"> <span class="description-time"></span></p>
        </section>`
        )
        .join("");
};


