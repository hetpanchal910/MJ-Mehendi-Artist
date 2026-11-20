/**
 * Centralized Data Configuration for MJ MEHENDI ARTIST
 * Easily configure contact numbers, products, best sellers, and portfolio items.
 */

export const CONTACT_INFO = {
  brandName: "MJ MEHENDI ARTIST",
  tagline: "Intricate Bridal Artistry & 100% Organic Henna Cones",
  phoneDisplay: "+91 8780404879",
  whatsappNumber: "918780404879", // Clean digits for wa.me links
  email: "contact@mjmehendi.com",
  instagram: "@mj_mehendi_artist",
  instagramUrl: "https://instagram.com",
  location: "Studio & Doorstep Service Available",
  city: "Ahmedabad, Gujarat & Pan-India Shipping",
  workingHours: "Mon - Sun: 9:00 AM - 9:00 PM (By Appointment)",
  experienceYears: "8+",
  bridesCount: "1,200+",
  conesSold: "25,000+"
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
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
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
    price: 80,
    originalPrice: 100,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "Natural mehndi powder",
    description: "Fine sifted natural mehndi powder for rich stain preparation.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795168403/product_mehendi.webp",
    features: [
      "Fine sifted texture",
      "Suitable for cones and paste mixing"
    ],
    inStock: true
  },
  {
    id: "mehndi-blend-oil",
    name: "Mehndi Blend Oil",
    category: "oils",
    categoryLabel: "Oils",
    price: 200,
    originalPrice: 220,
    rating: 4.6,
    reviewCount: 0,
    badge: "Best Seller",
    shortDesc: "Essential mehndi blend oil",
    description: "Specially formulated oil blend to enhance dye release and paste consistency.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169927/after_care_oil.webp",
    features: [
      "Enhances stain release",
      "Smooth paste blending"
    ],
    inStock: true
  },
  {
    id: "printed-cellophane-pre-cut-packets",
    name: "Printed Cellophane Pre Cut Packets",
    category: "cellophane",
    categoryLabel: "Cellophane",
    price: 45,
    originalPrice: 55,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "50 printed pre-cut sheets",
    description: "Printed cellophane pre-cut packets with 50 sheets in each pack for cone rolling.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169928/printed_cellophane.webp",
    features: [
      "50 sheets in each pack",
      "Pre-cut for quick cone rolling"
    ],
    inStock: true
  },
  {
    id: "frozen-cellophane-35-micron",
    name: "Frozen Cellophane (35 Micron)",
    category: "cellophane",
    categoryLabel: "Cellophane",
    price: 12,
    originalPrice: 15,
    rating: 4.4,
    reviewCount: 0,
    badge: "",
    shortDesc: "35 micron frozen cellophane",
    description: "Durable 35 micron frozen cellophane sheet for reliable cone wrapping.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169928/frozen_cellophane.webp",
    features: [
      "35 micron thickness",
      "Frozen finish for clean rolling"
    ],
    inStock: true
  },
  {
    id: "simple-cellophane",
    name: "Simple Cellophane",
    category: "cellophane",
    categoryLabel: "Cellophane",
    price: 17,
    originalPrice: 20,
    rating: 4.4,
    reviewCount: 0,
    badge: "",
    shortDesc: "Simple cellophane roll/sheet",
    description: "Standard simple cellophane for everyday mehndi cone preparation.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169927/simple_cellophane.webp",
    features: [
      "Flexible and easy to seal",
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
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169927/after_care_balm.webp",
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
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169927/after_care_oil.webp",
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
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169926/spealent_spray.webp",
    features: [
      "30 ml spray bottle",
      "Even mist application"
    ],
    inStock: true
  },
  {
    id: "spatula",
    name: "Spatula",
    category: "tools",
    categoryLabel: "Tools",
    price: 90,
    originalPrice: 100,
    rating: 4.6,
    reviewCount: 0,
    badge: "",
    shortDesc: "Mixing spatula for mehndi paste",
    description: "Durable spatula for thorough mixing and scraping of mehndi paste.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169926/spatula.webp",
    features: [
      "Smooth paste mixing",
      "Easy to clean after use"
    ],
    inStock: true
  },
  {
    id: "stocking",
    name: "Stocking",
    category: "tools",
    categoryLabel: "Tools",
    price: 30,
    originalPrice: 35,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "Straining stocking for paste",
    description: "Fine mesh stocking for straining mehndi paste to remove fiber and grit.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169926/stocking.jpg",
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
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169926/pipping_bag.webp",
    features: [
      "Clean paste transfer",
      "Convenient for batch cone filling"
    ],
    inStock: true
  },
  {
    id: "mini-tape-cutter",
    name: "Mini Tape Cutter",
    category: "cutters-and-tapes",
    categoryLabel: "Cutters & Tapes",
    price: 80,
    originalPrice: 95,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "Compact mini tape dispenser",
    description: "Mini tape cutter for quick, one-handed tape tearing while sealing cones.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169925/tape_cutter.webp",
    features: [
      "Compact desk/kit size",
      "Clean serrated cut"
    ],
    inStock: true
  },
  {
    id: "small-tape",
    name: "Small Tape",
    category: "cutters-and-tapes",
    categoryLabel: "Cutters & Tapes",
    price: 12,
    originalPrice: 15,
    rating: 4.4,
    reviewCount: 0,
    badge: "",
    shortDesc: "Small adhesive sealing tape",
    description: "Small tape roll for securing rolled mehndi cones neatly.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169925/small_tape.webp",
    features: [
      "Strong grip on cellophane",
      "Compact roll size"
    ],
    inStock: true
  },
  {
    id: "big-tape-cutter",
    name: "Big Tape Cutter",
    category: "cutters-and-tapes",
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
    category: "cutters-and-tapes",
    categoryLabel: "Cutters & Tapes",
    price: 40,
    originalPrice: 50,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "Standard adhesive tape roll",
    description: "Regular tape roll suited for sealing mehndi cones and packaging.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169928/regular_tape.webp",
    features: [
      "Reliable adhesion",
      "Fits standard dispensers"
    ],
    inStock: true
  },
  {
    id: "cellophane-cutter",
    name: "Cellophane Cutter",
    category: "cutters-and-tapes",
    categoryLabel: "Cutters & Tapes",
    price: 400,
    originalPrice: 440,
    rating: 4.8,
    reviewCount: 0,
    badge: "Artist Pick",
    shortDesc: "Precision cellophane sheet cutter",
    description: "Cellophane cutter for slicing uniform sheets quickly during bulk cone production.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169928/cellophane_cutter.webp",
    features: [
      "Uniform sheet sizing",
      "Speeds up bulk cone prep"
    ],
    inStock: true
  },
  {
    id: "small-cellophane-cutter",
    name: "Small Cellophane Cutter",
    category: "cutters-and-tapes",
    categoryLabel: "Cutters & Tapes",
    price: 60,
    originalPrice: 70,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "Compact small cellophane cutter",
    description: "Small cellophane cutter for light trimming and portable kit setups.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169928/cellophane_cutter.webp",
    features: [
      "Lightweight and portable",
      "Easy everyday trimming"
    ],
    inStock: true
  },
  {
    id: "sf-400-digital-scale",
    name: "SF 400 Digital scale",
    category: "equipment",
    categoryLabel: "Equipment",
    price: 300,
    originalPrice: 340,
    rating: 4.7,
    reviewCount: 0,
    badge: "",
    shortDesc: "SF 400 digital weighing scale",
    description: "SF 400 digital scale for accurate ingredient measurement in paste batches.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169927/sf_400_digital_scale.webp",
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
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169927/cone_stand.webp",
    features: [
      "Keeps cones upright",
      "Organizes workstation"
    ],
    inStock: true
  },
  {
    id: "measurement-cup",
    name: "Measurement Cup",
    category: "tools",
    categoryLabel: "Tools",
    price: 30,
    originalPrice: 35,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "100 ml liquid measuring cup",
    description: "100 ml measurement cup for measuring liquids and essential oil blends accurately.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169927/measurement_cup.webp",
    features: [
      "100 ml capacity",
      "Clear volume markings"
    ],
    inStock: true
  },
  {
    id: "acrylic-hand",
    name: "Acrylic Hand",
    category: "practice-models",
    categoryLabel: "Practice Models",
    price: 200,
    originalPrice: 230,
    rating: 4.6,
    reviewCount: 0,
    badge: "",
    shortDesc: "Acrylic hand model for practice",
    description: "Acrylic hand model for practicing bridal and intricate mehndi designs.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169927/acrylic_hand.webp",
    features: [
      "Reusable practice surface",
      "Hand contour for design flow"
    ],
    inStock: true
  },
  {
    id: "acrylic-leg",
    name: "Acrylic Leg",
    category: "practice-models",
    categoryLabel: "Practice Models",
    price: 200,
    originalPrice: 230,
    rating: 4.6,
    reviewCount: 0,
    badge: "",
    shortDesc: "Acrylic leg model for practice",
    description: "Acrylic leg model for practicing foot and ankle mehndi patterns.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169926/acrylic_leg.webp",
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
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169926/hand_pillow.webp",
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
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169926/mobile_stand.webp",
    features: [
      "Steady angle positioning",
      "Useful for content creation and reference"
    ],
    inStock: true
  },
  {
    id: "heena-dabber",
    name: "Heena Dabber",
    category: "tools",
    categoryLabel: "Tools",
    price: 300,
    originalPrice: 340,
    rating: 4.6,
    reviewCount: 0,
    badge: "",
    shortDesc: "Dabber tool for mehndi application",
    description: "Heena dabber tool for dabbing and finishing mehndi work.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169925/heena_dabber.webp",
    features: [
      "Comfortable grip",
      "Consistent dabbing control"
    ],
    inStock: true
  },
  {
    id: "heena-pin",
    name: "Heena Pin",
    category: "tools",
    categoryLabel: "Tools",
    price: 12,
    originalPrice: 15,
    rating: 4.5,
    reviewCount: 0,
    badge: "",
    shortDesc: "Fine pin for clearing cone tips",
    description: "Heena pin for clearing clogged mehndi cone tips quickly and cleanly.",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795169926/henna_pin.jpg",
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
  {
    id: "work-2",
    title: "Contemporary Arabic Floral Wristlet",
    category: "mehendi",
    categoryLabel: "Festive & Arabic",
    image: "https://res.cloudinary.com/dfc4o4wok/image/upload/v1795175570/WhatsApp_Image_2026-11-19_at_7.42.30_PM.jpg",
    tags: ["Arabic", "Bold Shading", "Festive"],
    description: "Flowing negative space Arabic floral vines with fine lace netting and dramatic shaded petals. Ideal for engagements and Eid."
  },
  {
    id: "work-3",
    title: "Dewy Radiance Bridal Makeup & Hair",
    category: "makeup",
    categoryLabel: "Bridal Makeup",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    tags: ["HD Bridal", "Airbrush Finish", "Traditional Jewellery"],
    description: "Flawless glass skin base with subtle champagne shimmer eyes, defined winged liner, and customized bridal hair styling."
  },
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
  "Bridal Mehendi (Full Hand & Feet)",
  "Engagement & Sangeet Mehendi",
  "Festive / Arabic Mehendi",
  "Bridal HD / Airbrush Makeup",
  "Party / Reception Makeup",
  "Mehendi + Makeup Bridal Combo Package",
  "Bulk Mehendi Cones Inquiry"
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
