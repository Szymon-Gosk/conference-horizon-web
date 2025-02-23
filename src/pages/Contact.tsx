
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-primary mb-8">Kontakt</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Dane kontaktowe
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium">Telefon</p>
                <p className="text-gray-600">+48 123 456 789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">konferencja@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium">Adres</p>
                <p className="text-gray-600">
                  Uniwersytet Example
                  <br />
                  ul. Przykładowa 123
                  <br />
                  00-000 Warszawa
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Organizator konferencji
          </h2>
          <div className="space-y-4">
            <p className="font-medium">Dr hab. Jan Kowalski</p>
            <div className="text-gray-600">
              <p>Kierownik Katedry Psychologii</p>
              <p>Uniwersytet Example</p>
              <p>Tel: +48 123 456 789</p>
              <p>Email: jan.kowalski@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
