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

  {
    slug: "patenga-beach", name: "Patenga Beach", region: "Chattogram Division", district: "Chattogram", type: "Beaches",
    coordinates: [22.2354, 91.7911], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Patenga%20sea%20beach%20001.jpg?width=1400",
    tag: "Where river meets sea", shortDescription: "A lively shoreline where the Karnaphuli meets the Bay of Bengal.",
    description: "Patenga Beach is a well-known coastal spot near the mouth of the Karnaphuli River, with broad sea views and a lively waterfront.",
    highlights: ["Bay of Bengal shoreline", "Karnaphuli estuary views", "Evening coastal atmosphere"],
    travelNotes: ["Follow beach safety notices.", "Check sea conditions before visiting.", "Keep the shoreline clean."]
  },
  {
    slug: "nilachal-bandarban", name: "Nilachal", region: "Chattogram Division", district: "Bandarban", type: "Mountains",
    coordinates: [22.1583, 92.1889], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nilachal%20bandarban.JPG?width=1400",
    tag: "Above the clouds", shortDescription: "A hilltop viewpoint overlooking Bandarban's layered green hills.",
    description: "Nilachal is a popular viewpoint near Bandarban town, known for wide views across the surrounding hills and valleys.",
    highlights: ["Panoramic hill views", "Cloud and sunset scenery", "Views near Bandarban town"],
    travelNotes: ["Use marked viewpoints.", "Hill roads can be slippery during rain.", "Respect local communities."]
  },
  {
    slug: "alutila-cave", name: "Alutila Cave", region: "Chattogram Division", district: "Khagrachhari", type: "Nature",
    coordinates: [23.089, 91.9544], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Alutila%20cave.jpg?width=1400",
    tag: "A natural wonder", shortDescription: "A natural cave set within the forested hills of Khagrachhari.",
    description: "Alutila Cave, also known as Matai Hakor, is a natural cave in Matiranga, Khagrachhari.",
    highlights: ["Natural cave landscape", "Forest-covered hill surroundings", "Khagrachhari scenery"],
    travelNotes: ["Visit in daylight.", "Follow site staff guidance.", "Do not damage the cave or leave litter."]
  },
  {
    slug: "muhuri-project", name: "Muhuri Project", region: "Chattogram Division", district: "Feni", type: "Rivers",
    coordinates: [22.8365, 91.4535], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Muhuri%20Project%20Feni.jpg?width=1400",
    tag: "Water and wide horizons", shortDescription: "A broad water landscape shaped by rivers and embankments.",
    description: "Muhuri Project is a major irrigation and water-control project in Feni, with an expansive reservoir landscape.",
    highlights: ["Large reservoir", "River and countryside scenery", "Open landscapes"],
    travelNotes: ["Stay clear of restricted infrastructure.", "Do not climb water-control structures.", "Follow local guidance."]
  },
  {
    slug: "dalal-bazar-zamindar-bari", name: "Dalal Bazar Zamindar Bari", region: "Chattogram Division", district: "Lakshmipur", type: "Heritage",
    coordinates: [22.9683, 90.8044], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Dalal%20Bazar%20Jomidar%20Bari%2001.jpg?width=1400",
    tag: "Stories in old walls", shortDescription: "A historic zamindar residence reflecting the area's architectural past.",
    description: "Dalal Bazar Zamindar Bari is a historic landmark in Lakshmipur Sadar, offering a glimpse into the area's social and architectural history.",
    highlights: ["Historic residence", "Traditional architectural details", "Local heritage"],
    travelNotes: ["Confirm visitor access locally.", "Do not touch fragile structures.", "Respect residents."]
  },
  {
    slug: "nijhum-dwip", name: "Nijhum Dwip", region: "Chattogram Division", district: "Noakhali", type: "Nature",
    coordinates: [22.0636, 91.0107], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nijhum%20Dwip.jpg?width=1400",
    tag: "Island of quiet", shortDescription: "An island landscape of coastal forest, tidal channels and birdlife.",
    description: "Nijhum Dwip in Hatiya, Noakhali, is known for its coastal forest, wetlands and seasonal birdlife.",
    highlights: ["Coastal island scenery", "Forest and wetland habitats", "Seasonal birdlife"],
    travelNotes: ["Plan boat transfers with reliable local operators.", "Follow protected-area rules.", "Avoid disturbing wildlife."]
  },
  {
    slug: "shalban-vihara", name: "Shalban Vihara", region: "Chattogram Division", district: "Cumilla", type: "Heritage",
    coordinates: [23.4252, 91.1375], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shalban%20Vihara%20%28Mainamati%2CCumilla%29%20in%202022.03.jpg?width=1400",
    tag: "Echoes of ancient Bengal", shortDescription: "An important archaeological monastery in the Mainamati heritage area.",
    description: "Shalban Vihara is a major archaeological site in Mainamati, Cumilla, preserving important Buddhist heritage.",
    highlights: ["Ancient monastery remains", "Mainamati archaeological landscape", "Nearby heritage museum"],
    travelNotes: ["Stay on visitor paths.", "Do not climb ancient structures.", "Check opening arrangements."]
  },
  {
    slug: "boro-station-molehead", name: "Boro Station Molehead", region: "Chattogram Division", district: "Chandpur", type: "Rivers",
    coordinates: [23.229, 90.65], image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85",
    tag: "Where rivers meet", shortDescription: "A riverside viewpoint near the meeting of the Padma, Meghna and Dakatia.",
    description: "Boro Station Molehead is a popular riverside gathering place in Chandpur town, near the confluence of the Padma, Meghna and Dakatia.",
    highlights: ["River confluence views", "Riverside promenade", "Sunset and local river culture"],
    travelNotes: ["Stay on the bank.", "Keep clear of boat traffic.", "Follow local safety advice."]
  },
  {
    slug: "titas-river-brahmanbaria", name: "Titas River", region: "Chattogram Division", district: "Brahmanbaria", type: "Rivers",
    coordinates: [23.9623, 91.1215], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Titas%20River.jpg?width=1400",
    tag: "Life along the river", shortDescription: "A scenic river closely connected with Brahmanbaria's history and daily life.",
    description: "The Titas River flows through Brahmanbaria and is closely tied to local river culture, fishing and boat journeys.",
    highlights: ["River and countryside views", "Traditional boats", "Local community life"],
    travelNotes: ["Use recognised landing points.", "Follow boat safety guidance.", "Keep riverbanks clean."]
  },
{
    slug: "sixty-dome-mosque", name: "Sixty Dome Mosque", region: "Khulna Division", district: "Bagerhat", type: "Heritage",
    coordinates: [22.6746, 89.735], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sixty%20Dome%20Mosque%20Bagerhat.jpg?width=1400",
    tag: "UNESCO heritage", shortDescription: "A remarkable 15th-century mosque and landmark of the historic Mosque City of Bagerhat.",
    description: "The Sixty Dome Mosque, also known as Shat Gombuj Masjid, is a celebrated historic mosque in Bagerhat associated with Khan Jahan Ali and the UNESCO-listed Historic Mosque City.",
    highlights: ["Distinctive brick architecture", "Historic mosque complex", "UNESCO World Heritage setting"],
    travelNotes: ["Dress respectfully when visiting.", "Follow site rules and visitor guidance.", "Avoid touching or damaging historic surfaces."]
  },
  {
    slug: "godkhali-flower-fields", name: "Godkhali Flower Fields", region: "Khulna Division", district: "Jashore", type: "Nature",
    coordinates: [23.015, 89.22], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Godkhali%20flower%20garden%20Jessore.jpg?width=1400",
    tag: "A field of colours", shortDescription: "Colourful flower-growing fields in one of Bangladesh's best-known flower-producing areas.",
    description: "Godkhali in Jashore is widely known for its flower cultivation. Seasonal fields and local flower markets offer a glimpse into the area's rural livelihoods.",
    highlights: ["Seasonal flower fields", "Local flower markets", "Rural photography"],
    travelNotes: ["Ask permission before entering private fields.", "Avoid picking flowers or damaging crops.", "Visit respectfully and keep the area clean."]
  },
  {
    slug: "barobazar-sultanate-mosques", name: "Barobazar Sultanate Mosques", region: "Khulna Division", district: "Jhenaidah", type: "Heritage",
    coordinates: [23.35, 89.15], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Barobazar%20Jhenaidah%20mosque.jpg?width=1400",
    tag: "Sultanate-era heritage", shortDescription: "A group of historic mosques and archaeological remains in the Barobazar area.",
    description: "Barobazar in Jhenaidah is known for historic Sultanate-era mosque sites and archaeological remains that reflect the region's medieval history.",
    highlights: ["Historic mosque architecture", "Archaeological heritage", "Rural cultural landscape"],
    travelNotes: ["Treat religious sites with respect.", "Follow local access guidance.", "Do not disturb archaeological remains."]
  },
  {
    slug: "shilaidaha-rabindra-kuthibari", name: "Shilaidaha Rabindra Kuthibari", region: "Khulna Division", district: "Kushtia", type: "Heritage",
    coordinates: [23.9167, 89.35], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shilaidaha%20Kuthibari.jpg?width=1400",
    tag: "Literary heritage", shortDescription: "The historic estate associated with Rabindranath Tagore's time in the region.",
    description: "Shilaidaha Kuthibari in Kushtia is closely associated with Rabindranath Tagore and his literary work. The site preserves a significant chapter of Bengal's cultural history.",
    highlights: ["Tagore-related history", "Historic residence and museum", "Quiet riverside surroundings"],
    travelNotes: ["Check museum opening hours before travelling.", "Follow photography and visitor rules.", "Respect the heritage property."]
  },
  {
    slug: "mujibnagar-memorial", name: "Mujibnagar Memorial", region: "Khulna Division", district: "Meherpur", type: "Heritage",
    coordinates: [23.633, 88.85], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mujibnagar%20Memorial%20Complex.jpg?width=1400",
    tag: "A defining moment in history", shortDescription: "A national memorial marking the oath-taking of Bangladesh's first government in 1971.",
    description: "Mujibnagar Memorial in Meherpur commemorates the historic oath-taking of Bangladesh's provisional government on 17 April 1971.",
    highlights: ["Bangladesh Liberation War history", "Memorial architecture", "Educational heritage visit"],
    travelNotes: ["Maintain a respectful atmosphere.", "Follow site rules and guidance.", "Allow time to explore the memorial grounds."]
  },
  {
    slug: "carew-sugar-mills", name: "Carew & Co. Sugar Mills", region: "Khulna Division", district: "Chuadanga", type: "Heritage",
    coordinates: [23.60, 88.77], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Carew%20and%20Company%20Sugar%20Mills.jpg?width=1400",
    tag: "Industrial heritage", shortDescription: "A historic sugar mill complex in Darshana with a distinctive industrial legacy.",
    description: "Carew & Co. in Darshana, Chuadanga, is a longstanding sugar-industry landmark. Visitors should confirm whether any public viewing or guided access is permitted.",
    highlights: ["Industrial history", "Historic mill setting", "Darshana's local heritage"],
    travelNotes: ["This is an operational industrial site; do not enter restricted areas.", "Confirm public access in advance.", "Follow all staff instructions."]
  },
  {
    slug: "siddheshwari-math", name: "Siddheshwari Math", region: "Khulna Division", district: "Magura", type: "Heritage",
    coordinates: [23.49, 89.42], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Siddheshwari%20Math%20Magura.jpg?width=1400",
    tag: "Local heritage", shortDescription: "A historic religious site connected with Magura's cultural landscape.",
    description: "Siddheshwari Math is a recognised heritage and religious site in Magura, offering a glimpse into the district's local history and traditions.",
    highlights: ["Religious and cultural heritage", "Historic architecture", "Local traditions"],
    travelNotes: ["Visit respectfully and observe local customs.", "Confirm access with local sources.", "Keep the premises clean."]
  },
  {
    slug: "sm-sultan-memorial-museum", name: "S. M. Sultan Memorial Museum", region: "Khulna Division", district: "Narail", type: "Heritage",
    coordinates: [23.17, 89.50], image: "https://commons.wikimedia.org/wiki/Special:FilePath/SM%20Sultan%20Memorial%20Museum%20Narail.jpg?width=1400",
    tag: "Art and culture", shortDescription: "A museum celebrating the life and work of celebrated Bangladeshi artist S. M. Sultan.",
    description: "The S. M. Sultan Memorial Museum in Narail honours the artist's life and work and is an important cultural stop in the district.",
    highlights: ["S. M. Sultan's artistic legacy", "Art and cultural exhibits", "Chitra River surroundings"],
    travelNotes: ["Check opening hours before visiting.", "Follow museum photography rules.", "Treat artworks and displays carefully."]
  },
  {
    slug: "jeshoreshwari-kali-temple", name: "Jeshoreshwari Kali Temple", region: "Khulna Division", district: "Satkhira", type: "Heritage",
    coordinates: [22.55, 89.17], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Jeshoreshwari%20Kali%20Temple.jpg?width=1400",
    tag: "Sacred heritage", shortDescription: "A historic Hindu temple in Ishwaripur, Shyamnagar, with deep regional significance.",
    description: "Jeshoreshwari Kali Temple in Satkhira is a historic religious site in Ishwaripur, Shyamnagar, known for its cultural and spiritual importance.",
    highlights: ["Historic temple setting", "Religious and cultural traditions", "Local heritage"],
    travelNotes: ["Respect worshippers and local customs.", "Check visitor access before travelling.", "Dress and behave respectfully."]
  }

];

import { dhakaDivisionDestinations } from "./dhakaDivision";

destinations.push(...dhakaDivisionDestinations);

export const destinationTypes = ["All experiences", "Mountains", "Beaches", "Forests", "Rivers", "Nature", "Heritage"];
export const destinationRegions = ["All regions", "Rangamati", "Cox's Bazar", "Sylhet", "Khulna", "Dhaka Division"];
