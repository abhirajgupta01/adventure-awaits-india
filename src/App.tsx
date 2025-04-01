
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import AttractionDetails from "./pages/AttractionDetails";
import Bookings from "./pages/Bookings";
import BudgetResults from "./pages/BudgetResults";
import Contact from "./pages/Contact";
import ExploreStates from "./pages/ExploreStates";
import HotelDetails from "./pages/HotelDetails";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import RestaurantDetails from "./pages/RestaurantDetails";
import StateAttractions from "./pages/StateAttractions";
import StateDetails from "./pages/StateDetails";
import StateHotels from "./pages/StateHotels";
import StateRestaurants from "./pages/StateRestaurants";
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
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/attractions/:id" element={<AttractionDetails />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/budget-results" element={<BudgetResults />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore-states" element={<ExploreStates />} />
          <Route path="/hotels/:id" element={<HotelDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/states/:stateId" element={<StateDetails />} />
          <Route path="/states/:stateId/attractions" element={<StateAttractions />} />
          <Route path="/states/:stateId/hotels" element={<StateHotels />} />
          <Route path="/states/:stateId/restaurants" element={<StateRestaurants />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
