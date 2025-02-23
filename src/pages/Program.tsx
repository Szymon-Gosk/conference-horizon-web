
import { Clock, Coffee } from "lucide-react";

const Program = () => {
  const schedule = [
    { time: "09:00", speaker: "Dr Anna Kowalska", title: "Otwarcie Konferencji", type: "speech" },
    { time: "09:20", speaker: "Prof. Jan Nowak", title: "Współczesne Wyzwania w Psychoterapii", type: "speech" },
    { time: "09:40", speaker: "Dr Maria Wiśniewska", title: "Innowacyjne Metody Terapeutyczne", type: "speech" },
    { startTime: "10:00", endTime: "10:30", title: "Przerwa kawowa", type: "break" },
    { time: "10:30", speaker: "Prof. Adam Zalewski", title: "Psychologia w Erze Cyfrowej", type: "speech" },
    { time: "10:50", speaker: "Dr Ewa Dąbrowska", title: "Nowe Podejścia w Terapii Poznawczej", type: "speech" },
    // Add more schedule items as needed
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
                      <Coffee className="w-6 h-6 text-primary" />
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
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-primary">
                        {item.time}
                      </div>
                      <div className="text-xl font-medium">{item.title}</div>
                      <div className="text-gray-600">{item.speaker}</div>
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
