import React from 'react';

interface ProductArtworkProps {
  type: 'vase' | 'bag' | 'speaker' | 'scent' | 'throw' | 'valet' | 'lamp' | 'wallet';
  name: string;
  className?: string;
  badge?: string;
}

export const ProductArtwork: React.FC<ProductArtworkProps> = ({
  type,
  name,
  className = '',
  badge,
}) => {
  return (
    <div
      className={`relative w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F5F2EC] to-[#EAE5DC] select-none ${className}`}
      role="img"
      aria-label={`Product visual for ${name}`}
    >
      {/* Subtle architectural ambient backdrop lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.85)_0%,transparent_75%)] pointer-events-none" />

      {/* Subtle fine noise texture layer */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Product Artwork SVG Geometry */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500 ease-out">
        {type === 'vase' && (
          <svg viewBox="0 0 240 240" className="w-4/5 h-4/5 max-h-56 drop-shadow-xl" fill="none">
            {/* Ground shadow */}
            <ellipse cx="120" cy="216" rx="55" ry="10" fill="#2A241E" fillOpacity="0.12" />
            <ellipse cx="120" cy="215" rx="36" ry="6" fill="#2A241E" fillOpacity="0.18" />

            {/* Brass base disc */}
            <rect x="86" y="202" width="68" height="8" rx="2" fill="url(#brassGrad)" />

            {/* Ceramic body */}
            <path
              d="M120 42 C108 42 102 52 100 70 C96 102 68 135 68 174 C68 198 90 204 120 204 C150 204 172 198 172 174 C172 135 144 102 140 70 C138 52 132 42 120 42 Z"
              fill="url(#travertineGrad)"
              stroke="#D4C8B8"
              strokeWidth="1.5"
            />

            {/* Ceramic rim */}
            <ellipse cx="120" cy="44" rx="18" ry="4" fill="#E4DACD" stroke="#C4B59D" strokeWidth="1.5" />
            <ellipse cx="120" cy="44" rx="13" ry="2.5" fill="#3D3833" fillOpacity="0.3" />

            {/* Kintsugi brass vein detail */}
            <path
              d="M102 78 Q115 110 108 140 T126 186"
              stroke="url(#brassGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M108 140 Q130 148 142 165"
              stroke="url(#brassGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            {/* Highlight gleam */}
            <path
              d="M86 160 C84 140 96 115 106 90"
              stroke="white"
              strokeOpacity="0.35"
              strokeWidth="4"
              strokeLinecap="round"
            />

            <defs>
              <linearGradient id="travertineGrad" x1="68" y1="42" x2="172" y2="204" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5EFE6" />
                <stop offset="0.45" stopColor="#E2D7C5" />
                <stop offset="1" stopColor="#C9BBA5" />
              </linearGradient>
              <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#F4D068" />
                <stop offset="0.5" stopColor="#C59B3C" />
                <stop offset="1" stopColor="#8A671D" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {type === 'bag' && (
          <svg viewBox="0 0 240 240" className="w-4/5 h-4/5 max-h-56 drop-shadow-xl" fill="none">
            {/* Ground shadow */}
            <ellipse cx="120" cy="214" rx="75" ry="12" fill="#2A241E" fillOpacity="0.14" />
            <ellipse cx="120" cy="213" rx="55" ry="7" fill="#2A241E" fillOpacity="0.2" />

            {/* Handles */}
            <path
              d="M85 105 C85 45 115 42 120 42 C125 42 155 45 155 105"
              stroke="url(#leatherDarkGrad)"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M85 105 C85 48 115 45 120 45 C125 45 155 48 155 105"
              stroke="#D4A373"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Bag Main Body */}
            <rect x="42" y="98" width="156" height="106" rx="16" fill="url(#leatherGrad)" stroke="#6C3915" strokeWidth="1.5" />

            {/* Top Zipper Gusset */}
            <path d="M48 98 Q120 86 192 98" stroke="url(#brassGradBag)" strokeWidth="4" strokeLinecap="round" />
            <circle cx="160" cy="94" r="5" fill="#C59B3C" stroke="#7A5612" strokeWidth="1" />

            {/* Reinforcing Leather Straps */}
            <rect x="80" y="98" width="16" height="106" fill="url(#leatherDarkGrad)" />
            <rect x="144" y="98" width="16" height="106" fill="url(#leatherDarkGrad)" />

            {/* White/buff saddle stitch dashes */}
            <line x1="82" y1="102" x2="82" y2="200" stroke="#F1E3D3" strokeWidth="1.2" strokeDasharray="3 3" />
            <line x1="94" y1="102" x2="94" y2="200" stroke="#F1E3D3" strokeWidth="1.2" strokeDasharray="3 3" />
            <line x1="146" y1="102" x2="146" y2="200" stroke="#F1E3D3" strokeWidth="1.2" strokeDasharray="3 3" />
            <line x1="158" y1="102" x2="158" y2="200" stroke="#F1E3D3" strokeWidth="1.2" strokeDasharray="3 3" />

            {/* Brass Rivets */}
            <circle cx="88" cy="112" r="3" fill="#F4D068" stroke="#8A671D" strokeWidth="0.8" />
            <circle cx="152" cy="112" r="3" fill="#F4D068" stroke="#8A671D" strokeWidth="0.8" />
            <circle cx="88" cy="186" r="3" fill="#F4D068" stroke="#8A671D" strokeWidth="0.8" />
            <circle cx="152" cy="186" r="3" fill="#F4D068" stroke="#8A671D" strokeWidth="0.8" />

            {/* Front Passport Pocket */}
            <path d="M102 125 H138 V165 H102 Z" fill="#753B13" rx="4" />
            <text x="120" y="148" textAnchor="middle" fill="#C59B3C" fontSize="6" fontFamily="sans-serif" letterSpacing="1">
              AETHELGARD
            </text>

            <defs>
              <linearGradient id="leatherGrad" x1="42" y1="98" x2="198" y2="204" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A85B28" />
                <stop offset="0.5" stopColor="#8A4418" />
                <stop offset="1" stopColor="#66300E" />
              </linearGradient>
              <linearGradient id="leatherDarkGrad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#7E3A12" />
                <stop offset="1" stopColor="#4F2309" />
              </linearGradient>
              <linearGradient id="brassGradBag" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#E5B94E" />
                <stop offset="0.5" stopColor="#F9DF88" />
                <stop offset="1" stopColor="#C29432" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {type === 'speaker' && (
          <svg viewBox="0 0 240 240" className="w-4/5 h-4/5 max-h-56 drop-shadow-xl" fill="none">
            {/* Ground shadow */}
            <ellipse cx="120" cy="208" rx="80" ry="10" fill="#2A241E" fillOpacity="0.15" />

            {/* Walnut wooden enclosure */}
            <rect x="36" y="74" width="168" height="124" rx="10" fill="url(#walnutGrad)" stroke="#392618" strokeWidth="2" />

            {/* Wood Grain Highlights */}
            <path d="M42 95 Q120 90 198 94" stroke="#5E4029" strokeWidth="1.2" opacity="0.6" />
            <path d="M42 120 Q110 128 198 116" stroke="#372416" strokeWidth="1.2" opacity="0.6" />
            <path d="M42 155 Q135 145 198 152" stroke="#5E4029" strokeWidth="1.2" opacity="0.6" />

            {/* Acoustic Fabric Grille Frame */}
            <rect x="52" y="90" width="136" height="92" rx="6" fill="#2B2824" stroke="#45403A" strokeWidth="1" />

            {/* Neodymium Woofer & Tweeter circles */}
            <circle cx="95" cy="136" r="30" fill="#1C1A18" stroke="#3D3934" strokeWidth="2" />
            <circle cx="95" cy="136" r="16" fill="#262320" stroke="#C59B3C" strokeWidth="1" />
            <circle cx="95" cy="136" r="6" fill="#121110" />

            {/* Tweeter */}
            <circle cx="152" cy="120" r="14" fill="#1C1A18" stroke="#3D3934" strokeWidth="1.5" />
            <circle cx="152" cy="120" r="6" fill="#A88B52" />

            {/* Top Control Knobs (Brushed Aluminum) */}
            <rect x="68" y="66" width="16" height="9" rx="2" fill="url(#aluminumGrad)" stroke="#555" strokeWidth="0.8" />
            <rect x="94" y="66" width="16" height="9" rx="2" fill="url(#aluminumGrad)" stroke="#555" strokeWidth="0.8" />
            <circle cx="160" cy="71" r="3" fill="#D4AF37" />

            <defs>
              <linearGradient id="walnutGrad" x1="36" y1="74" x2="204" y2="198" gradientUnits="userSpaceOnUse">
                <stop stopColor="#67472E" />
                <stop offset="0.5" stopColor="#4F341F" />
                <stop offset="1" stopColor="#372416" />
              </linearGradient>
              <linearGradient id="aluminumGrad" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#E2E2E2" />
                <stop offset="0.5" stopColor="#B3B3B3" />
                <stop offset="1" stopColor="#E8E8E8" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {type === 'scent' && (
          <svg viewBox="0 0 240 240" className="w-4/5 h-4/5 max-h-56 drop-shadow-xl" fill="none">
            {/* Ground shadow */}
            <ellipse cx="120" cy="214" rx="44" ry="8" fill="#2A241E" fillOpacity="0.14" />

            {/* Magnetic Brass Cap */}
            <rect x="98" y="44" width="44" height="34" rx="4" fill="url(#brassCapGrad)" stroke="#8A671D" strokeWidth="1" />
            <line x1="98" y1="62" x2="142" y2="62" stroke="#705213" strokeWidth="1" />

            {/* Heavyweight Glass Bottle Flacon */}
            <rect x="76" y="80" width="88" height="124" rx="8" fill="url(#perfumeGlassGrad)" stroke="#E5DEC9" strokeWidth="1.5" />

            {/* Amber Liquid Level */}
            <rect x="80" y="104" width="80" height="96" rx="4" fill="url(#amberLiquidGrad)" fillOpacity="0.88" />

            {/* Minimalist Textured Label */}
            <rect x="88" y="122" width="64" height="52" rx="2" fill="#FAF7F0" stroke="#D3C9B8" strokeWidth="0.8" />
            <text x="120" y="136" textAnchor="middle" fill="#2C2723" fontSize="6.5" fontFamily="serif" letterSpacing="0.8">
              AETHELGARD
            </text>
            <line x1="98" y1="142" x2="142" y2="142" stroke="#C59B3C" strokeWidth="0.8" />
            <text x="120" y="152" textAnchor="middle" fill="#3D3732" fontSize="5.5" fontWeight="600" fontFamily="sans-serif">
              SMOKED HINOKI
            </text>
            <text x="120" y="163" textAnchor="middle" fill="#756D64" fontSize="4.5" fontFamily="sans-serif">
              EXTRAIT DE PARFUM
            </text>

            <defs>
              <linearGradient id="brassCapGrad" x1="98" y1="44" x2="142" y2="78" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F5D77F" />
                <stop offset="0.5" stopColor="#C99E3D" />
                <stop offset="1" stopColor="#966F1C" />
              </linearGradient>
              <linearGradient id="perfumeGlassGrad" x1="76" y1="80" x2="164" y2="204" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" stopOpacity="0.8" />
                <stop offset="0.3" stopColor="#F9F5EC" stopOpacity="0.4" />
                <stop offset="1" stopColor="#E4DBCB" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="amberLiquidGrad" x1="80" y1="104" x2="160" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DE8A36" />
                <stop offset="0.6" stopColor="#BC661E" />
                <stop offset="1" stopColor="#874311" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {type === 'throw' && (
          <svg viewBox="0 0 240 240" className="w-4/5 h-4/5 max-h-56 drop-shadow-xl" fill="none">
            {/* Ground shadow */}
            <ellipse cx="120" cy="208" rx="66" ry="10" fill="#2A241E" fillOpacity="0.12" />

            {/* Folded Belgian Linen Stack */}
            {/* Bottom fold */}
            <path d="M52 168 Q120 162 188 168 C192 184 184 196 178 198 Q120 204 62 198 C56 194 48 184 52 168 Z" fill="#C4B8A2" stroke="#A89C86" strokeWidth="1.2" />
            {/* Middle fold */}
            <path d="M56 132 Q120 126 184 132 C188 150 182 164 176 168 Q120 172 64 168 C58 162 52 148 56 132 Z" fill="#D7CEBD" stroke="#BAAE99" strokeWidth="1.2" />
            {/* Top roll */}
            <path d="M60 92 Q120 84 180 92 C185 110 180 126 174 132 Q120 136 66 132 C60 126 55 110 60 92 Z" fill="#E8E1D3" stroke="#C8BEAC" strokeWidth="1.2" />

            {/* Fringing tassels */}
            <path d="M62 198 L56 214 M74 199 L70 215 M86 200 L84 216 M98 201 L96 217 M110 202 L110 218 M122 202 L124 218 M134 201 L136 217 M146 200 L148 216 M158 199 L162 215 M170 198 L176 214" stroke="#8E826F" strokeWidth="1.5" strokeLinecap="round" />

            {/* Leather binding ribbon */}
            <rect x="110" y="86" width="20" height="114" fill="#8B4513" rx="2" />
            <line x1="112" y1="90" x2="112" y2="198" stroke="#D4A373" strokeWidth="0.8" strokeDasharray="2 2" />
            <line x1="128" y1="90" x2="128" y2="198" stroke="#D4A373" strokeWidth="0.8" strokeDasharray="2 2" />
            <circle cx="120" cy="142" r="4" fill="#C59B3C" />
          </svg>
        )}

        {type === 'lamp' && (
          <svg viewBox="0 0 240 240" className="w-4/5 h-4/5 max-h-56 drop-shadow-xl" fill="none">
            {/* Ambient lamp glow */}
            <circle cx="120" cy="95" r="54" fill="#FFEBB8" fillOpacity="0.35" />
            {/* Ground shadow */}
            <ellipse cx="120" cy="214" rx="48" ry="8" fill="#2A241E" fillOpacity="0.12" />

            {/* Brass weighted base */}
            <ellipse cx="120" cy="204" rx="42" ry="10" fill="url(#brassGradLamp)" stroke="#8A671D" strokeWidth="1" />
            <rect x="78" y="196" width="84" height="8" fill="url(#brassGradLamp)" />
            <ellipse cx="120" cy="196" rx="42" ry="10" fill="url(#brassGradLampLight)" />

            {/* Knurled dimmer switch */}
            <circle cx="146" cy="196" r="3.5" fill="#5E4011" stroke="#F4D068" strokeWidth="0.8" />

            {/* Slender brass stem */}
            <rect x="117" y="125" width="6" height="72" fill="url(#brassGradLamp)" />

            {/* Natural Alabaster Globe shade */}
            <circle cx="120" cy="95" r="36" fill="url(#alabasterGrad)" stroke="#DFD6C4" strokeWidth="1.2" />
            {/* Alabaster natural translucent veining */}
            <path d="M102 78 Q118 92 128 84 T144 104" stroke="#CCA862" strokeWidth="1.2" opacity="0.45" strokeLinecap="round" />
            <path d="M96 102 Q112 110 134 116" stroke="#BFA785" strokeWidth="1" opacity="0.3" strokeLinecap="round" />

            <defs>
              <linearGradient id="brassGradLamp" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#F2CB60" />
                <stop offset="0.5" stopColor="#C49B36" />
                <stop offset="1" stopColor="#8A671D" />
              </linearGradient>
              <linearGradient id="brassGradLampLight" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#FFDE87" />
                <stop offset="1" stopColor="#D9AC3E" />
              </linearGradient>
              <radialGradient id="alabasterGrad" cx="45%" cy="40%" r="55%">
                <stop stopColor="#FFFDF7" />
                <stop offset="0.7" stopColor="#F7EED9" />
                <stop offset="1" stopColor="#E4D2B3" />
              </radialGradient>
            </defs>
          </svg>
        )}

        {type === 'wallet' && (
          <svg viewBox="0 0 240 240" className="w-4/5 h-4/5 max-h-56 drop-shadow-xl" fill="none">
            {/* Ground shadow */}
            <ellipse cx="120" cy="206" rx="60" ry="10" fill="#2A241E" fillOpacity="0.14" />

            {/* Slanted leather card valet */}
            <rect x="58" y="72" width="124" height="126" rx="10" fill="url(#tanLeatherGrad)" stroke="#5E3113" strokeWidth="1.5" />

            {/* Hand-burnished stitching along edges */}
            <rect x="63" y="77" width="114" height="116" rx="7" fill="none" stroke="#F1E3D3" strokeWidth="1" strokeDasharray="3 3" />

            {/* Tiered card pockets with curved thumb slots */}
            <path d="M58 114 Q120 128 182 114 V198 H58 Z" fill="#803D14" />
            <path d="M58 144 Q120 158 182 144 V198 H58 Z" fill="#6B310F" />

            {/* Simulated Matte Black Titanium Card peeking out */}
            <rect x="76" y="52" width="88" height="54" rx="4" fill="#21201E" stroke="#3D3B37" strokeWidth="1" />
            <circle cx="148" cy="68" r="5" fill="#D4AF37" fillOpacity="0.7" />
            <text x="84" y="94" fill="#E6DFD5" fontSize="5.5" fontFamily="monospace">
              •••• 4921
            </text>

            {/* Debossed Atelier Logo */}
            <text x="120" y="178" textAnchor="middle" fill="#421C07" fontSize="6.5" fontFamily="serif" letterSpacing="1">
              AETHELGARD
            </text>

            <defs>
              <linearGradient id="tanLeatherGrad" x1="58" y1="72" x2="182" y2="198" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A65825" />
                <stop offset="0.6" stopColor="#8C4418" />
                <stop offset="1" stopColor="#6E320F" />
              </linearGradient>
            </defs>
          </svg>
        )}

        {type === 'valet' && (
          <svg viewBox="0 0 240 240" className="w-4/5 h-4/5 max-h-56 drop-shadow-xl" fill="none">
            {/* Ground shadow */}
            <ellipse cx="120" cy="208" rx="78" ry="12" fill="#2A241E" fillOpacity="0.14" />

            {/* Solid carved walnut tray */}
            <path
              d="M48 95 C48 85 58 78 120 78 C182 78 192 85 192 95 L196 182 C196 195 182 202 120 202 C58 202 44 195 44 182 Z"
              fill="url(#walnutTrayGrad)"
              stroke="#342214"
              strokeWidth="2"
            />

            {/* Contoured interior scoop */}
            <ellipse cx="120" cy="140" rx="62" ry="46" fill="#442D1C" stroke="#2D1D12" strokeWidth="1.2" />

            {/* Figured grain curls */}
            <path d="M72 135 Q115 125 168 138" stroke="#5F3F28" strokeWidth="1.2" opacity="0.6" />
            <path d="M78 152 Q120 162 162 146" stroke="#311F12" strokeWidth="1.2" opacity="0.7" />

            {/* Solid brass key accessory resting in tray */}
            <circle cx="102" cy="144" r="9" fill="none" stroke="#D4AF37" strokeWidth="3" />
            <rect x="111" y="142" width="22" height="4" fill="#D4AF37" />
            <rect x="127" y="146" width="3" height="4" fill="#D4AF37" />

            <defs>
              <linearGradient id="walnutTrayGrad" x1="44" y1="78" x2="196" y2="202" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6C492F" />
                <stop offset="0.5" stopColor="#533722" />
                <stop offset="1" stopColor="#3A2516" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>

      {/* Subtle single-text badge if present */}
      {badge && (
        <div className="absolute top-4 left-4 z-20">
          <span className="text-[11px] font-medium tracking-wider uppercase text-stone-700 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-sm shadow-xs border border-stone-200/60">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
};
