import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "My snapchat",
    description:
      "interface utilisateur reprenant les caractéristiques de snapchat (React Native , Typescript)",
    image: "/snap.png",
    github: "https://github.com/elsi06220/snapchat",
    link: "https://github.com/elsi06220/snapchat",
  },
  {
    name: "Quizz",
    description: "Quizz avec panel administrateur, thème principal 'Harry-Potter' (Symfony , Php)",
    image: "/harry-potter.png",
    github: "https://github.com/elsi06220/quizz",
    link: "https://github.com/elsi06220/quizz",
  },
  {
    name: "Battle-ship Debug",
    description:
      "Debugage du jeu battle-ship, sémantique des développeur (Javascript)",
    image: "/battle.png",
    github: "https://github.com/elsi06220/Battle-ship-Debug",
    link: "https://github.com/elsi06220/Battle-ship-Debug",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projets
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                     
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
