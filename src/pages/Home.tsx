
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight">
            Nowe Horyzonty w Psychologii i Psychoterapii
          </h1>
          <p className="mt-4 text-xl font-light">
            Innowacyjne Podejścia i Metody Leczenia
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <Calendar className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Konferencji</h3>
            <p className="text-gray-600">15-16 Czerwca 2024</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <MapPin className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Lokalizacja</h3>
            <p className="text-gray-600">Uniwersytet Example, Warszawa</p>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <CreditCard className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Koszt Uczestnictwa</h3>
            <p className="text-gray-600">od 599 PLN</p>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-primary mb-6">
              O Konferencji
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Zapraszamy do udziału w prestiżowej konferencji naukowej
              poświęconej najnowszym trendom i innowacjom w dziedzinie
              psychologii i psychoterapii. Wydarzenie zgromadzi wybitnych
              ekspertów, którzy podzielą się swoją wiedzą i doświadczeniem w
              zakresie nowoczesnych metod terapeutycznych.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
