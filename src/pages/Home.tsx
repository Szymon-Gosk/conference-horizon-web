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
            Nowe Horyzonty w Psychologii i Psychoterapii
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light">
            Innowacyjne Podejścia i Metody Leczenia
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <Calendar className="w-10 h-10 text-primary mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Data Konferencji</h3>
            <p className="text-gray-600">23 maja 2025 (piątek)</p>
            <p className="text-gray-600 mt-2">godz. 13:30-19:30</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <MapPin className="w-10 h-10 text-primary mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Akademia Podlaska w Białymstoku</p>
            <p className="text-gray-600 mt-2">Aula (sala 303, 2 piętro)</p>
            <p className="text-gray-600 mt-2">Al. Jana Pawła II 91</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <CreditCard className="w-10 h-10 text-primary mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Koszt Uczestnictwa</h3>
            <p className="text-gray-600">Studenci APwB: nieodpłatnie</p>
            <p className="text-gray-600 mt-2">Pozostali uczestnicy: 75 zł</p>
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
              Konferencja ma na celu promowanie zdrowia psychicznego dzieci, młodzieży i dorosłych oraz prezentację
              najnowszych form leczenia. Jest to również okazja do wymiany wiedzy i rozwoju zawodowego specjalistów w
              dziedzinie psychologii i psychoterapii.

              Będzie to wyjątkowa szansa do wysłuchania wystąpień uznanych autorytetów z zakresu psychiatrii,
              psychologii, psychoterapii i neurologii. W programie przewidziano także prezentacje studentów, co
              umożliwi poznanie najbardziej obiecujących młodych badaczy oraz innowacyjnych pomysłów na terapię i
              wsparcie osób w kryzysie psychicznym.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Dla kogo?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Przedsięwzięcie skierowane jest do specjalistów z zakresu psychologii, psychiatrii, psychoterapii i
              neurologii, a także do studentów kierunków związanych ze zdrowiem psychicznym oraz osób zainteresowanych
              tematyką zdrowia psychicznego. Konferencja będzie również otwarta dla przedstawicieli organizacji
              pozarządowych, instytucji wsparcia psychologicznego oraz wszystkich osób zaangażowanych w pomoc osobom w
              kryzysie psychicznym.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Co zyskam?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Każdy uczestnik otrzyma certyfikat uczestnictwa w konferencji oraz zestaw materiałów konferencyjnych
              (torba materiałowa, notes, teczka na dokumenty, długopis, identyfikator ze smyczą).
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Zapisy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Aby zarejestrować się na konferencję, prosimy o skorzystanie z zakładki „Rejestracja”. Rejestracja jest
              obowiązkowa dla wszystkich uczestników z uwagi na ograniczoną liczbę miejsc.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Organizatorzy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Konferencja organizowana jest przez Instytut Nauk Społecznych oraz Katedrę Psychologii Akademii Podlaskiej
              w Białymstoku we współpracy ze Studenckim Kołem Naukowym Psychologii i Psychoterapii „Psychologiczne
              Inspiracje”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
