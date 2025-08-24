import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getDeviconClassname = (techName:string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase() //! that's a string

  const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2024
};

const key = "brand";
//! console.log(car[key]) 

  const techMap: { [key: string]: string } = {
  // --- Web Core ---
  html: "devicon-html5-plain",
  html5: "devicon-html5-plain",
  css: "devicon-css3-plain",
  css3: "devicon-css3-plain",
  javascript: "devicon-javascript-plain",
  js: "devicon-javascript-plain",
  typescript: "devicon-typescript-plain",
  ts: "devicon-typescript-plain",

  // --- Frontend Frameworks ---
  react: "devicon-react-original",
  reactjs: "devicon-react-original",
  next: "devicon-nextjs-original",
  nextjs: "devicon-nextjs-plain",
  vue: "devicon-vuejs-plain",
  vuejs: "devicon-vuejs-plain",
  angular: "devicon-angular-plain",

  // --- Styling / UI ---
  tailwind: "devicon-tailwindcss-plain",
  tailwindcss: "devicon-tailwindcss-plain",
  bootstrap: "devicon-bootstrap-plain",
  sass: "devicon-sass-original",

  // --- Backend ---
  node: "devicon-nodejs-plain",
  nodejs: "devicon-nodejs-plain",
  express: "devicon-express-original",
  expressjs: "devicon-express-original",
  django: "devicon-django-plain",
  flask: "devicon-flask-original",

  // --- Databases ---
  mongo: "devicon-mongodb-plain",
  mongodb: "devicon-mongodb-plain",
  mysql: "devicon-mysql-plain",
  postgres: "devicon-postgresql-plain",
  postgresql: "devicon-postgresql-plain",
  redis: "devicon-redis-plain",

  // --- DevOps / Tools ---
  git: "devicon-git-plain",
  github: "devicon-github-original",
  docker: "devicon-docker-plain",
  kubernetes: "devicon-kubernetes-plain",
  aws: "devicon-amazonwebservices-plain",
  linux: "devicon-linux-plain",

  // --- Languages ---
  java: "devicon-java-plain",
  python: "devicon-python-plain",
  cpp: "devicon-cplusplus-plain",
  cplusplus: "devicon-cplusplus-plain",
  c: "devicon-c-plain",
  ruby: "devicon-ruby-plain",
  php: "devicon-php-plain",
  go: "devicon-go-plain",
  golang: "devicon-go-plain",
  rust: "devicon-rust-plain",

  // --- Extras ---
  android: "devicon-android-plain",
  swift: "devicon-swift-plain",
  firebase: "devicon-firebase-plain",
  graphql: "devicon-graphql-plain"
};
  return techMap[normalizedTechName] ? `${techMap[normalizedTechName]} colored ` : "devicon-devicon-plain"
}
