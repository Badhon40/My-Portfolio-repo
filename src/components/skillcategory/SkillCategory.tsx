


export default function SkillCategory({ title, skills }: { title: string, skills: string[] }) {
    return (
      <div className="p-4 border rounded-lg shadow bg-white">
        <h2 className="text-xl font-semibold mb-3 dark:text-white">{title}</h2>
        <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200">
              <span className="text-sm font-medium">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }