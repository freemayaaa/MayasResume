export const projectsData = [
  {
    id: 1,
    category: "Menu Design",
    title: "Auraz Recreational Menu",
    description: "Comprehensive cannabis product menu design featuring flower, disposables, and concentrates. Modern, clean layout with product organization, THC/CBD percentages, and pricing.",
    images: [
      "/projects/menu-1.jpg",
      "/projects/menu-2.jpg",
      "/projects/menu-3.jpg",
      "/projects/menu-4.jpg"
    ],
    tags: ["Print Design", "Cannabis", "Typography", "Product Photography"]
  },
  {
    id: 2,
    category: "Product Photos",
    title: "Auraz Nimbus",
    description: "Creative product photography showcase for Auraz Nimbus disposable vape. Features high-impact visual styling with vibrant environmental compositions and premium product presentation. Professional lighting and art direction to capture the product's unique features and appeal.",
    images: [
      "/projects/product-1.jpg",
      "/projects/product-2.jpg",
      "/projects/product-3.jpg"
    ],
    tags: ["Product Photography", "Art Direction", "Lighting", "Cannabis"]
  },
  {
    id: 3,
    category: "Branding",
    title: "Auraz Brand Identity",
    description: "Distinctive brand logo and visual identity system for Auraz Medical and Recreational dispensary. Features bold neon-inspired design with glowing effects, symmetrical mystical imagery, and modern typography. Versatile logo variations for both medical and recreational product lines.",
    images: [
      "/projects/branding-1.jpg",
      "/projects/branding-2.jpg"
    ],
    tags: ["Brand Identity", "Logo Design", "Art Direction", "Visual Design"]
  },
  {
    id: 4,
    category: "Email Blasts",
    title: "Auraz Marketing Campaigns",
    description: "High-impact email marketing designs showcasing product launches and promotions. Features bold typography, vibrant color schemes, product photography, and clear call-to-action messaging. Designed to drive engagement and product awareness for new Auraz product lines.",
    images: [
      "/projects/email-1.jpg",
      "/projects/email-2.jpg",
      "/projects/email-3.jpg"
    ],
    tags: ["Email Marketing", "Digital Design", "Product Promotion", "Typography"]
  },
  {
    id: 5,
    category: "Medical Menu",
    title: "Auraz Medical Product Menu",
    description: "Comprehensive medical menu displays featuring concentrated extracts, distillate cartridges, and premium disposable products. Modern neon-inspired design with glow effects, organized product listings, strain information, and pricing. Professional layouts showcasing Auraz Medical's full product line.",
    images: [
      "/projects/medical-1.jpg",
      "/projects/medical-2.jpg",
      "/projects/medical-3.jpg"
    ],
    tags: ["Menu Design", "Medical Cannabis", "Product Photography", "Typography"]
  },
  {
    id: 6,
    category: "Product Photo Designs",
    title: "Auraz Gummy Product Showcase",
    description: "Professional product photography and digital marketing designs for Auraz edible gummies. Features vibrant, eye-catching layouts with colorful backgrounds, product styling, and glossy text effects. Creative presentations designed to maximize engagement on social media and digital platforms.",
    images: [
      "/projects/gummy-1.jpg",
      "/projects/gummy-2.jpg",
      "/projects/gummy-3.jpg",
      "/projects/gummy-4.jpg"
    ],
    tags: ["Product Photography", "Digital Marketing", "Social Media", "Design", "Edibles"]
  },
  {
    id: 7,
    category: "Digital Marketing Design",
    title: "Auraz Promotional Campaigns",
    description: "Eye-catching digital marketing designs for social media and promotional campaigns. Features bold typography, vibrant backgrounds, product showcases, and promotional messaging. Designed for maximum engagement and brand awareness across digital platforms with attention-grabbing visuals and clear call-to-action layouts.",
    images: [
      "/projects/digital-1.jpg",
      "/projects/digital-2.jpg",
      "/projects/digital-3.gif"
    ],
    tags: ["Social Media", "Promotional Design", "Digital Marketing", "Typography", "Cannabis Marketing"]
  }
];

export const categories = ["All", ...new Set(projectsData.map(p => p.category))];
