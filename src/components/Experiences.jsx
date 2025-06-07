import { EXPERIENCES } from "../constants";

const Experiences = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Experience</h1>
      <div className="flex flex-col items-center">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="mb-10 max-w-4xl w-full px-6">
            <h2 className="text-2xl font-semibold text-purple-400">{exp.role}</h2>
            <h3 className="text-xl font-medium text-neutral-300 mb-1">{exp.company}</h3>
            <p className="text-neutral-400 mb-4 whitespace-pre-line">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-neutral-800 text-sm text-cyan-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
