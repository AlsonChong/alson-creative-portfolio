import achievement1 from "@/assets/achievement1.jpg";
import achievement2 from "@/assets/achievement2.jpg";
import car1 from "@/assets/car1.jpg";
import dsc00623 from "@/assets/DSC00623.jpg";
import dsc01561 from "@/assets/DSC01561.JPG";
import dsc03706 from "@/assets/DSC03706.jpg";
import dsc08049 from "@/assets/DSC08049.JPG";
import dsc088001 from "@/assets/DSC088001.JPG";
import dsc08876 from "@/assets/DSC08876.JPG";
import dsc08908 from "@/assets/DSC08908.JPG";
import dsc9166 from "@/assets/DSC_9166.JPG";
import groupPhoto1 from "@/assets/groupphoto1.jpg";
import groupPhoto2 from "@/assets/groupphoto2.jpg";
import img1241 from "@/assets/IMG_1241.JPG";
import img4645 from "@/assets/IMG_4645.JPG";
import monashThumbnail from "@/assets/M3E3_car.jpg";
import mufyThumbnail from "@/assets/publicity_team.jpeg";
import sponsorship1 from "@/assets/sponsorship1.png";
import sponsorship2 from "@/assets/sponsorship2.png";
import sponsorship3 from "@/assets/sponsorship3.png";
import driver1 from "@/assets/driver1.jpg";

export type MediaAspect = "full" | "landscape" | "portrait" | "square" | "half";
export type MediaType = "photo" | "youtube" | "vimeo";

export type ProjectMedia = {
  type: MediaType;
  src: string;
  title: string;
  aspect: MediaAspect;
};

export type ProjectSection = {
  number: string;
  title: string;
  media: ProjectMedia[];
};

export type Project = {
  number: string;
  slug: string;
  title: string;
  year: string;
  description: string;
  scope: string[];
  thumbnail: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    number: "01",
    slug: "monash-motorsport",
    title: "Monash Motorsport - Publicity Lead",
    year: "2024 - 2026",
    description:
      "Directed, shot and edited a car launch campaign and series of event highlights for TSAE 2026 , car launch campaign, coordinated marketing direction & sponsorship posts for the team through social media exposure",
    scope: ["photography", "videography", "publicity", "marketing", "social media"],
    thumbnail: monashThumbnail,
    sections: [
      {
        number: "01",
        title: "Car Launch Campaign",
        media: [
          { type: "vimeo", src: "1229609259", title: "Car Launch Trailer", aspect: "full" },
          {
            type: "youtube",
            src: "HgQQ9tYW20o",
            title: "Car Launch Campaign Video",
            aspect: "full",
          },
          { type: "photo", src: groupPhoto1, title: "M3-E3 Car Showcase", aspect: "half" },
          { type: "photo", src: groupPhoto2, title: "Designed the Car Launch PhotoBooth section", aspect: "half" },
          { type: "photo", src: dsc08049, title: "Signature board design", aspect: "full" },
        ],
      },
      {
        number: "02",
        title: "Thailand Formula Student 2026",
        media: [
          { type: "photo", src: achievement1, title: "Wide angle shot of the car with awards won by the team", aspect: "half" },
          { type: "photo", src: achievement2, title: "Group photo of the M3-E3 Team", aspect: "half" },
          { type: "vimeo", src: "1229620717", title: "TSAE 2026 Highlights", aspect: "full" },
          { type: "photo", src: dsc9166, title: "Setting up for photoshoot", aspect: "full" },
        ],
      },
      {
        number: "03",
        title: "Publicity Directions",
        media: [
          { type: "photo", src: img4645, title: "Merchandise Exchange 01", aspect: "half" },
          { type: "photo", src: dsc08908, title: "Merchandise Exchange 02", aspect: "half" },
          { type: "photo", src: dsc08876, title: "Collaboration Post with different student team", aspect: "full" },
          { type: "youtube", src: "DmMuYF53kHc", title: "Recruitment Reel", aspect: "portrait" },
          {
            type: "youtube",
            src: "YfLt-REJrqM",
            title: "Engineering Info Week",
            aspect: "portrait",
          },
          { type: "photo", src: sponsorship1, title: "Social Media Performance", aspect: "portrait" },
        ],
      },
      {
        number: "04",
        title: "Sponsorship Posts",
        media: [
          { type: "photo", src: sponsorship2, title: "Designed sponsorship post with Narabac", aspect: "full" },
          { type: "photo", src: sponsorship3, title: "Designed sponsorship post with Mranti", aspect: "full" },
        ],
      },
      {
        number: "05",
        title: "Creative Photography",
        media: [
          { type: "photo", src: dsc088001, title: "Slow Shutter shot of the car", aspect: "half" },
          { type: "photo", src: car1, title: "Low lighting shot of Real time tuning for LV electronic component", aspect: "half" },
          { type: "photo", src: driver1, title: "Low lighting shot of the M3-E3 driver", aspect: "portrait" }
        ],
      },
    ],
  },
  {
    number: "02",
    slug: "mufy-student-council",
    title: "Monash University Foundation Year Student Council - Publicity coordinator",
    year: "2023",
    description:
      "Helped the student council team in promoting and documenting events through my visual creativity in reel content and media creations",
    scope: ["videography", "photography", "publicity", "social media", "event documentation"],
    thumbnail: mufyThumbnail,
    sections: [
      {
        number: "01",
        title: "Publicity Projects",
        media: [
          { type: "youtube", src: "WwwAWLvqbLo", title: "Recruitment Reel", aspect: "portrait" },
          {
            type: "youtube",
            src: "q8NNnFrvdB4",
            title: "Charity Run Highlight",
            aspect: "portrait",
          },
          {
            type: "youtube",
            src: "9Ic_Gkmz_3k",
            title: "Committee Introduction Video",
            aspect: "full",
          },
          {
            type: "youtube",
            src: "i-WsNadmRX0",
            title: "Graduation Video for Sunway College",
            aspect: "full",
          },
        ],
      },
      {
        number: "02",
        title: "Photo Documentation",
        media: [
          { type: "photo", src: dsc03706, title: "Wide shot of student performing on stage", aspect: "half" },
          { type: "photo", src: dsc00623, title: "Paronomic shot of students attending the event", aspect: "half" },
          { type: "photo", src: img1241, title: "Group photo of MUFYSC 2023 committee", aspect: "full" },
        ],
      },
    ],
  },
  {
    number: "03",
    slug: "high-school",
    title: "High School",
    year: "2019 - 2022",
    description:
      "Where it all started, my passion in filming and documenting stories for the community that I was involved in, participated & won various short film competitions at an international level in Malaysia",
    scope: ["videography", "film", "photography", "storytelling"],
    thumbnail: dsc01561,
    sections: [
      {
        number: "01",
        title: "Award Winning Short Film",
        media: [
          {
            type: "youtube",
            src: "zT-QBNUOndk",
            title: "Innovation Water Filter Product Showcase",
            aspect: "full",
          },
          {
            type: "youtube",
            src: "vaNoZO3ZAKI",
            title: "When Dream Comes True — Award Winning Short Film 2019",
            aspect: "full",
          },
        ],
      },
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
