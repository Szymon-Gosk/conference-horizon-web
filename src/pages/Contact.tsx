
import { Phone, Mail, MapPin, CircleUserRound } from "lucide-react";

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
                <p className="text-gray-600">85 831 73 17</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">psych@umb.edu.pl</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium">Adres</p>
                <p className="text-gray-600">
                    Klinika Psychiatrii UMB
                    <br />
                    ul. Wołodyjowskiego 2
                    <br />
                    15-272 Białystok
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Koordynator konferencji
          </h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <CircleUserRound className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium">Justyna Śniadach</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">sniadach.justyna@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
