// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff7f7f",
  firstName: "Abinaya",
  middleName: "",
  lastName: "Suresh",
  message: "Computer Engineer, Researcher",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/AbiSu-04",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/abinaya-suresh-050779289/",
    },
  ],
};

// #ff9b11,
// #9b59b6,
// #ecf0f1
// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/images.png"),
  imageSize: 375,
  message:
    "A STEM student pursuing undergraduate in Bachelors of Computer Engineering at PSG College of Technology, India. Passionate about continuous learning and exploring new opportunities in Data Analytics, Machine Learning.",
  // resume: require("../editable-stuff/resume_github.pdf"),
  resume: "https://drive.google.com/file/d/1_zYfu76eFSdsiIZYHwLtJ2pxilxNxZl4/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "AbiSu-04", //i.e."johnDoe12Gh"
  reposLength: 0 ,
  specificRepos: ["Local-Tourism","Medical-Supply-Management","SPD_BACKEND","SPD_frontend","Skill-Sculpt"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/images.png"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/images.png"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 75 },
    { name: "C", value: 65 },
    { name: "Java", value: 60 },
    { name: "Linux", value:65 },
    { name: "Flask", value: 70 },
    { name: "MySQL", value: 70 },
    { name: "FastAPI", value: 50 },
  ],
  softSkills: [
    { name: "Collaboration", value: 70 },
    { name: "Positivity", value: 80 },
    { name: "Goal-Oriented", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Empathy", value: 75 },
    { name: "Organization", value: 70 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Get in touch with me via email at sureshabinaya04[AT]gmail[DOT]com",
  // email: "sureshabinaya04[AT]gmail[DOT]com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Research Trainee',// Here Add Company Name
      companylogo: require('../assets/img/LOGO(1).png'),
      date: 'August 2021 – June 2022',
    },
    {
      role: 'Intern',
      companylogo: require('../assets/img/logo_1(1).png'),
      date: 'Janurary 2021 – April 2021',
    },
  ]
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
