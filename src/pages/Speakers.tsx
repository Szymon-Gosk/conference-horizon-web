
const Speakers = () => {
  const speakers = [
    {
      name: "Prof. Jan Nowak",
      title: "Profesor Psychologii Klinicznej",
      description:
        "Ekspert w dziedzinie psychologii klinicznej z 20-letnim doświadczeniem. Autor wielu publikacji naukowych i książek z zakresu psychoterapii.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80",
    },
    {
      name: "Dr Anna Kowalska",
      title: "Psychoterapeuta",
      description:
        "Specjalistka w zakresie terapii poznawczo-behawioralnej. Prowadzi badania nad nowymi metodami leczenia zaburzeń lękowych.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    },
    {
      name: "Speaker 3",
      title: "Title",
      description: "Description of the speaker's expertise and background.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80",
    },
    {
      name: "Speaker 4",
      title: "Title",
      description: "Description of the speaker's expertise and background.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    },
    {
      name: "Speaker 5",
      title: "Title",
      description: "Description of the speaker's expertise and background.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80",
    },
    {
      name: "Speaker 6",
      title: "Title",
      description: "Description of the speaker's expertise and background.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    },
    {
      name: "Speaker 7",
      title: "Title",
      description: "Description of the speaker's expertise and background.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80",
    },
    {
      name: "Speaker 8",
      title: "Title",
      description: "Description of the speaker's expertise and background.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    },
    {
      name: "Speaker 9",
      title: "Title",
      description: "Description of the speaker's expertise and background.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80",
    },
    {
      name: "Speaker 10",
      title: "Title",
      description: "Description of the speaker's expertise and background.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    },
    {
      name: "Speaker 11",
      title: "Title",
      description: "Description of the speaker's expertise and background.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80",
    },
    {
      name: "Speaker 12",
      title: "Title",
      description: "Description of the speaker's expertise and background.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8">Prelegenci</h1>
      <div className="space-y-8">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row"
          >
            <div className="md:w-1/4">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-3/4 p-6">
              <h2 className="text-2xl font-bold text-primary mb-2">
                {speaker.name}
              </h2>
              <h3 className="text-lg text-gray-600 mb-4">{speaker.title}</h3>
              <p className="text-gray-700">{speaker.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
