//Flickr server id for my photos
const SERVER_ID = "65535";

// Flickr api info for my wide field astrophoto
const widePhotoInfo = [
    {
        id: 52867370713,
        secret: "8b642431bb",
        width: 1024,
        height: 682,
    },
    {
        id: 52866352317,
        secret: "9b25bcc84f",
        width: 682,
        height: 1024,
    },
    {
        id: 52866928126,
        secret: "68e7304126",
        width: 1024,
        height: 682,
    },
    {
        id: 52866352297,
        secret: "cc10a4a68b",
        width: 1024,
        height: 682,
    },
    {
        id: 52867092214,
        secret: "9718c049dd",
        width: 1024,
        height: 682,
    },
    {
        id: 52866928156,
        secret: "5f3e243dcd",
        width: 1024,
        height: 682,
    },
    {
        id: 52867092204,
        secret: "5c3f357e24",
        width: 682,
        height: 1024,
    },
    {
        id: 52870922458,
        secret: "e445567266",
        width: 1024,
        height: 682,
    },
];

// Flickr api info for my telescope astrophoto
const zoomPhotoInfo = [
    {
        id: 52867094849,
        secret: "a4c22cf2c6",
        width: 1024,
        height: 682,
    },
    {
        id: 52867373133,
        secret: "396a85e748",
        width: 1024,
        height: 682,
    },
    {
        id: 52867319665,
        secret: "9a8ff18ac7",
        width: 1024,
        height: 682,
    },
    {
        id: 52866354697,
        secret: "f3e15be19c",
        width: 1024,
        height: 682,
    },
    {
        id: 52867094824,
        secret: "a2264d5f82",
        width: 1024,
        height: 682,
    },
    {
        id: 52867094794,
        secret: "342bdde075",
        width: 1024,
        height: 682,
    },
    {
        id: 52867319620,
        secret: "c50eaeb8a7",
        width: 1024,
        height: 682,
    },
    {
        id: 52867094799,
        secret: "d8ac2e62f9",
        width: 1024,
        height: 682,
    },
    {
        id: 52867317135,
        secret: "02015aa5eb",
        width: 1024,
        height: 682,
    },
    {
        id: 52870656089,
        secret: "7f7f8e2ee5",
        width: 1024,
        height: 1024,
    },
    {
        id: 52870923813,
        secret: "d36a49c28d",
        width: 1024,
        height: 682,
    },
    {
        id: 52870488816,
        secret: "89226f8139",
        width: 1024,
        height: 682,
    },
];

const createPhotoArray = (item) => {
    const LINK = `https://live.staticflickr.com/${SERVER_ID}/${item.id}_${item.secret}_b.jpg`;
    const WIDTH = item.width;
    const HEIGHT = item.height;
    let newItem = {};
    newItem.src = LINK;
    newItem.width = WIDTH;
    newItem.height = HEIGHT;
    return newItem;
};

const dataAstrophotoStarryNights = widePhotoInfo.map(createPhotoArray);

const dataAstrophotoObjects = zoomPhotoInfo.map(createPhotoArray);

export {
    dataAstrophotoStarryNights,
    dataAstrophotoObjects,
};