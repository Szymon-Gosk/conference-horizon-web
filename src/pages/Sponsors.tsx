
const Sponsors = () => {
  const sponsors = [
    {
      name: "Fundacja L i D",
      logo: "/sponsors/fundacja.jpg",
    },
    {
      name: "Koło gospodyń wiejskich w Sokółce",
      logo: "/sponsors/kolo-gospodyn.png",
    },
    {
      name: "Barbara Okuła, posłanka na Sejm RP",
      logo: "/sponsors/female.jpg",
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
      name: "Urząd Marszałk",
      logo: "/sponsors/sponsor-wojewodztwo.png",
    },
  ];


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8">Sponsorzy</h1>
      
      {/* Sponsors */}
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsors.slice(0, 5).map((sponsor, index) => (
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
      </div>
    </div>
  );
};

export default Sponsors;
