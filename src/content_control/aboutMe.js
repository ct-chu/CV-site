import profilePic from "../assets/images/profilePic.webp";

const dataAbout = {
    title: "Basic info",
    name: "Ching Tin CHU",
    birthYear: "1997",
    location: "Hong Kong",
    proPic: { profilePic },
};

const skills = [
    {
        title: "Photo, video and Design",
        description: "I have the basic skills in graphical and publication design. I have a lot of experience in photography and video production.",
    },
    {
        title: "Coding",
        description: "I worked as a part-time web developer. I also taught programming concepts to children.",
    },
];

const languages = [
    {
        lang: "Cantonese",
        level: "Native",
    },
    {
        lang: "English",
        level: "Proficient: TOEFL-iBT 111/120",
    },
    {
        lang: "Mandarin Chinese",
        level: "Proficient",
    },
    {
        lang: "Japanese",
        level: "Proficient: JLPT N1 173/180",
    },
    {
        lang: "German",
        level: "Beginner",
    },
    {
        lang: "Vietnamese",
        level: "Beginner",
    },
];

const experience = [
    {
        title: "Hok6.com",
        post: "Web developer",
        partTime: true,
        startYear: "2023",
        endYear: "",
        description: "Hok6.com is an online platform providing online courses across different academic fields. I maintain the website and implement new features.",
    },
    {
        title: "Hok6.com",
        post: "Course teacher",
        partTime: true,
        startYear: "2021",
        endYear: "",
        description: "I design and teach Astronomy courses on hok6.com.",
    },
    {
        title: "Preface",
        post: "Course teacher",
        partTime: true,
        startYear: "2021",
        endYear: "2023",
        description: "Preface is a Hong Kong based company providing information technology education to institutions and individuals. I worked with Preface and taught children the basic concepts of programming.",
    },
    {
        title: "The Office of University General Education, CUHK",
        post: "PASS Leader",
        partTime: true,
        startYear: "2017",
        endYear: "2018",
        description: `I work as a PASS leader for "In Dialogue with Nature", a general education course in CUHK about the history and values of science. Peer-Assisted Study Sessions (PASS) are weekly sessions in addition to course lectures and tutorials, where student form groups to work together and discuss their learnings. My role as a PASS leader was to facilitate the discussions and help students to find solutions to academic problems.`,
    },
    {
        title: "Campus TV, Ho Fung College",
        post: "Instructor",
        partTime: true,
        startYear: "2015",
        endYear: "2016",
        description: "As an instructor in a campus TV, my responsibilities were to train my students, equip them with video and photo skills necessary for running a campus TV, while producing videos for the school at the same time.",
    },
];

const volunteer = [
    {
        title: "Starrix",
        post: "Committee member",
        startYear: "2015",
        endYear: "",
        description: "Starrix is a non-profit astronomy organisation based in Hong Kong. I organised astronomy activities for the public, gave lectures in Hong Kong Space Museum, and wrote essays for Starrix. Editing and designing the seasonal newsletter is also one of my duties in Starrix.",
    },
    {
        title: "Happy Corner",
        post: "Committee member",
        startYear: "2019",
        endYear: "2021",
        description: `Happy Corner is a student co-operative in CUHK. The main focuses of Happy Corner are community building and the promotion of alternative lifestyles for the environment and local society. Happy Corner runs a community space in CUHK and provides spaces and facilities for University personnel, where they can rest, work, cook, and held events. Happy corner also organises various types of event, including reading club, film sharing, community kitchen and workshops, often themed after environmental or social issues. In order to promote the reasource sharing in the community, Happy Corner also invented a community currency "Happy Coins", which members can use on second handed goods trading, community work and potentially skill exchange.`,
    },
    {
        title: "Volunteer Development Committee, VolTra",
        post: "Committee member",
        startYear: "2017",
        endYear: "2019",
        description: "VolTra is a Hong Kong-based NGO, dedicated to promoting International Voluntary Service. VolTra organises international workcamp in several local project sites, and send volunteers to overseas workcamps all over the world. As a member of its Volunteer Development Committee, I am involved in the process of designing and organising activities for volunteer development.",
    },
    {
        title: "Agricultural Development Group, CUHKSU",
        post: "Secretary of Promotion and Publication",
        startYear: "2018",
        endYear: "2019",
        description: "Agricultural Development Group is a student society in The Chinese University of Hong Kong. We organise market for local farmers in our university, offer chances for students and staff to farm on campus and hold various activities promoting local agriculture. My position also required me to do design and promotion for the society.",
    },
    {
        title: "The Astronomy Club, CUHKSU",
        post: "President",
        startYear: "2016",
        endYear: "2017",
        description: "I worked as the president of the astronomy club of my university. With my committee members, I have organised a lot of astronomy activities in my university, including stargazing camps, lectures, and a stargazing tour to Inner Mongolia.",
    },
];

const worktimeline = [
    {
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
];

export {
    dataAbout,
    worktimeline,
    skills,
    experience,
    volunteer,
    languages,
};