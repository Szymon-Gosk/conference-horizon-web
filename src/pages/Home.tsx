
import { Calendar, MapPin, CreditCard } from "lucide-react";

const Home = () => {
  return (
    <div className="animate-fade-in">
      <div
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />
        <div className="relative z-10 text-center text-white px-4">
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
            <Calendar className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Konferencji</h3>
            <p className="text-gray-600">23 maja 2025 (piątek)</p>
            <p className="text-gray-600 mt-2">godz. 9:00-15:00</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <MapPin className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Akademia Podlaska w Białymstoku</p>
            <p className="text-gray-600 mt-2">Aula (sala 303, 2 piętro)</p>
            <p className="text-gray-600 mt-2">Al. Jana Pawła II 91</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <CreditCard className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Koszt Uczestnictwa</h3>
            <p className="text-gray-600">Studenci APwB: nieodpłatnie</p>
            <p className="text-gray-600 mt-2">Pozostali uczestnicy: 75 zł</p>
            <p className="text-gray-600 mt-2 text-sm">
              Wymagana rejestracja każdego z uczestników
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Cel konferencji
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Zapraszamy do udziału w prestiżowej konferencji naukowej
              poświęconej najnowszym trendom i innowacjom w dziedzinie
              psychologii i psychoterapii.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Dla kogo?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Zapraszamy do udziału w prestiżowej konferencji naukowej
              poświęconej najnowszym trendom i innowacjom w dziedzinie
              psychologii i psychoterapii.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Co zyskam?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Zapraszamy do udziału w prestiżowej konferencji naukowej
              poświęconej najnowszym trendom i innowacjom w dziedzinie
              psychologii i psychoterapii.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Zapisy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Zapraszamy do udziału w prestiżowej konferencji naukowej
              poświęconej najnowszym trendom i innowacjom w dziedzinie
              psychologii i psychoterapii.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Organizator
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Zapraszamy do udziału w prestiżowej konferencji naukowej
              poświęconej najnowszym trendom i innowacjom w dziedzinie
              psychologii i psychoterapii.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
