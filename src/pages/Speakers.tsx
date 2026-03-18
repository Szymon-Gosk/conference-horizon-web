
const Speakers = () => {
  const speakers = [
    {
      name: "Prof. dr hab. n. med. Napoleon Waszkiewicz",
      title: "Kierownik Kliniki Psychiatrii Uniwersytetu Medycznego w Białymstoku",
      secondTitle: "Dziedzina: Psychiatria",
      description: [
        "• Prof. dr hab. n. med. Napoleon Waszkiewicz jest wybitnym specjalistą w dziedzinie psychiatrii, pełniącym funkcję kierownika Kliniki Psychiatrii Uniwersytetu Medycznego w Białymstoku. Jest również prezesem Oddziału Podlaskiego Polskiego Towarzystwa Psychiatrycznego.",
        "• Ceniony w Polsce i za granicą ekspert w zakresie nowoczesnych metod leczenia zaburzeń psychicznych.",
        "• Od wielu lat prowadzi badania naukowe nad wykorzystaniem psychodelików i innych niekonwencjonalnych środków w psychiatrii, koncentrując się na etycznym, klinicznym i społecznym wymiarze tych terapii.",
        "• Autor i współautor licznych publikacji w renomowanych czasopismach medycznych. Jego prace dotyczą m.in. psychofarmakologii, podłoża neurobiologicznego zaburzeń oraz badań klinicznych nad innowacyjnymi metodami leczenia."
      ],
      image: "/speakers/NAPOLEN.png",
    },
    {
      name: "dr n. med. Bohdan Tadeusz Woronowicz",
      secondTitle: "Dziedzina: Psychiatria, Psychoterapia uzależnień, Seksuologia",
      description: [
        "• Specjalista psychiatrii i seksuolog, certyfikowany specjalista terapii uzależnień oraz certyfikowany superwizor psychoterapii uzależnień",
        "• Twórca i wieloletni kierownik Ośrodka Terapii Uzależnień w Instytucie Psychiatrii i Neurologii w Warszawie (kierował nim przez 35 lat).",
        "• Założyciel i wieloletni dyrektor Centrum Konsultacyjnego AKMED.",
        "• Wieloletni prezes Zarządu Fundacji Doktora Woronowicza „Zależni–Niezależni”.",
        "• Odznaczony Krzyżem Oficerskim Orderu Odrodzenia Polski (1999).",
        "• Laureat Nagrody Pelikana (2015) oraz Nagrody m.st. Warszawy (2018) za wybitne zaangażowanie w pomoc osobom uzależnionym",
      ],
      image: "/speakers/WORON.jpg",
    },
    {
      name: "dr n. med. Anna Rogowska-Zach",
      title: "Dziedzina: Psychologia, Psychoterapia dzieci i młodzieży",
      description: [
        "• Psycholog, specjalista psychoterapii dzieci i młodzieży oraz psychoterapeutka psychoanalityczna. Pełni funkcję wojewódzkiego konsultanta w dziedzinie psychoterapii dzieci i młodzieży.",
        "• Ukończyła 4 – letnie szkolenie Psychoterapii Psychoanalitycznej w Ośrodku Edukacji Psychoanalitycznej w Warszawie afiliowane przez Polskie Towarzystwo Psychoterapii Psychoanalitycznej i spełniające standardy European Federation for Psychoanalytic Psychotherapy.",
        "• Jej praca naukowa i praktyka kliniczna obejmują przede wszystkim diagnozę oraz terapię zaburzeń ze spektrum autyzmu, zaburzeń lękowych i problemów emocjonalnych w okresie rozwoju.",
        "• Zaangażowana w projekty edukacyjne i badawcze, które dotyczą wczesnego wykrywania symptomów autystycznych oraz opracowywania wieloaspektowych form wsparcia dla dzieci i ich rodzin, kładących nacisk na pracę systemową z rodziną i środowiskiem szkolnym."
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
      title: "Dziedzina: Psychiatria",
      description: [
        "• Lekarz psychiatra, adiunkt w Klinice Psychiatrii Uniwersytetu Medycznego w Białymstoku.",
        "• Prowadzi działalność naukową i dydaktyczną, realizując badania oraz zajęcia dla studentów kierunków medycznych.",
        "• Jej zainteresowania badawcze obejmują funkcjonowanie psychiczne kobiet, w tym w okresie ciąży i po porodzie, ze szczególnym uwzględnieniem czynników emocjonalnych i społecznych.",
        "• Kierownik i wykonawca projektów naukowych oraz uczestniczka międzynarodowej współpracy badawczej.",
        "• Autorka i współautorka licznych publikacji naukowych oraz monografii w obszarze psychiatrii i zdrowia psychicznego.",
      ],
      image: "/speakers/AGA.jpg",
    },
    {
      name: "dr n. med. Przemysław Osip",
      title: "Dziedzina: Neurologia",
      description: [
        "• Lekarz specjalista neurologii, związany z Centrum Medycznym HCP w Poznaniu.",
        "• Ordynator oddziału neurologicznego i udarowego, posiadający wieloletnie doświadczenie kliniczne w leczeniu pacjentów neurologicznych.",
        "• Zajmuje się diagnostyką i leczeniem chorób układu nerwowego w warunkach szpitalnych i ambulatoryjnych.",
        "• Posiada bogate doświadczenie w prowadzeniu badań klinicznych, współpracuje z zagranicznymi ośrodkami, dzięki czemu wprowadza światowe standardy w opiece nad pacjentem neurologicznym.",
        "• Autor i współautor publikacji naukowych z zakresu neurologii i neuropsychiatrii."
      ],
      image: "/speakers/PRZEMO.jpg",
    },
    {
      name: "Sylwia Szymkowiak: Lekarz specjalista psychiatrii oraz psychoterapeutka systemowa",
      title: "Dziedzina: Psychiatria, Psychoterapia",
      description: [
        "• Ordynator dziennego oddziału psychiatrycznego w Szpitalu HCP w Poznaniu, z doświadczeniem w pracy z pacjentami przewlekle chorującymi psychicznie.",
        "• W swojej pracy klinicznej koncentruje się na podejściu środowiskowym oraz wsparciu funkcjonowania pacjentów w funkcjonowaniu społecznym i rodzinnym.",
        "• Główny badacz (Principal Investigator) w badaniach klinicznych, z wieloletnim doświadczeniem w ich realizacji.",
        "• Współautorka wartościowych publikacji naukowych z zakresu psychiatrii.",
        "• Realizuje pracę doktorską dotyczącą wczesnej diagnostyki zaburzeń afektywnych dwubiegunowych."
      ],
      image: "/speakers/SYSIA.jpg",
    },
    {
      name: "Wiktor Orlof: Lekarz specjalista psychiatrii",
      title: "Dziedzina: Psychiatria, Psychoterapia",
      description: [
        "• Specjalista psychiatrii oraz psychoterapeuta psychodynamiczny. Związany z Uniwersytetem Medycznym w Białymstoku, gdzie łączy pracę kliniczną z działalnością dydaktyczną.",
        "• Posiada doświadczenie w prowadzeniu warsztatów  z zakresu m.in. seksuologii oraz wpływu nowych technologii na funkcjonowanie psychiczne i relacje interpersonalne.",
        "• Autor i współautor publikacji naukowych poświęconych zagadnieniom mutyzmu wybiórczego oraz zaburzeń dysocjacyjnych, ze szczególnym uwzględnieniem ich znaczenia klinicznego i możliwości terapeutycznych.",
        "• Prowadzi zajęcia dydaktyczne dla studentów kierunków medycznych. W swojej pracy koncentruje się na nowoczesnych podejściach do diagnostyki i leczenia zaburzeń psychicznych, w tym zaburzeń z obszaru zdrowia seksualnego.",
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
        "• Jej publikacje naukowe dotyczą psychospołecznych czynników wpływających na relacje, intymność oraz ryzykowne zachowania seksualne.",
      ],
      image: "/speakers/JUSTYNA4.png",
    },
    {
      name: "mgr Justyna Śniadach",
      title: "Dziedzina: Psychologia, Psychoterapia, Terapia uzależnień",
      description: [
        "• Psycholog, psychoterapeutka poznawczo-behawioralna, certyfikowana specjalistka psychoterapii uzależnień.",
        "• Posiada doświadczenie jako biegła sądowa w dziedzinie psychologii oraz w przedmiocie uzależnienia",
        "• Posiada wieloletnie doświadczenie zawodowe w pracy z dziećmi, młodzieżą oraz dorosłymi.",
        "• Obecnie realizuje doktorat z zakresu uzależnienia od klasycznych papierosów, e-papierosów oraz podgrzewanych wyrobów tytoniowych (HTP).",
        "• Jej wystąpienia i warsztaty kładą nacisk na rzetelną edukację, przejrzyste informacje o zagrożeniach oraz budowanie świadomości w zakresie odpowiedzialnego zachowania wobec używek."
      ],
      image: "/speakers/JUSTYNA.jpg",
    },
    {
      name: "mgr Joanna Szmurło-Grzybko",
      title: "Dziedzina: Psychoterapia uzależnień",
      description: [
        "• Dyrektor Ośrodka Revenu – miejsca kompleksowej pomocy osobom zmagającym się z uzależnieniami oraz ich rodzinom, łączącego terapię, psychoedukację i działania wspierające proces zdrowienia. Uznany specjalista psychoterapii uzależnień z ponad 20-letnim doświadczeniem w pracy terapeutycznej z młodzieżą i osobami dorosłymi.",
        "• W swojej praktyce klinicznej koncentruje się na budowaniu bezpiecznej, stabilnej relacji terapeutycznej, pracy z emocjami, doświadczeniem relacyjnym oraz wzmacnianiu zasobów osób uzależnionych. Szczególną uwagę poświęca pacjentom, u których standardowe oddziaływania terapeutyczne okazują się niewystarczające, integrując podejście relacyjne z praktycznymi i skutecznymi narzędziami pracy.",
        "• Jest aktywnie zaangażowana w lokalne działania na rzecz pomocy osobom uzależnionym, współpracuje z instytucjami pomocowymi oraz środowiskiem terapeutycznym. Posiada duże doświadczenie w prowadzeniu wystąpień konferencyjnych, szkoleń i warsztatów dla specjalistów oraz osób pracujących z pacjentami uzależnionymi.",
      ],
      image: "/speakers/SZMURLO_JOANNA.webp",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/*/!* TEMP INFO BOX *!/*/}
        {/*<div className="space-y-8 mb-8">*/}
        {/*    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row">*/}
        {/*        <div className="md:w-3/4 p-6">*/}
        {/*            <h2 className="text-2xl font-bold text-primary mb-2">*/}
        {/*                Lista prelegentów tegorocznej edycji (2026) pojawi się wkrótce.*/}
        {/*            </h2>*/}
        {/*            /!*<h3 className="text-lg text-primary mb-4 italic"></h3>*!/*/}
        {/*            /!*<h3 className="text-lg text-primary mb-4 italic"></h3>*!/*/}
        {/*            <p className="text-gray-700">Wielu znakomitych ekspertów, którzy wystąpili w maju 2025 r., powróci również w tym roku, a dodatkowo dołączą nowi specjaliści.</p>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/*/!* END OF TEMP INFO BOX *!/*/}
      <h1 className="text-4xl font-bold text-primary mb-8">Prelegenci 2025</h1>
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
