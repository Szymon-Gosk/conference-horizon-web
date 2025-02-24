
const Sponsors = () => {
  const honorarySponsors = [
    {
      name: "Example University",
      logo: "/placeholder.svg",
    },
    {
      name: "Research Institute",
      logo: "/placeholder.svg",
    },
    {
      name: "Psychology Association",
      logo: "/placeholder.svg",
    },
  ];

  const mediaSponsors = [
    {
      name: "Media Company",
      logo: "/placeholder.svg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8">Patronaty</h1>
      
      {/* Honorary Patrons */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Patronat honorowy objęli
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {honorarySponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-24 w-auto mb-4"
              />
              <p className="text-center text-gray-600">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Media Patrons */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Patronat medialny objęli
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-24 w-auto mb-4"
              />
              <p className="text-center text-gray-600">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
