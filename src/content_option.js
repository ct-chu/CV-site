import { dataAstrophotoStarryNights } from "./content_control/astrophotography";

const EMAILJS_PUBKEY = process.env.EMAILJS_PUBKEY;

const logotext = "CCT";
const meta = {
    title: "Ching Tin CHU",
    description: "I'm Ching Tin CHU, philosophy graduate and amateur astronomer based in Hong Kong.",
};

const introdata = {
    title: "I’m Ching Tin CHU.",
    animated: {
        first: "I love astronomy.",
        second: "I study philosophy.",
        third: "I develop web app.",
    },
    description: "Welcome to my interactive portfolio.",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];



const contactConfig = {
    YOUR_EMAIL: "ctchu@pm.me",
    YOUR_FONE: "+852 95131298",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // emailjs.com details
    EMAILJS_SERVICE_ID: "service_6dsw18r",
    EMAILJS_TEMPLATE_ID: "template_eqewjig",
    EMAILJS_PUBKEY: EMAILJS_PUBKEY,
};

const socialprofils = {
    facebook: "https://www.facebook.com/ctchu.h/",
    youtube: "https://www.youtube.com/@zetsubounasu",
};
export {
    meta,
    dataabout,
    dataAstrophotoStarryNights,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};