
const Speakers = () => {
  const speakers = [
    {
      name: "Prof. dr hab. n. med. Napoleon Waszkiewicz",
      title: "Kierownik Kliniki Psychiatrii Uniwersytetu Medycznego w Białymstoku",
      secondTitle: "Dziedzina: Psychiatria",
      description: [
        "Prof. dr hab. n. med. Napoleon Waszkiewicz jest wybitnym specjalistą w dziedzinie psychiatrii, pełniącym funkcję kierownika Kliniki Psychiatrii Uniwersytetu Medycznego w Białymstoku. Jest również prezesem Oddziału Podlaskiego Polskiego Towarzystwa Psychiatrycznego.",
        "• Ceniony w Polsce i za granicą ekspert w zakresie nowoczesnych metod leczenia zaburzeń psychicznych.",
        "• Od wielu lat prowadzi badania naukowe nad wykorzystaniem psychodelików i innych niekonwencjonalnych środków w psychiatrii, koncentrując się na etycznym, klinicznym i społecznym wymiarze tych terapii.",
        "• Autor i współautor licznych publikacji w renomowanych czasopismach medycznych. Jego prace dotyczą m.in. psychofarmakologii, podłoża neurobiologicznego zaburzeń oraz badań klinicznych nad innowacyjnymi metodami leczenia."
      ],
      image: "/speakers/NAPOLEN.png",
    },
    {
      name: "dr hab. n. med. Beata Galińska-Skok",
      title: "Dziedzina: Psychiatria",
      description: [
        "• Lekarz, specjalista psychiatra, pełniąca funkcję wojewódzkiego konsultanta w dziedzinie psychiatrii. W swojej pracy koncentruje się na diagnostyce i leczeniu zaburzeń psychicznych, w tym schizofrenii.",
        "• Bogate doświadczenie kliniczne łączy z działalnością dydaktyczną i naukową – jest autorką licznych publikacji naukowych oraz wystąpień konferencyjnych poświęconych badaniom neuroobrazowym w schizofrenii i chorobie dwubiegunowej, biomarkerom zaburzeń psychicznych.",
        "• Zastępca kierownika Kliniki Psychiatrii w Uniwersyteckim Szpitalu Klinicznym, współpracuje z różnymi ośrodkami akademickimi, promując wielostronne spojrzenie na pacjenta z zaburzeniami psychicznymi – od aspektów biomedycznych po psychospołeczne.",
        "• Wielokrotnie nagradzana przez Rektora Uniwersytetu Medycznego w Białymstoku zadziałalność naukową i dydaktyczną."
      ],
      image: "/speakers/BEATA.jpg",
    },
    {
      name: "dr n med. Anna Rogowska-Zach",
      title: "Dziedzina: Psychologia, Psychoterapia dzieci i młodzieży",
      description: [
        "• Psycholog, specjalista psychoterapii dzieci i młodzieży oraz psychoterapeutka psychoanalityczna. Pełni funkcję wojewódzkiego konsultanta w dziedzinie psychoterapii dzieci i młodzieży.",
        "• Ukończyła 4 – letnie szkolenie Psychoterapii Psychoanalitycznej w Ośrodku Edukacji Psychoanalitycznej w Warszawie afiliowane przez Polskie Towarzystwo Psychoterapii Psychoanalitycznej i spełniające standardy European Federation for Psychoanalytic Psychotherapy.",
        "• Jej praca naukowa i praktyka kliniczna obejmują przede wszystkim diagnozę oraz terapię zaburzeń ze spektrum autyzmu, zaburzeń lękowych i problemów emocjonalnych w okresie rozwoju.",
        "• Zaangażowana w projekty edukacyjne i badawcze, które dotyczą wczesnego wykrywania symptomów autystycznych oraz opracowywania wieloaspektowych form wsparcia dla dzieci i ich rodzin., kładąc nacisk na pracę systemową z rodziną i środowiskiem szkolnym."
      ],
      image: "/speakers/ANNA.png",
    },
    {
      name: "mgr Renata Szymańska",
      title: "Dziedzina: Psychoterapia uzależnień",
      description: [
        "• Dyrektor Wojewódzkiego Ośrodka Profilaktyki i Terapii Uzależnień (WOPiTU) w Łomży oraz wojewódzki konsultant w dziedzinie psychoterapii uzależnień.",
        "• Posiada wieloletnie doświadczenie w tworzeniu i realizacji programów wspierających osoby zmagające się z uzależnieniami od substancji psychoaktywnych oraz uzależnieniami behawioralnymi.",
        "• Prowadzi warsztaty i wykłady skierowane do terapeutów, pedagogów i pracowników socjalnych, dzieląc się praktyczną wiedzą z zakresu prewencji i terapii uzależnień.",
        "• Realizuje liczne kampanie społeczne, szerząc wiedzę o mechanizmach powstawania uzależnień i możliwościach skutecznej pomocy w wyjściu z nałogu."
      ],
      image: "/speakers/RENATA.jpg",
    },
    {
      name: "dr hab. n. med. Agnieszka Kułak-Bejda",
      title: "Dziedzina: Psychiatria, Psychotraumatologia",
      description: [
        "• Specjalistka w dziedzinie psychiatrii oraz psychotraumatologii.",
        "• Jest ekspertem w zagadnieniach związanych z zaburzeniami psychicznymi występującymi u kobiet w ciąży i w okresie poporodowym, szczególnie w kontekście depresji oraz traumy poporodowej.",
        "• Prowadzi badania nad wpływem czynników psychologicznych i społeczno-kulturowych na zdrowie psychiczne kobiet, podkreślając znaczenie wsparcia rodziny i otoczenia medycznego.",
        "• Autorka licznych artykułów naukowych publikowanych w czasopismach medycznych oraz rozdziałów w monografiach dotyczących opieki psychiatrycznej w okresie okołoporodowym.",
        "• Organizuje szkolenia z zakresu rozpoznawania wczesnych objawów zaburzeń nastroju u kobiet w ciąży i po porodzie, kierowane do lekarzy, położnych i psychologów."
      ],
      image: "/speakers/AGA.jpg",
    },
    {
      name: "dr n. med. Przemysław Osip",
      title: "Dziedzina: Neurologia",
      description: [
        "• Specjalista w dziedzinie neurologii, ordynator Oddziału Neurologicznego i Udarowego w Szpitalu HCP w Poznaniu.",
        "• Ekspert w dziedzinie chorób neurodegeneracyjnych oraz psychiatrycznych aspektach tych schorzeń.",
        "• W swoich badaniach koncentruje się na wczesnej diagnostyce oraz poszukiwaniu innowacyjnych metod leczenia i rehabilitacji pacjentów zmagających się m.in. z chorobą Alzheimera, Parkinsona czy stwardnieniem rozsianym.",
        "• Posiada bogate doświadczenie w prowadzeniu badań klinicznych, współpracuje z zagranicznymi ośrodkami, dzięki czemu wprowadza światowe standardy w opiekę nad pacjentem neurologicznym.",
        "• Jest autorem i współautorem artykułów naukowych dotyczących interdyscyplinarnego podejścia do chorób afektywnych, łączącego neurologię, psychologię oraz psychiatrię."
      ],
      image: "/speakers/PRZEMO.jpg",
    },
    {
      name: "dr Sylwia Szymkowiak",
      title: "Dziedzina: Psychiatria, Psychoterapia",
      description: [
        "• Specjalistka w dziedzinie psychiatrii oraz psychoterapeutka systemowa.",
        "• Ordynator dziennego oddziału psychiatrycznego w Szpitalu HCP w Poznaniu, specjalizująca się w psychiatrii środowiskowej oraz psychoterapii osób przewlekle chorujących psychicznie.",
        "• Czynnie wdraża programy mające na celu umożliwienie pacjentom skutecznego funkcjonowania w warunkach domowych i społecznych, z minimalną koniecznością hospitalizacji.",
        "• Współorganizuje spotkania i warsztaty edukacyjne dla rodzin pacjentów psychiatrycznych, promując ideę wszechstronnego wsparcia i współpracy interdyscyplinarnej.",
        "• Regularnie występuje na konferencjach i sympozjach, prezentując wyniki badań oraz praktyczne wnioski z zakresu leczenia psychiatrycznego oraz skutecznych metod psychoedukacji."
      ],
      image: "/speakers/SYSIA.jpg",
    },
    {
      name: "dr Wiktor Orlof",
      title: "Dziedzina: Psychiatria, Psychoterapia",
      description: [
        "• Psychiatra i psychoterapeuta psychodynamiczny. Pracownik naukowy Uniwersytetu Medycznego w Białymstoku (UMB), łączący praktykę kliniczną z pracą badawczą.",
        "• Posiada bogate doświadczenie w prowadzenie warsztatów m.in. z obszaru seksuologii i wpływu nowych technologii na psychikę i relacje międzyludzkie.",
        "• Jego publikacje naukowe koncentrują się na zagadnieniach mutyzmu wybiórczego oraz dysocjacyjnego zaburzenia tożsamości (osobowość mnoga) oraz sposobach przeciwdziałania im w terapii.",
        "• Prowadzi wykłady dla studentów medycyny, propagując nowatorskie podejścia do leczenia pacjentów z zaburzeniami seksualnymi i psychicznymi.",
        "• Ceniony za swoje zaangażowanie w pracę naukową i kliniczną, a także za empatyczne podejście do pacjentów, co przekłada się na skuteczność jego terapii."
      ],
      image: "/speakers/WIKTOR.jpg",
    },
    {
      name: "dr n. med. Justyna Sołowiej",
      title: "Dziedzina: Psychologia, Psychoterapia, Seksuologia",
      description: [
        "• Psycholog, certyfikowany seksuolog i psychoterapeuta poznawczo-behawioralny z bogatym doświadczeniem w prowadzeniu terapii indywidualnej.",
        "• Specjalizuje się w problematyce zaburzeń seksualnych, w tym w nowych trendach w seksuologii, takich jak chemsex czy cybersex, oraz w pomocy osobom borykającym się z uzależnieniami w sferze seksualnej.",
        "• Prowadzi warsztaty i konsultacje dla profesjonalistów oraz osób zainteresowanych pogłębieniem wiedzy w zakresie seksualności i zdrowia psychicznego.",
        "• Jej publikacje naukowe dotyczą psychospołecznych czynników wpływających na relacje, intymność oraz ryzykowne zachowania seksualne."
      ],
      image: "/speakers/JUSTYNA4.png",
    },
    {
      name: "mgr Justyna Śniadach",
      title: "Dziedzina: Psychologia, Psychoterapia, Terapia uzależnień",
      description: [
        "• Psycholog, psychoterapeutka poznawczo-behawioralna, certyfikowana specjalistka psychoterapii uzależnień.",
        "• Biegła sądowa w dziedzinie psychologii oraz w przedmiocie uzależnienia.",
        "• Posiada wieloletnie doświadczenie zawodowe w pracy z dziećmi, młodzieżą oraz dorosłymi.",
        "• Obecnie realizuje doktorat z zakresu uzależnienia od klasycznych papierosów, e-papierosów oraz podgrzewanych wyrobów tytoniowych (HTP).",
        "• Jej wystąpienia i warsztaty kładą nacisk na rzetelną edukację, przejrzyste informacje o zagrożeniach oraz budowanie świadomości w zakresie odpowiedzialnego zachowania wobec używek."
      ],
      image: "/speakers/JUSTYNA.jpg",
    },
    {
      name: "mgr Aleksandra Kicman",
      title: "Dziedzina: Diagnostyka labolatoryjna",
      description: [
        "• Absolwentka Uniwersytetu Medycznego w Białymstoku (UMB). Doktorantka w Zakładzie Medycyny Estetycznej na Uniwersytecie Medycznym w Białymstoku.",
        "• W swojej pracy stosuje interdyscyplinarne podejście, łącząc różne dziedziny medycyny w celu zapewnienia kompleksowej opieki.",
        "• Jej zainteresowania zawodowe obejmują psychiatrię oraz badania nad wpływem biomarkerów na szeroko pojęte zdrowie psychiczne.",
        "• Autorka i współautorka licznych publikacji naukowych z zakresu chorób onkologicznych w tym zastosowania oznaczenia markerów nowotworowych w diagnostyce onkologi ginekologicznej.",
        "• Jest ceniona za swoje zaangażowanie w pracę naukową oraz dydaktyczną."
      ],
      image: "/speakers/TAL.jpg",
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
              <h3 className="text-lg text-primary mb-4 italic">{speaker.title}</h3>
              <h3 className="text-lg text-primary mb-4 italic">{speaker.secondTitle}</h3>
              {Array.isArray(speaker.description) ? (
                <div className="space-y-3 text-gray-700">
                  {speaker.description.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p className="text-gray-700">{speaker.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
