// categories videos

// const main = document.getElementById(".category__folders");
const main = document.querySelector(".category__folders");

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



    /* main__div__first.appendChild(sports__div);
    main__div__first.appendChild(entertainment__div);
    main__div__first.appendChild(technology__div);
    main__div__first.appendChild(music__div);
    main__div__first.appendChild(lifestyle__div); */

    // main div second
    /* main__div__second.appendChild(sports__div);
    main__div__second.appendChild(entertainment__div);
    main__div__second.appendChild(technology__div);
    main__div__second.appendChild(music__div);
    main__div__second.appendChild(lifestyle__div); */


    main.appendChild(entertainment__div);
    main.appendChild(sports__div);
    main.appendChild(technology__div);
    main.appendChild(music__div);
    // main.appendChild(main__div__second);
}
