//Flickr link
const SECRET = process.env.FLICKR_SECRET;
const SERVER_ID = "65535";
let ID = "";
const LINK = `https://live.staticflickr.com/${SERVER_ID}/${ID}_${SECRET}_b.jpg`;

const photoIDs = [
    52867094849,
    52867373133,
    52867319665,
    52866354697,
    52867094824,
    52867094794,
    52867319620,
    52867094799,
    52867317135,
    52867370713,
    52866352317,
    52866928126,
    52866352297,
    52867092214,
    52866928156,
    52867092204
];

let dataAstrophotoStarryNights = [
    // {
    //     src: { LINK },
    //     alt: { DESCRIPTION },
        
    // },
];

let i = 0;

for (let photoID of photoIDs) {
    ID = photoID;
    dataAstrophotoStarryNights[i] = {
        src: { LINK },
        width: 1024,
        height: 682,
    };
    i++;
};

export {
    dataAstrophotoStarryNights,
};