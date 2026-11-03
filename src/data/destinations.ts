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
  },

  {
    slug: "puthia-temple-complex", name: "Puthia Temple Complex", region: "Rajshahi Division", district: "Rajshahi", type: "Heritage",
    coordinates: [24.3667, 88.8333], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Puthia%20Rajbari.jpg?width=1400",
    tag: "Palaces and temples", shortDescription: "A remarkable collection of historic temples and the grand Puthia Rajbari.",
    description: "The Puthia Temple Complex in Rajshahi is known for its collection of historic Hindu temples and palatial buildings, reflecting the region's rich architectural heritage.",
    highlights: ["Puthia Rajbari and temple architecture", "Terracotta details", "Historic village setting"],
    travelNotes: ["Dress and behave respectfully at religious sites.", "Follow local visitor guidance.", "Avoid touching or damaging historic structures."]
  },
  {
    slug: "mahasthangarh", name: "Mahasthangarh", region: "Rajshahi Division", district: "Bogura", type: "Heritage",
    coordinates: [24.9617, 89.3433], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahasthangarh%20Bogura.jpg?width=1400",
    tag: "Ancient Pundranagara", shortDescription: "The remains of one of the earliest urban archaeological sites in Bangladesh.",
    description: "Mahasthangarh in Bogura is an ancient fortified settlement associated with Pundranagara. Its archaeological remains offer an important window into the region's early history.",
    highlights: ["Ancient fortified city remains", "Archaeological museum", "Historic Govinda Bhita area"],
    travelNotes: ["Stay on marked visitor paths.", "Do not remove or disturb archaeological objects.", "Check museum hours before visiting."]
  },
  {
    slug: "hardinge-bridge", name: "Hardinge Bridge", region: "Rajshahi Division", district: "Pabna", type: "Heritage",
    coordinates: [24.071, 89.033], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hardinge%20Bridge%20Paksey.jpg?width=1400",
    tag: "Engineering landmark", shortDescription: "A historic railway bridge spanning the Padma River near Paksey.",
    description: "Hardinge Bridge near Paksey in Pabna is a landmark railway bridge across the Padma River and an important part of Bangladesh's transport history.",
    highlights: ["Historic railway engineering", "Padma River landscape", "Nearby Lalon Shah Bridge views"],
    travelNotes: ["View the bridge only from safe, publicly accessible locations.", "Never enter railway tracks or restricted infrastructure.", "Follow local safety notices."]
  },
  {
    slug: "shahzadpur-rabindra-kachharibari", name: "Shahzadpur Rabindra Kachharibari", region: "Rajshahi Division", district: "Sirajganj", type: "Heritage",
    coordinates: [24.164, 89.596], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Shahzadpur%20Rabindra%20Kachharibari.jpg?width=1400",
    tag: "Tagore's literary legacy", shortDescription: "A historic estate associated with Rabindranath Tagore's life and writing.",
    description: "Rabindra Kachharibari in Shahzadpur, Sirajganj, is associated with Rabindranath Tagore and his time in the region. The site preserves an important part of Bengal's literary heritage.",
    highlights: ["Tagore-related history", "Historic estate and museum", "Cultural heritage"],
    travelNotes: ["Check opening hours before visiting.", "Follow museum rules and photography guidance.", "Treat the historic property with care."]
  },
  {
    slug: "natore-rajbari", name: "Natore Rajbari", region: "Rajshahi Division", district: "Natore", type: "Heritage",
    coordinates: [24.4205, 88.988], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Natore%20Rajbari.jpg?width=1400",
    tag: "Royal history", shortDescription: "A historic palace complex connected with Rani Bh भवani and Natore's zamindari heritage.",
    description: "Natore Rajbari is a historic palace complex associated with the Natore royal family and the region's zamindari history.",
    highlights: ["Historic palace grounds", "Architecture and local history", "Connection with Rani Bh भवani"],
    travelNotes: ["Confirm which areas are open to visitors.", "Respect religious and heritage spaces.", "Follow local visitor instructions."]
  },
  {
    slug: "somapura-mahavihara", name: "Somapura Mahavihara", region: "Rajshahi Division", district: "Naogaon", type: "Heritage",
    coordinates: [25.031, 88.977], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Somapura%20Mahavihara.jpg?width=1400",
    tag: "UNESCO World Heritage", shortDescription: "The monumental remains of an ancient Buddhist monastery at Paharpur.",
    description: "Somapura Mahavihara at Paharpur, Naogaon, is one of the most important archaeological sites in South Asia and a UNESCO World Heritage Site.",
    highlights: ["Monumental Buddhist monastery remains", "Central shrine and terracotta plaques", "On-site museum"],
    travelNotes: ["Stay on designated visitor paths.", "Do not climb or touch fragile remains.", "Check site and museum opening arrangements."]
  },
  {
    slug: "nandail-dighi", name: "Nandail Dighi", region: "Rajshahi Division", district: "Joypurhat", type: "Nature",
    coordinates: [25.096, 89.02], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Nandail%20Dighi%20Joypurhat.jpg?width=1400",
    tag: "Quiet waterside escape", shortDescription: "A historic large pond and peaceful local landmark in Joypurhat.",
    description: "Nandail Dighi is a well-known historic waterbody in Joypurhat, valued for its local stories and calm rural surroundings.",
    highlights: ["Historic dighi landscape", "Quiet waterside views", "Local history and folklore"],
    travelNotes: ["Use public access areas and respect nearby residents.", "Do not enter the water where access is restricted.", "Keep the surroundings clean."]
  },
  {
    slug: "choto-sona-mosque", name: "Choto Sona Mosque", region: "Rajshahi Division", district: "Chapainawabganj", type: "Heritage",
    coordinates: [24.78, 88.278], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Choto%20Sona%20Mosque.jpg?width=1400",
    tag: "Sultanate-era masterpiece", shortDescription: "A celebrated fifteenth-century mosque near the historic Gaur region.",
    description: "Choto Sona Mosque in Chapainawabganj is a notable Sultanate-era monument, admired for its stonework and richly decorated architectural details.",
    highlights: ["Historic mosque architecture", "Stone and terracotta ornament", "Gaur-region heritage"],
    travelNotes: ["Dress respectfully and observe prayer times.", "Follow site rules and visitor guidance.", "Avoid touching or damaging historic surfaces."]
  },

  {
    slug: "oxford-mission-church", name: "Oxford Mission Church", region: "Barishal Division", district: "Barishal", type: "Heritage",
    coordinates: [22.701, 90.369], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oxford%20Mission%20Church%20Barisal.jpg?width=1400",
    tag: "Architectural landmark", shortDescription: "A distinctive historic church known for its striking red-brick architecture and peaceful grounds.",
    description: "The Oxford Mission Church, also known as Epiphany Church, is a landmark in Barishal city. Its distinctive architecture and long history make it an important part of the city's heritage.",
    highlights: ["Distinctive red-brick architecture", "Historic church grounds", "A landmark of Barishal city"],
    travelNotes: ["Respect worshippers and the quiet atmosphere.", "Confirm visitor access before entering.", "Follow photography and site guidance."]
  },
  {
    slug: "monpura-island", name: "Monpura Island", region: "Barishal Division", district: "Bhola", type: "Nature",
    coordinates: [22.296, 90.97], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Monpura%20Island%20Bhola.jpg?width=1400",
    tag: "Island escape", shortDescription: "A tranquil island destination with open coastal landscapes, waterways and rural life.",
    description: "Monpura is an island upazila in Bhola, known for its coastal scenery, river channels and quiet rural atmosphere. The journey and landscape are shaped by tides and seasonal weather.",
    highlights: ["Island and river scenery", "Coastal village life", "Open landscapes and birdlife"],
    travelNotes: ["Plan ferry and boat connections ahead of time.", "Check weather, tide and transport updates.", "Respect local communities and coastal wildlife."]
  },
  {
    slug: "bhimruli-floating-guava-market", name: "Bhimruli Floating Guava Market", region: "Barishal Division", district: "Jhalokathi", type: "Nature",
    coordinates: [22.64, 90.17], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bhimruli%20floating%20guava%20market.jpg?width=1400",
    tag: "Life on the canals", shortDescription: "A seasonal canal market where boats gather to trade locally grown guavas.",
    description: "Bhimruli in Jhalokathi is known for its floating guava market, where farmers bring seasonal produce by boat through the canal network. The market is most active during the guava harvest season.",
    highlights: ["Traditional boat-based market", "Seasonal guava harvest", "Canal-side rural scenery"],
    travelNotes: ["Visit during the guava season for the liveliest market.", "Use local boat operators and follow safety advice.", "Ask before photographing people or private boats."]
  },
  {
    slug: "kuakata-sea-beach", name: "Kuakata Sea Beach", region: "Barishal Division", district: "Patuakhali", type: "Beaches",
    coordinates: [21.8167, 90.1167], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kuakata%20Sea%20Beach.jpg?width=1400",
    tag: "Sunrise and sunset coast", shortDescription: "A broad sandy beach on the Bay of Bengal, famed for views over the open horizon.",
    description: "Kuakata in Patuakhali is a popular coastal destination on the southern edge of Bangladesh. Its wide beach and open sea horizon make it a memorable place to experience the Bay of Bengal.",
    highlights: ["Long sandy beach", "Sunrise and sunset views", "Nearby Rakhine cultural heritage"],
    travelNotes: ["Follow beach safety notices and local guidance.", "Check weather and sea conditions before water activities.", "Keep the beach clean and avoid disturbing wildlife."]
  },
  {
    slug: "rayerkathi-zamindar-bari", name: "Rayerkathi Zamindar Bari", region: "Barishal Division", district: "Pirojpur", type: "Heritage",
    coordinates: [22.58, 89.97], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rayerkathi%20Zamindar%20Bari.jpg?width=1400",
    tag: "A glimpse of zamindari history", shortDescription: "A historic estate associated with the zamindari heritage of Pirojpur.",
    description: "Rayerkathi Zamindar Bari is a historic landmark in Pirojpur, associated with the area's zamindari-era history and traditional architecture.",
    highlights: ["Historic estate setting", "Traditional architectural details", "Local history and heritage"],
    travelNotes: ["Confirm public access with local sources before travelling.", "Respect residents and any active religious spaces.", "Do not damage old structures or remove materials."]
  },
  {
    slug: "haringhata-forest", name: "Haringhata Forest", region: "Barishal Division", district: "Barguna", type: "Forests",
    coordinates: [21.87, 89.97], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Haringhata%20Forest%20Barguna.jpg?width=1400",
    tag: "Coastal wilderness", shortDescription: "A coastal forest landscape of waterways, greenery and wildlife near the Bay of Bengal.",
    description: "Haringhata Forest in Barguna is a coastal forest area near the Bay of Bengal, valued for its natural scenery, waterways and wildlife habitat.",
    highlights: ["Coastal forest landscape", "Waterways and estuary scenery", "Nature and birdwatching"],
    travelNotes: ["Check local access and weather conditions before visiting.", "Use authorised local guides where required.", "Keep a safe distance from wildlife and leave no litter."]
  }
  ,
  {
    slug: "tajhat-palace", name: "Tajhat Palace", region: "Rangpur Division", district: "Rangpur", type: "Heritage",
    coordinates: [25.725, 89.275], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tajhat%20Palace%20Rangpur.jpg?width=1400",
    tag: "A royal chapter", shortDescription: "A graceful historic palace known for its grand staircase and elegant architecture.",
    description: "Tajhat Palace in Rangpur is a landmark of the region's architectural heritage. Its distinctive façade, broad grounds and museum make it a memorable cultural stop.",
    highlights: ["Historic palace architecture", "Museum and heritage displays", "Landscaped grounds"],
    travelNotes: ["Check museum opening hours before visiting.", "Respect the heritage site and its displays.", "Follow photography rules on site."]
  },
  {
    slug: "kantajew-temple", name: "Kantajew Temple", region: "Rangpur Division", district: "Dinajpur", type: "Heritage",
    coordinates: [25.655, 88.674], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kantajew%20Temple%20Dinajpur.jpg?width=1400",
    tag: "Terracotta masterpiece", shortDescription: "An ornate terracotta Hindu temple celebrated for its intricate exterior artwork.",
    description: "Kantajew Temple near Dinajpur is one of Bangladesh's best-known examples of terracotta temple architecture, with detailed panels depicting stories, figures and scenes from everyday life.",
    highlights: ["Detailed terracotta ornamentation", "Historic temple architecture", "Cultural and religious heritage"],
    travelNotes: ["Dress respectfully at this religious site.", "Avoid touching or damaging the terracotta panels.", "Check local access arrangements before travelling."]
  },
  {
    slug: "chilmari-riverfront", name: "Chilmari Riverfront", region: "Rangpur Division", district: "Kurigram", type: "Rivers",
    coordinates: [25.556, 89.671], image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85",
    tag: "Along the Brahmaputra", shortDescription: "A riverside landscape shaped by the broad Brahmaputra and the life of a historic river port.",
    description: "Chilmari in Kurigram is closely associated with the Brahmaputra River and its river-port heritage. The surrounding chars and shifting waterways create a distinctive northern Bangladesh landscape.",
    highlights: ["Brahmaputra river views", "River-port atmosphere", "Seasonal char landscapes"],
    travelNotes: ["Check river and weather conditions before travelling.", "Use recognised boat services and follow safety guidance.", "Respect riverbank communities and keep the area clean."]
  },
  {
    slug: "balashi-ghat", name: "Balashi Ghat", region: "Rangpur Division", district: "Gaibandha", type: "Rivers",
    coordinates: [25.29, 89.69], image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85",
    tag: "River horizons", shortDescription: "An open riverfront destination with expansive views across the Jamuna.",
    description: "Balashi Ghat in Gaibandha is a familiar riverside spot beside the Jamuna, where visitors can experience the scale of the river and the changing landscape of its banks.",
    highlights: ["Wide Jamuna river views", "Open riverside scenery", "Local river culture"],
    travelNotes: ["Check local transport and river conditions.", "Stay away from unstable river edges.", "Follow local safety advice."]
  },
  {
    slug: "teesta-barrage", name: "Teesta Barrage", region: "Rangpur Division", district: "Nilphamari", type: "Rivers",
    coordinates: [25.962, 89.0], image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85",
    tag: "Water and wide skies", shortDescription: "A notable river-control landmark set amid the broad Teesta landscape.",
    description: "The Teesta Barrage at Dalia is a major water-management structure in the Teesta basin. Its surrounding river landscape and open skies make the area a recognisable destination in Nilphamari.",
    highlights: ["Teesta river landscape", "Major water-management landmark", "Open countryside views"],
    travelNotes: ["Observe the site from permitted public areas only.", "Never enter restricted infrastructure.", "Check local access conditions before visiting."]
  },
  {
    slug: "tetulia-kanchenjunga-viewpoint", name: "Tetulia & Kanchenjunga Viewpoint", region: "Rangpur Division", district: "Panchagarh", type: "Nature",
    coordinates: [26.49, 88.35], image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
    tag: "Himalayan horizons", shortDescription: "A peaceful northern landscape where clear-season skies can reveal distant Himalayan peaks.",
    description: "Tetulia is the northernmost upazila of Bangladesh, known for its tea gardens, open countryside and occasional distant views of the Himalayan range, including Kanchenjunga on clear days.",
    highlights: ["Seasonal distant mountain views", "Tea gardens and countryside", "Northernmost Bangladesh scenery"],
    travelNotes: ["Distant peaks are visible only in suitable clear-weather conditions.", "Plan early-morning viewing and check forecasts.", "Respect tea garden property and local communities."]
  },
  {
    slug: "golapgram-thakurgaon", name: "Shuk River & Rural Thakurgaon", region: "Rangpur Division", district: "Thakurgaon", type: "Nature",
    coordinates: [26.03, 88.46], image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
    tag: "Quiet countryside", shortDescription: "A slower-paced rural landscape of river scenery, fields and northern Bengal village life.",
    description: "Thakurgaon offers a quieter countryside experience in northwestern Bangladesh, with seasonal fields, village landscapes and waterways such as the Shuk River shaping the local scenery.",
    highlights: ["Rural northern Bengal scenery", "Seasonal agricultural landscapes", "Local village life"],
    travelNotes: ["Ask locally about accessible riverbank spots.", "Avoid private farmland without permission.", "Travel in daylight and respect local communities."]
  },
  {
    slug: "tista-char-lalmonirhat", name: "Teesta River Char", region: "Rangpur Division", district: "Lalmonirhat", type: "Nature",
    coordinates: [25.92, 89.45], image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
    tag: "Ever-changing river country", shortDescription: "A seasonal landscape of sandbars, river channels and wide-open skies along the Teesta.",
    description: "The Teesta riverine areas of Lalmonirhat are shaped by shifting channels and chars. The scenery changes with the seasons and offers a glimpse of life along a dynamic northern river.",
    highlights: ["Seasonal sandbar landscapes", "Teesta river views", "Riverine community life"],
    travelNotes: ["Char access can change with water levels and weather.", "Use local guidance and safe transport.", "Do not approach unstable banks or fast-moving water."]
  }

];

import { dhakaDivisionDestinations } from "./dhakaDivision";

destinations.push(...dhakaDivisionDestinations);

export const destinationTypes = ["All experiences", "Mountains", "Beaches", "Forests", "Rivers", "Nature", "Heritage"];
export const destinationRegions = ["All regions", "Rangamati", "Cox's Bazar", "Sylhet", "Khulna", "Rajshahi Division", "Dhaka Division", "Rangpur Division"];
