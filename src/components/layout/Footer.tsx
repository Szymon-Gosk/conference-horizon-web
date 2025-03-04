
const Footer = () => {
  return (
    <footer className="bg-white/90 backdrop-blur-md shadow-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {/* Replace with actual logos */}
            <img src="/logos/group.png" alt="Logo 1" className="h-10 w-auto" />
            <img src="/logos/university.png" alt="Logo 2" className="h-10 w-auto" />
          </div>
          <div className="flex space-x-4">
            {/* Replace with actual logos */}
            <img src="/logos/bialystok-online.png" alt="Białystok Online" className="h-10 w-auto" />
            <img src="/logos/radio-bialystok.jpg" alt="Polskie Radio Białystok" className="h-10 w-auto" />
          </div>
          <div className="flex space-x-4">
            {/* Replace with actual logos */}
            <img src="/logos/patronat-bialystok.png" alt="Honorowy Patronat Prezydenta Miasta Białegostoku" className="h-10 w-auto" />
            <img src="/logos/patronat-wojewodztwo.png" alt="Honorowy Patronat Marszałka Województwa Podlaskiego" className="h-10 w-auto" />
            <img src="/logos/wojewoda.jpeg" alt="Wojewoda Podlaski" className="h-10 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
