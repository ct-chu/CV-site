const videoInfo = [
    {
        title:"女工十八——女工合作社的前世今生",
        id: "uhn3ssWYoR8",
    },
    {
        title:"請打開眼睛",
        id: "47qHKu6sHMI",
    },
    {
        title:"Planting rice in Yi O",
        id: "2_MYuECprR8",
    },
    {
        title:"Stargaze and hike in Aso, Japan",
        id: "6Obr-b4v0gw",
    },  
    {
        title:"Winter Hiking",
        id: "pEanEaLKCbw",
    },
    {
        title:"Cycling around the Taiwanese island",
        id: "qHbIzt5Xt6M",
    },
];

const createThumbArray = (item) => {
    let newItem = {};
    newItem.src = `https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`;
    newItem.width = 1280;
    newItem.height = 720;
    newItem.title = item.title;
    return newItem;
};

const createVideoArray = (item) => {
    let newItem = {};
    newItem.src = `https://www.youtube.com/embed/${item.id}`;
    newItem.width = 1280;
    newItem.height = 720;
    newItem.type = "youtube";
    return newItem;
};

const dataThumb = videoInfo.map(createThumbArray);
const dataVideo = videoInfo.map(createVideoArray);


export {
    dataVideo,
    dataThumb,
};