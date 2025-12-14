export const projects = [
  {
    id: 1,
    title: "How I build a Auth System in React",
    description: "This is an auth system built from scratch. It uses React Context to hold global auth state and React Query for server interactions and caching. It supports user registration, login and persistent sessions via refresh tokens, and centralizes auth logic into custom hooks (useAuth, useAxiosPrivate, useRefreshToken, useLogout) to handle token storage, automatic token refresh, and authenticated API requests for a responsive and secure UX.",
    tech: ["React", "React Query", "Axios", "Express", "MongoDB", "JWT", "Cookies"],
    demoLink: "https://auth2-vgyd.onrender.com/",
    codeLink: "https://github.com/puskarpy/authentication",
    imageUrl: "/auth.jpg"
  },
  {
    id: 2,
    title: "Weather Forecast App",
    description: "A dynamic weather application that provides real-time weather information and forecasts. Built with a clean, user-friendly interface that displays current weather conditions, temperature, and weather predictions for any location.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API", "Responsive Design"],
    demoLink: "https://puskarpy.github.io/weather/",
    codeLink: "https://github.com/puskarpy/weather",
    imageUrl: "/weather.png"
  },
  {
    id: 3,
    title: "Rock Paper Scissors Game",
    description: "An interactive Rock, Paper, Scissors game with score tracking and clean UI. Features include real-time score updates, game reset functionality, and responsive design for an engaging gaming experience.",
    tech: ["HTML", "CSS", "JavaScript", "DOM Manipulation", "Game Logic"],
    demoLink: "https://puskarpy.github.io/rps/",
    codeLink: "https://github.com/puskarpy/rps",
    imageUrl: "/rps.png"
  },
  {
    id: 4,
    title: "A Blog App",
    description: "Bloggur is my humble attempt at a blogging platform—no fancy frontend libraries, no React acrobatics. Just good old Node.js, Express, and EJS, like it’s 2015 again. Users can sign up, log in, log out, write blogs, and drop comments. That’s it (for now). Styling? Yeah, it's Bootstrap—don’t expect Tailwind-level drip. It works, it's functional, and it’s teaching me the backend fundamentals properly. UD operations (Update and Delete) are still under construction, but hey, one thing at a time.",
    tech: ["Bootstrap", "EJS", "NodeJS", "Express"],
    demoLink: "",
    codeLink: "https://github.com/puskarpy/blogur",
    imageUrl: "/blog.jpg"
  },
  {
    id: 5,
    title: "Complete Todo App",
    description: "A full-stack MERN (MongoDB, Express, React, Node.js) Todo application with features for adding, editing, deleting, and marking tasks as completed. Built with React Query for state management and Axios for API requests.",
    tech: ["React", "NodeJS", "Express", "ReactQuery", "Tailwind"],
    demoLink: "",
    codeLink: "https://github.com/puskarpy/completetodo",
    imageUrl: "/todo.jpg"
  },
];

export default projects;