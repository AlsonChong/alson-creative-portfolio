import heroPortrait from "@/assets/hero-portrait.jpg";
import projectAutomotive from "@/assets/project-automotive.jpg";
import projectFashion from "@/assets/project-fashion.jpg";
import projectOutdoor from "@/assets/project-outdoor.jpg";
import projectTravel from "@/assets/project-travel.jpg";

export type MediaAspect = "full" | "landscape" | "portrait" | "square" | "half";

export type ProjectMedia = {
  type: "photo" | "video";
  src: string;
  poster?: string;
  title?: string;
  description?: string;
  aspect: MediaAspect;
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  role: string[];
  thumbnail: string;
  heroMedia: ProjectMedia;
  media: ProjectMedia[];
  credits: string[];
  metadata: { label: string; value: string }[];
};

// To add a playable video, import it from src/assets and use:
// { type: "video", src: launchFilm, poster: launchPoster, aspect: "full", title: "..." }
// The project route renders this as a native HTML5 <video> element with controls.
export const projects: Project[] = [
  {
    number: "01",
    slug: "monash-motorsport",
    title: "Monash Motorsport",
    year: "2024–2026",
    category: "Photography / Videography / Publicity",
    description: "I documented the people, machines and moments behind a student Formula SAE team.",
    role: ["Photography", "Videography", "Publicity", "Event coordination"],
    thumbnail: projectAutomotive,
    heroMedia: {
      type: "photo",
      src: projectAutomotive,
      aspect: "full",
      title: "Monash Motorsport",
    },
    media: [
      {
        type: "photo",
        src: projectAutomotive,
        aspect: "full",
        title: "Car launch campaign",
      },
      {
        type: "photo",
        src: projectOutdoor,
        aspect: "half",
        title: "TSAE 2026",
      },
      {
        type: "photo",
        src: projectFashion,
        aspect: "half",
        title: "Race-week detail",
      },
      {
        type: "photo",
        src: projectTravel,
        aspect: "portrait",
        title: "Team stories",
      },
      {
        type: "photo",
        src: projectAutomotive,
        aspect: "landscape",
        title: "Recruitment, ENI Expo and sponsorship",
      },
    ],
    credits: ["Monash Motorsport", "Student-led Formula SAE team"],
    metadata: [
      { label: "Timeline", value: "2024–2026" },
      { label: "Focus", value: "Campaigns, events, publicity" },
      { label: "Format", value: "Photo, film, social" },
    ],
  },
  {
    number: "02",
    slug: "mufy-student-council",
    title: "MUFY Student Council",
    year: "2023",
    category: "Videography / Publicity",
    description:
      "Moving-image stories and publicity for a student community throughout its foundation year.",
    role: ["Videography", "Publicity", "Creative direction", "Publicity coordination"],
    thumbnail: projectFashion,
    heroMedia: {
      type: "photo",
      src: projectFashion,
      aspect: "full",
      title: "MUFY Student Council",
    },
    media: [
      {
        type: "photo",
        src: projectFashion,
        aspect: "full",
        title: "Committee introduction",
      },
      {
        type: "photo",
        src: projectTravel,
        aspect: "half",
        title: "Event highlights",
      },
      {
        type: "photo",
        src: heroPortrait,
        aspect: "half",
        title: "Foundation-year farewell",
      },
      {
        type: "photo",
        src: projectOutdoor,
        aspect: "portrait",
        title: "Recruitment campaign",
      },
      {
        type: "photo",
        src: projectFashion,
        aspect: "landscape",
        title: "Community in motion",
      },
    ],
    credits: ["MUFY Student Council", "Foundation Year 2023"],
    metadata: [
      { label: "Timeline", value: "2023" },
      { label: "Focus", value: "Community and publicity" },
      { label: "Format", value: "Video and social" },
    ],
  },
  {
    number: "03",
    slug: "high-school",
    title: "High School",
    year: "2019–2022",
    category: "Photography / Videography / Film",
    description:
      "The beginning of my visual practice: documenting a community, then telling stories beyond it.",
    role: ["Photography", "Videography", "Film production", "Student Leader Council media"],
    thumbnail: projectOutdoor,
    heroMedia: {
      type: "photo",
      src: projectOutdoor,
      aspect: "full",
      title: "High School",
    },
    media: [
      {
        type: "photo",
        src: projectOutdoor,
        aspect: "full",
        title: "School event documentation",
      },
      {
        type: "photo",
        src: projectTravel,
        aspect: "half",
        title: "Student Leader Council",
      },
      {
        type: "photo",
        src: projectFashion,
        aspect: "half",
        title: "Early event work",
      },
      {
        type: "photo",
        src: heroPortrait,
        aspect: "portrait",
        title: "Short film still",
      },
      {
        type: "photo",
        src: projectOutdoor,
        aspect: "landscape",
        title: "Film competition work",
      },
    ],
    credits: ["Student Leader Council", "Independent film projects"],
    metadata: [
      { label: "Timeline", value: "2019–2022" },
      { label: "Focus", value: "Documentation and film" },
      { label: "Recognition", value: "2 international competition wins" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  return projects[(currentIndex + 1) % projects.length];
}
