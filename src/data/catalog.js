/**
 * Centralized Data Configuration for MJ MEHENDI ARTIST
 * Easily configure contact numbers, products, best sellers, and portfolio items.
 */

export const CONTACT_INFO = {
  brandName: "MJ MEHENDI ARTIST",
  tagline: "Intricate Bridal Artistry & 100% Organic Henna Cones",
  phoneDisplay: " +91 8866311064",
  whatsappNumber: "918866311064", // Clean digits for wa.me links
  email: "contact@mjmehendi.com",
  instagram: "@janvi_modi_08",
  instagramUrl: "https://instagram.com/janvi_modi_08",
  location: "Suvas Oram, C/402, Gokul Nagar, Odhav, Opposite Shivdarshan Socity, Near Odhav, Adinath Nagar, Ahmedabad-382415, Gujarat",
  city: "Ahmedabad, Gujarat ",
  workingHours: "Mon - Sun: 9:00 AM - 9:00 PM (By Appointment)",
  experienceYears: "8+",
  bridesCount: "120+",
  conesSold: "250+"
};

/**
 * 2 to 4 Featured Best Selling Items
 * Can easily be modified, added, or reordered here.
 */
export const BEST_SELLER_IDS = ["mini-kit", "beginner-kit",];

/**
 * Products Catalog
 * Cones, Kits, Aftercare Oils, Stencils & Accessories
 */
export const PRODUCTS = [
  {
    id: "mini-kit",
    name: "Our special mini kit",
    category: "kits",
    categoryLabel: "kits",
    price: 360,
    originalPrice: 450,
    rating: 4.9,
    reviewCount: 142,
    badge: "Best Seller",
    shortDesc:  "mini kit",
    description: "(100 gm mehndi Powder, 30 ml mehndi oil, 4 piping bags)",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251864/mini_kit.jpg",
    features: [
      "100 gm mehndi Powder, 30 ml mehndi oil, 4 piping bags"
    ],
    inStock: true
  },
  {
    id: "beginner-kit",
    name: "Our special beginner kit ",
    category: "kits",
    categoryLabel: "Kits",
    price: 600,
    originalPrice: 650,
    rating: 4.7,
    reviewCount: 27,
    badge: "Bridal Favorite",
    shortDesc: "beginner kit",
    description: "(100 gm mehndi Powder, 30 ml mehndi oil, 50 cut sheets, 4 piping bags, silicone spatula, 1 stocking, 1 tape) ",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251863/beginner_kit.jpg",
    features: [
      "100 gm mehndi Powder, 30 ml mehndi oil, 50 cut sheets", "4 piping bags, silicone spatula, 1 stocking, 1 tape"
    ],
    inStock: true
  },
  {
    id: "mehndi-powder",
    name: "Mehndi Powder",
    category: "powders",
    categoryLabel: "Powders",
    price: 250,
    originalPrice: 300,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "Natural mehndi powder",
    description: "Fine sifted natural mehndi powder for rich stain preparation.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251862/mehendi_powder_500gm.jpg",
    features: [
      "500gm",
      "Suitable for cones and paste mixing"
    ],
    inStock: true
  },
  {
    id: "mehndi-blend-oil",
    name: "Mehndi Blend Oil",
    category: "aftercare",
    categoryLabel: "Oils",
    price: 200,
    originalPrice: 220,
    rating: 4.6,
    reviewCount: 0,
    badge: "Best Seller",
    shortDesc: "Essential mehndi blend oil",
    description: "Specially formulated oil blend to enhance dye release and paste consistency.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251862/mehendi_blend_oil.jpg",
    features: [
      "Enhances stain release",
      "Smooth paste blending"
    ],
    inStock: true
  },
  {
    id: "printed-cellophane-pre-cut-packets",
    name: "Printed Cellophane Pre Cut Packets",
    category: "accessories",
    categoryLabel: "Cellophane",
    price: 45,
    originalPrice: 55,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "50 printed pre-cut sheets",
    description: "Printed cellophane pre-cut packets with 50 sheets in each pack for cone rolling.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251861/printed_cellophane.jpg",
    features: [
      "50 sheets in each pack",
      "Pre-cut for quick cone rolling"
    ],
    inStock: true
  },
  {
    id: "frozen-cellophane-35-micron",
    name: "Frozen Cellophane (35 Micron)",
    category: "accessories",
    categoryLabel: "Cellophane",
    price: 12,
    originalPrice: 15,
    rating: 4.4,
    reviewCount: 0,
    badge: "",
    shortDesc: "35 micron frozen cellophane",
    description: "Durable 35 micron frozen cellophane sheet for reliable cone wrapping.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251861/frozen_cellophane.jpg",
    features: [
      "35 micron thickness",
      "Frozen finish for clean rolling"
    ],
    inStock: true
  },
  {
    id: "simple-cellophane",
    name: "Simple Cellophane",
    category: "accessories",
    categoryLabel: "Cellophane",
    price: 200,
    originalPrice: 230,
    rating: 4.4,
    reviewCount: 0,
    badge: "",
    shortDesc: "Simple cellophane roll/sheet",
    description: "Standard simple cellophane for everyday mehndi cone preparation.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251861/simple_cellophane.jpg",
    features: [
      "400 pieces",
      "Everyday cone making"
    ],
    inStock: true
  },
  {
    id: "after-care-balm",
    name: "After Care Balm",
    category: "aftercare",
    categoryLabel: "After Care",
    price: 50,
    originalPrice: 60,
    rating: 4.6,
    reviewCount: 0,
    badge: "",
    shortDesc: "8 gm after care balm",
    description: "8 gm after care balm to protect and condition mehndi-stained skin.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251860/aftercare_balm.jpg",
    features: [
      "8 gm compact pack",
      "Helps protect stain from water"
    ],
    inStock: true
  },
  {
    id: "after-care-oil",
    name: "After Care Oil",
    category: "aftercare",
    categoryLabel: "After Care",
    price: 60,
    originalPrice: 70,
    rating: 4.6,
    reviewCount: 0,
    badge: "",
    shortDesc: "30 ml after care oil",
    description: "30 ml after care oil designed to nourish skin and support deep color.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251859/aftercare_oil.jpg",
    features: [
      "30 ml bottle",
      "Post-mehndi skin care"
    ],
    inStock: true
  },
  {
    id: "sealant-spray",
    name: "Sealant Spray",
    category: "aftercare",
    categoryLabel: "After Care",
    price: 50,
    originalPrice: 60,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "30 ml sealant spray",
    description: "30 ml sealant spray for quick after-care application on dried mehndi.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251859/sealant_spray.jpg",
    features: [
      "30 ml spray bottle",
      "Even mist application"
    ],
    inStock: true
  },
  {
    id: "spatula",
    name: "Spatula",
    category: "accessories",
    categoryLabel: "Tools",
    price: 90,
    originalPrice: 100,
    rating: 4.6,
    reviewCount: 0,
    badge: "",
    shortDesc: "Mixing spatula for mehndi paste",
    description: "Durable spatula for thorough mixing and scraping of mehndi paste.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251862/spatula.jpg",
    features: [
      "Smooth paste mixing",
      "Easy to clean after use"
    ],
    inStock: true
  },
  {
    id: "stocking",
    name: "Stocking",
    category: "accessories",
    categoryLabel: "Tools",
    price: 30,
    originalPrice: 35,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "Straining stocking for paste",
    description: "Fine mesh stocking for straining mehndi paste to remove fiber and grit.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251858/stockings.jpg",
    features: [
      "Fine mesh straining",
      "Prevents nozzle clogging"
    ],
    inStock: true
  },
  {
    id: "piping-bag",
    name: "Piping Bag",
    category: "tools",
    categoryLabel: "Tools",
    price: 5,
    originalPrice: 8,
    rating: 4.4,
    reviewCount: 0,
    badge: "",
    shortDesc: "Disposable piping bag",
    description: "Piping bag for filling mehndi cones cleanly without mess.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251858/piping_bag.jpg",
    features: [
      "Clean paste transfer",
      "Convenient for batch cone filling"
    ],
    inStock: true
  },
  {
    id: "mini-tape-cutter",
    name: "Mini Tape Cutter",
    category: "accessories",
    categoryLabel: "Cutters & Tapes",
    price: 80,
    originalPrice: 95,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "Compact mini tape dispenser",
    description: "Mini tape cutter for quick, one-handed tape tearing while sealing cones.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251858/mini_tape_cutter.jpg",
    features: [
      "Compact desk/kit size",
      "Clean serrated cut"
    ],
    inStock: true
  },
  {
    id: "small-tape",
    name: "Small Tape",
    category: "accessories",
    categoryLabel: "Cutters & Tapes",
    price: 12,
    originalPrice: 15,
    rating: 4.4,
    reviewCount: 0,
    badge: "",
    shortDesc: "Small adhesive sealing tape",
    description: "Small tape roll for securing rolled mehndi cones neatly.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251857/small_tape.jpg",
    features: [
      "Strong grip on cellophane",
      "Compact roll size"
    ],
    inStock: true
  },
  {
    id: "big-tape-cutter",
    name: "Big Tape Cutter",
    category: "accessories",
    categoryLabel: "Cutters & Tapes",
    price: 200,
    originalPrice: 220,
    rating: 4.7,
    reviewCount: 0,
    badge: "",
    shortDesc: "Heavy-duty big tape cutter",
    description: "Weighted big tape cutter for high-volume cone sealing and studio work.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169925/tape_cutter.webp",
    features: [
      "Stable base for single-hand pull",
      "Built for frequent studio use"
    ],
    inStock: true
  },
  {
    id: "regular-tape",
    name: "Regular Tape",
    category: "accessories",
    categoryLabel: "Cutters & Tapes",
    price: 40,
    originalPrice: 50,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "Standard adhesive tape roll",
    description: "Regular tape roll suited for sealing mehndi cones and packaging.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251855/regular_tape.jpg",
    features: [
      "Reliable adhesion",
      "Fits standard dispensers"
    ],
    inStock: true
  },
  {
    id: "cellophane-cutter",
    name: "Cellophane Cutter",
    category: "accessories",
    categoryLabel: "Cutters & Tapes",
    price: 400,
    originalPrice: 440,
    rating: 4.8,
    reviewCount: 0,
    badge: "Artist Pick",
    shortDesc: "Precision cellophane sheet cutter",
    description: "Cellophane cutter for slicing uniform sheets quickly during bulk cone production.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251854/cellophane_cutter.jpg",
    features: [
      "Uniform sheet sizing",
      "Speeds up bulk cone prep"
    ],
    inStock: true
  },
  {
    id: "small-cellophane-cutter",
    name: "Small Cellophane Cutter",
    category: "accessories",
    categoryLabel: "Cutters & Tapes",
    price: 60,
    originalPrice: 70,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "Compact small cellophane cutter",
    description: "Small cellophane cutter for light trimming and portable kit setups.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251854/small_cellophane_cutter.jpg",
    features: [
      "Lightweight and portable",
      "Easy everyday trimming"
    ],
    inStock: true
  },
  {
    id: "sf-400-digital-scale",
    name: "SF 400 Digital scale",
    category: "accessories",
    categoryLabel: "Equipment",
    price: 300,
    originalPrice: 340,
    rating: 4.7,
    reviewCount: 0,
    badge: "",
    shortDesc: "SF 400 digital weighing scale",
    description: "SF 400 digital scale for accurate ingredient measurement in paste batches.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795253094/sf40.webp",
    features: [
      "Accurate gram measurements",
      "Clear digital readout"
    ],
    inStock: true
  },
  {
    id: "cone-stand",
    name: "Cone Stand",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 250,
    originalPrice: 280,
    rating: 4.6,
    reviewCount: 0,
    badge: "",
    shortDesc: "Upright stand for mehndi cones",
    description: "Cone stand to hold filled mehndi cones upright and organized during work.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251854/cone_stand.jpg",
    features: [
      "Keeps cones upright",
      "Organizes workstation"
    ],
    inStock: true
  },
  {
    id: "measurement-cup",
    name: "Measurement Cup",
    category: "accessories",
    categoryLabel: "Tools",
    price: 30,
    originalPrice: 35,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "100 ml liquid measuring cup",
    description: "100 ml measurement cup for measuring liquids and essential oil blends accurately.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251854/measurement_cup.jpg",
    features: [
      "100 ml capacity",
      "Clear volume markings"
    ],
    inStock: true
  },
  {
    id: "acrylic-hand",
    name: "Acrylic Hand",
    category: "accessories",
    categoryLabel: "Practice Models",
    price: 200,
    originalPrice: 230,
    rating: 4.6,
    reviewCount: 0,
    badge: "",
    shortDesc: "Acrylic hand model for practice",
    description: "Acrylic hand model for practicing bridal and intricate mehndi designs.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251853/acrylic_hand.jpg",
    features: [
      "Reusable practice surface",
      "Hand contour for design flow"
    ],
    inStock: true
  },
  {
    id: "acrylic-leg",
    name: "Acrylic Leg",
    category: "accessories",
    categoryLabel: "Practice Models",
    price: 200,
    originalPrice: 230,
    rating: 4.6,
    reviewCount: 0,
    badge: "",
    shortDesc: "Acrylic leg model for practice",
    description: "Acrylic leg model for practicing foot and ankle mehndi patterns.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251853/acrylic_leg.jpg",
    features: [
      "Reusable practice surface",
      "Ideal for foot/bridal motifs"
    ],
    inStock: true
  },
  {
    id: "hand-pillow",
    name: "Hand Pillow",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 550,
    originalPrice: 600,
    rating: 4.8,
    reviewCount: 0,
    badge: "Bridal Favorite",
    shortDesc: "Cushioned rest pillow for hands",
    description: "Hand pillow providing comfortable arm and hand support during long sessions.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251854/hand_pillow.jpg",
    features: [
      "Ergonomic support for clients",
      "Reduces hand fatigue during sessions"
    ],
    inStock: true
  },
  {
    id: "mobile-stand",
    name: "Mobile Stand",
    category: "accessories",
    categoryLabel: "Accessories",
    price: 700,
    originalPrice: 750,
    rating: 4.7,
    reviewCount: 0,
    badge: "",
    shortDesc: "Stand for filming or reference",
    description: "Mobile stand for holding a phone steady while recording reels or viewing designs.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251853/mobile_stand.jpg",
    features: [
      "Steady angle positioning",
      "Useful for content creation and reference"
    ],
    inStock: true
  },
  {
    id: "heena-dabber",
    name: "Henna Dabber",
    category: "accessories",
    categoryLabel: "Tools",
    price: 300,
    originalPrice: 340,
    rating: 4.6,
    reviewCount: 0,
    badge: "",
    shortDesc: "Dabber tool for mehndi application",
    description: "Heena dabber tool for dabbing and finishing mehndi work.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251853/heena_dabber.jpg",
    features: [
      "Comfortable grip",
      "Consistent dabbing control"
    ],
    inStock: true
  },
  {
    id: "heena-pin",
    name: "Henna Pin",
    category: "accessories",
    categoryLabel: "Tools",
    price: 12,
    originalPrice: 15,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "Fine pin for clearing cone tips",
    description: "Heena pin for clearing clogged mehndi cone tips quickly and cleanly.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795251853/henna_pin.jpg",
    features: [
      "Fine tip for unclogging cones",
      "Essential backup tool"
    ],
    inStock: true
  }
];

/**
 * Filterable Portfolio of Work (Mehendi & Makeup)
 */
export const PORTFOLIO_ITEMS = [
  {
    id: "work-1",
    title: "Royal Marwari Full Bridal Mehendi",
    category: "mehendi",
    categoryLabel: "Bridal Mehendi",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795175571/img.jpg",
    tags: ["Full Hand", "Dulha-Dulhan Motif", "Sojat Organic"],
    description: "Elaborate bridal henna featuring custom portrait portraits of bride and groom, traditional musical instruments, and dense peacock feather cuffs."
  },
  // {
  //   id: "work-2",
  //   title: "Contemporary Arabic Floral Wristlet",
  //   category: "mehendi",
  //   categoryLabel: "Festive & Arabic",
  //   image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795175570/WhatsApp_Image_2026-11-19_at_7.42.30_PM.jpg",
  //   tags: ["Arabic", "Bold Shading", "Festive"],
  //   description: "Flowing negative space Arabic floral vines with fine lace netting and dramatic shaded petals. Ideal for engagements and Eid."
  // },
  
  {
    id: "work-4",
    title: "Intricate Lotus Feet & Anklet Henna",
    category: "mehendi",
    categoryLabel: "Bridal Mehendi",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795175569/img6.jpg",
    tags: ["Bridal Feet", "Lotus Jaal", "Payal Pattern"],
    description: "Symmetrical lotus mandalas with delicate checks, anklet payal chains, and stained fingertips for the modern bride."
  },
  {
    id: "work-5",
    title: "Intricate Lotus Feet & Anklet Henna",
    category: "mehendi",
    categoryLabel: "Bridal Mehendi",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795175570/img_3.jpg",
    tags: ["Bridal Feet", "Lotus Jaal", "Payal Pattern"],
    description: "Symmetrical lotus mandalas with delicate checks, anklet payal chains, and stained fingertips for the modern bride."
  }
  ,
  {
    id: "work-6",
    title: "Minimalist Indo-Western Finger Henna",
    category: "mehendi",
    categoryLabel: "Festive & Arabic",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795175569/img5.jpg",
    tags: ["Minimalist", "Geometric", "Bridesmaids"],
    description: "Clean chevron bands, delicate ring accents, and wrist cuff mandalas crafted for modern brides and bridesmaid squads."
  },
  {
    id: "work-7",
    title: "Traditional South Indian Bridal Mehendi",
    category: "mehendi",
    categoryLabel: "Bridal Mehendi",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795175569/img_4.jpg",
    tags: ["Temple Motif", "Elephant Jaal", "Dark Stain"],
    description: "Deep symmetrical temple architectural arches with carved elephant figurines and fine micro-dots."
  },
  {
    id: "work-8",
    title: "Cocktail Soft Glam & Textured Waves",
    category: "mehendi",
    categoryLabel: "Party & Bridal Makeup",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795175569/WhatsApp_Image_2026-11-19_at_7.43.29_PM.jpg",
    tags: ["Soft Glam", "Glow Base", "Hollywood Waves"],
    description: "Soft rose gold lids, sculpted brows, velvety matte lips, and voluminous textured cascading waves."
  },
  {
    id: "work-8",
    title: "Cocktail Soft Glam & Textured Waves",
    category: "mehendi",
    categoryLabel: "Party & Bridal Makeup",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795175569/img8.jpg",
    tags: ["Soft Glam", "Glow Base", "Hollywood Waves"],
    description: "Soft rose gold lids, sculpted brows, velvety matte lips, and voluminous textured cascading waves."
  },
  {
    id: "work-8",
    title: "Cocktail Soft Glam & Textured Waves",
    category: "mehendi",
    categoryLabel: "Party & Bridal Makeup",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795175568/img7.jpg",
    tags: ["Soft Glam", "Glow Base", "Hollywood Waves"],
    description: "Soft rose gold lids, sculpted brows, velvety matte lips, and voluminous textured cascading waves."
  }
];

/**
 * Service options for Appointment Booking
 */
export const SERVICES_LIST = [
  "Festive / Arabic Mehendi",
  "Party & Family Event Mehendi",
  "Henna Powder & Blend Oil Order",
  "Cellophane, Cutters & Cone Supplies",
  "Aftercare Balm, Oil & Sealant Spray",
  "Practice Tools, Stands & Bulk Orders",

];

/**
 * Client Testimonials
 */
/**
 * Client WhatsApp chats shown under "Loved by Brides & Clients".
 * Replace `src` with a real screenshot in /public/reviews/ (png, jpg, or webp).
 */
export const WHATSAPP_CHAT_SCREENSHOTS = [
  {
    id: "chat-1",
    src: "/reviews/whatsapp-chat-1.svg",
    alt: "WhatsApp chat with a bridal client"
  },
  {
    id: "chat-2",
    src: "/reviews/whatsapp-chat-2.svg",
    alt: "WhatsApp chat about a reception look"
  },
  {
    id: "chat-3",
    src: "/reviews/whatsapp-chat-3.svg",
    alt: "WhatsApp chat about an organic cone order"
  }
];

/**
 * Story Highlights / Why Choose Us
 */
export const BRAND_PILLARS = [
  {
    title: "100% Organic & Chemical-Free",
    desc: "Made from fresh triple-filtered Rajasthani Sojat henna leaves with zero synthetic dyes, PPD, or kerosene.",
    icon: "leaf"
  },
  {
    title: "Deep Mahogany Stain Guarantee",
    desc: "Infused with therapeutic eucalyptus, cajeput, and clove oils that yield an intense dark burgundy tone.",
    icon: "sparkles"
  },
  {
    title: "Bespoke Bridal Storytelling",
    desc: "Customized wedding motifs, couple portraits, skyline silhouettes, and sacred mantras woven into your henna.",
    icon: "heart"
  },
  {
    title: "Hygienic & Skin-Safe",
    desc: "Strict sanitized preparation, single-use tips, and allergy-safe formulations suitable even for sensitive skin.",
    icon: "shield"
  }
];
