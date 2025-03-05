
const Patrons = () => {
  const honorarySponsors = [
    {
      name: "Honorowy Patronat Prezydenta Miasta Białegostoku",
      logo: "/logos/patronat-bialystok.png",
      size: "h-36"
    },
    {
      name: "Honorowy Patronat Marszałka Województwa Podlaskiego",
      logo: "/logos/patronat-wojewodztwo.png",
      size: "h-36"
    },
    {
      name: "Wojewoda Podlaski",
      logo: "/logos/wojewoda.jpeg",
      size: "h-36"
    },
  ];

  const mediaSponsors = [
    {
      name: "Polskie Radio Białystok",
      logo: "/logos/radio-bialystok.jpg",
      size: "h-20"
    },
    {
      name: "Białystok Online",
      logo: "/logos/bialystok-online.png",
      size: "h-10"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8">Patronaty</h1>
      
      {/* Honorary Patrons */}
      <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Patronaty honorowe objęli
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {honorarySponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="flex items-center justify-center h-32">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={`w-auto ${sponsor.size} object-contain`}
                  loading="lazy"
                />
              </div>
              <p className="text-center text-gray-600 mt-4">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Media Patrons */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Patronaty medialne objęli
        </h2>
        <div className="flex justify-center">
          {mediaSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="flex items-center justify-center h-32">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={`w-auto ${sponsor.size} object-contain`}
                  loading="lazy"
                />
              </div>
              <p className="text-center text-gray-600 mt-4">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Patrons;
