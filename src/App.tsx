import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllVendors from "./pages/AllVendors";
import Cheapest from "./pages/Cheapest";
import VendorDetail from "./pages/VendorDetail";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="telyu-street">
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-vendors" element={<AllVendors />} />
          <Route path="/cheapest" element={<Cheapest />} />
          <Route path="/vendor/:id" element={<VendorDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
