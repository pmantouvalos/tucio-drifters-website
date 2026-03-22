import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";

// --- ΝΕΟ IMPORT ---
// Βεβαιώσου ότι δημιούργησες το αρχείο στο φάκελο components
import ParticlesBackground from "./components/ParticlesBackground"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      
      {/* --- ΝΕΟ WRAPPER DIV --- */}
      {/* Χρειάζεται το relative για να λειτουργήσει σωστά το absolute των particles */}
      <div className="relative min-h-screen w-full overflow-hidden">
        
        {/* --- ΤΟ BACKGROUND --- */}
        <ParticlesBackground />

        <Toaster />
        <Sonner />
        
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </div>
      
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;