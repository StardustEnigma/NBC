export const products = [
  {
    id: 'assorted-tin',
    name: 'The Grand Assorted Golden Tin',
    tagline: 'A Curated Symphony of Six Giant Artisanal Cookies',
    price: 48,
    rating: 4.98,
    reviewsCount: 2410,
    badge: 'Signature Keepsake',
    image: '/images/golden-tin-assorted.png',
    description:
      'Our iconic collector’s tin housing six oversized handcrafted cookies. Features our coveted Ruby Red Velvet Truffle, 72% Valrhona Triple Chocolate with malt pearls, and Double Brown Butter Sea Salt Crisp.',
    highlights: [
      '6 Oversized Signature Cookies (140g each)',
      '24K Luster Solid Tinplate Keepsake Tin',
      'Hermetically sealed for 21-day peak bakery freshness',
      'Finished with emerald satin ribbon & wax seal',
    ],
    details: {
      weight: '840g net wt',
      diameter: '22 cm solid golden tin',
      origin: 'Normandy Butter & Valrhona Cocoa',
      servings: '6 to 12 servings',
    },
    cookiesIncluded: [
      {
        name: 'Ruby Red Velvet Ganache',
        count: '2 Cookies',
        desc: 'Valrhona red cocoa infused dough stuffed with Tahitian vanilla cream cheese ganache and white chocolate wafers.',
        tag: 'Fan Favourite',
      },
      {
        name: 'Triple Dark Chocolate Truffle',
        count: '2 Cookies',
        desc: 'Deep black Dutch cocoa, 72% Ecuadorian dark chocolate puddles, crowned with crisp malted chocolate truffles.',
        tag: 'Rich & Intense',
      },
      {
        name: 'Brown Butter Fleur de Sel Chip',
        count: '2 Cookies',
        desc: '48-hour cold fermented dough with slow-browned French butter and 55% Belgian semi-sweet chunks.',
        tag: 'The Classic',
      },
    ],
  },
  {
    id: 'gooey-tin',
    name: 'The Molten Deep-Dish Golden Tin',
    tagline: '700 Grams of Warm, Molten Lava Brown Butter Decadence',
    price: 42,
    rating: 4.96,
    reviewsCount: 1850,
    badge: 'Warm-to-Serve',
    image: '/images/gooey-tin-cookie.png',
    description:
      'Baked directly inside a heavy-gauge gilded golden tin. A colossal deep-dish cookie with caramelized, crisp golden edges and a molten, gooey river of Belgian milk and dark chocolate buttons at the center.',
    highlights: [
      'Colossal 700g Deep-Dish Baked-in-Tin Cookie',
      'Designed to heat for 3-5 mins in oven for molten lava ecstasy',
      'Includes 2 artisanal bamboo dessert spoons',
      'Airtight resealable golden lid preserves freshness',
    ],
    details: {
      weight: '700g net wt',
      diameter: '20 cm oven-safe gilded tin',
      origin: 'Normandy AOP Butter & Belgian Callebaut',
      servings: '4 to 6 people (sharing dessert)',
    },
    cookiesIncluded: [
      {
        name: 'Caramelized Golden Crust',
        count: 'Outer Ring',
        desc: 'Crisp, deeply toffee-caramelized edges baked against the golden tin perimeter.',
        tag: 'Crunch',
      },
      {
        name: 'Molten Belgian Chocolate Puddles',
        count: 'Top Layer',
        desc: 'Hand-pressed jumbo Callebaut milk and dark chocolate discs that melt into liquid ganache.',
        tag: 'Lava',
      },
      {
        name: 'Gooey Brown Sugar Dough Core',
        count: 'Center Core',
        desc: 'Ultra-fudgy, soft dough enriched with dark muscovado and Madagascar bourbon vanilla.',
        tag: 'Gooey',
      },
    ],
  },
]

export const tastingNotes = [
  {
    id: 'red-velvet',
    title: 'Ruby Red Velvet',
    subtitle: 'Cream Cheese Truffle Core',
    desc: 'Deep crimson cocoa base with creamy, silky Tahitian vanilla bean center that bursts upon biting.',
    notes: ['Madagascar Bourbon Vanilla', 'Valrhona Red Cocoa', 'Cultured Cream Cheese'],
    sweetness: 82,
    intensity: 75,
    gooeyness: 90,
    crunch: 65,
    pairing: 'Champagne Brut or Cold Vanilla Oat Milk',
    color: '#D9385C',
  },
  {
    id: 'triple-dark',
    title: 'Triple Dark Ganache',
    subtitle: '72% Single Origin with Malt Pearls',
    desc: 'Unapologetically dark, velvety cocoa studded with melting chocolate pools and crunchy malted truffles.',
    notes: ['72% Ecuadorian Dark Choc', 'Guerande Sea Salt', 'Malted Milk Truffles'],
    sweetness: 58,
    intensity: 95,
    gooeyness: 85,
    crunch: 70,
    pairing: 'Double Espresso or Aged Bourbon',
    color: '#4A2C1D',
  },
  {
    id: 'brown-butter',
    title: 'Brown Butter Gold Chip',
    subtitle: '48-Hour Cold Aged Dough',
    desc: 'Nutty, caramelized notes of slow-simmered French butter finished with flaky Maldon sea salt pyramids.',
    notes: ['Slow-Browned French Butter', 'Callebaut 54%', 'Maldon Flaky Salt'],
    sweetness: 72,
    intensity: 78,
    gooeyness: 80,
    crunch: 85,
    pairing: 'Flat White or Darjeeling First Flush',
    color: '#D49B44',
  },
  {
    id: 'deep-dish-molten',
    title: 'Molten Deep-Dish Skillet',
    subtitle: 'Warm-to-Spoon Tin Cookie',
    desc: 'Warm, gooey molten cookie dough with caramelized golden edges designed to be savoured straight from the tin with spoons.',
    notes: ['Dark Muscovado', 'Melting Milk Discs', 'Toffee Butter Rim'],
    sweetness: 88,
    intensity: 85,
    gooeyness: 98,
    crunch: 55,
    pairing: 'Scoop of Clotted Cream or Salted Caramel Gelato',
    color: '#B57428',
  },
]

export const tinAdvantages = [
  {
    number: '01',
    title: 'Hermetic Freshness Vault',
    subtitle: '21 Days of Oven-Fresh Crispness',
    desc: 'Unlike permeable cardboard boxes that let humidity in, our solid tinplate creates an airtight barrier that locks in the delicate nutty aroma of browned butter and keeps every cookie bakery-fresh.',
    icon: '✦',
  },
  {
    number: '02',
    title: 'An Heirloom Keepsake',
    subtitle: 'Designed to Outlive the Crumbs',
    desc: 'Coated in lustrous 24K champagne gold with our deep emerald insignia, each tin is engineered as an enduring keepsake for jewelry, precious letters, vanity trinkets, or fine teas.',
    icon: '◈',
  },
  {
    number: '03',
    title: '100% Infinitely Recyclable',
    subtitle: 'Zero Plastic, Infinite Life',
    desc: 'Crafted from food-grade tinplate metal — one of the most sustainably circular packaging materials on earth. Enjoy pure luxury without single-use plastic waste.',
    icon: '◇',
  },
  {
    number: '04',
    title: 'Oven-Safe Heat Transfer',
    subtitle: 'The 3-Minute Warm Revivification',
    desc: 'Pop the entire base tin directly into a warm oven at 170°C for 3 to 4 minutes to restore gooey molten centers and waft fragrant vanilla aromas throughout your home.',
    icon: '○',
  },
]

export const unboxingSteps = [
  {
    step: 'I',
    title: 'The Emerald Seal & Gilded Lid',
    desc: 'Break the custom wax emblem and lift the heavy golden lid to hear the crisp acoustic pop of airtight release.',
    cue: 'Acoustic Pop',
  },
  {
    step: 'II',
    title: 'The Brown Butter Aroma Wave',
    desc: 'A rush of caramelized Normandy butter, toasted pecans, and rich Valrhona cocoa envelopes the senses immediately.',
    cue: 'Sensory Release',
  },
  {
    step: 'III',
    title: 'The 3-Minute Oven Ritual',
    desc: 'Warm your tin or individual cookie in an oven at 175°C for 3 minutes until the chocolate glistens and the centers melt.',
    cue: 'Molten Heat',
  },
  {
    step: 'IV',
    title: 'The Golden Crumble',
    desc: 'Break into the crisp caramelized crust to reveal the warm, flowing chocolate ganache core. Pure confectionery bliss.',
    cue: 'First Bite',
  },
]

export const pressReviews = [
  {
    quote: 'The Rolls-Royce of cookies. The golden keepsake tin is almost as enchanting as the molten chocolate within.',
    publication: 'Vogue Gastronomy',
    author: 'Luxury Food & Living Editor',
  },
  {
    quote: 'Nothing But Crumble has redefined confectionery gifting. The red velvet and brown butter cookies are unmatched in London.',
    publication: 'British GQ',
    author: 'Connoisseur Guide',
  },
  {
    quote: 'An exquisite harmony of 72% Valrhona cocoa, French butter, and solid gilded elegance. Packaging worth keeping forever.',
    publication: 'Michelin Guide Lifestyle',
    author: 'Patisserie Chronicle',
  },
  {
    quote: 'Proof that luxury lies in obsession over every single crumb. A masterpiece on any coffee table.',
    publication: 'Wallpaper*',
    author: 'Design & Living',
  },
]

export const customerReviews = [
  {
    name: 'Lady Camilla V.',
    location: 'Kensington, London',
    rating: 5,
    title: 'A showstopper dinner party centerpiece',
    comment: 'The golden tin arrived in immaculate emerald wrapping. We warmed the deep dish cookie and served it with clotted cream — our guests were completely speechless.',
    date: 'Verified Connoisseur • 2 days ago',
    tinBought: 'The Molten Deep-Dish Golden Tin',
  },
  {
    name: 'Julian Sterling',
    location: 'Paris, France',
    rating: 5,
    title: 'The tin is stunning, the cookies are heavenly',
    comment: 'I bought two tins as gifts and ended up keeping one for myself. The red velvet with white chocolate ganache core is unlike anything I’ve tasted. The tin now sits on my desk for fountain pens.',
    date: 'Verified Connoisseur • 5 days ago',
    tinBought: 'The Grand Assorted Golden Tin',
  },
  {
    name: 'Sophia M.',
    location: 'Zurich, Switzerland',
    rating: 5,
    title: 'Worth every single penny',
    comment: 'From the weight of the golden tin to the scent of toasted butter upon opening, this is pure opulence. The cookies arrived in perfect condition across borders.',
    date: 'Verified Connoisseur • 1 week ago',
    tinBought: 'The Grand Assorted Golden Tin',
  },
]

export const faqs = [
  {
    q: 'How long do the cookies stay fresh inside the golden tin?',
    a: 'Thanks to the hermetic seal of our solid tinplate and food-safe parchment barrier, our cookies retain their bakery-fresh texture, crisp edges, and aroma for up to 21 days at room temperature. For longer keeping, they can be stored in the tin in a cool dry larder.',
  },
  {
    q: 'Can the golden tin be placed directly in the oven?',
    a: 'Yes! The base of the golden tin is made of heavy food-grade tinplate and is completely oven-safe up to 180°C (350°F). Simply remove the lid and parchment, and warm in the oven for 3 to 5 minutes to enjoy an unbelievable molten lava experience.',
  },
  {
    q: 'What is the tin made of and can I reuse it?',
    a: 'Our tins are crafted from premium food-grade gilded tinplate with embossed detailing and a satin gold protective clear coat. They are 100% food-safe, endlessly reusable, and designed to become heirloom keepsakes for teas, letters, sewing kits, or jewelry.',
  },
  {
    q: 'Do you offer complimentary gift messaging and engraving?',
    a: 'Yes. Every order includes a complimentary gold-embossed emerald gift card with your custom handwritten message. We also offer bespoke laser monogramming on the golden lid for celebratory gifts and luxury corporate events.',
  },
  {
    q: 'How are the tins shipped to guarantee freshness?',
    a: 'We ship each tin sealed inside an insulated gold-lined presentation box with temperature-regulated packaging. All orders placed before 2 PM GMT are dispatched via express courier with next-day guaranteed delivery.',
  },
]
