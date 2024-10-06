console.log("console from javascript")
// const main = document.querySelector(".main");
/*
for (let i = 0; i < 2; i++) {
  //  for (let j = 0; j < 3; j++) {
        // create elements
        const main__div = document.createElement("div");
        const main__element = document.createElement("div");
        const main__element__second = document.createElement("div");
        const main__element__third = document.createElement("div");
        const p_first = document.createElement("p");
        const p_second = document.createElement("p");
        const p_third = document.createElement("p");
        const span__first = document.createElement("span");
        const span__second = document.createElement("span");
        const span__third = document.createElement("span");
        const button__first = document.createElement("button");
        const button__second = document.createElement("button");
        const button__third = document.createElement("button");

        main__element.className = "main__element";
        main__div.className = "main__div";
        main__element__second.className = "main__div";
        main__element__third.className = "main__div";
        p_first.innerText = i+" div";
        p_second.innerText = i+" div";
        p_third.innerText = i+" div";
        button__first.innerText = "Send button";
        button__second.innerText = "Send button second";
        button__third.innerText = "Send button third";
        button__first.className = "send__button";
        // titre de la vidéo
        const title__video = document.createElement("p");


        main__div.appendChild(p_first);
        main__div.appendChild(span__first);
        main__div.appendChild(button__first);
        // second div
        // main__div.appendChild(p_second);
        // main__div.appendChild(span__second);
        // main__element.appendChild(main__div);
        main__element__second.appendChild(p_second);
        main__element__second.appendChild(span__second);
        main__element__second.appendChild(button__second);
        // third div
        main__element__third.appendChild(p_third);
        main__element__third.appendChild(span__third);
        main__element__third.appendChild(button__third);

        main__element.appendChild(main__div);
        main__element.appendChild(main__element__second);
        main__element.appendChild(main__element__third);
        // create three divs and put them all in main__element
        main.appendChild(main__element);
   // }

}*/
/*
const videos = [
        {
                src: '../image/education__logo.jpg',
                alt: 'Cat Fails',
                title: 'Hilarious Cat Fails',
                views: '1.2M views',
                time: '2 days ago'
        },
        {
                src: '/api/placeholder/280/157',
                alt: 'Easy Recipes',
                title: 'Easy 5-Minute Recipes',
                views: '500K views',
                time: '1 week ago'
        },
        {
                src: '/api/placeholder/280/157',
                alt: 'Hidden Beaches',
                title: 'Exploring Hidden Beaches',
                views: '750K views',
                time: '3 days ago'
        },
        {
                src: '/api/placeholder/280/157',
                alt: 'Smartphone Review',
                title: 'Latest Smartphone Review',
                views: '2M views',
                time: '5 days ago'
        }
]; */

const container = document.getElementById('videoContainer');


// Dynamically create thumbnails
videos.forEach(video => {
        console.log("video game");
        console.log(video);
        /* const thumbnailDiv = document.createElement('div');
        thumbnailDiv.classList.add('thumbnail');

        const img = document.createElement('img');
        img.src = video.src;
        img.alt = video.alt;
        thumbnailDiv.appendChild(img);

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('thumbnail-info');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('thumbnail-title');
        titleDiv.textContent = video.name;
        infoDiv.appendChild(titleDiv);

        const metaDiv = document.createElement('div');
        metaDiv.classList.add('thumbnail-meta');

        const viewsSpan = document.createElement('span');
        viewsSpan.textContent = video.name;
        metaDiv.appendChild(viewsSpan);

        const timeSpan = document.createElement('span');
        timeSpan.textContent = video.time;
        metaDiv.appendChild(timeSpan);

        infoDiv.appendChild(metaDiv);
        thumbnailDiv.appendChild(infoDiv);
        container.appendChild(thumbnailDiv); */
});