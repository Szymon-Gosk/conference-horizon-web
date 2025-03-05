
const Footer = () => {
  return (
    <footer className="bg-white/90 backdrop-blur-md shadow-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0 items-center">
            {/* First section - bigger logos */}
            <div className="flex items-center justify-center">
              <img src="/logos/group.png" alt="Logo 1" className="h-20 w-auto" loading="lazy" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/university.png" alt="Logo 2" className="h-20 w-auto" loading="lazy" />
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            {/* Second section - medium and small logos */}
            <div className="flex items-center justify-center">
              <img src="/logos/bialystok-online.png" alt="Białystok Online" className="h-10 w-auto" loading="lazy" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/radio-bialystok.jpg" alt="Polskie Radio Białystok" className="h-16 w-auto" loading="lazy" />
            </div>
          </div>
          <div className="flex space-x-4 items-center">
            {/* Third section - larger logos */}
            <div className="flex items-center justify-center">
              <img src="/logos/patronat-bialystok.png" alt="Honorowy Patronat Prezydenta Miasta Białegostoku" className="h-24 w-auto" loading="lazy" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/patronat-wojewodztwo.png" alt="Honorowy Patronat Marszałka Województwa Podlaskiego" className="h-24 w-auto" loading="lazy" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/wojewoda.jpeg" alt="Wojewoda Podlaski" className="h-24 w-auto" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
