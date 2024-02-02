// ProjectPage.jsx
import React from 'react';
import { faCode, faCodeBranch, faCodeCommit, faSync, faBug, faRocket, faWrench, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import ProjectCard from '../Card/ProjectCard'; // Asegúrate de que la ruta de importación sea correcta

export default function ProjectPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 ml-6 mt-6">
            <ProjectCard 
                title="Umbrella App" 
                description="Umbrella is a weather application that allows you to know the weather in your city and other cities around the world. It's simple, fast, beautiful, and free. With the API from Tomorrow.io, you can get the weather forecast for the next 24 hours and the next 7 days."
                githubLink="https://github.com/LennyDevX"
                demoLink="https://umbrella-app-ejqq.vercel.app/"
                image="/Weather2.png"
                technologies={["Vue", "Vuetify", "JavaScript"]}
                spamText="New update"
                progress={60}
                progressText={"Next Update 60%"}
                spanColor={"text-green-300"}
            />
            <ProjectCard 
                title="Layla AI" 
                description="Layla is a chatbot powered by Google AI that allows you to chat with her and ask her questions. She can answer your questions and help you with your tasks. She can also tell you jokes and play games with you. She is a very smart and intelligent chatbot."
                githubLink="https://github.com/LennyDevX/Layla"
                demoLink="https://layla-r09in3hal-lennydevxs-projects.vercel.app/"
                image="/LaylaAI.png"
                technologies={["React", "Tailwindcss", "Google Cloud"]}
                spamText="Alpha 1 Release"
                progress={80}
                spanColor={"text-orange-300"}
                progressText={"Alpha 2"}
                icon={faBug}
            />
            <ProjectCard 
                title="Todo App" 
                description="Working on a Todo app for my porfolio, this will be my next project release. Support my work by leaving a star on my GitHub repository. I will be releasing the first version of this app soon. Stay tuned for more updates."
                image="/Todo.png"
                technologies={["React", "Tailwdincss", "Vite"]}
                spamText="Prototype"
                icon={faWrench}
                githubLink="https://github.com/LennyDevX/Todo-App"
                progress={40}
                spanColor={"text-yellow-300"}
                progressText={"Alpha 1 40%"}
            />
        </div>
    );
}