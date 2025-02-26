
import { ClipboardPen, MessageCircle, Coffee, University, GraduationCap, Award } from "lucide-react";

const Program = () => {
  const schedule = [
    { startTime: "13:00", endTime: "14:00", title: "Rejestracja uczestników", type: "break", icon: ClipboardPen },
    { time: "14:00", title: "Otwarcie Konferencji", type: "speech", icon: University },
    { time: "14:15", title: "Wystąpienia studentów", speaker: "  ze Studenckiego Koła Naukowego Psychologii i Psychoterapii \"Psychologiczne Inspiracje\"", type: "speech", icon: GraduationCap },
    { startTime: "15:30", endTime: "15:45", title: "I przerwa kawowa", type: "break", icon: Coffee },
    { time: "15:45", title: "Wręczenie przez Rektora wyróżnień za studenckie wystąpienia", type: "speech", icon: Award },
    { time: "16:00", speaker: "prof. dr hab. n. med.  Napoleon Waszkiewicz", speakerDescription: "Członek Honorowy Komitetu Naukowego", title: "Czy mamy prawo leczyć psychodelikami?", type: "speech", icon: MessageCircle },
    { time: "16:20", speaker: "dr hab. n med. Beata Galińska-Skok", speakerDescription: "Konsultant wojewódzki w dziedzinie, psychiatrii", title: "Rodzina wobec choroby psychicznej – jak rozumieć i wspierać", type: "speech", icon: MessageCircle },
    { time: "16:40", speaker: "dr n. med. Anna Rogowska Zach", speakerDescription: "Konsultant wojewódzki psychoterapii dzieci i młodzieży", title: "Autystyczne obrony", type: "speech", icon: MessageCircle },
    { time: "17:00", speaker: "mgr Renata Szymańska", speakerDescription: "Dyrektor WOPiTU w Łomży, konsultant wojewódzki uzależnień", title: "Focusing w terapii osób uzależnionych", type: "speech", icon: MessageCircle },
    { startTime: "17:20", endTime: "17:40", title: "II przerwa kawowa", type: "break", icon: Coffee },
    { time: "17:40", speaker: "dr hab. n. med. Agnieszka Kułak-Bejda", title: "Zaburzenia więzi a depresja w ciąży i po porodzie", type: "speech", icon: MessageCircle },
    { time: "18:00", speaker: "dr n. med. Karolina Wilczyńska", title: "Chronoterapia w leczeniu zaburzeń afektywnych", type: "speech", icon: MessageCircle },
    { time: "18:20", speaker: "dr. n. med. Przemysław Osip", speakerDescription: "dr Sylwia Szymkowiak (Poznań)", title: "Elektrostymulacja mózgu – przeszłość czy przyszłość psychiatrii?", type: "speech", icon: MessageCircle },
    { time: "18:40", speaker: "dr Wiktor Orlof", speakerDescription: "dr n. med. Justyna Sołowiej", title: "Chemsex, cybersex – nowe trendy w seksuologii", type: "speech", icon: MessageCircle },
    { time: "19:00", speaker: "mgr Justyna Śniadach", speakerDescription: "mgr Aleksandra Kicman", title: "Marihuana – czego diler ci nie powie?", type: "speech", icon: MessageCircle },
    { startTime: "19:20", endTime: "19:40", title: "Zakończenie konferencji", type: "break", icon: University }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80")',
          }}
        />
        <div className="relative">
          <h1 className="text-4xl font-bold text-primary mb-8">Program Konferencji</h1>
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                {item.type === "break" ? (
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-primary">
                        {item.startTime} - {item.endTime}
                      </div>
                      <div className="text-xl font-medium">{item.title}</div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-primary">
                        {item.time}
                      </div>
                      <div className="text-xl font-medium">{item.title}</div>
                      <div className="text-gray-600">{item.speaker}</div>
                      <div className="text-gray-600">{item.speakerDescription}</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
