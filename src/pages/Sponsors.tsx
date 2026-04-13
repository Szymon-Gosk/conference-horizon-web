
const Sponsors = () => {
  const sponsors = [
    {
      name: "Adamed Pharma S.A.",
      logo: "/sponsors/Adamed-logo.png",
    },
    {
      name: "Polpharma",
      logo: "/sponsors/polpharma-logo.jpg",
    },
    {
      name: "Urząd Miejski w Białymstoku",
      logo: "/sponsors/sponsor-bialystok.png",
    },
    {
      name: "Urząd Marszałkowski Województwa Podlaskiego",
      logo: "/sponsors/sponsor-wojewodztwo.png",
    },
    {
      name: "Uniwersytet Medyczny w Białymstoku",
      logo: "/logos/logo-umb-trimmed.png",
    },
    {
      name: "Okręgowa Izba Lekarska w Białymstoku",
      logo: "/logos/oil.png"
    },
    {
      name: "Krajowe Centrum Przeciwdziałania Uzależnieniom",
      logo: "/logos/kcpu.png"
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
                loading="lazy"
              />
              <p className="text-center text-gray-600">{sponsor.name}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsors.slice(3, 6).map((sponsor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-24 w-auto mb-4"
                loading="lazy"
              />
              <p className="text-center text-gray-600">{sponsor.name}</p>
            </div>
          ))}
        </div>
        
        {/* Second row of sponsors, centered */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 gap-8 max-w-[66%]">
            {sponsors.slice(6, 7).map((sponsor, index) => (
              <div
                key={index + 3}
                className="flex flex-col items-center justify-center p-4"
              >
                <div className="flex items-center justify-center h-32">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-24 w-auto mb-4"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-gray-600">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
