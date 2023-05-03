import { dataAstrophotoStarryNights, dataAstrophotoObjects } from "./content_control/astrophotography";
import { contactConfig } from "./content_control/contactMe";
import { dataAbout, worktimeline, skills, experience, volunteer, languages } from "./content_control/aboutMe";

const logotext = "CCT";
const meta = {
    title: "CCT",
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



const socialprofils = {
    facebook: "https://www.facebook.com/ctchu.h/",
    youtube: "https://www.youtube.com/@zetsubounasu",
};

export {
    meta,
    socialprofils,
    logotext,
    introdata,
    dataAbout,
    languages,
    worktimeline,
    skills,
    experience,
    volunteer,
    dataAstrophotoStarryNights,
    dataAstrophotoObjects,
    contactConfig,
};