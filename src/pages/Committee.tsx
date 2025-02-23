
const Committee = () => {
  const committee = [
    {
      name: "Prof. dr hab. Maria Nowacka",
      title: "Przewodnicząca Komitetu Naukowego",
      institution: "Uniwersytet Example",
    },
    {
      name: "Prof. dr hab. Andrzej Kowalski",
      title: "Członek Komitetu Naukowego",
      institution: "Instytut Psychologii Example",
    },
    // Add more committee members as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8">Komitet Naukowy</h1>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="grid gap-8">
          {committee.map((member, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
            >
              <h2 className="text-2xl font-bold text-primary">{member.name}</h2>
              <p className="text-lg text-gray-600 mt-2">{member.title}</p>
              <p className="text-gray-500">{member.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committee;
