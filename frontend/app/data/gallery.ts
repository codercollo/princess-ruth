/* ─────────────────────────────────────────────────────────────────
 * gallery.ts — category-matched pieces with full copy fields
 * Each item needs: name, fabric, occasion, alt (never "Image of…")
 * All images are AI-generated and category-verified. No stock URLs.
 * ───────────────────────────────────────────────────────────────── */

export interface GalleryItem {
  id: string
  name: string
  fabric: string
  occasion: string
  category: 'traditional' | 'official' | 'occasion' | 'bridal' | 'alterations'
  image: string
  alt: string
  aspect: '3:4' | '1:1' | '4:5' | '2:3'
  featured?: boolean
}

export const GALLERY_ITEMS: GalleryItem[] = [
  /* ── TRADITIONAL ───────────────────────────────────────────── */
  {
    id: 'trad-01',
    name: 'Rust Ankara Peplum Two-Piece',
    fabric: 'Wax-print cotton',
    occasion: 'Ruracio ceremony, Nyeri',
    category: 'traditional',
    image: '/images/gallery-traditional-1.jpg',
    alt: 'Ankle-length ankara peplum blouse and wrap skirt in terracotta and brown, structured seam at the waist, worn for a ruracio ceremony',
    aspect: '3:4',
    featured: true,
  },
  {
    id: 'trad-02',
    name: 'Kanga Three-Piece Ceremony Set',
    fabric: 'Kanga print cotton',
    occasion: 'Dowry ceremony',
    category: 'traditional',
    image: '/images/gallery-traditional-2.jpg',
    alt: 'Kanga-print three-piece set in deep ochre and forest green — wrap, top and head cover — worn with dignified posture at a family dowry ceremony',
    aspect: '3:4',
  },
  {
    id: 'trad-03',
    name: 'Emerald Kitenge Two-Piece',
    fabric: 'Kitenge wax-print',
    occasion: 'Church anniversary, Karatina',
    category: 'traditional',
    image: '/images/hero-traditional.jpg',
    alt: 'Kitenge two-piece in warm amber wax-print, full-length structured bodice and A-line skirt, warm earth-tone backdrop, church anniversary occasion',
    aspect: '3:4',
  },

  /* ── OFFICIAL ───────────────────────────────────────────────── */
  {
    id: 'off-01',
    name: 'Navy Shift Dress with Kitenge Pocket',
    fabric: 'Cotton-twill with wax-print panel',
    occasion: 'Corporate, everyday office',
    category: 'official',
    image: '/images/gallery-official-1.jpg',
    alt: 'Tailored navy shift dress with a clean structured neckline and kitenge patch pockets, cool studio light, perfect shoulder fit',
    aspect: '3:4',
    featured: true,
  },
  {
    id: 'off-02',
    name: 'Charcoal Blazer & Wide-Leg Set',
    fabric: 'Wool-blend suiting',
    occasion: 'Boardroom, formal meeting',
    category: 'official',
    image: '/images/gallery-official-2.jpg',
    alt: 'Charcoal double-breasted blazer paired with wide-leg trousers, sharp structured shoulder seam, cool grey studio background',
    aspect: '3:4',
  },
  {
    id: 'off-03',
    name: 'Ochre-Stripe Pencil Skirt Suit',
    fabric: 'Striped gabardine',
    occasion: 'Official function, Nairobi',
    category: 'official',
    image: '/images/gallery-official-3.jpg',
    alt: 'Fitted pencil skirt and matching blazer in charcoal with ochre pinstripe, three-quarter angle, professional studio setting',
    aspect: '3:4',
  },

  /* ── OCCASION / BRIDAL ──────────────────────────────────────── */
  {
    id: 'brid-01',
    name: 'Aso-Oke Bridal Gown',
    fabric: 'Aso-oke with hand-embroidered gold thread',
    occasion: 'Wedding ceremony',
    category: 'bridal',
    image: '/images/hero-bridal.jpg',
    alt: 'Full-length aso-oke bridal gown with gold vine-and-blossom embroidery at the neckline and cuffs, side profile, ivory tones',
    aspect: '3:4',
    featured: true,
  },
  {
    id: 'brid-02',
    name: 'Brocade Occasion Gown',
    fabric: 'Silk brocade lining, boned bodice',
    occasion: 'Graduation gala, Nairobi',
    category: 'occasion',
    image: '/images/gallery-bridal-2.jpg',
    alt: 'Floor-length burgundy and gold brocade gown with boned bodice and hand-finished hem, worn to a university graduation gala',
    aspect: '3:4',
  },
  {
    id: 'brid-03',
    name: 'Bridesmaid Kitenge Gown',
    fabric: 'Kitenge with raw-silk underlay',
    occasion: 'Bridal party, Karen',
    category: 'bridal',
    image: '/images/gallery-bridal-3.jpg',
    alt: 'Bridesmaid gown in rich kitenge wax-print with a silk underlay — fitted through the waist, A-line silhouette, bridal ceremony setting',
    aspect: '3:4',
  },

  /* ── ALTERATIONS ────────────────────────────────────────────── */
  {
    id: 'alt-01',
    name: 'Hand-Finished Hem Detail',
    fabric: 'Indigo denim, hand-stitched',
    occasion: 'Alterations — hem shortening',
    category: 'alterations',
    image: '/images/hero-alterations.jpg',
    alt: "Tailor's hands pulling thread through a hand-finished hem on indigo fabric at the cutting table, thimble visible, scissors nearby",
    aspect: '3:4',
    featured: true,
  },
  {
    id: 'alt-02',
    name: 'Blazer Reline & Shoulder Reset',
    fabric: 'Wool blazer, new silk lining',
    occasion: 'Alterations — restyling',
    category: 'alterations',
    image: '/images/gallery-alterations-2.jpg',
    alt: 'Tailoring bench with a dark wool blazer opened at the shoulder seam, new ivory silk lining pinned in place, bright window light, thimble and scissors visible',
    aspect: '3:4',
  },
]
