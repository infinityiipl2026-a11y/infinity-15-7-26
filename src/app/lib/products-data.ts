export interface Product {
  image: string;
  name: string;
  applications: string[];
}

export interface ProductCategory {
  id: string;
  title: string;
  products: Product[];
}

export const productCategories: ProductCategory[] = [
  {
    "id": "writing-printing",
    "title": "Writing & Printing Grade",
    "products": [
      {
        "image": "art-card.jpg",
        "name": "Art Card Gloss & Matt (C2S)",
        "applications": [
          "Luxury Brochures",
          "Catalogues",
          "Presentation Folders",
          "Premium Packaging"
        ]
      },
      {
        "image": "art-paper.jpg",
        "name": "Art Paper Gloss & Matt (C2S)",
        "applications": [
          "Magazines",
          "Brochures",
          "Posters",
          "Marketing Materials"
        ]
      },
      {
        "image": "bible-paper.jpg",
        "name": "Bible Paper / Pharma Print",
        "applications": [
          "Bibles",
          "Dictionaries",
          "Pharmaceutical Instruction Leaflets"
        ]
      },
      {
        "image": "bond-paper.jpg",
        "name": "Bond Paper / Watermark Paper",
        "applications": [
          "Certificates",
          "Legal Documents",
          "Letterheads",
          "Government Records"
        ]
      },
      {
        "image": "chromo-paper.jpg",
        "name": "Chromo Paper (C1S) / Label Paper",
        "applications": [
          "Product Labels",
          "Stickers",
          "Decorative Packaging"
        ]
      },
      {
        "image": "colour-paper.jpg",
        "name": "Colour Printing Paper",
        "applications": [
          "Flyers",
          "Creative Printing",
          "Promotional Material",
          "Invitations"
        ]
      },
      {
        "image": "copier-paper.jpg",
        "name": "Copier Paper (A4, A3 & FS)",
        "applications": [
          "Daily Office Printing",
          "Reports",
          "Administrative Documentation"
        ]
      },
      {
        "image": "creamwove.jpg",
        "name": "Creamwove",
        "applications": [
          "Notebooks",
          "Diaries",
          "Book Printing",
          "Writing Pads"
        ]
      },
      {
        "image": "gumming-sheet2.png",
        "name": "Gumming Sheet (Pressure Sensitive)",
        "applications": [
          "Custom Stickers",
          "Labels",
          "Industrial Seals"
        ]
      },
      {
        "image": "ivory-card.jpg",
        "name": "Ivory Card & Brief Card",
        "applications": [
          "Visiting Cards",
          "Invitations",
          "Report Covers",
          "Certificates"
        ]
      },
      {
        "image": "ledger-paper.jpg",
        "name": "Ledger Paper",
        "applications": [
          "Accounting Books",
          "Financial Ledgers",
          "Formal Record-Keeping"
        ]
      },
      {
        "image": "lwc-paper.jpg",
        "name": "LWC Paper",
        "applications": [
          "Magazines",
          "Catalogues",
          "Advertising Inserts",
          "Commercial Printing"
        ]
      },
      {
        "image": "poster-paper.jpg",
        "name": "Poster Paper",
        "applications": [
          "Advertising Posters",
          "Large-Scale Maps",
          "Promotional Window Displays"
        ]
      },
      {
        "image": "woodfree-paper.jpg",
        "name": "Woodfree Paper",
        "applications": [
          "Premium Books",
          "Academic Forms",
          "Archival Documents"
        ]
      }
    ]
  },
  {
    "id": "packaging",
    "title": "Packaging Grade",
    "products": [
      {
        "image": "bleached-kraft.jpg",
        "name": "Bleached Kraft Paper",
        "applications": [
          "Upscale Retail Shopping Bags",
          "Food Wrapping",
          "Medical Packaging"
        ]
      },
      {
        "image": "duplex-board.jpg",
        "name": "Duplex Board",
        "applications": [
          "Folding Cartons",
          "Cigarette Packaging",
          "Pharmaceutical Boxes"
        ]
      },
      {
        "image": "food-grade.jpg",
        "name": "Food Grade Paper & Board",
        "applications": [
          "Fast-Food Containers",
          "Cake Boxes",
          "Paper Cups"
        ]
      },
      {
        "image": "fbb-sbs.jpg",
        "name": "F.B.B / S.B.S",
        "applications": [
          "Cosmetics Packaging",
          "Luxury Boxes",
          "Pharma Packaging",
          "Premium Cartons"
        ]
      },
      {
        "image": "virgin-kraft.jpg",
        "name": "Virgin Kraft Liner Paper & Board",
        "applications": [
          "Heavy-Duty Corrugated Shipping Boxes",
          "Premium Appearance Requirements"
        ]
      },
      {
        "image": "white-back-board.jpg",
        "name": "White Back Board",
        "applications": [
          "Detergent Boxes",
          "Household Goods Packaging",
          "Consumer Products"
        ]
      }
    ]
  },
  {
    "id": "industrial",
    "title": "Industrial Grade",
    "products": [
      {
        "image": "absorbent-kraft.jpg",
        "name": "Absorbent Kraft Paper",
        "applications": [
          "Industrial High-Pressure Laminates",
          "Engineered Surfaces"
        ]
      },
      {
        "image": "release-paper.jpg",
        "name": "Release Paper",
        "applications": [
          "Labels",
          "Tapes",
          "Medical Adhesive Patches"
        ]
      }
    ]
  },
  {
    "id": "speciality",
    "title": "Speciality Grade",
    "products": [
      {
        "image": "paper-knives.jpg",
        "name": "Paper Cutting Knives",
        "applications": [
          "Precision Cutting",
          "Industrial Use"
        ]
      },
      {
        "image": "digital-paper.jpg",
        "name": "Digital Paper & Board",
        "applications": [
          "Digital Printing",
          "Laser Printing",
          "High-Quality Output"
        ]
      },
      {
        "image": "sticker-sheet.jpg",
        "name": "Sticker Sheets (PS)",
        "applications": [
          "Branding",
          "Retail",
          "Promotional Labeling"
        ]
      }
    ]
  }
];
