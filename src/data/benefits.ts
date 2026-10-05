export interface BenefitPillar {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  quantitativeProof: string;
  iconName: 'truck' | 'shield' | 'refresh' | 'tag' | 'leaf' | 'sparkles';
  perks: string[];
  atelierCommitment: string;
}

export const STORE_BENEFITS: BenefitPillar[] = [
  {
    id: 'benefit-shipping',
    title: 'Complimentary Carbon-Neutral Priority Delivery',
    tagline: 'Guaranteed 2-3 day express dispatch in protective archival packaging',
    shortDesc: 'Every order over $75 ships completely free via tracked express couriers with 100% verified carbon offset investments.',
    fullDesc: 'We believe you shouldn\'t wait weeks for heirloom goods. All in-stock items dispatch within 24 hours from our climate-controlled studio hubs. Each parcel travels via dedicated express couriers with end-to-end tracking, required signature delivery option, and 100% verified climate offset investments.',
    quantitativeProof: '100% Free over $75 · 24-Hour Dispatch · Zero Plastic Packaging',
    iconName: 'truck',
    perks: [
      'Real-time SMS & email tracking with live GPS courier arrival windows',
      'Archival FSC-certified unboxing crate with reusable organic cotton dust bags',
      'Full transit insurance included at zero additional cost on every parcel'
    ],
    atelierCommitment: 'If your package is delayed by more than 48 hours past the estimated date, we instantly credit $25 to your store balance.'
  },
  {
    id: 'benefit-warranty',
    title: 'Guaranteed Lifetime Craftsmanship Warranty',
    tagline: 'Free repairs, hardware replacement, and leather reconditioning for life',
    shortDesc: 'We stand by every stitch, weld, and joint. If anything ever fails, our master artisans will repair or replace it at no charge.',
    fullDesc: 'Traditional retail designs for planned obsolescence; we build for generational permanence. When you buy directly from our shop, your piece is registered into our Atelier Master Registry. If a brass zipper jams, a leather seam unravels, or an acoustic driver requires tuning 10 years from today, send it to our workshop for complimentary restoration.',
    quantitativeProof: '100% Lifetime Guarantee · Free Workshop Labor · Authentic Parts Registry',
    iconName: 'shield',
    perks: [
      'Complimentary bi-annual leather conditioning and wood nourishment program',
      'Free return shipping to our regional repair workshops in North America & Europe',
      'Transferable warranty that stays valid even if passed down as family heirlooms'
    ],
    atelierCommitment: 'A lifetime means a lifetime. No fine print or endless warranty claim hoops—just direct artisan care.'
  },
  {
    id: 'benefit-trial',
    title: '45-Day In-Home Trial & Zero-Friction Returns',
    tagline: 'Test our pieces in the light and rhythm of your own home',
    shortDesc: 'Hold the materials, test the drape, listen to the acoustics. If you are not completely enchanted, return it for a 100% refund.',
    fullDesc: 'True quality cannot be judged through a screen alone. We invite you to live with our objects for 45 full days. Feel the weight of the ceramic vessel, test the speaker with your favorite records, or carry the leather duffle on a weekend getaway. If it doesn\'t exceed your expectations, returns are completely free.',
    quantitativeProof: '45 Full Days Trial · 100% Money-Back Guarantee · $0 Restocking Fees',
    iconName: 'refresh',
    perks: [
      'Prepaid QR-code return label included inside every packaging box',
      'Complimentary doorstep courier pickup scheduled at your convenience',
      'Instant refund processed within 24 hours of package drop-off'
    ],
    atelierCommitment: 'No restocking penalties, no store-credit lockouts. Clean, courteous refunds back to your original payment method.'
  },
  {
    id: 'benefit-pricing',
    title: 'Direct-From-Atelier Transparent Pricing',
    tagline: 'Save 35% to 45% compared to luxury department store markups',
    shortDesc: 'By cutting out wholesale agents, distributor cuts, and retail storefront markups, you pay for genuine materials and honest artisan labor.',
    fullDesc: 'In traditional luxury retail, a $140 leather bag is marked up by wholesale middlemen, regional distributors, and boutique storefront rents to sell for $450+. By connecting you directly with our independent ateliers, we eliminate the unnecessary 5x–8x markup chain. Every dollar you spend directly funds master craftsmen, sustainable raw materials, and fair wages.',
    quantitativeProof: 'Average 38% Direct Savings · 100% Cost Transparency · Fair Living Wages',
    iconName: 'tag',
    perks: [
      'Detailed cost breakdown displayed transparently on every product listing',
      'Direct revenue sharing: 62% of product margin goes directly to maker guilds',
      'No seasonal artificial inflation or fake "Black Friday" price markups'
    ],
    atelierCommitment: 'We maintain year-round honest pricing. You never have to wait for a promotional gimmick to get the real fair price.'
  },
  {
    id: 'benefit-ethical',
    title: 'Certified Ethical Provenance & Small-Batch Craft',
    tagline: '100% traceable materials, zero toxic chemicals, and B-Corp partners',
    shortDesc: 'We strictly partner with vetted family workshops. Every batch is numbered, ethically audited, and crafted with sustainable timber and vegetable leathers.',
    fullDesc: 'Mass production destroys nuance and exploits labor. We produce strictly in limited runs of 50 to 200 pieces per batch. Every hide is a food industry byproduct vegetable-tanned with plant tannins. All walnut and oak is sustainably sourced from certified regeneration forests. We visit every partner workshop twice annually to ensure impeccable ethical standards.',
    quantitativeProof: '100% Traceable Origins · 0% Heavy Metals · B-Corp Certified Guilds',
    iconName: 'leaf',
    perks: [
      'Individually numbered artisan batch card included with maker signature',
      'GOTS-certified organic linens and REACH-compliant natural dyes',
      '1% of all gross sales donated to global forest restoration & craft apprenticeships'
    ],
    atelierCommitment: 'If you ever want to verify the exact guild, timber harvest, or tannery of your piece, our team will provide full origin documentation.'
  },
  {
    id: 'benefit-concierge',
    title: 'Dedicated Human Concierge & Tailored Gifting',
    tagline: 'Personal assistance from real curators, not automated chatbots',
    shortDesc: 'Connect directly with our atelier team for custom monogramming, gift curation, care advice, or architectural interior pairings.',
    fullDesc: 'We refuse to hide behind frustrating automated chatbots. When you reach out to our concierge, you speak with actual craft curators who know our timber grain, leather tannages, and acoustics inside out. Whether you need custom debossed initials on a duffle bag, wedding registry guidance, or room styling suggestions, our team is at your service 7 days a week.',
    quantitativeProof: '100% Human Curators · Under 2h Average Reply · Free Custom Monograms',
    iconName: 'sparkles',
    perks: [
      'Complimentary personalized calligraphy gift message & blind wax seal',
      'Free digital monogram preview on all leather goods prior to crafting',
      'Dedicated private shopping consultation via video or direct phone line'
    ],
    atelierCommitment: 'Real people who take genuine pride in what they make and ship to your doorstep.'
  }
];

export interface ComparisonRow {
  feature: string;
  ourStore: string;
  ourStoreCheck: boolean;
  departmentStores: string;
  departmentStoresCheck: boolean;
  massMarket: string;
  massMarketCheck: boolean;
}

export const STORE_COMPARISON: ComparisonRow[] = [
  {
    feature: 'Warranty Protection',
    ourStore: 'Guaranteed Lifetime Free Repairs & Parts',
    ourStoreCheck: true,
    departmentStores: 'Limited 1-Year or costly extended warranty',
    departmentStoresCheck: false,
    massMarket: '30-Day basic seller window or none',
    massMarketCheck: false
  },
  {
    feature: 'Pricing Model',
    ourStore: 'Direct-to-Consumer (Zero middleman markups)',
    ourStoreCheck: true,
    departmentStores: '5x to 8x markup for distributor & retail rent',
    departmentStoresCheck: false,
    massMarket: 'Hidden seller fees & unpredictable pricing',
    massMarketCheck: false
  },
  {
    feature: 'Materials & Provenance',
    ourStore: 'Full-Grain Tuscan leather, solid walnut & natural stone',
    ourStoreCheck: true,
    departmentStores: 'Varies widely; often bonded leather or veneers',
    departmentStoresCheck: false,
    massMarket: 'Synthetic PU, plastic composites & MDF cores',
    massMarketCheck: false
  },
  {
    feature: 'In-Home Trial',
    ourStore: '45-Day risk-free trial with free prepaid return pickup',
    ourStoreCheck: true,
    departmentStores: '14-30 days; strict unused tags-on policy',
    departmentStoresCheck: false,
    massMarket: 'Buyer pays return shipping + restocking fees',
    massMarketCheck: false
  },
  {
    feature: 'Packaging & Gifting',
    ourStore: 'Archival linen dust pouches & unbleached gift box',
    ourStoreCheck: true,
    departmentStores: 'Standard cardboard; $15-$25 extra for gift wrap',
    departmentStoresCheck: false,
    massMarket: 'Crushed plastic polybags & cheap bubble wrap',
    massMarketCheck: false
  },
  {
    feature: 'Customer Support',
    ourStore: 'Dedicated human atelier specialists (<2h reply)',
    ourStoreCheck: true,
    departmentStores: 'Call center queues & department transfers',
    departmentStoresCheck: false,
    massMarket: 'Endless automated bots & ticket loops',
    massMarketCheck: false
  }
];

export interface StoreReview {
  id: string;
  author: string;
  location: string;
  role: string;
  productPurchased: string;
  rating: number;
  date: string;
  headline: string;
  content: string;
  verifiedBuyer: boolean;
}

export const VERIFIED_REVIEWS: StoreReview[] = [
  {
    id: 'rev-01',
    author: 'Julian V. Thorne',
    location: 'Zurich, Switzerland',
    role: 'Architectural Director',
    productPurchased: 'Saddle-Stitched Leather Weekender',
    rating: 5,
    date: '3 weeks ago',
    headline: 'Far superior to luxury brands charging triple the price',
    content: 'The leather aroma upon opening the archival box was intoxicating. You can immediately feel the density of Tuscan vegetable-tanned leather. Traveled through five flights already; zero scuffs that a quick thumb rub didn’t buff out. The lifetime warranty gives total peace of mind.',
    verifiedBuyer: true
  },
  {
    id: 'rev-02',
    author: 'Elena Rostova',
    location: 'Boston, Massachusetts',
    role: 'Interior Stylist',
    productPurchased: 'Kintsugi Travertine & Ceramic Vessel',
    rating: 5,
    date: '1 month ago',
    headline: 'Arrived in 48 hours without a speck of plastic packaging',
    content: 'Buying artisanal ceramics online is normally terrifying due to shipping breakage, but Aethelgard’s custom molded unbleached pulp packaging was bulletproof. The vessel has stunning sculptural presence in our sunroom. 45-day trial made it completely risk-free, but it will never leave my home.',
    verifiedBuyer: true
  },
  {
    id: 'rev-03',
    author: 'Marcus Chen',
    location: 'Seattle, Washington',
    role: 'Software Systems Designer',
    productPurchased: 'Monolith Solid Walnut Hi-Fi Speaker',
    rating: 5,
    date: '2 months ago',
    headline: 'Acoustic fidelity matches its gorgeous timber craftsmanship',
    content: 'Hooked it up to our direct analog turntable line and the soundstage is breathtaking. No plastic buzz, just rich warm acoustic resonance. When I had a question regarding optimal placement, human concierge answered my email in 35 minutes with personalized room tips. Unheard of in modern e-commerce.',
    verifiedBuyer: true
  }
];
