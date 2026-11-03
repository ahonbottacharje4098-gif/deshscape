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
    coordinates: [25.0137, 91.927],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ratargul%20Swamp%20Forest%20in%20Sylhet.jpg?width=1400",
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
    coordinates: [25.177, 91.858],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bichanakandi%20Sylhet.jpg?width=1400",
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
    coordinates: [25.163, 92.018],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jaflong%2C%20Sylhet%20%282025%29.jpg?width=1400",
    tag: "Nature retreat",
    shortDescription: "A scenic riverside landscape framed by green hills and flowing water.",
    description: "Jaflong is a well-known scenic area in the Sylhet region, appreciated for its river views and surrounding hills. The landscape and river conditions vary through the year.",
    highlights: ["Riverside and hill scenery", "Views across the border landscape", "Local culture and regional food"],
    travelNotes: ["Respect marked boundaries and local guidance.", "Check weather and river conditions before your visit.", "Choose responsible local services and leave the area clean."]
  },
{
    slug: "lalakhal",
    name: "Lalakhal",
    region: "Sylhet",
    district: "Sylhet",
    type: "Rivers",
    coordinates: [25.107, 92.179],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lalakhal%2C%20Sharighat%2C%20Sylhet%2C%20Bangladesh.jpg?width=1400",
    tag: "Turquoise waters",
    shortDescription: "A winding canal known for its striking seasonal shades of blue and green.",
    description: "Lalakhal is a scenic canal near Jaintiapur in Sylhet, where the Sari River winds through a landscape of hills and open countryside. Water colour and flow change with the season.",
    highlights: ["Boat views along the canal", "Changing blue-green water tones", "Nearby hills and riverside scenery"],
    travelNotes: ["Check river and weather conditions before travelling.", "Use locally approved boat services and follow safety guidance.", "Keep the waterway clean and respect nearby communities."]
  },
  {
    slug: "lawachara-national-park",
    name: "Lawachara National Park",
    region: "Sylhet Division",
    district: "Moulvibazar",
    type: "Forests",
    coordinates: [24.3197, 91.7836],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Lawachara%20National%20Park%20-%2019.jpg?width=1400",
    tag: "Rainforest trails",
    shortDescription: "A protected evergreen forest known for its rich biodiversity and shaded trails.",
    description: "Lawachara National Park lies in Kamalganj, Moulvibazar. Its evergreen forest, wildlife and marked trails make it one of the region's best-known nature destinations.",
    highlights: ["Evergreen forest trails", "Birdlife and native biodiversity", "Nature and conservation learning"],
    travelNotes: ["Follow park rules and stay on permitted trails.", "Do not feed or disturb wildlife.", "Check local access guidance before visiting."]
  },
  {
    slug: "madhabkunda-waterfall",
    name: "Madhabkunda Waterfall",
    region: "Sylhet Division",
    district: "Moulvibazar",
    type: "Nature",
    coordinates: [24.6297, 92.2212],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Madhabkunda%20Waterfall%2C%20Sylhet.jpg?width=1400",
    tag: "Waterfall escape",
    shortDescription: "A prominent waterfall surrounded by forested hills and streams.",
    description: "Madhabkunda Waterfall is in Barlekha Upazila of Moulvibazar. The waterfall and surrounding eco-park are a popular nature destination, with scenery that changes through the seasons.",
    highlights: ["Waterfall and rocky stream views", "Forest and hill surroundings", "Eco-park visit"],
    travelNotes: ["Stay within marked visitor areas and obey safety signs.", "Water flow and access can change after heavy rain.", "Take your litter with you."]
  },
  {
    slug: "satchari-national-park",
    name: "Satchari National Park",
    region: "Sylhet Division",
    district: "Habiganj",
    type: "Forests",
    coordinates: [24.105, 91.445],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Satchari%20National%20Park%2C%20Habiganj%2C%20Sylhet.jpg?width=1400",
    tag: "Forest sanctuary",
    shortDescription: "A green forest reserve with trails and diverse birdlife.",
    description: "Satchari National Park is in Chunarughat, Habiganj. The protected forest is valued for its biodiversity and guided nature experiences.",
    highlights: ["Forest trails and native trees", "Birdwatching opportunities", "Conservation-focused visits"],
    travelNotes: ["Use designated trails and follow park staff guidance.", "Keep a respectful distance from wildlife.", "Avoid loud noise and leave no litter."]
  },
  {
    slug: "rema-kalenga-wildlife-sanctuary",
    name: "Rema-Kalenga Wildlife Sanctuary",
    region: "Sylhet Division",
    district: "Habiganj",
    type: "Forests",
    coordinates: [24.12, 91.58],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rema%20Kalenga%20Wildlife%20Sanctuary.jpg?width=1400",
    tag: "Wildlife refuge",
    shortDescription: "A protected forest landscape in the Chunarughat area.",
    description: "Rema-Kalenga Wildlife Sanctuary in Habiganj protects a diverse forest ecosystem. Visitors can appreciate its landscape and biodiversity while following conservation rules.",
    highlights: ["Protected forest habitat", "Scenic forest viewpoints", "Nature observation"],
    travelNotes: ["Confirm access and guide arrangements locally.", "Do not approach, feed or disturb wildlife.", "Stay on permitted paths and carry out all waste."]
  },
  {
    slug: "tanguar-haor",
    name: "Tanguar Haor",
    region: "Sylhet Division",
    district: "Sunamganj",
    type: "Rivers",
    coordinates: [25.12, 91.05],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tanguar%20Haor%2C%20Sunamganj%20view.jpg?width=1400",
    tag: "Wetland wonder",
    shortDescription: "A vast wetland of open water, villages and seasonal birdlife.",
    description: "Tanguar Haor is a nationally important wetland in Sunamganj, recognised for its aquatic ecosystem and seasonal landscape. Its appearance changes greatly between wet and dry seasons.",
    highlights: ["Expansive wetland scenery", "Seasonal birdlife", "Boat journeys with local operators"],
    travelNotes: ["Choose responsible local operators and follow wetland conservation rules.", "Check weather and water conditions before travelling.", "Avoid disturbing birds and other wildlife."]
  },
  {
    slug: "jadukata-river",
    name: "Jadukata River",
    region: "Sylhet Division",
    district: "Sunamganj",
    type: "Rivers",
    coordinates: [25.12, 91.2],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/JaduKata%20River%2C%20Sunamganj%2C%20Bangladesh.jpg?width=1400",
    tag: "Riverside scenery",
    shortDescription: "A clear, scenic river flowing beside the hills near the border.",
    description: "Jadukata is a scenic river in Tahirpur, Sunamganj, known for its clear water, riverbed and nearby hill views. Conditions vary with rainfall and season.",
    highlights: ["River and hill scenery", "Seasonal clear-water views", "Photography and nature appreciation"],
    travelNotes: ["Check river conditions and local advice before visiting.", "Avoid deep or fast-moving water.", "Respect local communities and keep the riverbank clean."]
  },
];

import { dhakaDivisionDestinations } from "./dhakaDivision";

destinations.push(...dhakaDivisionDestinations);

export const destinationTypes = ["All experiences", "Mountains", "Beaches", "Forests", "Rivers", "Nature", "Heritage"];
export const destinationRegions = ["All regions", "Rangamati", "Cox's Bazar", "Sylhet", "Khulna", "Dhaka Division"];
