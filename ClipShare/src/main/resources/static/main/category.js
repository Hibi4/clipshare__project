// categories videos

// const main = document.getElementById(".category__folders");
/* const main = document.querySelector(".category__folders");

for (let i = 0; i < 1; i++) {

    // const sport__div = document.createElement("div");
    const main__div__first = document.createElement("div");
    // const main__div__second = document.createElement("div");
    // const main__div__third = document.createElement("div");
    // const main__div__four = document.createElement("div");
    const entertainment__div = document.createElement("div");
    const sports__div = document.createElement("div");
    const technology__div = document.createElement("div");
    const music__div = document.createElement("div");
    const lifestyle__div = document.createElement("div");

    // name
    const sport__name = document.createElement("span");
    const entertainment_name = document.createElement("span");
    const technology_name = document.createElement("span");
    const music_name = document.createElement("span");
    const lifestyle_name = document.createElement("span");
    // image
    const sport__image = document.createElement("img");
    const entertainment_image = document.createElement("img");
    const technology_image = document.createElement("img");
    const music_image = document.createElement("img");
    const lifestyle_image = document.createElement("img");
    // description
    const sport__desc = document.createElement("span");
    const entertainment_desc = document.createElement("span");
    const technology_desc = document.createElement("span");
    const music_desc = document.createElement("span");
    const lifestyle_desc = document.createElement("span");

    // initialize values
    main__div__first.className = "main__element";
    sports__div.className = "sports__div";
    entertainment__div.className = "entertainment";
    technology__div.className = "technology";
    music__div.className = "music";
    lifestyle__div.className = "lifestyle";



    /main__div__first.appendChild(sports__div);
    main__div__first.appendChild(entertainment__div);
    main__div__first.appendChild(technology__div);
    main__div__first.appendChild(music__div);
    main__div__first.appendChild(lifestyle__div);

    // main div second
    main__div__second.appendChild(sports__div);
    main__div__second.appendChild(entertainment__div);
    main__div__second.appendChild(technology__div);
    main__div__second.appendChild(music__div);
    main__div__second.appendChild(lifestyle__div);


    main.appendChild(entertainment__div);
    main.appendChild(sports__div);
    main.appendChild(technology__div);
    main.appendChild(music__div);
    // main.appendChild(main__div__second);
} */

const categories = [
    {
        src: '../image/education__logo.jpg',
        alt: 'Cat Fails',
        title: 'Comedy',
        views: '1.2M views',
        time: '2 days ago',
        description: 'Laugh out loud with hilarious clip'
    },
    {
        src: '../image/education__logo.jpg',
        alt: 'Easy Recipes',
        title: 'Education',
        views: '500K views',
        time: '1 week ago',
        description: 'Learn something new every day'
    },
    {
        src: '../image/music__logo.jpg',
        alt: 'Hidden Beaches',
        title: 'Music',
        views: '750K views',
        time: '3 days ago',
        description: 'Discover new tunes and live performance'
    },
    {
        src: '/api/placeholder/280/157',
        alt: 'Smartphone Review',
        title: 'Gaming',
        views: '2M views',
        time: '5 days ago',
        description: 'Watch gameplay and gaming reviews'
    },
    {
        src: '../image/technology__logo.jpg',
        alt: 'Smartphone Review',
        title: 'Technology',
        views: '2M views',
        time: '5 days ago',
        description: 'Stay updated with tech news and reviews'
    },
    {
        src: '../image/sports__logo.jpg',
        alt: 'Smartphone Review',
        title: 'Sports',
        views: '2M views',
        time: '5 days ago',
        description: 'Catch up on the latest sports highlights'
    },
    {
        src: '../image/lifestyle__logo.jpg',
        alt: 'Smartphone Review',
        title: 'Lifestyle',
        views: '2M views',
        time: '5 days ago',
        description: 'Life is all sense'
    },
    {
        src: '../image/lifestyle__logo.jpg',
        alt: 'Smartphone Review',
        title: 'Cooking',
        views: '2M views',
        time: '5 days ago',
        description: 'Discover delicious recipes and cooking tips'
    }
];

const container = document.getElementById('videoContainer');

// Dynamically create thumbnails
categories.forEach(video => {
    const thumbnailDiv = document.createElement('div');
    thumbnailDiv.classList.add('thumbnail');

    const img = document.createElement('img');
    img.src = video.src;
    img.alt = video.alt;
    thumbnailDiv.appendChild(img);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('thumbnail-info');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('thumbnail-title');
    titleDiv.textContent = video.title;
    infoDiv.appendChild(titleDiv);

    const metaDiv = document.createElement('div');
    metaDiv.classList.add('thumbnail-meta');

    const descSpan = document.createElement('span');
    descSpan.textContent = video.description;
    metaDiv.appendChild(descSpan);
    /* const viewsSpan = document.createElement('span');
    viewsSpan.textContent = video.views;
    metaDiv.appendChild(viewsSpan);

    const timeSpan = document.createElement('span');
    timeSpan.textContent = video.time;
    metaDiv.appendChild(timeSpan); */

    infoDiv.appendChild(metaDiv);
    thumbnailDiv.appendChild(infoDiv);
    container.appendChild(thumbnailDiv);
});
