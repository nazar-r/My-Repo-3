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

const renderNews = (news,) => {
    const newsContainer = document.querySelector("");
    newsContainer.innerHTML = news
        .map(
            (news) //add the html
        )
        .join("");
};


