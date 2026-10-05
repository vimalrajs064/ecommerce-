export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Living & Decor' | 'Carry & Leather' | 'Acoustic & Studio' | 'Apothecary & Scent';
  price: number;
  retailComparePrice: number;
  rating: number;
  reviewCount: number;
  stockStatus: 'in_stock' | 'low_stock' | 'made_to_order';
  stockCount: number;
  badge?: string;
  origin: string;
  materials: string[];
  dimensions: string;
  weight: string;
  leadTime: string;
  description: string;
  craftDetails: string[];
  careGuide: string;
  warranty: string;
  colors: { name: string; hex: string }[];
  accentColor: string;
  iconType: 'vase' | 'bag' | 'speaker' | 'scent' | 'throw' | 'valet' | 'lamp' | 'wallet';
}

export const PRODUCTS: Product[] = [
  {
    id: 'aethel-01',
    name: 'Kintsugi Travertine & Ceramic Vessel',
    tagline: 'Hand-thrown stoneware with artisanal brass inlay and matte volcanic glaze',
    category: 'Living & Decor',
    price: 145,
    retailComparePrice: 240,
    rating: 4.9,
    reviewCount: 84,
    stockStatus: 'in_stock',
    stockCount: 14,
    badge: 'Artisan Exclusive',
    origin: 'Kyoto, Japan / Vallauris, France',
    materials: ['High-fire stoneware clay', 'Natural volcanic ash glaze', 'Recycled spun brass base'],
    dimensions: '28 cm H × 18 cm W (11" × 7")',
    weight: '1.85 kg',
    leadTime: 'Dispatches in 24 hours',
    description: 'Sculpted in limited monthly batches, each vessel features organic contouring inspired by weathered riverbed pebbles. Water-tested and kiln-fired at 1,280°C for lifetime structural integrity.',
    craftDetails: [
      'Individually wheel-thrown by master potters with 20+ years of experience',
      'Dual-texture contrast: raw stone tactile exterior with silk-matte interior',
      'Solid brass pedestal disc weighted for tip-proof stability on any tabletop'
    ],
    careGuide: 'Wipe with a damp lint-free cloth. Safe for fresh floral stems; air dry completely between uses.',
    warranty: 'Lifetime structural replacement guarantee against thermal stress or micro-cracks',
    colors: [
      { name: 'Warm Travertine', hex: '#D8CBB7' },
      { name: 'Smoked Basalt', hex: '#4A4744' },
      { name: 'Chalk White', hex: '#F0ECE1' }
    ],
    accentColor: '#C4B59D',
    iconType: 'vase'
  },
  {
    id: 'aethel-02',
    name: 'Saddle-Stitched Leather Weekender',
    tagline: 'Full-grain Tuscan vegetable-tanned leather with solid antiqued brass hardware',
    category: 'Carry & Leather',
    price: 360,
    retailComparePrice: 580,
    rating: 5.0,
    reviewCount: 128,
    stockStatus: 'low_stock',
    stockCount: 4,
    badge: 'Core Heirloom',
    origin: 'Florence, Italy',
    materials: ['Certified Tuscan full-grain cowhide', 'Heavyweight waxed linen thread', 'Solid cast brass hardware', 'Belgian unbleached cotton twill lining'],
    dimensions: '52 cm L × 28 cm W × 30 cm H (44L Capacity — Airline Overhead Compliant)',
    weight: '2.10 kg',
    leadTime: 'Only 4 left in batch · Dispatches tomorrow',
    description: 'Built to endure decades of global transit, developing a deep, lustrous patina unique to your travels. Every stress junction is reinforced with solid hand-hammered brass rivets.',
    craftDetails: [
      'Vegetable-tanned using natural chestnut and mimosa barks (zero chromium or toxic chemicals)',
      'Double-pass saddlers hand-stitch along load-bearing strap anchors',
      'Integrated padded compartment for 16" laptop plus dedicated shoe compartment with breathable brass eyelets'
    ],
    careGuide: 'Condition once every 12 months with the complimentary natural beeswax balm included in your order.',
    warranty: 'Guaranteed lifetime complimentary hardware, zipper, and stitching repairs',
    colors: [
      { name: 'Cognac Saddle', hex: '#8B4513' },
      { name: 'Espresso Bean', hex: '#3B2F2F' },
      { name: 'Charcoal Noir', hex: '#262626' }
    ],
    accentColor: '#965C39',
    iconType: 'bag'
  },
  {
    id: 'aethel-03',
    name: 'Monolith Solid Walnut Hi-Fi Speaker',
    tagline: 'Acoustically tuned American walnut cabinet with dual neodymium drivers & aptX-HD',
    category: 'Acoustic & Studio',
    price: 290,
    retailComparePrice: 480,
    rating: 4.8,
    reviewCount: 67,
    stockStatus: 'in_stock',
    stockCount: 19,
    badge: 'Studio Grade',
    origin: 'Portland, Oregon, USA',
    materials: ['FSC-Certified American black walnut', 'Brushed anodized aluminum knobs', 'Acoustically transparent Danish wool grille'],
    dimensions: '32 cm W × 14 cm H × 16 cm D',
    weight: '3.40 kg',
    leadTime: 'Dispatches in 24 hours',
    description: 'Combines analog craftsmanship with studio-grade audio fidelity. The 18mm solid timber enclosure eliminates synthetic cabinet resonance, delivering warm acoustic clarity and deep articulate bass.',
    craftDetails: [
      'Individually matched walnut grain continuity wrapped across 4 mitered corners',
      'High-resolution Bluetooth 5.3 + 3.5mm analog line-in for direct vinyl turntable connection',
      '14-hour rechargeable internal lithium battery or continuous dedicated studio AC power'
    ],
    careGuide: 'Dust walnut enclosure with soft microfiber. Oil lightly every 2 years with mineral wood oil.',
    warranty: '5-Year comprehensive parts, driver, and amplifier repair warranty',
    colors: [
      { name: 'Deep American Walnut', hex: '#533C29' },
      { name: 'Natural White Oak', hex: '#BC9E76' }
    ],
    accentColor: '#533C29',
    iconType: 'speaker'
  },
  {
    id: 'aethel-04',
    name: 'Smoked Hinoki & Amber Botanical Extrait',
    tagline: 'Artisanal micro-distilled parfum with aged cedarwood, frankincense & black tea',
    category: 'Apothecary & Scent',
    price: 95,
    retailComparePrice: 165,
    rating: 4.9,
    reviewCount: 142,
    stockStatus: 'in_stock',
    stockCount: 32,
    badge: 'Award Winner',
    origin: 'Grasse, France',
    materials: ['Aged wild Japanese Hinoki cypress', 'Sustainably tapped Omani frankincense', 'Dark amber resin', 'Organic sugarcane spirit base'],
    dimensions: '50 ml / 1.7 fl oz (Heavyweight faceted flacon with magnetic brass cap)',
    weight: '0.38 kg',
    leadTime: 'Dispatches in 24 hours',
    description: 'A deeply meditative, architectural fragrance composed of ancient sacred woods, crushed pine needles, cold moss, and golden amber resins. Matured for 120 days in dark glass vessels.',
    craftDetails: [
      '28% Extrait de Parfum concentration for an intimate 10+ hour sillage',
      'Free from synthetic phthalates, nitro-musks, parabens, and artificial colorants',
      'Presented in a custom linen-wrapped presentation box with numbered batch card'
    ],
    careGuide: 'Store out of direct sunlight and extreme heat to preserve delicate volatile top notes.',
    warranty: '30-Day "Love the Scent" guarantee: Includes a 2ml trial vial to test before opening the main flacon',
    colors: [
      { name: 'Smoked Amber', hex: '#B87333' }
    ],
    accentColor: '#A06535',
    iconType: 'scent'
  },
  {
    id: 'aethel-05',
    name: 'Woven Belgian Heritage Linen Throw',
    tagline: 'Heavyweight pre-washed flax blanket with hand-twisted fringing & waffle texture',
    category: 'Living & Decor',
    price: 125,
    retailComparePrice: 210,
    rating: 4.9,
    reviewCount: 95,
    stockStatus: 'in_stock',
    stockCount: 22,
    origin: 'Flanders, Belgium',
    materials: ['100% Masters of Linen® certified European flax', 'Pre-washed with volcanic pumice for buttery softness'],
    dimensions: '140 cm × 200 cm (55" × 79")',
    weight: '1.20 kg',
    leadTime: 'Dispatches in 24 hours',
    description: 'Thermoregulating flax linen keeps you naturally cool in summer and deeply cozy through winter. Becomes softer, more supple, and more texturally rich with every single laundering.',
    craftDetails: [
      'Woven on historic shuttle looms in Flanders using centuries-old heritage techniques',
      'Generous 420 GSM weight provides a satisfying, grounding drape over sofas and beds',
      'Hypoallergenic, naturally anti-static, and inherently antimicrobial'
    ],
    careGuide: 'Machine wash gentle with mild liquid detergent on cold. Tumble dry low or line dry.',
    warranty: '10-Year anti-pilling and weave integrity guarantee',
    colors: [
      { name: 'Oatmeal Natural', hex: '#DED6C4' },
      { name: 'Forest Olive', hex: '#585942' },
      { name: 'Slate Dusk', hex: '#63676B' }
    ],
    accentColor: '#B5A992',
    iconType: 'throw'
  },
  {
    id: 'aethel-06',
    name: 'Cast Brass & Alabaster Table Lamp',
    tagline: 'Solid brushed brass stem with hand-carved natural Spanish alabaster globe diffuser',
    category: 'Living & Decor',
    price: 215,
    retailComparePrice: 350,
    rating: 5.0,
    reviewCount: 53,
    stockStatus: 'in_stock',
    stockCount: 8,
    badge: 'Limited Batch',
    origin: 'Valencia, Spain',
    materials: ['Hand-lathed raw brass', 'Natural Spanish alabaster stone', 'Braided rayon-wrapped power cord', 'Rotary brass dimmer'],
    dimensions: '22 cm Base Diameter × 34 cm H',
    weight: '2.60 kg',
    leadTime: 'Dispatches in 24 hours',
    description: 'Each alabaster shade features unique natural veining that radiates a warm, sunset-like amber glow when illuminated. The heavy raw brass base anchors securely to desks and nightstands.',
    craftDetails: [
      'Tactile knurled brass step-less rotary dimmer smoothly adjusts 2200K warm glow from 5% to 100%',
      'Includes custom replaceable warm CRI 95+ LED filament bulb rated for 30,000 hours',
      'Solid non-slip natural cork padding base protects polished timber surfaces'
    ],
    careGuide: 'Clean brass with dry soft cloth. Never use aggressive solvent cleaners on alabaster stone.',
    warranty: 'Lifetime atelier warranty on all electrical and mechanical switches',
    colors: [
      { name: 'Aged Brushed Brass', hex: '#C5A059' },
      { name: 'Gunmetal Bronze', hex: '#3E3C39' }
    ],
    accentColor: '#C5A059',
    iconType: 'lamp'
  },
  {
    id: 'aethel-07',
    name: 'Bespoke Vegetable-Tanned Card Valet',
    tagline: 'Hand-beveled bridle leather wallet with RFID shielding and dual quick-access slots',
    category: 'Carry & Leather',
    price: 65,
    retailComparePrice: 110,
    rating: 4.8,
    reviewCount: 210,
    stockStatus: 'in_stock',
    stockCount: 45,
    origin: 'Walsall, United Kingdom',
    materials: ['English bridle leather', 'Waxed poly-cord thread', 'Ultra-thin aerospace RFID-blocking membrane'],
    dimensions: '10 cm × 7 cm × 0.6 cm (Weighs only 34 grams)',
    weight: '0.03 kg',
    leadTime: 'Dispatches in 24 hours',
    description: 'Slim enough to vanish inside a jacket lapel or front pocket, yet engineered to comfortably hold 8 cards and folded banknotes without pocket stretch or bulk.',
    craftDetails: [
      'Edge-burnished by hand with organic beeswax for silky, rounded edges that glide into pockets',
      'Dual thumb-slide cutouts for effortless one-handed card extraction',
      'Tanned with slow 6-month vegetable liquors for maximum durability'
    ],
    careGuide: 'No care required for first 3 years; leather absorbs natural oils from everyday touch.',
    warranty: 'Lifetime replacement if seams or stitching ever fail',
    colors: [
      { name: 'British Tan', hex: '#9E5B32' },
      { name: 'London Tan', hex: '#D28546' },
      { name: 'Midnight Navy', hex: '#1E293B' }
    ],
    accentColor: '#9E5B32',
    iconType: 'wallet'
  },
  {
    id: 'aethel-08',
    name: 'Carved Solid Walnut Catchall Valet Tray',
    tagline: 'Sculptural bedside organizer milled from a single billet of Appalachian walnut',
    category: 'Living & Decor',
    price: 85,
    retailComparePrice: 145,
    rating: 4.9,
    reviewCount: 79,
    stockStatus: 'in_stock',
    stockCount: 18,
    origin: 'Asheville, North Carolina, USA',
    materials: ['Single-billet American black walnut', 'Hand-buffed food-safe walnut oil and organic beeswax'],
    dimensions: '26 cm L × 18 cm W × 3 cm D',
    weight: '0.65 kg',
    leadTime: 'Dispatches in 24 hours',
    description: 'Designed to elegantly rest your keys, timepiece, glasses, and phone at the end of every day. Soft contoured interior scoops allow effortless picking up of small items.',
    craftDetails: [
      'Carved from sustainably harvested fallen timber with rich figured grain swirls',
      'Subtle recessed cable management notch keeps phone charging wire neatly aligned',
      'Four recessed rubber feet on underside prevent sliding and protect delicate furniture'
    ],
    careGuide: 'Buff with a drop of organic food-grade walnut or olive oil once a year if dry.',
    warranty: 'Lifetime anti-warping and crack guarantee',
    colors: [
      { name: 'Rich Walnut', hex: '#4B3621' },
      { name: 'Ebonized Ash', hex: '#2A2928' }
    ],
    accentColor: '#4B3621',
    iconType: 'valet'
  }
];
