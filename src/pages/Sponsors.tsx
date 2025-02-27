
const Sponsors = () => {
  const sponsors = [
    {
      name: "Sponsor Złoty",
      logo: "/logos/university.png",
    },
    {
      name: "Sponsor Srebrny",
      logo: "/logos/university.png",
    },
    {
      name: "Sponsor Brązowy",
      logo: "/logos/university.png",
    },
    {
      name: "Sponsor Wspierający",
      logo: "/logos/university.png",
    },
    {
      name: "Sponsor Technologiczny",
      logo: "/logos/group.png", // This is the rectangular logo
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8">Sponsorzy</h1>
      
      {/* Sponsors */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsors.slice(0, 3).map((sponsor, index) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {sponsors.slice(3).map((sponsor, index) => (
            <div
              key={index + 3}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="h-24 flex items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-24 w-auto mb-4"
                />
              </div>
              <p className="text-center text-gray-600">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
