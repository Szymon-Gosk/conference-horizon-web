
import { ClipboardPen, MessageCircle, Coffee, University, GraduationCap, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Program = () => {
  const schedule = [
    { startTime: "13:30", endTime: "14:00", title: "Rejestracja uczestników", type: "break", icon: ClipboardPen },
    { time: "14:00", title: "Otwarcie Konferencji", type: "speech", icon: University },
    { time: "14:15", title: "Wystąpienia studentów", speaker: "  ze Studenckiego Koła Naukowego Psychologii i Psychoterapii \"Psychologiczne Inspiracje\"", type: "speech", icon: GraduationCap },
    { time: "15:15", title: "Wręczenie przez Rektora wyróżnień za studenckie wystąpienia", type: "speech", icon: Award },
    { startTime: "15:30", endTime: "15:45", title: "I przerwa kawowa", type: "break", icon: Coffee },
    { time: "15:50 - Sesja otwarcia", speaker: "prof. dr hab. n. med.  Napoleon Waszkiewicz", speakerDescription: "Członek Honorowy Komitetu Naukowego", title: "Czy mamy prawo leczyć psychodelikami?", type: "speech", icon: MessageCircle },
    { time: "16:15", speaker: "dr hab. n med. Beata Galińska-Skok", speakerDescription: "Konsultant wojewódzki w dziedzinie psychiatrii", title: "Rodzina wobec choroby psychicznej – jak rozumieć i wspierać", type: "speech", icon: MessageCircle },
    { time: "16:40", speaker: "dr n. med. Anna Rogowska Zach", speakerDescription: "Konsultant wojewódzki w dziedzinie psychoterapii dzieci i młodzieży", title: "Autystyczne obrony", type: "speech", icon: MessageCircle },
    { time: "17:05", speaker: "mgr Renata Szymańska", speakerDescription: "Dyrektor WOPiTU w Łomży, konsultant wojewódzki w dziedzinie uzależnień", title: "Focusing w terapii osób uzależnionych", type: "speech", icon: MessageCircle },
    { startTime: "17:30", endTime: "17:40", title: "II przerwa kawowa", type: "break", icon: Coffee },
    { time: "17:50", speaker: "dr hab. n. med. Agnieszka Kułak-Bejda", title: "Zaburzenia więzi a depresja w ciąży i po porodzie", type: "speech", icon: MessageCircle },
    { time: "18:15", speaker: "dr. n. med. Przemysław Osip (Poznań)", speakerDescription: "dr Sylwia Szymkowiak (Poznań)", title: "Elektrostymulacja mózgu – przeszłość czy przyszłość psychiatrii?", type: "speech", icon: MessageCircle },
    { time: "18:40", speaker: "dr n. med. Justyna Sołowiej", speakerDescription: "dr Wiktor Orlof", title: "Chemsex, cybersex – nowe trendy w seksuologii", type: "speech", icon: MessageCircle },
    { time: "19:05", speaker: "mgr Justyna Śniadach", speakerDescription: "mgr Aleksandra Kicman", title: "Marihuana – czego diler ci nie powie?", type: "speech", icon: MessageCircle },
    { startTime: "19:30", endTime: "19:40", title: "Zakończenie konferencji", type: "break", icon: University }
  ];

  const handleDownloadPDF = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href to the path of the PDF file
    link.href = '/program.pdf';
    // Set the download attribute to suggest a filename
    link.download = 'program-konferencji.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Clean up - remove the link
    document.body.removeChild(link);
  };

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
          <div className="flex justify-between items-center mb-8">
            <Button 
              onClick={handleDownloadPDF} 
              className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white"
            >
              <Download className="w-4 h-4" />
              Pobierz Program PDF
            </Button>
            <h1 className="text-4xl font-bold text-primary">Program Konferencji</h1>
          </div>
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
