import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Survivors from "./pages/Survivors";
import Advocates from "./pages/Advocates";
import Policy from "./pages/Policy";
import About from "./pages/About";
import Training from "./pages/Training";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import GetHelp from "./pages/GetHelp";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/survivors" element={<Survivors />} />
          <Route path="/advocates" element={<Advocates />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-help" element={<GetHelp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
