import React from "react"
import Image from "next/image"

const skills = [
  
  { skill: "Html" },
  { skill: "Css" },
  { skill: "JavaScript" },
  
  { skill: "Php" },
  { skill: "Sql" },


  { skill: "React" },
  { skill: "Nextjs" },
  { skill: "Nuxtjs" },
  

  { skill: "Laravel" },
  { skill: "Symfony" },

  { skill: "Figma" },
  { skill: "Wordpress" },

  
  

  
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          à propos de moi
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Apprenez a me connaitre
            </h1>
            <p>
              Bonjour, je m'appel elsi je suis {" "}
              <span className="font-bold">{"determiné"}</span>,
              <span className="font-bold">{" rigoureux"}</span>, et
              <span className="font-bold">{" à l'écoute"}</span> pour apprendre de nouvelles choses
            </p>
            <br />
            <p>
            Etant gardien à Sainte-Maxime, j'avais beaucoup de temps libre et j'ai décidé de mettre à profit ce temps afin de me former en autodidacte.
 
 commençant le développement web avec les bases, à savoir HTML et CSS, et je me suis vite rendu compte que c'est quelque chose qui me plaisait particulièrement.
  
 J'ai continué à coder pendant un an, principalement en autodidacte, ce que je considère comme une année d'expérience malgré le fait que je codais de manière indépendante. Mi-2023, j'ai pris la décision de m'inscrire à Epitech afin de consolider mes connaissances et d'apprendre de nouveaux langages de programmation.
  
 Depuis que j'ai intégré Epitech, mon niveau en programmation s'est considérablement accru et je suis activement à la recherche d'une alternance afin de mettre en oeuvre mes compétences !
  

            </p>
            <br />
            <p>
            J'ai un large éventail de passe-temps, notamment la lecture de genres comme le thriller ou la psychologie, ce qui me permet de me concentrer pleinement sur une tâche et de me déconnecter des écrans. Je pratique également les sports de combat, notamment des sports de percussion, depuis des années. Le combat en lui-même est une sorte de violence maîtrisée. Bien encadré, cela ne porte préjudice à personne. Au contraire, on acquiert une meilleure maîtrise de soi.
            </p>
            <br />
            <p>
            J’ai également un intérêt poussé pour le secteur de la blockchain, pas la crypto-monnaie en elle-même, mais plutôt l’écosystème et tout ce qu’il y a derrière.🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
              

              
            </div>
         

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
