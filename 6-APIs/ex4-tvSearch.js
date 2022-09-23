const form = document.querySelector('#searchForm');
const section = document.querySelector('section');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchShow = form.elements.query.value;
    const shows = await requestShow(searchShow);
    printImages(shows);
});

const printImages = (shows) => {
    section.innerText = '';
    for (let tvShow of shows) {
        if (tvShow.show.image) {
            const img = document.createElement('IMG');
            img.src = tvShow.show.image.medium;
            section.append(img);
        }
    }
}

const requestShow = async (show) => {
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${show}`);
    return res.data;
};

