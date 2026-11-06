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
    readingTime: "1 MIN READ",
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
      "Travel with care around river edges and ferry areas. Conditions can change, so follow local guidance, respect working spaces and check current transport information before setting out."
    ],
    note: "A closer look at life beside the Padma"
  },
  {
    slug: "beyond-tea-gardens",
    description: "The green hills and winding paths of the northeast invite a slower kind of journey. Look beyond the familiar viewpoints and notice the small details that make this landscape special.",
    readingTime: "1 MIN READ",
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
      "Weather and access can vary by season and location. Check local conditions before travelling, and leave the landscape as you found it."
    ],
    note: "A field note from the green northeast"
  }  ,
  {
    slug: "stone-stories-of-kantajew",
    description: "Intricate terracotta panels turn a historic temple into an open-air gallery of craft, belief and everyday scenes from another time.",
    readingTime: "1 MIN READ",
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
      "Opening arrangements and visitor access may change. Check current local guidance before travelling, dress respectfully and avoid touching or damaging the historic surfaces."
    ],
    note: "An architectural field note from the north"
  },
  {
    slug: "a-quiet-world-in-ratargul",
    description: "In the freshwater swamp forest, water and woodland meet. The experience changes with the season, light and level of the water.",
    readingTime: "1 MIN READ",
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
      "Before setting out, check weather, water conditions and current access arrangements with reliable local sources. Take all rubbish back with you and leave the forest as undisturbed as possible."
    ],
    note: "A gentle introduction to a living wetland"
  },
  {
    slug: "courtyards-and-memory-at-baliati",
    description: "The old palace complex offers a glimpse into the region's architectural past through its courtyards, façades and layered history.",
    readingTime: "1 MIN READ",
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
      "Museum hours, maintenance and public access can change. Confirm current arrangements before travelling and follow the site's photography and preservation rules."
    ],
    note: "A heritage walk through historic courtyards"
  }
];
