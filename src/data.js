/* ==================================================================
   data.js — every piece of content on the site lives here.
   Edit this file; the components never need to change.
   ================================================================== */

export const PROFILE = {
  first: "Eshaan Rao",
  last: "Kodavuru",
  fullName: "Eshaan Rao Kodavuru",
  tagline: "Building technology. Creating experiences. Solving meaningful problems.",
  location: "Bangalore, Karnataka, India",
  email: "",
  bio: [
    "Hi, I'm Eshaan, an A Level student with a strong interest in Computer Engineering and technology. I enjoy bringing ideas to life through engineering, programming, and creative problem-solving — whether I'm developing a game, exploring computer engineering, leading school events, or performing on stage.",
    "I enjoy solving problems that combine logic, creativity, and innovation. Over the years, I've explored these interests through programming, engineering competitions, theatre productions, leadership roles, and independent projects. These experiences have helped me become adaptable, collaborative, and confident in turning ideas into practical outcomes.",
    "I'm driven by curiosity and the excitement of creating something from scratch. I believe some of the best learning happens through building, experimenting, and working with others to create something meaningful.",
  ],
  socials: {
    github: "",
    scholar: "",
    linkedin: "",
    codeforces: "",
    fide: "",
    imo: "",
    wespa: "",
    twitter: "",
  },
  cv: "",
  photo: "/profile_photo.jpg",
  aboutPhoto: "/about_photo.jpg",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Experience",
    children: [
      { label: "Work Experience", to: "/work" },
      { label: "Featured Projects", to: "/projects" },
      { label: "Areas of Interest", to: "/publications" },
    ],
  },

  { label: "Achievements", to: "/awards" },
  {
    label: "Leadership & Activities",

      label: "Leadership", to: "/volunteering",

  },

  { label: "Activities", to: "/sports" },


];

/* ---- Professional exposure (renders as "Work Experience" cards) ---- */

export const EXPERIENCE = [
  {
    slug: "bis-library",
    role: "Library Management",
    org: "Bangalore International School Library",
    logo: "",
    location: "Bangalore, India",
    dates: "",
    meta: "Bangalore, India ·",
    badge: "Work Exposure",
    desc: "Supported library operations by organising resources, maintaining digital records, assisting users, and managing information systems.",
    bullets: [
      "Organised physical and digital library resources",
      "Maintained digital records and information systems",
      "Assisted users with information services",
    ],
    tags: ["Data Management", "Digital Records", "Information Services", "Library Systems"],
    featured: true,
  },
  {
    slug: "ovam-hospital",
    role: "Hospital Administration Exposure",
    org: "Ovam Hospital",
    logo: "",
    location: "India",
    dates: "",
    meta: "India ·",
    badge: "Work Exposure",
    desc: "Observed hospital workflows and gained an understanding of how healthcare institutions are organised and managed.",
    bullets: [
      "Observed day-to-day hospital operations and workflows",
      "Studied how healthcare institutions are structured and administered",
    ],
    tags: ["Hospital Operations", "Workflow Management", "Administration"],
    featured: true,
  },
  {
    slug: "mathco",
    role: "Industry Exposure",
    org: "MathCo",
    logo: "",
    location: "India",
    dates: "",
    meta: "India ·",
    badge: "Work Exposure",
    desc: "Gained insight into technology-driven problem solving and professional work environments.",
    bullets: [
      "Observed technology-driven approaches to problem solving",
      "Experienced a professional, collaborative work environment",
    ],
    tags: ["Technology", "Problem Solving", "Professional Exposure"],
    featured: true,
  },
];

/* ---- Projects ---- */

export const PROJECTS = [
  {
    name: "Pokémon Distortion",
    org: "Independent Game Development",
    meta: "Summer passion project",
    desc: "Designed and developed my own computer game, applying programming, game mechanics, testing, and creative design throughout the development process.",
    tags: ["Game Development", "Programming", "Game Design"],
    featured: true,
  },
  {
    name: "Drone Racing",
    org: "Tinkerfest",
    meta: "Engineering competition",
    desc: "Participated in Tinkerfest, applying technical understanding and problem-solving in a competitive engineering environment.",
    tags: ["Drones", "Engineering", "Problem Solving"],
    featured: true,
  },
  {
    name: "Computer Game Design",
    org: "Echelon Inter-School Competition",
    meta: "First Place",
    desc: "Winner of the Echelon Inter-School Competition for Computer Game Design.",
    tags: ["Game Design", "Competition", "Innovation"],
    featured: true,
  },
  {
    name: "KRUU Research Project",
    org: "Academic Research",
    meta: "Collaborative project",
    desc: "Contributed to an academic research project, strengthening my research, analytical thinking, and collaborative skills.",
    tags: ["Research", "Critical Thinking", "Collaboration"],
    featured: false,
  },
];

/* ---- Achievements ---- */

export const AWARDS = [
  {
    icon: "🥈",
    title: "MAA AMC 12",
    meta: "Mathematics",
    detail: "Second Place.",
    link: "",
    featured: true,
  },
  {
    icon: "🥇",
    title: "Echelon Inter-School Competition — Computer Game Design",
    meta: "Game Design",
    detail: "First Place.",
    link: "",
    featured: true,
  },
  {
    icon: "🥇",
    title: "BIS Science & Math Fest",
    meta: "Science & Mathematics",
    detail: "First Place.",
    link: "",
    featured: true,
  },
  {
    icon: "📐",
    title: "Canadian Intermediate Mathematics Contest",
    meta: "Mathematics",
    detail: "Participant.",
    link: "",
    featured: true,
  },
  {
    icon: "🚁",
    title: "Tinkerfest Drone Racing",
    meta: "Engineering",
    detail: "Participant.",
    link: "",
    featured: false,
  },
  {
    icon: "🎭",
    title: "Xanadu Inter-School Theatre Competition",
    meta: "2023 & 2024",
    detail: "First Place in both 2023 and 2024.",
    link: "",
    featured: true,
  },
  {
    icon: "🎨",
    title: "Painting Exhibitions",
    meta: "Creative Arts",
    detail: "Participated in painting exhibitions after exploring multiple artistic mediums over several years.",
    link: "",
    featured: false,
  },
  {
    icon: "🎸",
    title: "Trinity Guitar Examinations",
    meta: "Music",
    detail: "Currently pursuing Trinity Guitar examinations.",
    link: "",
    featured: false,
  },
  {
    icon: "🤝",
    title: "Deputy Cultural Secretary — Student Council",
    meta: "Leadership",
    detail: "Elected to a student council leadership role, coordinating major school cultural events.",
    link: "",
    featured: false,
  },
];

/* ---- Areas of interest ---- */

export const ARTICLES = [
  {
    title: "Computer Engineering",
    outlet: "Intended major — hardware, software, and the systems that connect them",
    link: "",
  },
  {
    title: "Game Development",
    outlet: "Game mechanics, programming, testing, and creative design",
    link: "",
  },
  {
    title: "Engineering & Robotics",
    outlet: "Drone technology and hands-on competitive engineering challenges",
    link: "",
  },
  {
    title: "Research & Analytical Thinking",
    outlet: "Academic research, structured problem solving, and collaborative enquiry",
    link: "",
  },
];

/* ---- Leadership, activities & community ---- */

export const VOLUNTEER = {
  stats: [
    { value: "5+", label: "Major School Events Led" },
    { value: "2×", label: "Inter-School Theatre Wins" },
    { value: "3", label: "Work Exposure Placements" },
  ],
  orgs: [
    {
      name: "Student Council",
      role: "Deputy Cultural Secretary",
      desc: "Planned and coordinated major school events, including MAAD Fest, Xanadu (Inter-School Fest), Teachers' Day, Diwali celebrations, bake sales, and other cultural initiatives. Focus areas: event planning, team coordination, and student leadership.",
    },
    {
      name: "Theatre",
      role: "Actor & Backstage Management",
      desc: "Performed as an actor while also contributing to backstage management for school productions. First place at the Xanadu Inter-School Competition in both 2023 and 2024.",
    },
    {
      name: "Science in Action Exhibition",
      role: "Volunteer · Jawaharlal Nehru Planetarium",
      desc: "Volunteered at the Science in Action Exhibition, supporting science outreach and public engagement.",
    },
    {
      name: "Art & Music",
      role: "Painting & Guitar",
      desc: "Explored multiple artistic mediums over several years and participated in painting exhibitions, while pursuing Trinity Guitar examinations and continuing to develop musical skills.",
    },
  ],
};

/* ---- Arts, music & creative pursuits ---- */

export const SPORTS = [
  {
    icon: "🎭",
    name: "Theatre",
    desc: "Performed as an actor and contributed to backstage management for school productions, winning first place at the Xanadu Inter-School Competition in 2023 and 2024.",
  },
  {
    icon: "🎨",
    name: "Painting",
    desc: "Explored multiple artistic mediums over several years and participated in painting exhibitions.",
  },
  {
    icon: "🎸",
    name: "Guitar",
    desc: "Pursuing Trinity Guitar examinations while continuing to develop musical skills.",
  },
  {
    icon: "🚁",
    name: "Drone Racing",
    desc: "Competed at Tinkerfest, applying technical understanding and problem-solving in a competitive engineering environment.",
  },
  {
    icon: "🌍",
    name: "Community Engagement",
    desc: "Volunteered at the Science in Action Exhibition at Jawaharlal Nehru Planetarium, supporting science outreach and public engagement.",
  },
];

/* ---- Skills ---- */

export const SKILLS = [
  {
    group: "Technical",
    items: ["Programming", "Game Design", "Game Development", "Drone Technology"],
  },
  {
    group: "Professional",
    items: ["Communication", "Organisation", "Professionalism", "Adaptability"],
  },
  {
    group: "Leadership & Creative",
    items: ["Leadership", "Collaboration", "Event Management", "Creative Expression"],
  },
  {
    group: "Research & Thinking",
    items: ["Research", "Critical Thinking", "Innovation", "Problem Solving"],
  },
  {
    group: "A Level Subjects",
    items: ["Mathematics", "Physics", "Chemistry", "Biology"],
  },
];

export const FOOTER_NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Work Experience", to: "/work" },
  { label: "Featured Projects", to: "/projects" },
  { label: "Areas of Interest", to: "/publications" },
  { label: "Achievements", to: "/awards" },
  { label: "Leadership", to: "/volunteering" },
  { label: "Activities", to: "/sports" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER_PROFILES = [
  // No external profile links were provided in the source content.
];
