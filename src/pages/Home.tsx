import {Calendar, MapPin, CreditCard} from "lucide-react";

const Home = () => {
  return (
    <div className="animate-fade-in">
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("/images/backgrounds/conference.webp")',
        }}
      >
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm"/>
        <div className="relative z-10 text-center text-white px-4">
          <p className="text-xl md:text-2xl lg:text-3xl font-medium mb-3">
            Konferencja Naukowa
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl mx-auto leading-tight mb-4">
            Nowe Horyzonty w Psychiatrii i Psychoterapii
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light">
            Uzależnienia XXI wieku
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <Calendar className="w-10 h-10 text-primary mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Data Konferencji</h3>
            <p className="text-gray-600">29 maja 2026 (piątek)</p>
            {/* Godzina na dole */}
            <p className="text-gray-600 mt-2"></p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <MapPin className="w-10 h-10 text-primary mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Wydział Nauk o Zdrowiu UMB</p>
            <p className="text-gray-600 mt-2"></p>
            <p className="text-gray-600 mt-2"></p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <CreditCard className="w-10 h-10 text-primary mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Koszt Uczestnictwa</h3>
            <p className="text-gray-600">Nieodpłatnie</p>
            <p className="text-gray-600 mt-2"></p>
            <p className="text-gray-600 mt-2 text-sm">
              Wymagana rejestracja każdego z uczestników
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Cel konferencji
            </h2>
            <p className="text-gray-600 leading-relaxed">
                Konferencja ma na celu przedstawienie najnowszej wiedzy dotyczącej uzależnień XXI wieku oraz aktualnych
                zagadnień z pogranicza psychiatrii, psychoterapii i neurologii. Wydarzenie stanowi przestrzeń do wymiany
                doświadczeń klinicznych oraz spotkania specjalistów zajmujących się diagnozą, terapią i profilaktyką
                współczesnych uzależnień — zarówno od substancji psychoaktywnych jak i behawioralnych.
            </p>
              <br/>
            <p className="text-gray-600 leading-relaxed">
                Uczestnicy będą mieli okazję wysłuchać wykładów uznanych ekspertów, zapoznać się z innowacyjnymi metodami
                terapeutycznymi oraz najnowszymi wynikami badań.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Dla kogo?
            </h2>
            <p className="text-gray-600 leading-relaxed">
                Konferencja skierowana jest przede wszystkim do lekarzy, rezydentów psychiatrii oraz studentów kierunków medycznych zainteresowanych nowoczesnym podejściem do diagnostyki i leczenia zaburzeń psychicznych oraz uzależnień.
            </p>
              <br/>
            <p className="text-gray-600 leading-relaxed">
                Udział w wydarzeniu będzie wartościowy także dla psychologów, psychoterapeutów, specjalistów zdrowia publicznego, pracowników ochrony zdrowia, a także studentów kierunków medycznych, nauk o zdrowiu, psychologii, pedagogiki oraz kierunków pokrewnych.
            </p>
              <br/>
            <p className="text-gray-600 leading-relaxed">
                Zapraszamy również przedstawicieli instytucji i organizacji zajmujących się wsparciem osób z chorobami psychicznymi i uzależnieniami.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Co zyskam?
            </h2>
            <p className="text-gray-600 leading-relaxed">
                Każdy uczestnik otrzyma certyfikat udziału w konferencji oraz identyfikator ze smyczą.
                Wydarzenie będzie także okazją do zdobycia punktów edukacyjnych dla lekarzy rezydentów oraz przedstawicieli innych zawodów medycznych (zgodnie z obowiązującymi przepisami).
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Zapisy
            </h2>
            <p className="text-gray-600 leading-relaxed">
                Aby zarejestrować się na konferencję, prosimy o skorzystanie z zakładki „Rejestracja”. Rejestracja jest obowiązkowa dla wszystkich uczestników z uwagi na ograniczoną liczbę miejsc.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Organizatorzy
            </h2>
            <p className="text-gray-600 leading-relaxed">
                Konferencja organizowana jest przez Klinikę Psychiatrii Uniwersytetu Medycznego w Białymstoku.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
