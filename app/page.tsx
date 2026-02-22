import {
  ResumeBio,
  ResumeClient,
  ResumeContact,
  ResumeExperience,
  ResumeFormation,
  ResumeLanguages,
  ResumeProject,
  ResumeSkills,
} from "@/core/resume/resume.types";
import { resume } from "@/core/data/resume";
import { GlobeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <article className="font-sans text-xs mx-auto lg:w-[210mm] lg:h-[297mm] print:w-[210mm] print:h-[297mm] bg-white shadow-xl grid lg:grid-cols-[260px_1fr] print:grid-cols-[260px_1fr] items-start">
      {/* LEFT COLUMN */}
      <aside className="bg-black/15 min-h-full px-8 py-4 flex flex-col ">
        <Avatar avatar={"/images/avatar.jpg"} />
        <Contact contact={resume.contact} />
        <Separator />
        <Formation formations={resume.formations} />
        <Separator />
        <Skills skills={resume.skills} />
        <Separator />
        <Languages languages={resume.languages} />
      </aside>

      {/* RIGHT COLUMN */}
      <main className="px-8 grid">
        <Header />
        <Bio bio={resume.bio} />
        <Separator />
        <Experiences experiences={resume.experiences} />
        {resume.projects && resume.projects.length > 0 && (
          <>
            <Separator />
            <Projects projects={resume.projects} />
          </>
        )}
      </main>
    </article>
  );
}

const SubTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <h2 className="text-sm font-bold font-noto tracking-widest uppercase mb-4">
      {title}
    </h2>
  );
};

const Separator: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={twMerge("h-px bg-black w-full my-4", className)} />;
};

const Header: React.FC = () => {
  return (
    <header className="bg-black/80 text-white -mx-8  px-8 py-8 flex items-center justify-center mb-8">
      <div className="text-center grid gap-4">
        <h1 className="text-4xl uppercase font-raleway font-light tracking-widest">
          {resume.contact.firstname}
          <br />
          {resume.contact.lastname}
        </h1>
        <Separator className="bg-white max-w-[50px] mx-auto" />
        <p className="font-raleway font-light uppercase tracking-widest">
          {resume.title}
        </p>
      </div>
    </header>
  );
};

const Contact: React.FC<{ contact: ResumeContact }> = ({ contact }) => {
  return (
    <section>
      <SubTitle title="Contact" />
      <div className="grid gap-1">
        <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
          <PhoneIcon className="w-4 h-4 " />
          <p className="">{contact.phone}</p>
        </div>
        <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
          <MailIcon className="w-4 h-4 " />
          <p className="">{contact.email}</p>
        </div>
        <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
          <MapPinIcon className="w-4 h-4 " />
          <p className="">{contact.location}</p>
        </div>
        <div className="grid gap-1 grid-cols-[20px_1fr] items-center">
          <GlobeIcon className="w-4 h-4 " />
          <p className="">{contact.website}</p>
        </div>
      </div>
    </section>
  );
};

const Avatar: React.FC<{ avatar: string }> = ({ avatar }) => {
  return (
    <div className="mx-auto w-[90%] aspect-square rounded-full border-5 border-white/30 overflow-hidden mb-4">
      <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
    </div>
  );
};

export const Bio: React.FC<{ bio: ResumeBio }> = ({ bio }) => {
  return (
    <section className="grid gap-2">
      {bio.sentences.map((sentence, index) => (
        <p key={`bio-${index}`}>{sentence}</p>
      ))}
      {bio.skills.length > 0 && (
        <ul className="list-disc list-inside">
          {bio.skills.map((skill, index) => (
            <li key={`bio-skill-${index}`}>{skill}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

const Formation: React.FC<{ formations: ResumeFormation[] }> = ({
  formations,
}) => {
  return (
    <section>
      <SubTitle title="Formation" />
      {formations.map((formation) => (
        <div key={`formation-${formation.date}`}>
          <p className="text-medium">{formation.date}</p>
          <p className="font-bold">{formation.title}</p>
          <p className="text-black/50">{formation.school}</p>
        </div>
      ))}
    </section>
  );
};

const Skills: React.FC<{ skills: ResumeSkills[] }> = ({ skills }) => {
  return (
    <section>
      <SubTitle title="Skills" />
      {skills.map((skill, index) => (
        <div key={`skill-${index}`}>
          <p className="font-bold mb-2">{skill.title}</p>
          <ul className="list-none list-inside mb-4">
            {skill.items.map((item, j) => (
              <li key={`skill-item-${index}-${j}`}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

const Experiences: React.FC<{ experiences: ResumeExperience[] }> = ({
  experiences,
}) => {
  return (
    <section>
      <SubTitle title="Expériences" />
      {experiences.map((experience, index) => (
        <Experience key={`experience-${index}`} experience={experience} />
      ))}
    </section>
  );
};

const Experience: React.FC<{ experience: ResumeExperience }> = ({
  experience,
}) => {
  return (
    <div className="grid gap-2 mb-4" key={`experience-${experience.date}`}>
      <div>
        <div>
          <span className="font-bold">{experience.job}</span>{" "}
          <span className="text-black/50">— {experience.company}</span>
        </div>
        <p className="text-black/60 italic">{experience.date}</p>
      </div>
      <p>{experience.description}</p>
      {experience.achievements.items.length > 0 && (
        <ul className="list-disc list-inside">
          {experience.achievements.items.map((item, index) => (
            <li key={`experience-achievement-${index}`}>{item}</li>
          ))}
        </ul>
      )}
      {experience.clients && experience.clients.length > 0 && (
        <div className="grid gap-3 mt-1">
          {experience.clients.map((client, index) => (
            <Client key={`client-${index}`} client={client} />
          ))}
        </div>
      )}
    </div>
  );
};

const Client: React.FC<{ client: ResumeClient }> = ({ client }) => {
  return (
    <div className="border-l-2 border-black/20 pl-3 grid gap-1">
      <div>
        <span className="font-semibold">{client.name}</span>
        <span className="text-black/50 italic"> · {client.date}</span>
      </div>
      <p className="text-black/70">{client.description}</p>
      {client.links && client.links.length > 0 && (
        <p className="text-black/50 text-[10px]">
          {client.links.join(" · ")}
        </p>
      )}
      {client.achievements.items.length > 0 && (
        <ul className="list-disc list-inside mt-1">
          {client.achievements.items.map((item, index) => (
            <li key={`client-achievement-${index}`}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Projects: React.FC<{ projects: ResumeProject[] }> = ({ projects }) => {
  return (
    <section>
      <SubTitle title="Projet personnel" />
      {projects.map((project, index) => (
        <Project key={`project-${index}`} project={project} />
      ))}
    </section>
  );
};

const Project: React.FC<{ project: ResumeProject }> = ({ project }) => {
  return (
    <div className="grid gap-2 mb-3">
      <div>
        <span className="font-bold">{project.name}</span>{" "}
        <span className="text-black/50">— {project.status}</span>
      </div>
      <p>{project.description}</p>
      <p className="text-black/60">
        Stack : {project.stack.join(" / ")}
      </p>
      {project.achievements.length > 0 && (
        <ul className="list-disc list-inside">
          {project.achievements.map((item, index) => (
            <li key={`project-achievement-${index}`}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Languages: React.FC<{ languages: ResumeLanguages[] }> = ({
  languages,
}) => {
  return (
    <section>
      <SubTitle title="Langues" />
      <ul className="list-none list-inside">
        {languages.map((language, index) => (
          <li key={`language-${index}`}>
            {language.language} — {language.level}
          </li>
        ))}
      </ul>
    </section>
  );
};
