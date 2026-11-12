import projectApp from "@/assets/project-app.jpg";
import projectRobot from "@/assets/project-robot.jpg";
import projectPosters from "@/assets/project-posters.jpg";
import projectWeb from "@/assets/project-web.jpg";

export type Project = {
  title: string;
  year: string;
  tags: string[];
  summary: string;
  image: string;
};

// Sample projects — swap for real work.
export const projects: Project[] = [
  {
    title: "Pulse — Habit Tracker",
    year: "2026",
    tags: ["Mobile app", "UI design"],
    summary: "A calm, dark-mode habit tracker built to help classmates stay consistent during exams.",
    image: projectApp,
  },
  {
    title: "Rover One",
    year: "2025",
    tags: ["Robotics", "Arduino"],
    summary: "An obstacle-avoiding rover built for the college tech fest, using ultrasonic sensors.",
    image: projectRobot,
  },
  {
    title: "Campus Insights",
    year: "2025",
    tags: ["Web", "Data"],
    summary: "A dashboard that turns attendance and event data into clear, simple charts.",
    image: projectWeb,
  },
  {
    title: "Light & Shadow",
    year: "2024",
    tags: ["Photography", "Posters"],
    summary: "A personal series of posters and photographs exploring contrast and colour.",
    image: projectPosters,
  },
];
