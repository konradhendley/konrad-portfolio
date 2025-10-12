// app/about/page.tsx
export default function AboutSection() {
    return (
      <section
        id="about"
        className="my-12 px-4 sm:px-6 lg:px-8 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl sm:text-5xl md:text-6xl font-bold mb-6 text-center md:text-left">
            About Me
          </h2>
  
          <div className="space-y-6 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Currently I'm a software developer working at Nextworld, where I focus on building scalable, user-focused ERP applications. My work blends technical and analytical skills and allows me to use my creative side. I enjoy solving complex problems with clean, maintainable code.
            </p>
            <p>
              I like to spend time outside of work coding as well. Recently, I built <a href="https://www.myMunzey.com" className="text-black hover:text-blue-400 transition">Munzey</a>, an expense tracker web app, using various AWS services — such as Lambda, DynamoDB, Cognito, and a React frontend with visualizations. It’s a project that reflects my passion for financial literacy, cloud technologies, and great user experience.
            </p>
            <p>
              Outside of coding, I have a variety of hobbies — I love running, cycling, and spending time outside. I'm also into sports in general, whether it’s watching a game or playing casually. When I’m home, you’ll often find me in the kitchen trying new recipes or reading a good book.
            </p>
            <p>
              Thanks for visiting — feel free to explore my projects or reach out. I'm always open to connecting and collaborating.
            </p>
          </div>
        </div>
      </section>
    );
  }