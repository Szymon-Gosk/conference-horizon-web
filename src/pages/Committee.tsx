
const Committee = () => {
  const scientificCommittee = [
    {
      name: "Prof. dr hab. Maria Nowacka",
      title: "Przewodnicząca Komitetu Naukowego",
    },
    {
      name: "Prof. dr hab. Andrzej Kowalski",
      title: "Członek Komitetu Naukowego",
    },
    {
      name: "Prof. dr hab. Jan Kowalczyk",
      title: "Członek Komitetu Naukowego",
    },
    {
      name: "Prof. dr hab. Anna Wiśniewska",
      title: "Członek Komitetu Naukowego",
    },
    {
      name: "Prof. dr hab. Piotr Nowicki",
      title: "Członek Komitetu Naukowego",
    },
    {
      name: "Prof. dr hab. Barbara Adamska",
      title: "Członek Komitetu Naukowego",
    },
  ];

  const organizingCommitteeChair = {
    name: "Prof. dr hab. Tomasz Wójcik",
    title: "Przewodniczący Komitetu Organizacyjnego",
  };

  const organizingCommitteeViceChair = {
    name: "Dr hab. Magdalena Kaczmarek",
    title: "Wiceprzewodnicząca Komitetu Organizacyjnego",
  };

  const organizingCommitteeMembers = [
    {
      name: "Dr Anna Dąbrowska",
      title: "Członek Komitetu Organizacyjnego",
    },
    {
      name: "Dr Marek Zieliński",
      title: "Członek Komitetu Organizacyjnego",
    },
    {
      name: "Dr Katarzyna Pawlak",
      title: "Członek Komitetu Organizacyjnego",
    },
    {
      name: "Dr Tomasz Lewandowski",
      title: "Członek Komitetu Organizacyjnego",
    },
    {
      name: "Mgr Agnieszka Kowalczyk",
      title: "Członek Komitetu Organizacyjnego",
    },
    {
      name: "Mgr Jan Nowakowski",
      title: "Członek Komitetu Organizacyjnego",
    },
    {
      name: "Mgr Barbara Witkowska",
      title: "Członek Komitetu Organizacyjnego",
    },
    {
      name: "Mgr Piotr Adamski",
      title: "Członek Komitetu Organizacyjnego",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Scientific Committee Section */}
      <section>
        <h1 className="text-4xl font-bold text-primary mb-8">
          Skład komitetu naukowego
        </h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid gap-8">
            {scientificCommittee.map((member, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
              >
                <h2 className="text-2xl font-bold text-primary">{member.name}</h2>
                <p className="text-lg text-gray-600 mt-2">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizing Committee Section */}
      <section className="mt-16">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Skład komitetu organizacyjnego
        </h1>
        
        {/* Chair */}
        <h2 className="text-2xl font-bold text-primary mb-4">Przewodniczący</h2>
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
            <h2 className="text-2xl font-bold text-primary">
              {organizingCommitteeChair.name}
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              {organizingCommitteeChair.title}
            </p>
          </div>
        </div>

        {/* Vice Chair */}
        <h2 className="text-2xl font-bold text-primary mb-4">
          Wiceprzewodniczący
        </h2>
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
            <h2 className="text-2xl font-bold text-primary">
              {organizingCommitteeViceChair.name}
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              {organizingCommitteeViceChair.title}
            </p>
          </div>
        </div>

        {/* Members */}
        <h2 className="text-2xl font-bold text-primary mb-4">Członkowie</h2>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid gap-8">
            {organizingCommitteeMembers.map((member, index) => (
              <div
                key={index}
                className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
              >
                <h2 className="text-2xl font-bold text-primary">{member.name}</h2>
                <p className="text-lg text-gray-600 mt-2">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Committee;
