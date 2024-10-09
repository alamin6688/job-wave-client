const Portfolio = () => {
  const projects = [
    {
      title: "Website Development",
      description:
        "A full-stack web development project involving React, Node.js, and MongoDB. Delivered within the deadline and met all client requirements.",
      imageUrl:
        "https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&auto=format&fit=crop&w=1565&q=80",
      category: "Web Development",
    },
    {
      title: "UI Kit Design",
      description:
        "Created a comprehensive UI kit for a mobile app, focusing on a clean and intuitive user interface.",
      imageUrl:
        "https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
      category: "UI/UX Design",
    },
    {
      title: "Mobile App Mockups",
      description:
        "Designed high-fidelity mockups for a mobile application, providing a realistic visualization for the client.",
      imageUrl:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      category: "Mockups",
    },
    {
      title: "Digital Marketing Strategy",
      description:
        "Developed a comprehensive digital marketing strategy including SEO, social media campaigns, and paid advertisements. Successfully increased client engagement by 30%.",
      imageUrl:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      category: "Digital Marketing",
    },
    {
      title: "Data Analyst Report",
      description:
        "Conducted data analysis using Python and Excel to identify key business insights. Delivered detailed reports to guide client decision-making processes.",
      imageUrl:
        "https://i.postimg.cc/JzzTh7Np/luke-chesser-JKUTr-J4v-K00-unsplash.jpgv",
      category: "Data Analysis",
    },
    {
      title: "Content Writing for Blog",
      description:
        "Created engaging blog content optimized for SEO, focusing on lifestyle and technology. Boosted organic traffic by 40% over a 6-month period.",
      imageUrl:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
      category: "Content Writing",
    },
  ];

  return (
    <section className="bg-white">
      <div className="max-w-screen-2xl px-6 pt-4 pb-10 mx-auto">
        <h1 className="text-2xl font-bold text-center capitalize lg:text-3xl pt-4">
          Portfolio
        </h1>
        <p className="w-full md:w-3/4 mx-auto my-6 text-center text-gray-500">
          Discover some of the best projects completed by freelancers on our
          platform. Each project showcases unique skills and expertise tailored
          to meet specific client needs.
        </p>
        <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3 pb-6 lg:pb-8 animate__animated animate__zoomIn">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group hover:scale-[1.05] transition-all"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  {project.title}
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">
                  {project.category}
                </p>
                <p className="mt-2 text-white">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
