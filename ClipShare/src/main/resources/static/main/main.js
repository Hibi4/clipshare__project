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

/* const videos = [
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
console.log(videos);
videos.forEach(video => {
        console.log("video game");
        console.log(video);
        // root div
        const thumbnailDiv = document.createElement('div');
        thumbnailDiv.classList.add('thumbnail');

        /* create div for video item */
        // const videoDiv = document.createElement('div');
        // const videoItem = document.createElement('video');
        // videoItem.src = video.src;
        /*
          function createVideoElement(sources) {
          // Create the video element
          const video = document.createElement('video');
          video.controls = true;

          // Add each source to the video element
          sources.forEach(source => {
            const sourceElement = document.createElement('source');
            sourceElement.src = source.src;
            sourceElement.type = source.type;
            video.appendChild(sourceElement);
          });

          // Add a fallback message
          const fallbackMessage = document.createElement('p');
          fallbackMessage.innerHTML = 'Votre navigateur ne supporte pas la vidéo HTML5. Voici à la place <a href="rabbit320.mp4">un lien vers la vidéo</a>.';
          video.appendChild(fallbackMessage);

          return video;
          }

        // Example usage
        const videoSources = [
          { src: 'rabbit320.mp4', type: 'video/mp4' },
          { src: 'rabbit320.webm', type: 'video/webm' }
        ];

        document.body.appendChild(createVideoElement(videoSources));
                 */


        const infoDiv = document.createElement('div');
        infoDiv.classList.add('thumbnail-info');

        /* create textpane for the name */
        const textDiv = document.createElement('div');
        textDiv.classList.add('thumbnail-title');
        textDiv.textContent = video.name;
        // textDiv.appendChild(textDiv);
        infoDiv.appendChild(textDiv);

        // create div for the image link
        const textDivImg = document.createElement('div');
        const linkDiv = document.createElement('a');
        const img = document.createElement('img');
        img.classList.add('thumbnail-img');
        linkDiv.href = `/videos/${video.id}`
        img.src = "../image/education__logo.jpg"
        img.alt = "image description";
        linkDiv.appendChild(img);
        textDivImg.appendChild(linkDiv);

        /*
        const img = document.createElement('img');
        img.src = video.file;
        /* const thumbnailDiv = document.createElement('div');
        thumbnailDiv.classList.add('thumbnail');

        const img = document.createElement('img');
        img.src = video.src;
        img.alt = video.alt;
        thumbnailDiv.appendChild(img);
         */

        // description div
        const textDescDiv = document.createElement('div');
        textDescDiv.classList.add('thumbnail-desc');
        const textDescSpan = document.createElement('span');
        textDescSpan.classList.add('thumbnail-desc');
        textDescSpan.textContent = video.description;
        textDescDiv.appendChild(textDescSpan);


        /* const metaDiv = document.createElement('div');
        metaDiv.classList.add('thumbnail-meta'); */

        thumbnailDiv.appendChild(infoDiv);
        // should add here video div to the root div
        thumbnailDiv.appendChild(textDivImg);
        thumbnailDiv.appendChild(textDescDiv);
        container.appendChild(thumbnailDiv);


        /* const img = document.createElement('img');
        img.src = video.file; */
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