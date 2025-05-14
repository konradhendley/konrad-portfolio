// app/projects/page.tsx
const projects = [
    {
      title: 'Munzey – Real-Time Expense Tracker',
      description:
        'A full-stack application built with AWS services such as Lambda, CloudFront, DynamoDB, and Cognito, with a frontend created in React. It helps users visualize and manage personal finances in real-time.',
      link: 'https://www.myMunzey.com',
    },
    {
      title: 'Portfolio Website',
      description:
        'This very site. Built with Next.js, Tailwind CSS, and deployed via GitHub Actions to AWS S3 + CloudFront, this portfolio website is used to display some of my skils when it comes to web development.',
      link: '#',
    },
  ];
  
  export default function ProjectsSection() {
    return (
      <section
        id="projects"
        className="my-16 mb-20 px-4 sm:px-6 lg:px-8 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl sm:text-5xl md:text-6xl font-bold mb-10 text-center md:text-left">
            Projects
          </h2>
  
          <div className="space-y-12">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:underline font-medium"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }