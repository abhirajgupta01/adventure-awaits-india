
// This is a mock data file for the India Travel Guide application
// In a real application, this would be fetched from an API

const STATES_DATA = {
  kerala: {
    id: 'kerala',
    name: 'Kerala',
    description: 'God\'s Own Country with beautiful backwaters, lush greenery, and pristine beaches.',
    attractions: [
      {
        id: 1,
        name: 'Alleppey Backwaters',
        location: 'Alleppey, Kerala',
        description: 'Experience the tranquil backwaters of Kerala on a traditional houseboat. Cruise through palm-fringed narrow canals and witness rural Kerala life.',
        image: '/kerala1.jpg',
        rating: 4.8,
        entryFee: 'Free (Houseboat rates vary)',
        highlights: ['Houseboat Stay', 'Village Life', 'Bird Watching', 'Fishing Experience']
      },
      {
        id: 2,
        name: 'Munnar Tea Gardens',
        location: 'Munnar, Kerala',
        description: 'Vast expanses of tea plantations that offer stunning views and opportunities to learn about tea processing.',
        image: '/kerala2.jpg',
        rating: 4.7,
        entryFee: '₹200 for Tea Museum',
        highlights: ['Tea Factory Tour', 'Tea Tasting', 'Photography Points', 'Spice Gardens']
      }
    ],
    hotels: [
      {
        id: 1,
        name: 'Kumarakom Lake Resort',
        location: 'Kumarakom, Kerala',
        description: 'A luxury resort by the stunning Vembanad Lake offering traditional Kerala architecture with modern amenities.',
        image: '/kerala-hotel1.jpg',
        rating: 4.9,
        priceRange: '₹20,000 - ₹50,000',
        specialFeatures: ['Ayurveda Spa', 'Infinity Pool', 'Houseboat Cruises', 'Traditional Kerala Cuisine']
      },
      {
        id: 2,
        name: 'Taj Malabar Resort & Spa',
        location: 'Kochi, Kerala',
        description: 'Colonial charm meets luxury at this waterfront property with stunning views of Kochi harbor.',
        image: '/kerala-hotel2.jpg',
        rating: 4.8,
        priceRange: '₹15,000 - ₹40,000',
        specialFeatures: ['Jiva Spa', 'Sunset Cruises', 'Colonial Architecture', 'Multiple Dining Options']
      }
    ],
    restaurants: [
      {
        id: 1,
        name: 'Grand Pavilion',
        location: 'Kochi, Kerala',
        description: 'Elegant restaurant serving authentic Kerala cuisine with a focus on seafood delicacies.',
        image: '/kerala-restaurant1.jpg',
        rating: 4.7,
        cuisine: 'Kerala',
        priceRange: '₹₹₹',
        specialDishes: ['Karimeen Pollichathu', 'Kerala Fish Curry', 'Appam with Stew']
      },
      {
        id: 2,
        name: 'Spice Route',
        location: 'Thiruvananthapuram, Kerala',
        description: 'Award-winning restaurant with a menu inspired by the ancient spice route that passed through Kerala.',
        image: '/kerala-restaurant2.jpg',
        rating: 4.8,
        cuisine: 'Multi-cuisine',
        priceRange: '₹₹₹₹',
        specialDishes: ['Kerala Thali', 'Seafood Platter', 'Spice-infused Desserts']
      }
    ]
  },
  rajasthan: {
    id: 'rajasthan',
    name: 'Rajasthan',
    description: 'Land of Kings featuring majestic forts, vibrant culture, and vast Thar Desert.',
    attractions: [
      {
        id: 1,
        name: 'Amber Fort',
        location: 'Jaipur, Rajasthan',
        description: 'A majestic fort overlooking Maota Lake, known for its artistic Hindu style elements with large ramparts, series of gates and cobbled paths.',
        image: '/rajasthan1.jpg',
        rating: 4.6,
        entryFee: '₹500 for Foreigners, ₹100 for Indians',
        highlights: ['Elephant Rides', 'Light and Sound Show', 'Sheesh Mahal (Hall of Mirrors)', 'Ganesh Pol Gateway']
      },
      {
        id: 2,
        name: 'Mehrangarh Fort',
        location: 'Jodhpur, Rajasthan',
        description: 'One of the largest forts in India, situated 400 feet above the city and encircled by imposing thick walls.',
        image: '/rajasthan2.jpg',
        rating: 4.7,
        entryFee: '₹600 for Foreigners, ₹120 for Indians',
        highlights: ['Museum Collections', 'Panoramic City Views', 'Flying Fox Zip Tour', 'Folk Performances']
      }
    ],
    hotels: [
      {
        id: 1,
        name: 'Umaid Bhawan Palace',
        location: 'Jodhpur, Rajasthan',
        description: 'Part hotel, part museum, and still residence of the royal family, this magnificent palace offers an extraordinary experience.',
        image: '/rajasthan-hotel1.jpg',
        rating: 4.9,
        priceRange: '₹30,000 - ₹200,000',
        specialFeatures: ['Royal Heritage Tours', 'Vintage Car Collection', 'Regal Architecture', 'Spa and Pool']
      },
      {
        id: 2,
        name: 'The Oberoi Udaivilas',
        location: 'Udaipur, Rajasthan',
        description: 'A luxury hotel on the banks of Lake Pichola offering breathtaking views of the lake, City Palace and Jag Mandir.',
        image: '/rajasthan-hotel2.jpg',
        rating: 4.9,
        priceRange: '₹40,000 - ₹150,000',
        specialFeatures: ['Lakeside Dining', 'Private Lake Access', 'Cultural Performances', 'Royal Spa Treatments']
      }
    ],
    restaurants: [
      {
        id: 1,
        name: 'Suvarna Mahal',
        location: 'Jaipur, Rajasthan',
        description: 'Regal dining experience in an ornate former palace ballroom serving royal cuisines of India.',
        image: '/rajasthan-restaurant1.jpg',
        rating: 4.8,
        cuisine: 'Royal Indian',
        priceRange: '₹₹₹₹',
        specialDishes: ['Laal Maas', 'Royal Thali', 'Game Meat Preparations']
      },
      {
        id: 2,
        name: 'Sheesh Mahal',
        location: 'Udaipur, Rajasthan',
        description: 'Candlelit dining overlooking Lake Pichola with traditional Rajasthani music and dance performances.',
        image: '/rajasthan-restaurant2.jpg',
        rating: 4.7,
        cuisine: 'Rajasthani',
        priceRange: '₹₹₹',
        specialDishes: ['Dal Baati Churma', 'Gatte ki Sabzi', 'Rajasthani Safed Maas']
      }
    ]
  },
  himachalPradesh: {
    id: 'himachalPradesh',
    name: 'Himachal Pradesh',
    description: 'The Land of Snow with stunning mountain landscapes, hill stations and adventure opportunities.',
    attractions: [
      {
        id: 1,
        name: 'Rohtang Pass',
        location: 'Manali, Himachal Pradesh',
        description: 'A high mountain pass (13,058 ft) offering breathtaking views of glaciers, peaks, Chandra River and the Lahaul Valley.',
        image: '/himachal-pradesh1.jpg',
        rating: 4.7,
        entryFee: 'Free (Permit required)',
        highlights: ['Snow Activities', 'Panoramic Views', 'Adventure Sports', 'Photography']
      },
      {
        id: 2,
        name: 'The Ridge',
        location: 'Shimla, Himachal Pradesh',
        description: 'A large open space in the heart of Shimla that offers spectacular views of the mountain ranges.',
        image: '/himachal-pradesh2.jpg',
        rating: 4.5,
        entryFee: 'Free',
        highlights: ['Christ Church', 'Shopping', 'Cultural Events', 'Scenic Views']
      }
    ],
    hotels: [
      {
        id: 1,
        name: 'Wildflower Hall',
        location: 'Shimla, Himachal Pradesh',
        description: 'A luxury resort set in 22 acres of virgin woods of pine and cedar, offering spectacular views of the Himalayas.',
        image: '/himachal-hotel1.jpg',
        rating: 4.8,
        priceRange: '₹25,000 - ₹60,000',
        specialFeatures: ['Forest Walks', 'Spa Treatments', 'Mountain Views', 'Colonial Architecture']
      },
      {
        id: 2,
        name: 'The Himalayan',
        location: 'Manali, Himachal Pradesh',
        description: 'A castle-inspired luxury resort with Gothic architecture offering stunning views of the Manali Valley and mountains.',
        image: '/himachal-hotel2.jpg',
        rating: 4.7,
        priceRange: '₹15,000 - ₹35,000',
        specialFeatures: ['Castle Aesthetics', 'Adventure Activities', 'Apple Orchard Tours', 'Traditional Himachali Cuisine']
      }
    ],
    restaurants: [
      {
        id: 1,
        name: 'Cafe Sol',
        location: 'Dharamshala, Himachal Pradesh',
        description: 'A charming cafe offering panoramic views of the Kangra Valley along with delicious organic food.',
        image: '/himachal-restaurant1.jpg',
        rating: 4.6,
        cuisine: 'Multi-cuisine',
        priceRange: '₹₹',
        specialDishes: ['Trout Fish', 'Himalayan Herbal Teas', 'Wood-fired Pizzas']
      },
      {
        id: 2,
        name: 'The Whispering Valley',
        location: 'Shimla, Himachal Pradesh',
        description: 'A cozy restaurant specializing in Himachali cuisine with amazing views of the cedar forests.',
        image: '/himachal-restaurant2.jpg',
        rating: 4.5,
        cuisine: 'Himachali',
        priceRange: '₹₹',
        specialDishes: ['Chana Madra', 'Dham', 'Tudkiya Bhath']
      }
    ]
  }
};

// Function to get data for a specific state
export const getStateData = (stateId) => {
  return STATES_DATA[stateId] || null;
};

// Function to get all states data
export const getAllStates = () => {
  return Object.values(STATES_DATA);
};

// Function to get featured destinations
export const getFeaturedDestinations = () => {
  return [
    {
      id: 'kerala',
      name: 'Kerala',
      tagline: 'God\'s Own Country',
      image: '/kerala1.jpg'
    },
    {
      id: 'rajasthan',
      name: 'Rajasthan',
      tagline: 'Land of Kings',
      image: '/rajasthan1.jpg'
    },
    {
      id: 'himachalPradesh',
      name: 'Himachal Pradesh',
      tagline: 'The Abode of Snow',
      image: '/himachal-pradesh1.jpg'
    }
  ];
};

export default STATES_DATA;
