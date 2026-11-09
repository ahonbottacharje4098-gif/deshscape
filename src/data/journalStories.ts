export type JournalStory = {
  slug: string;
  number: string;
  category: string;
  title: string;
  location: string;
  image: string;
  description: string;
  intro: string;
  paragraphs: string[];
  note: string;
  readingTime: string;
  relatedDestinationSlugs: string[];
};

export const journalStories: JournalStory[] = [
  {
    slug: "river-town-rhythm",
    description: "Along the Padma, the river shapes more than the landscape. It influences daily routines, local trade and the stories shared by people who live beside its changing waters.",
    readingTime: "2 MIN READ",
    relatedDestinationSlugs: ["goalanda-ghat","hardinge-bridge"],
    number: "01",
    category: "PEOPLE & CULTURE",
    title: "The rhythm of a river town",
    location: "Goalanda, Rajbari",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=85",
    intro: "Along the Padma, the river is more than a line on a map. It is part of the everyday rhythm of the communities that call its banks home.",
    paragraphs: [
      "A river town asks you to slow down and pay attention. The water changes its character with the light, boats move across familiar routes, and the riverbank becomes a meeting place for work, conversation and quiet observation.",
      "In places such as Goalanda, the Padma is closely connected with local identity and movement. Its presence can be felt in the landscape and in the routines of people whose lives are shaped by the river.",
      "The most memorable part of a visit may be a simple moment: watching the changing water, noticing the activity around a landing point, or listening to the stories people share about their home.",
      "Travel with care around river edges and ferry areas. Conditions can change, so follow local guidance, respect working spaces and check current transport information before setting out.",
      "That relationship is not only scenic. Rivers connect settlements, support livelihoods and influence how goods and people move. A landing place can therefore be both a practical part of the transport network and a social space where neighbours exchange news. Observing these ordinary details offers a more grounded understanding of a river town than viewing the water as scenery alone.",
      "For visitors, the best approach is often an unhurried one. Take in the river from public areas, be mindful of ferry operations and ask before photographing people. The Padma is a working river as well as a beautiful landscape, and treating it with respect helps keep the experience thoughtful for residents and travellers alike."
    ],
    note: "A closer look at life beside the Padma"
  },
  {
    slug: "beyond-tea-gardens",
    description: "The green hills and winding paths of the northeast invite a slower kind of journey. Look beyond the familiar viewpoints and notice the small details that make this landscape special.",
    readingTime: "2 MIN READ",
    relatedDestinationSlugs: ["jaflong","ratargul-swamp-forest","lalakhal"],
    number: "02",
    category: "HIDDEN BANGLADESH",
    title: "Beyond the tea gardens",
    location: "Sylhet",
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=2000&q=85",
    intro: "Sylhet's green landscapes invite a slower kind of journey. Look beyond the familiar views and discover the small details that give the northeast its character.",
    paragraphs: [
      "The tea-growing landscapes of the northeast are often remembered for their rolling green patterns. Seen from a distance, the hills and gardens can feel almost endless; up close, the details tell a more varied story.",
      "A thoughtful visit is about more than taking photographs. Notice the changing shapes of the land, the quiet roads between settlements and the everyday life that continues around these working landscapes.",
      "Give yourself time to pause, learn about the place and appreciate it without disturbing the people who live and work there. Choose public viewpoints and respect signs, private property and local instructions.",
      "Weather and access can vary by season and location. Check local conditions before travelling, and leave the landscape as you found it.",
      "The northeast is not a single postcard view. Tea estates, villages, wetlands, forest edges and rivers create a varied landscape, and each has its own rhythms. Moving between them can reveal how closely nature and everyday livelihoods are connected. A quiet stretch of road or a view across a valley may become as memorable as a famous viewpoint.",
      "Responsible travel also means recognising that many green landscapes are working environments or places with conservation value. Stay on public routes, follow signs and local instructions, and avoid entering plantation or community land without permission. A little preparation and consideration can make a visit more rewarding while respecting the people and places that make the region distinctive."
    ],
    note: "A field note from the green northeast"
  }  ,
  {
    slug: "stone-stories-of-kantajew",
    description: "Intricate terracotta panels turn a historic temple into an open-air gallery of craft, belief and everyday scenes from another time.",
    readingTime: "2 MIN READ",
    relatedDestinationSlugs: ["kantajew-temple","tajhat-palace"],
    number: "03",
    category: "ART & HERITAGE",
    title: "Stone stories of Kantajew",
    location: "Dinajpur",
    image: "https://images.unsplash.com/photo-1606293926075-69a00db7562f?auto=format&fit=crop&w=2000&q=85",
    intro: "At Kantajew Temple, the outer walls invite a closer look. Their terracotta decoration makes the historic building feel like a record of artistic skill, stories and life in Bengal.",
    paragraphs: [
      "The temple is widely recognised for its elaborate terracotta surface. Rather than treating the building as a single distant view, take time to notice how the panels, patterns and repeated details create a richly textured whole.",
      "Architectural heritage is best experienced with patience. Observe the craftsmanship from the visitor areas, and remember that the structure is both a historic monument and a place with cultural and religious meaning.",
      "A visit can also be an opportunity to learn about the wider history of Dinajpur. Local interpretation and reliable site information can add context that photographs alone cannot provide.",
      "Opening arrangements and visitor access may change. Check current local guidance before travelling, dress respectfully and avoid touching or damaging the historic surfaces.",
      "Terracotta decoration rewards close attention because it is made to be read in layers. Repeated motifs, small figures and patterned borders create a visual language across the building. Looking carefully at one section at a time can reveal details that disappear when the temple is viewed only from a distance. It is a reminder that architecture can preserve artistic expression as well as history.",
      "Heritage sites also need visitors to become temporary caretakers. Follow the marked paths, keep a respectful distance from the surfaces and rely on site interpretation or trusted historical material for context. The temple is not simply an attractive background; it is a protected cultural place whose details can be appreciated without touching or disturbing them."
    ],
    note: "An architectural field note from the north"
  },
  {
    slug: "a-quiet-world-in-ratargul",
    description: "In the freshwater swamp forest, water and woodland meet. The experience changes with the season, light and level of the water.",
    readingTime: "2 MIN READ",
    relatedDestinationSlugs: ["ratargul-swamp-forest","lalakhal","jaflong"],
    number: "04",
    category: "HIDDEN BANGLADESH",
    title: "A quiet world in Ratargul",
    location: "Sylhet",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=85",
    intro: "Ratargul is known for its freshwater swamp forest, where trees and waterways shape a landscape that feels closely connected to the rhythm of the seasons.",
    paragraphs: [
      "The character of a swamp forest changes with the water. Seasonal levels influence how the landscape appears, which routes are accessible and what visitors can observe from permitted areas.",
      "A thoughtful visit is about appreciating the ecosystem rather than rushing through it. Notice the relationship between the trees, water and surrounding wetland environment, while keeping noise and disturbance to a minimum.",
      "Local guidance matters in a wetland. Use authorised routes and boat services where applicable, follow safety instructions and avoid entering sensitive areas or disturbing wildlife.",
      "Before setting out, check weather, water conditions and current access arrangements with reliable local sources. Take all rubbish back with you and leave the forest as undisturbed as possible.",
      "The forest is part of a wider wetland environment, so its character cannot be separated from the water around it. Seasonal changes affect the routes that may be used and the views that open between the trees. This changing landscape is one reason to approach Ratargul with patience: the experience depends on conditions on the day, rather than a fixed picture that looks the same throughout the year.",
      "Visitors can help protect the habitat through small choices. Keep noise low, do not leave food or waste behind, and follow guidance from authorised local operators. Avoid treating wildlife encounters as something to seek out or guarantee. The most meaningful visit is one that allows the forest to remain a living ecosystem, with space for plants, animals and local communities."
    ],
    note: "A gentle introduction to a living wetland"
  },
  {
    slug: "courtyards-and-memory-at-baliati",
    description: "The old palace complex offers a glimpse into the region's architectural past through its courtyards, façades and layered history.",
    readingTime: "2 MIN READ",
    relatedDestinationSlugs: ["baliati-palace","idrakpur-fort"],
    number: "05",
    category: "ART & HERITAGE",
    title: "Courtyards and memory at Baliati",
    location: "Manikganj",
    image: "https://images.unsplash.com/photo-1590123732197-e707a7d1a2b2?auto=format&fit=crop&w=2000&q=85",
    intro: "Baliati Palace is a heritage complex whose courtyards and historic façades offer a window into the architectural and social history of the region.",
    paragraphs: [
      "The scale of a palace complex is often easiest to understand by moving slowly through its open spaces. Courtyards, entrances and repeated architectural details help visitors read the relationship between the buildings.",
      "Historic places are more than backdrops. They carry memories of the people who built, used and maintained them, and they deserve care from everyone who visits.",
      "Look closely at the craftsmanship without touching fragile surfaces. Follow marked visitor routes, respect any restricted spaces and give other visitors room to experience the site.",
      "Museum hours, maintenance and public access can change. Confirm current arrangements before travelling and follow the site's photography and preservation rules.",
      "Courtyards are useful spaces through which to understand a historic residence. They organise movement, frame views of the surrounding façades and reveal how separate parts of a complex relate to one another. Repeated arches, columns and openings can make the architecture feel unified, while differences in scale and detail hint at the many functions a large estate once served.",
      "Approach the complex as a place of shared heritage rather than an empty set. Give other visitors room, follow any conservation guidance and avoid climbing on or touching vulnerable features. If interpretation is available, it can help connect the visible architecture with the wider story of the area. A careful visit leaves the place ready to be appreciated by the next person."
    ],
    note: "A heritage walk through historic courtyards"
  }
];
