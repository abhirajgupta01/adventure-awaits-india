
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import AttractionDetails from "./pages/AttractionDetails.jsx";
import Bookings from "./pages/Bookings.jsx";
import BudgetResults from "./pages/BudgetResults.jsx";
import Contact from "./pages/Contact.jsx";
import ExploreStates from "./pages/ExploreStates.jsx";
import HotelDetails from "./pages/HotelDetails.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import RestaurantDetails from "./pages/RestaurantDetails.jsx";
import StateAttractions from "./pages/StateAttractions.jsx";
import StateDetails from "./pages/StateDetails.jsx";
import StateHotels from "./pages/StateHotels.jsx";
import StateRestaurants from "./pages/StateRestaurants.jsx";
import NotFound from "./pages/NotFound.jsx";

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
          <Route path="/state/:stateId/attractions/:attractionId" element={<AttractionDetails />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/budget-results" element={<BudgetResults />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/explore-states" element={<ExploreStates />} />
          <Route path="/state/:stateId/hotels/:hotelId" element={<HotelDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/state/:stateId/restaurants/:restaurantId" element={<RestaurantDetails />} />
          <Route path="/state/:stateId" element={<StateDetails />} />
          <Route path="/state/:stateId/attractions" element={<StateAttractions />} />
          <Route path="/state/:stateId/hotels" element={<StateHotels />} />
          <Route path="/state/:stateId/restaurants" element={<StateRestaurants />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
