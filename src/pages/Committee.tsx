
const Committee = () => {
  const scientificCommittee = [
    {
      name: "prof. dr hab. n. med. Napoleon Waszkiewicz",
      title: "Przewodniczący Komitetu Naukowego Konferencji",
    },
    {
      name: "dr hab. n. med. Agnieszka Kułak Bejda",
    },
    {
      name: "dr n. med. Anna Rogowska-Zach",
    },
    {
      name: "dr n. med. Justyna Sołowiej-Chmiel",
    }
  ];

  const organizingCommitteeChair = {
    name: "mgr Justyna Śniadach",
    title: "",
  };

  // const organizingCommitteeViceChair = {
  //   name: "dr Anna Kienig",
  //   title: "Prorektor ds. Studenckich Akademii Podlaskiej w Białymstoku",
  // };
  //
  // const organizingCommitteeMembers = [
  //   {
  //     name: "mgr Michał Łopiński",
  //     title: "Kierownik Akademii Podlaskiej w Białymstoku",
  //   },
  //   {
  //     name: "Karolina Chomiczewska",
  //     title: "Przewodnicząca Studenckiego Koła Naukowego\"Psychologiczne Inspiracje\"",
  //   },
  //   {
  //     name: "Agnieszka Sienkiewicz",
  //     title: "[zredagowano]",
  //   },
  //   {
  //     name: "Wiktoria Sadlej",
  //     title: "[zredagowano]",
  //   },
  //   {
  //     name: "Patrycja Piskurewicz",
  //     title: "[zredagowano]",
  //   },
  //   {
  //     name: "Juliusz Sokołowski",
  //     title: "[zredagowano]",
  //   },
  //   {
  //     name: "Eleonora Zwarych",
  //     title: "[zredagowano]",
  //   },
  //   {
  //     name: "Kinga Wajsiel",
  //     title: "[zredagowano]",
  //   },
  //   {
  //     name: "Joanna Sobolewska",
  //     title: "[zredagowano]",
  //   },
  // ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Scientific Committee Section */}
      <section>
          {/* TEMP INFO BOX */}
          <div className="space-y-8 mb-8">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row">
                  <div className="md:w-3/4 p-6">
                      <h2 className="text-2xl font-bold text-primary mb-2">
                          Pełna lista składu Komitetu Naukowego zostanie opublikowana wkrótce.
                      </h2>
                      {/*<h3 className="text-lg text-primary mb-4 italic"></h3>*/}
                      {/*<h3 className="text-lg text-primary mb-4 italic"></h3>*/}
                      <p className="text-gray-700"></p>
                  </div>
              </div>
          </div>
          {/* END OF TEMP INFO BOX */}
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
        <h2 className="text-2xl font-bold text-primary mb-4">Przewodnicząca komitetu, koordynator konferencji</h2>
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

        {/*/!* Vice Chair *!/*/}
        {/*<h2 className="text-2xl font-bold text-primary mb-4">*/}
        {/*  Wiceprzewodnicząca komitetu*/}
        {/*</h2>*/}
        {/*<div className="bg-white rounded-lg shadow-sm p-8 mb-8">*/}
        {/*  <div className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">*/}
        {/*    <h2 className="text-2xl font-bold text-primary">*/}
        {/*      {organizingCommitteeViceChair.name}*/}
        {/*    </h2>*/}
        {/*    <p className="text-lg text-gray-600 mt-2">*/}
        {/*      {organizingCommitteeViceChair.title}*/}
        {/*    </p>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*/!* Members *!/*/}
        {/*<h2 className="text-2xl font-bold text-primary mb-4">Członkowie komitetu</h2>*/}
        {/*<div className="bg-white rounded-lg shadow-sm p-8">*/}
        {/*  <div className="grid gap-8">*/}
        {/*    {organizingCommitteeMembers.map((member, index) => (*/}
        {/*      <div*/}
        {/*        key={index}*/}
        {/*        className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"*/}
        {/*      >*/}
        {/*        <h2 className="text-2xl font-bold text-primary">{member.name}</h2>*/}
        {/*        <p className="text-lg text-gray-600 mt-2">{member.title}</p>*/}
        {/*      </div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </section>
    </div>
  );
};

export default Committee;
