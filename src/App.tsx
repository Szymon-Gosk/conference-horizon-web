
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Program from "./pages/Program";
import Speakers from "./pages/Speakers";
import Committee from "./pages/Committee";
import Patrons from "./pages/Patrons";
import Sponsors from "./pages/Sponsors";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="program" element={<Program />} />
            <Route path="prelegenci" element={<Speakers />} />
            <Route path="komitety" element={<Committee />} />
            <Route path="patronaty" element={<Patrons />} />
            <Route path="sponsorzy" element={<Sponsors />} />
            <Route path="regulamin" element={<Terms />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
