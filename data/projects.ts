const projects = [
  {
    id: "gerayo",
    image: "/gerayo.png",
    title: "Rwanda Public Transport App",
    description:
      "Gerayo is a mobile application designed to provide real-time information about public transport in Rwanda. Users can find nearby bus stops, view bus schedules, and track buses live.",
    languages: ["ReactJS", "Tailwind CSS", "NodeJS", "Firebase"],
    live: "https://gerayo.onrender.com/",
    code: "https://github.com/AnithaUwi",
  },
  {
    id: "momo",
    image: "/momo.png",
    title: "MOMO Transaction-Analysis Dashboard",
    description:
      "A dashboard that provides insights into user transactions – history, trends, and patterns – to help users make informed financial decisions.",
    languages: ["HTML5", "CSS3", "JavaScript", "Flask", "Python", "Firebase"],
    live: "not yet deployed",
    code: "https://github.com/mutabazi-bruno/MoMo-Data-Analysis-Summative-Group-32.git",
  },
  {
    id: "klab",
    image: "/klab.jpeg",
    title: "klab's finances management dashboard",
    description:
      "klab's finances management dashboard is a web application designed to help KLab manage its finances effectively. It provides features for tracking expenses, income, and generating financial reports for each project carried out by klab and it also has a feature of employee management.",
    languages: ["NEXT JS", "TAILWIND", "NODEJS", "EXPRESSJS", "POSTGRESQL"],
    live: "https://financial-manager-two.vercel.app/",
    code: "https://github.com/AnithaUwi/financial-manager.git",
  },
  {
    id: "class_project",
    image: "/save.png",
    title: "  Save_Life App that connects blood donors and recipients",
    description:
      "Save_Life is an app that is designed to connect blood donors around the country with the hospitals in need of blood it has features that allows donors to register with their blood type and location , and then each registered hospital will be able to see the nearest donors on google map after making request the donors with the same bloood type will receive alerts on their phones.",
    languages: ["HTML5", "CSS3", "PHP", "MYSQL", "JAVASCRIPT"],
    live: "not yet deployed",
    code: "https://github.com/Ntare-GAMA/Save-Life.git",
  },
] as const

export default projects
