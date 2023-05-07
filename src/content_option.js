import { dataAstrophotoStarryNights, dataAstrophotoObjects } from "./content_control/astrophotography";
import { contactConfig } from "./content_control/contactMe";
import { dataAbout, worktimeline, skills, experience, volunteer, languages } from "./content_control/aboutMe";
import { dataVideo, dataThumb } from "./content_control/mediaProduction";

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

const data404 = {
    title: "404 Not Found",
    description: "The page you are looking for doesn't exist. Here's a picture of Shostakovich disco dancing instead.",
};

const socialprofils = {
    facebook: "https://www.facebook.com/ctchu.h/",
    youtube: "https://www.youtube.com/@zetsubounasu",
    instagram: "https://instagram.com/ilma_tanaan?igshid=YmMyMTA2M2Y=",
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
    data404,
    dataVideo,
    dataThumb,
};