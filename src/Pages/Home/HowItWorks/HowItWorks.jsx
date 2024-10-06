const HowItWorks = () => {
  const steps = [
    {
      title: "1. Register and Create an Account",
      description:
        "Sign up with your email or use Google to create your account and start exploring the platform.",
      icon: "📝",
    },
    {
      title: "2. Post a Job or Browse Jobs",
      description:
        "As an employer, post a job with details and set a price range. As a freelancer, browse available jobs that match your skills.",
      icon: "💼",
    },
    {
      title: "3. Place a Bid",
      description:
        "Freelancers can place a bid on any job they find interesting. Set your price and deadline, and submit your offer.",
      icon: "📤",
    },
    {
      title: "4. Hire & Complete the Job",
      description:
        "Employers can review bids and hire the best freelancer for the job. Complete the project and get paid through the platform.",
      icon: "✅",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto mt-4 mb-8 pb-6 px-4">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold text-center capitalize lg:text-3xl pt-4 pb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-xl hover:shadow-2xl  duration-300 hover:scale-[1.05] transition-all"
            >
              <div className="text-6xl mb-4">{step.icon}</div>
              <h3 className="text-xl text-gray-800 font-bold mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
