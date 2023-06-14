export async function getNews(title: string) {
    // como fazer para expandir o conteudo da notcia?

    const URL = `https://gnews.io/api/v4/search?q=${decodeURI(title)}&lang=en&country=us&max=9&apikey=dc0bca51b354335a2666ae0abaa8d50c`;
    const response = await fetch(URL);
    const data = await response.json();
    const news = data.articles;
    return news;
}

 export async function fetchNewTitles() {
    const URL = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=9&apikey=dc0bca51b354335a2666ae0abaa8d50c`;
    const response = await fetch(URL);
    const data = await response.json();
    const titles = data.articles.map((item: any) => item.title);
    return titles;
}

export async function fetchNews() {
    const URL = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=9&apikey=dc0bca51b354335a2666ae0abaa8d50c`;
    const response = await fetch(URL);
    const data = await response.json();
    const news = data.articles;
    return news;
}
