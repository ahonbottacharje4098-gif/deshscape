export type Destination = {
  slug: string;
  name: string;
  region: string;
  district: string;
  type: string;
  coordinates?: [number, number];
  image: string;
  tag: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  travelNotes: string[];
};

export const destinations: Destination[] = [
  {
    slug: "sajek-valley",
    name: "Sajek Valley",
    region: "Rangamati, Chattogram",
    district: "Rangamati",
    type: "Mountains",
    image: "photo-1500530855697-b586d89ba3ee",
    tag: "Mountain escape",
    shortDescription: "Cloud-kissed hills, winding roads and quiet moments above the green valleys.",
    description: "Sajek Valley is a hill destination in the Rangamati region, known for its rolling green landscape, changing clouds and wide mountain views. It is a place to slow down, enjoy the scenery and experience the atmosphere of the Chittagong Hill Tracts.",
    highlights: ["Panoramic hill and valley views", "Sunrise and changing cloudscapes", "Local culture and regional food"],
    travelNotes: ["Plan the journey in advance and check current road and transport guidance.", "Respect local communities, customs and the natural environment.", "Weather can change quickly in the hills; carry suitable clothing."]
  },
  {
    slug: "cox-s-bazar",
    name: "Cox's Bazar",
    region: "Cox's Bazar, Chattogram",
    district: "Cox's Bazar",
    type: "Beaches",
    image: "photo-1500375592092-40eb2168fd21",
    tag: "Coastal wonder",
    shortDescription: "A long sandy shoreline, sea breeze and a classic coastal escape.",
    description: "Cox's Bazar is one of Bangladesh's best-known coastal destinations. Its broad beach, fishing communities and nearby coastal viewpoints make it a popular place to experience the Bay of Bengal.",
    highlights: ["Long sandy beach and sea views", "Sunrise and sunset by the coast", "Local seafood and coastal culture"],
    travelNotes: ["Follow beach safety notices and lifeguard instructions.", "Check weather and sea conditions before water activities.", "Keep the beach clean and avoid disturbing coastal wildlife."]
  },
  {
    slug: "ratargul-swamp-forest",
    name: "Ratargul Swamp Forest",
    region: "Sylhet",
    district: "Sylhet",
    type: "Forests",
    image: "photo-1441974231531-c6227db76b6e",
    tag: "Into the wild",
    shortDescription: "A quiet freshwater swamp forest where the landscape changes with the water.",
    description: "Ratargul is a freshwater swamp forest in the Sylhet region. During the wetter months, water levels can rise through the forest, creating a distinctive landscape best appreciated with responsible local guidance.",
    highlights: ["Boat journey through the forest", "Seasonal water and forest scenery", "Birdlife and a peaceful natural setting"],
    travelNotes: ["Water levels and visitor conditions vary by season.", "Use locally approved boat services and safety equipment.", "Do not litter, feed wildlife or damage plants."]
  },
  {
    slug: "bichanakandi",
    name: "Bichanakandi",
    region: "Sylhet",
    district: "Sylhet",
    type: "Rivers",
    image: "photo-1470770841072-f978cf4d019e",
    tag: "Hidden gem",
    shortDescription: "Clear streams, stone formations and green hills near the border region.",
    description: "Bichanakandi is a scenic river and stone landscape in the Sylhet region. Its appearance changes with rainfall and water flow, making seasonal conditions an important part of planning a visit.",
    highlights: ["River and stone landscape", "Views of surrounding green hills", "Photography and nature appreciation"],
    travelNotes: ["Check local weather and river conditions before travelling.", "Avoid deep or fast-moving water and follow local safety advice.", "Wear footwear suitable for wet and uneven surfaces."]
  },
  {
    slug: "sundarbans",
    name: "Sundarbans",
    region: "Khulna",
    district: "Khulna",
    type: "Forests",
    image: "photo-1511497584788-876760111969",
    tag: "World heritage",
    shortDescription: "A remarkable mangrove landscape shaped by rivers, tides and wildlife.",
    description: "The Sundarbans is the world's largest mangrove forest, shared by Bangladesh and India. The Bangladesh portion is a protected natural landscape of tidal waterways, mudflats and rich biodiversity.",
    highlights: ["Mangrove forest and tidal waterways", "Wildlife and birdwatching opportunities", "Guided nature and river experiences"],
    travelNotes: ["Visit only through authorised routes and operators.", "Follow forest department rules and your guide's instructions.", "Keep a respectful distance from wildlife and never leave waste behind."]
  },
  {
    slug: "jaflong",
    name: "Jaflong",
    region: "Sylhet",
    district: "Sylhet",
    type: "Nature",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/%E0%A6%9C%E0%A6%BE%E0%A6%AB%E0%A6%B2%E0%A6%82%2C_%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%9F_%E0%A7%A6%E0%A7%A7.jpg",
    tag: "Nature retreat",
    shortDescription: "A scenic riverside landscape framed by green hills and flowing water.",
    description: "Jaflong is a well-known scenic area in the Sylhet region, appreciated for its river views and surrounding hills. The landscape and river conditions vary through the year.",
    highlights: ["Riverside and hill scenery", "Views across the border landscape", "Local culture and regional food"],
    travelNotes: ["Respect marked boundaries and local guidance.", "Check weather and river conditions before your visit.", "Choose responsible local services and leave the area clean."]
  }
];

import { dhakaDivisionDestinations } from "./dhakaDivision";

destinations.push(...dhakaDivisionDestinations);

export const destinationTypes = ["All experiences", "Mountains", "Beaches", "Forests", "Rivers", "Nature", "Heritage"];
export const destinationRegions = ["All regions", "Rangamati", "Cox's Bazar", "Sylhet", "Khulna", "Dhaka Division"];
