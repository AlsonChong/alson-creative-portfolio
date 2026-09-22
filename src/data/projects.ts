import heroPortrait from "@/assets/hero-portrait.jpg";
import projectAutomotive from "@/assets/project-automotive.jpg";
import projectFashion from "@/assets/project-fashion.jpg";
import projectOutdoor from "@/assets/project-outdoor.jpg";
import projectTravel from "@/assets/project-travel.jpg";

export type ProjectMedia = {
  title: string;
  type: "Photo" | "Video";
  description: string;
  image: string;
  duration?: string;
};

export type ProjectSection = {
  title: string;
  description: string;
  deliverables: string[];
  media: ProjectMedia[];
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  overview: string;
  role: string[];
  thumbnail: string;
  heroMedia: string;
  sections: ProjectSection[];
  gallery: ProjectMedia[];
  credits: string[];
  metadata: { label: string; value: string }[];
};

const monashMotorsport: Project = {
  number: "01",
  slug: "monash-motorsport",
  title: "Monash Motorsport",
  year: "2024–2026",
  category: "Photography / Videography / Publicity",
  description:
    "Building a fast-moving visual identity for a student race team, from launch films to race-week storytelling.",
  overview:
    "Monash Motorsport is where I brought photography, moving image and publicity together across an evolving Formula Student team. The work balances the engineering behind the car with the energy of the people building it.",
  role: ["Photography", "Videography", "Publicity", "Event coordination"],
  thumbnail: projectAutomotive,
  heroMedia: projectAutomotive,
  sections: [
    {
      title: "Car Launch Campaign",
      description:
        "A launch campaign designed to make the new car feel as considered and ambitious as the work behind it.",
      deliverables: ["2 launch videos", "Car launch event coordination", "Campaign photography"],
      media: [
        {
          title: "Launch Film I",
          type: "Video",
          duration: "01:26",
          description: "Cinematic reveal film for the team’s new car.",
          image: projectAutomotive,
        },
        {
          title: "Launch Film II",
          type: "Video",
          duration: "00:42",
          description: "Short-form launch cut for social channels.",
          image: projectFashion,
        },
      ],
    },
    {
      title: "TSAE 2026",
      description:
        "Race-week documentation that followed the work, pressure and community around the team.",
      deliverables: ["4 highlight videos", "Event photography", "Event videography"],
      media: [
        {
          title: "TSAE Highlight Series",
          type: "Video",
          duration: "04 films",
          description: "A four-part highlight series from competition.",
          image: projectOutdoor,
        },
      ],
    },
    {
      title: "Recruitment, ENI Expo & Sponsorship",
      description:
        "Always-on publicity work to bring new people and partners into the team’s world.",
      deliverables: [
        "Recruitment campaign content",
        "ENI Expo booth setup and coordination",
        "Event documentation",
        "Sponsorship and social posts",
      ],
      media: [
        {
          title: "Team Stories",
          type: "Photo",
          description: "People-first documentation for recruitment and social media.",
          image: projectTravel,
        },
      ],
    },
  ],
  gallery: [
    {
      title: "Race Team Portrait",
      type: "Photo",
      description: "A visual record of the team behind the car.",
      image: projectAutomotive,
    },
    {
      title: "On Location",
      type: "Photo",
      description: "Campaign stills made around launch and competition periods.",
      image: projectOutdoor,
    },
  ],
  credits: ["Monash Motorsport", "Student-led Formula SAE team"],
  metadata: [
    { label: "Timeline", value: "2024–2026" },
    { label: "Focus", value: "Campaigns, events, publicity" },
    { label: "Format", value: "Photo, film, social" },
  ],
};

const mufyStudentCouncil: Project = {
  number: "02",
  slug: "mufy-student-council",
  title: "MUFY Student Council",
  year: "2023",
  category: "Videography / Publicity",
  description:
    "Creating the moving-image language and publicity rhythm for a student community throughout its foundation year.",
  overview:
    "For MUFY Student Council, I made videos that helped moments feel shared: introductions, events, recruitment and a closing farewell for the foundation-year cohort. Alongside production, I supported the coordination that turns content into clear public communication.",
  role: ["Videography", "Publicity", "Creative direction", "Publicity coordination"],
  thumbnail: projectFashion,
  heroMedia: projectFashion,
  sections: [
    {
      title: "Committee Introduction & Event Highlights",
      description:
        "An opening introduction followed by fast, energetic recaps that captured the rhythm of campus events.",
      deliverables: ["Committee introductory video", "6 event highlight reels"],
      media: [
        {
          title: "Committee Introduction",
          type: "Video",
          duration: "01:12",
          description: "A first introduction to the council and its people.",
          image: projectFashion,
        },
        {
          title: "Event Highlight Reels",
          type: "Video",
          duration: "06 reels",
          description: "Short-form event stories designed for the student community.",
          image: projectTravel,
        },
      ],
    },
    {
      title: "Recruitment & Sponsorship",
      description:
        "Publicity assets that made joining and partnering with the council feel immediate and welcoming.",
      deliverables: ["Recruitment reels", "Sponsorship posts", "Social media content"],
      media: [
        {
          title: "Recruitment Campaign",
          type: "Video",
          duration: "00:36",
          description: "A short recruitment edit for prospective council members.",
          image: projectOutdoor,
        },
      ],
    },
    {
      title: "Farewell Film",
      description:
        "A final video made to hold the memories of the foundation-year cohort together.",
      deliverables: ["Foundation-year farewell video", "Publicity coordination"],
      media: [
        {
          title: "Foundation Year Farewell",
          type: "Video",
          duration: "03:18",
          description: "A reflective closing film for the cohort.",
          image: heroPortrait,
        },
      ],
    },
  ],
  gallery: [
    {
      title: "Community in Motion",
      type: "Photo",
      description: "Event moments made for a shared student memory.",
      image: projectFashion,
    },
    {
      title: "Campus Stories",
      type: "Photo",
      description: "Still frames from a year of student-led events.",
      image: projectTravel,
    },
  ],
  credits: ["MUFY Student Council", "Foundation Year 2023"],
  metadata: [
    { label: "Timeline", value: "2023" },
    { label: "Focus", value: "Community and publicity" },
    { label: "Format", value: "Video and social" },
  ],
};

const highSchool: Project = {
  number: "03",
  slug: "high-school",
  title: "High School",
  year: "2019–2022",
  category: "Photography / Videography / Film",
  description:
    "The beginning of my visual practice: learning to document a community, then telling stories beyond it.",
  overview:
    "High school was the first chapter of my creative journey. I documented school life through the Student Leader Council, learned the demands of event coverage, and began making short films that would go on to receive international competition recognition.",
  role: ["Photography", "Videography", "Film production", "Student Leader Council media"],
  thumbnail: projectOutdoor,
  heroMedia: projectOutdoor,
  sections: [
    {
      title: "School Event Documentation",
      description:
        "Photography and video work made to preserve the energy, people and milestones of school life.",
      deliverables: ["Event photography", "Event videography", "Student Leader Council media work"],
      media: [
        {
          title: "School in Frame",
          type: "Photo",
          description: "A documentary approach to everyday school events.",
          image: projectOutdoor,
        },
      ],
    },
    {
      title: "Film Competitions",
      description:
        "Early narrative films that turned an interest in visual storytelling into an international stage.",
      deliverables: ["Short films", "2 international high school film competition wins"],
      media: [
        {
          title: "Competition Short Films",
          type: "Video",
          duration: "02 films",
          description: "Narrative work recognised in international high school film competitions.",
          image: projectTravel,
        },
      ],
    },
  ],
  gallery: [
    {
      title: "First Frames",
      type: "Photo",
      description: "Early event work and observational photography.",
      image: projectOutdoor,
    },
    {
      title: "Film Still",
      type: "Video",
      duration: "Short film",
      description: "A glimpse of the cinematic direction that began here.",
      image: projectTravel,
    },
  ],
  credits: ["Student Leader Council", "Independent film projects"],
  metadata: [
    { label: "Timeline", value: "2019–2022" },
    { label: "Focus", value: "Documentation and film" },
    { label: "Recognition", value: "2 international competition wins" },
  ],
};

export const projects = [monashMotorsport, mufyStudentCouncil, highSchool];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  return projects[(currentIndex + 1) % projects.length];
}
