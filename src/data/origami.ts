// Origami DIY tutorial data.
// To add a new tutorial, push a new OrigamiItem object onto this array —
// every page/component in the Origami feature (home cards, listing grid,
// filters, detail page, related tutorials) reads from this single source
// of truth, so no component code needs to change.
//
// This list was curated down to 10 tutorials, with content sourced and
// condensed from the corresponding pages on origami.me.

export type OrigamiDifficulty = "Easy" | "Medium" | "Hard";

export type OrigamiCategory =
  | "Animals"
  | "Birds"
  | "Flowers"
  | "Boxes"
  | "Decor"
  | "Bookmarks"
  | "Holiday"
  | "Toys"
  | "Traditional"
  | "Kids";

export type OrigamiStep = {
  stepNumber: number;
  title: string;
  instruction: string;
  tip: string;
  svgImage: string;
};

export type OrigamiItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: OrigamiDifficulty;
  category: OrigamiCategory;
  estimatedTime: string;
  paperSize: string;
  thumbnail: string;
  finalImage: string;
  steps: OrigamiStep[];
  downloadPdf: string;
  relatedTutorials: string[];
  icon: string;
};

export const origamiCategories: OrigamiCategory[] = [
  "Animals",
  "Birds",
  "Flowers",
  "Boxes",
  "Decor",
  "Bookmarks",
  "Holiday",
  "Toys",
  "Traditional",
  "Kids",
];

export const origamiData: OrigamiItem[] = [
  {
    id: "heart",
    slug: "heart",
    title: "Heart",
    description:
      "A classic folded heart that turns a single square into a sweet, giftable keepsake — perfect for cards and notes.",
    difficulty: "Easy",
    category: "Decor",
    estimatedTime: "5 min",
    paperSize: "15 cm x 15 cm (6 in) square paper",
    thumbnail: "/images/origami/steps/origami-heart-diagram-step-completed.png",
    finalImage: "/images/origami/steps/origami-heart-diagram-step-completed.png",
    downloadPdf: "/origami/heart/print",
    relatedTutorials: ["star", "shirt", "yoshizawa-butterfly"],
    icon: "Heart",
    steps: [
      {
        stepNumber: 1,
        title: "Step 1",
        instruction: "Start with the white side of the paper facing up. Fold the paper in half vertically, then unfold it to create a center crease.",
        tip: "Crease firmly now — these guide every fold that follows.",
        svgImage: "/images/origami/steps/origami-heart-diagram-step-1.png",
      },
      {
        stepNumber: 2,
        title: "Step 2",
        instruction: "Fold the paper in half horizontally, then unfold again.",
        tip: "Keep the corners crisp so the point stays sharp.",
        svgImage: "/images/origami/steps/origami-heart-diagram-step-2.png",
      },
      {
        stepNumber: 3,
        title: "Step 3",
        instruction: "Fold the bottom edge up to meet the center crease.",
        tip: "Take your time on this fold — it defines the heart's silhouette.",
        svgImage: "/images/origami/steps/origami-heart-diagram-step-3.png",
      },
      {
        stepNumber: 4,
        title: "Step 4",
        instruction: "Turn the paper over.",
        tip: "A pointed tool like a bone folder helps tuck neatly.",
        svgImage: "/images/origami/steps/origami-heart-diagram-step-4.png",
      },
      {
        stepNumber: 5,
        title: "Step 5",
        instruction: "Fold the bottom edges diagonally upward so they meet the vertical center crease.",
        tip: "Adjust the top corners evenly for a symmetrical shape.",
        svgImage: "/images/origami/steps/origami-heart-diagram-step-5.png",
      },
            {
        stepNumber:6,
        title: "Step 6",
        instruction: "Turn the paper over.",
        tip: "Adjust the top corners evenly for a symmetrical shape.",
        svgImage: "/images/origami/steps/origami-heart-diagram-step-6.png",
      },
            {
        stepNumber: 7,
        title: "Step 7",
        instruction: "Fold the top left edge diagonally downward to meet the vertical center crease. Repeat on the right side.",
        tip: "Adjust the top corners evenly for a symmetrical shape.",
        svgImage: "/images/origami/steps/origami-heart-diagram-step-7.png",
      },
            {
        stepNumber: 8,
        title: "Step 8",
        instruction: "Fold the top flap down, leaving the white triangles on the sides unfolded.Continue folding the flap down while gently lifting the white triangles to avoid creasing them.",
        tip: "Adjust the top corners evenly for a symmetrical shape.",
        svgImage: "/images/origami/steps/origami-heart-diagram-step-8.png",
      },
            {
        stepNumber: 9,
        title: "Step 9",
        instruction: "Fold the white triangles inward along the dotted lines where the white side and colored side of the paper meet.",
        tip: "Adjust the top corners evenly for a symmetrical shape.",
        svgImage: "/images/origami/steps/origami-heart-diagram-step-9.png",
      },
            {
        stepNumber: 10,
        title: "Step 10",
        instruction: "Fold all four top corners downward to meet the crease created in Step 8.",
        tip: "Adjust the top corners evenly for a symmetrical shape.",
        svgImage: "/images/origami/steps/origami-heart-diagram-step-10.png",
      },
            {
        stepNumber: 11,
        title: "Step 11",
        instruction: "Fold the top two corners down along the dotted lines. There are no exact reference points, so fold them the way you like.",
        tip: "Adjust the top corners evenly for a symmetrical shape.",
        svgImage: "/images/origami/steps/origami-heart-diagram-step-11.png",
      },
            {
        stepNumber: 12,
        title: "Step 12",
        instruction: "Turn the model over.",
        tip: "Adjust the top corners evenly for a symmetrical shape.",
        svgImage: "/images/origami/steps/origami-heart-diagram-step-12.png",
      },
    ],
  },
  {
    id: "yoshizawa-butterfly",
    slug: "yoshizawa-butterfly",
    title: "Yoshizawa Butterfly",
    description:
      "A graceful 3D butterfly inspired by Akira Yoshizawa's classic design — quick to fold and full of charm.",
    difficulty: "Easy",
    category: "Animals",
    estimatedTime: "5 min",
    paperSize: "15 cm x 15 cm (6 in) Kami or Chiyogami paper",
    thumbnail: "/images/origami/steps/origami-butterfly-diagram-completed.png",
    finalImage: "/images/origami/steps/origami-butterfly-diagram-completed.png",
    downloadPdf: "/origami/yoshizawa-butterfly/print",
    relatedTutorials: ["heart", "lily", "dragon"],
    icon: "Sparkles",
    steps: [
      {
        stepNumber: 1,
        title: "Step 1",
        instruction: "Start with the colored side of the paper facing up. Fold and unfold in half both horizontally and vertically.",
        tip: "Every crease here sets up the collapse in the next step.",
        svgImage: "/images/origami/steps/origami-butterfly-diagram-step-1.jpg",
      },
      {
        stepNumber: 2,
        title: "Step 2",
        instruction: "Turn the paper over.",
        tip: "Push gently at the center so all corners come together evenly.",
        svgImage: "/images/origami/steps/origami-butterfly-diagram-step-2.png",
      },
      {
        stepNumber: 3,
        title: "Step 3",
        instruction: "Fold and unfold both diagonals.",
        tip: "Keep the folds symmetrical for even wings.",
        svgImage: "/images/origami/steps/origami-butterfly-diagram-step-3.png",
      },
      {
        stepNumber: 4,
        title: "Step 4",
        instruction: "Collapse the paper as shown on the diagram using the existing creases, making the Waterbomb base.",
        tip: "A soft, rounded fold here gives the wings their natural curve.",
        svgImage: "/images/origami/steps/origami-butterfly-diagram-step-4.png",
      },
      {
        stepNumber: 5,
        title: "Step 5",
        instruction: "Fold the top layer ́s corners up to meet the top corner.",
        tip: "A dab of glue under the top flap helps if your paper is slippery.",
        svgImage: "/images/origami/steps/origami-butterfly-diagram-step-5.png",
      },
            {
        stepNumber: 6,
        title: "Step 6",
        instruction: "Turn the model over.",
        tip: "A dab of glue under the top flap helps if your paper is slippery.",
        svgImage: "/images/origami/steps/origami-butterfly-diagram-step-6.png",
      },
            {
        stepNumber: 7,
        title: "Step 7",
        instruction: "Gently lift the bottom corner of the top layer up. Then, make a soft fold at the center without flattening the sides. Make sure the corner goes over the edge of the paper.",
        tip: "A dab of glue under the top flap helps if your paper is slippery.",
        svgImage: "/images/origami/steps/origami-butterfly-diagram-step-7.png",
      },
            {
        stepNumber: 8,
        title: "Step 8",
        instruction: "Fold the top corner tip down over the top edge and crease firmly. Then, turn the model over.",
        tip: "A dab of glue under the top flap helps if your paper is slippery.",
        svgImage: "/images/origami/steps/origami-butterfly-diagram-step-8.png",
      },
            {
        stepNumber: 9,
        title: "Step 9",
        instruction: "Gently fold the wings toward you to help shape the butterfly and lock the model in place.",
        tip: "A dab of glue under the top flap helps if your paper is slippery.",
        svgImage: "/images/origami/steps/origami-butterfly-diagram-step-9.png",
      },
    ],
  },
  {
    id: "lily",
    slug: "lily",
    title: "Lily",
    description:
      "An elegant traditional flower with four curved petals, built up from a waterbomb base — a rewarding fold for a calm afternoon.",
    difficulty: "Medium",
    category: "Flowers",
    estimatedTime: "10-15 min",
    paperSize: "15 cm x 15 cm (6 in) square Kami paper",
    thumbnail: "/images/origami/steps/origami-lily-completed.jpg",
    finalImage: "/images/origami/steps/origami-lily-completed.jpg",
    downloadPdf: "/origami/lily/print",
    relatedTutorials: ["yoshizawa-butterfly", "heart", "star"],
    icon: "Flower",
    steps: [
      {
        stepNumber: 1,
        title: "Step 1",
        instruction: "Start with the colored side of the paper facing up. Fold and unfold in half both horizontally and vertically.",
        tip: "A crisp base makes every later fold much easier.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-1.png",
      },
      {
        stepNumber: 2,
        title: "Step 2",
        instruction: "Turn the paper over.",
        tip: "Work around the model the same way each time for consistency.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-2.png",
      },
      {
        stepNumber: 3,
        title: "Step 3",
        instruction: "Fold and unfold along both diagonals.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-3.png",
      },
      {
        stepNumber: 4,
        title: "Step 4",
        instruction: "Collapse the paper along the existing creases to form a Waterbomb base.",
        tip: "Narrower petals give the lily a more delicate look.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-4.png",
      },
      {
        stepNumber: 5,
        title: "Step 5",
        instruction: "Push the left and right edges inward and bring them down to meet the bottom edge. Flatten the model.",
        tip: "Curl each petal gently around a pen for a natural bend.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-4.5.png",
      },
            {
        stepNumber: 6,
        title: "Step 6",
        instruction: "Fold the bottom left corner up to the top corner, top flap only.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-5.png",
      },
            {
        stepNumber: 7,
        title: "Step 7",
        instruction: "Fold and unfold the flap from Step 5 in half from left to right. The left edge should meet the vertical centerline.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-6.png",
      },
            {
        stepNumber: 8,
        title: "Step 8",
        instruction: "Unfold the flap from Step 5.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-7.png",
      },
            {
        stepNumber: 9,
        title: "Step 9",
        instruction: "Repeat Steps 5 to 7 on the three remaining flaps.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-8.png",
      },
            {
        stepNumber: 10,
        title: "Step 10",
        instruction: "Lift the top left flap. Open and spread its layers, then Squash fold along the existing creases in the top triangle area. The model will not lie flat yet.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-9.png",
      },
            {
        stepNumber: 11,
        title: "Step 11",
        instruction: "Mountain fold the bottom left and right areas behind the bottom triangle to start a Petal fold. Then fold the triangle area upward. The model should now lay flat.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-10.png",
      },
            {
        stepNumber: 12,
        title: "Step 12",
        instruction: "Fold the top flap you just made down.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-11.png",
      },
            {
        stepNumber: 13,
        title: "Step 13",
        instruction: "Repeat Steps 9 to 11 on the three remaining flaps. You just folded the origami lily’s petals.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-12.png",
      },
            {
        stepNumber: 14,
        title: "Step 14",
        instruction: "Fold the top left and right edges to the vertical centerline. Repeat on the other side.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-13.png",
      },
            {
        stepNumber: 15,
        title: "Step 15",
        instruction: "Flip two flaps from right to left. Repeat on the other side.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-14.png",
      },
            {
        stepNumber: 16,
        title: "Step 16",
        instruction: "Again, fold the top left and right edges to the vertical centerline. Repeat on the other side.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-15.png",
      },
            {
        stepNumber: 17,
        title: "Step 17",
        instruction: "Fold the top flap in the bottom section up along the dashed line. Then repeat on the other side.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-16.png",
      },
            {
        stepNumber: 18,
        title: "Step 18",
        instruction: "Flip two flaps from right to left. Repeat on the other side.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-17.png",
      },
            {
        stepNumber: 19,
        title: "Step 19",
        instruction: "Again, fold the top flap in the bottom section up along the dashed line. Then repeat on the other side.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-18.png",
      },
            {
        stepNumber: 20,
        title: "Step 20",
        instruction: "Rotate the model 180°.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-19.png",
      },
            {
        stepNumber: 21,
        title: "Step 21",
        instruction: "Fold the petals up to about a 90° angle.",
        tip: "Check your progress against a finished photo if a flap won't sit flat.",
        svgImage: "/images/origami/steps/origami-lily-diagram-step-20.png",
      },
    ],
  },
  {
    id: "penguin",
    slug: "penguin",
    title: "Penguin",
    description:
      "A friendly, waddling penguin folded from a single diamond-shaped sheet in just a handful of quick folds.",
    difficulty: "Easy",
    category: "Animals",
    estimatedTime: "<5 min",
    paperSize: "15 cm x 15 cm (6 in) square Kami paper",
    thumbnail: "/images/origami/steps/origami-penguin-paper-fold-completed.jpg",
    finalImage: "/images/origami/steps/origami-penguin-paper-fold-completed.jpg",
    downloadPdf: "/origami/penguin/print",
    relatedTutorials: ["giraffe", "dragon", "traditional-boat"],
    icon: "Bird",
    steps: [
      {
        stepNumber: 1,
        title: "Step 1",
        instruction: "Start with the colored side facing up, with the paper in a diamond position (so a corner points up).Fold and unfold the paper in half diagonally (top corner to bottom corner). Then, turn the paper over.",
        tip: "Keep the diamond orientation throughout this step.",
        svgImage: "/images/origami/steps/origami-penguin-diagram-step-1.jpg",
      },
      {
        stepNumber: 2,
        title: "Step 2",
        instruction: "Fold the top edges inward, but don’t fold all the way to the centerline. Leave a gap between the edges (see the next diagram for reference).",
        tip: "Don't fold all the way to the center — the gap matters later.",
        svgImage: "/images/origami/steps/origami-penguin-diagram-step-2.jpg",
      },
      {
        stepNumber: 3,
        title: "Step 3",
        instruction: "Turn the paper over.",
        tip: "Use the flap edges as a natural guideline for a clean fold.",
        svgImage: "/images/origami/steps/origami-penguin-diagram-step-3.jpg",
      },
      {
        stepNumber: 4,
        title: "Step 4",
        instruction: "Fold the side corners inward along the dotted lines.",
        tip: "Press firmly along the spine to keep the penguin standing upright.",
        svgImage: "/images/origami/steps/origami-penguin-diagram-step-4.jpg",
      },
      {
        stepNumber: 5,
        title: "Step 5",
        instruction: "Fold the bottom corner up, using the bottom corners of the flaps from Step 4 as a guide.",
        tip: "Pre-crease both sides of the head before reversing it for a cleaner fold.",
        svgImage: "/images/origami/steps/origami-penguin-diagram-step-5.jpg",
      },
            {
        stepNumber: 6,
        title: "Step 6",
        instruction: "Fold the paper in half vertically, using the crease you made back in Step 1.",
        tip: "Pre-crease both sides of the head before reversing it for a cleaner fold.",
        svgImage: "/images/origami/steps/origami-penguin-diagram-step-6.jpg",
      },
      {
        stepNumber: 7,
        title: "Step 7",
        instruction: "Make an outside reverse fold at the top corner to form the penguin’s head.",
        tip: "Pre-crease both sides of the head before reversing it for a cleaner fold.",
        svgImage: "/images/origami/steps/origami-penguin-diagram-step-7.jpg",
      },
    ],
  },
  {
    id: "fan",
    slug: "fan",
    title: "Fan",
    description:
      "A traditional Japanese sensu fan, pleated and locked together for a piece that genuinely opens and closes.",
    difficulty: "Easy",
    category: "Decor",
    estimatedTime: "5-10 min",
    paperSize: "Double-sided rectangular paper (any size)",
    thumbnail: "/images/origami/steps/origami-fan-diagram-completed.jpg",
    finalImage: "/images/origami/steps/origami-fan-diagram-completed.jpg",
    downloadPdf: "/origami/fan/print",
    relatedTutorials: ["shirt", "star", "heart"],
    icon: "Wind",
    steps: [
      {
        stepNumber: 1,
        title: "Step 1",
        instruction: "Start with a double-sided rectangular paper or square origami paper.Fold in half and unfold.",
        tip: "These early creases set the spacing for every pleat.",
        svgImage: "/images/origami/steps/origami-fan-diagram-step-1.jpg",
      },
      {
        stepNumber: 2,
        title: "Step 2",
        instruction: "Fold each side in half to the center crease, and unfold.",
        tip: "Even spacing now means an even pleat later.",
        svgImage: "/images/origami/steps/origami-fan-diagram-step-2.jpg",
      },
      {
        stepNumber: 3,
        title: "Step 3",
        instruction: "On the right side, fold each segment created in the previous step in half, and then unfold. Follow the diagram to see where to fold.",
        tip: "Work from one edge to the other so the pleat stays even.",
        svgImage: "/images/origami/steps/origami-fan-diagram-step-3.jpg",
      },
      {
        stepNumber: 4,
        title: "Step 4",
        instruction: " Repeat on the left side.",
        tip: "Leaving that flap open is what lets you lock the fan together next.",
        svgImage: "/images/origami/steps/origami-fan-diagram-step-4.jpg",
      },
      {
        stepNumber: 5,
        title: "Step 5",
        instruction: "Turn the paper over and fold each segment in half.",
        tip: "Pinch the base together as you open it for a fuller spread.",
        svgImage: "/images/origami/steps/origami-fan-diagram-step-5.jpg",
      },
            {
        stepNumber: 6,
        title: "Step 6",
        instruction: "Collapse the model and open the left flap.",
        tip: "Pre-crease both sides of the head before reversing it for a cleaner fold.",
        svgImage: "/images/origami/steps/origami-fan-diagram-step-6.jpg",
      },
            {
        stepNumber: 7,
        title: "Step 7",
        instruction: "With the left flap open, fold the model in half from bottom to top, keeping the left flap. We’ll use it to attach both sides together.",
        tip: "Pre-crease both sides of the head before reversing it for a cleaner fold.",
        svgImage: "/images/origami/steps/origami-penguin-diagram-step-7.jpg",
      },
            {
        stepNumber: 8,
        title: "Step 8",
        instruction: "Fold both corners to the center line, simultaneously folding the two layers.",
        tip: "Leaving that flap open is what lets you lock the fan together next.",
        svgImage: "/images/origami/steps/origami-fan-diagram-step-8.jpg",
      },
            {
        stepNumber: 9,
        title: "Step 9",
        instruction: "Fold the top corner down once more. The angle is not important.This fold is to secure the previous fold made in step 8.",
        tip: "Make any necessary adjustments to ensure the fan is properly locked together.",
        svgImage: "/images/origami/steps/origami-fan-diagram-step-9.jpg",
      },
            {
        stepNumber: 10,
        title: "Step 10",
        instruction: "Close the left flap towards the center of the fan to lock both sides together. Use the existing crease.",
        tip: "Ensure all pleats are even and the fan is properly locked together.",
        svgImage: "/images/origami/steps/origami-fan-diagram-step-10.jpg",
      },
            {
        stepNumber: 11,
        title: "Step 11",
        instruction: "Open the fan and rotate the model towards you.",
        tip: "Leaving that flap open is what lets you lock the fan together next.",
        svgImage: "/images/origami/steps/origami-fan-diagram-step-11.jpg",
      },
    ],
  },
  {
    id: "traditional-boat",
    slug: "traditional-boat",
    title: "Traditional Boat",
    description:
      "A timeless paper boat folded from a rectangle — a beginner favorite with centuries of history behind it.",
    difficulty: "Easy",
    category: "Traditional",
    estimatedTime: "<5 min",
    paperSize: "Standard rectangular printer paper (A4 or letter)",
    thumbnail: "/images/origami/steps/origami-boat-paper-fold-completed.jpg",
    finalImage: "/images/origami/steps/origami-boat-paper-fold-completed.jpg",
    downloadPdf: "/origami/traditional-boat/print",
    relatedTutorials: ["penguin", "fan", "shirt"],
    icon: "Sailboat",
    steps: [
      {
        stepNumber: 1,
        title: "Step 1",
        instruction: "Start with a rectangular piece of paper. Fold it in half vertically and then unfold it to create a crease.",
        tip: "The vertical crease becomes your centerline for later folds.",
        svgImage: "/images/origami/steps/Traditional-Origami-Boat-Diagram-Step-1.jpg",
      },
      {
        stepNumber: 2,
        title: "Step 2",
        instruction: "Fold the paper in half horizontally.",
        tip: "Align both corners exactly at the centerline for a symmetrical peak.",
        svgImage: "/images/origami/steps/Traditional-Origami-Boat-Diagram-Step-2.jpg",
      },
      {
        stepNumber: 3,
        title: "Step 3",
        instruction: "Fold the top corners down to meet the center crease. Your paper should now look like a triangle with a rectangle underneath.",
        tip: "Crease each layer separately for a flatter result.",
        svgImage: "/images/origami/steps/Traditional-Origami-Boat-Diagram-Step-3.jpg",
      },
      {
        stepNumber: 4,
        title: "Step 4",
        instruction: "Fold the top layer of the rectangle up along the bottom edge of the triangle.",
        tip: "Work slowly here — this step reshapes the whole model.",
        svgImage: "/images/origami/steps/Traditional-Origami-Boat-Diagram-Step-4.jpg",
      },
      {
        stepNumber: 5,
        title: "Step 5",
        instruction: "Mountain fold the bottom layer of the rectangle up behind the triangle.",
        tip: "Pull slowly and evenly so the hull doesn't tear.",
        svgImage: "/images/origami/steps/Traditional-Origami-Boat-Diagram-Step-5.jpg",
      },
            {
        stepNumber: 6,
        title: "Step 6",
        instruction: "Open the paper from the bottom and push in the sides. ",
        tip: "Pull slowly and evenly so the hull doesn't tear.",
        svgImage: "/images/origami/steps/Traditional-Origami-Boat-Diagram-Step-6.jpg",
      },
            {
        stepNumber: 7,
        title: "Step 7",
        instruction: "This should create a diamond shape.",
        tip: "Pull slowly and evenly so the hull doesn't tear.",
        svgImage: "/images/origami/steps/Traditional-Origami-Boat-Diagram-Step-7.jpg",
      },
            {
        stepNumber: 8,
        title: "Step 8",
        instruction: "Tuck the right flap under the left flap on both sides, flattening the model.",
        tip: "Pull slowly and evenly so the hull doesn't tear.",
        svgImage: "/images/origami/steps/Traditional-Origami-Boat-Diagram-Step-8.jpg",
      },
            {
        stepNumber: 9,
        title: "Step 9",
        instruction: "Fold the top flap of the diamond up along the bottom edge of the top triangle. Then, flip the model over and repeat the fold on the other side.",
        tip: "Pull slowly and evenly so the hull doesn't tear.",
        svgImage: "/images/origami/steps/Traditional-Origami-Boat-Diagram-Step-9.jpg",
      },
            {
        stepNumber: 10,
        title: "Step 10",
        instruction: "Open the paper at the bottom again, similar to Step 6. ",
        tip: "Pull slowly and evenly so the hull doesn't tear.",
        svgImage: "/images/origami/steps/Traditional-Origami-Boat-Diagram-Step-10.jpg",
      },
            {
        stepNumber: 11,
        title: "Step 11",
        instruction: "Gently pull both ends of the paper out until the boat forms.",
        tip: "Pull slowly and evenly so the hull doesn't tear.",
        svgImage: "/images/origami/steps/Traditional-Origami-Boat-Diagram-Step-11.jpg",
      },
    ],
  },
  {
    id: "shirt",
    slug: "shirt",
    title: "Shirt",
    description:
      "A tiny collared shirt, perfect for decorating cards or gifts, folded from a half-square rectangle.",
    difficulty: "Easy",
    category: "Decor",
    estimatedTime: "5 min",
    paperSize: "7.5 cm x 15 cm (3 in x 6 in) Kami or Chiyogami — half a square sheet",
    thumbnail: "/images/origami/steps/origami-shirt-paper-fold-completed.jpg",
    finalImage: "/images/origami/steps/origami-shirt-paper-fold-completed.jpg",
    downloadPdf: "/origami/shirt/print",
    relatedTutorials: ["heart", "fan", "star"],
    icon: "Shirt",
    steps: [
      {
        stepNumber: 1,
        title: "Step 1",
        instruction: "Start with a rectangular paper with the white side up.Mountain fold a small strip back. This will create the collar.",
        tip: "A valley fold here instead gives the collar a pop of color.",
        svgImage: "/images/origami/steps/origami-shirt-diagram-step-1.jpg",
      },
      {
        stepNumber: 2,
        title: "Step 2",
        instruction: "Fold in half vertically, then unfold.",
        tip: "These light creases make the following folds much easier to place.",
        svgImage: "/images/origami/steps/origami-shirt-diagram-step-2.jpg",
      },
      {
        stepNumber: 3,
        title: "Step 3",
        instruction: "Fold and unfold the left and right edges to the centerline.",
        tip: "Keep both sides even so the sleeves match.",
        svgImage: "/images/origami/steps/origami-shirt-diagram-step-3.jpg",
      },
      {
        stepNumber: 4,
        title: "Step 4",
        instruction: "Fold the bottom corners inwards, so the bottom edges meet the nearest vertical creases.",
        tip: "Work one side at a time for more control.",
        svgImage: "/images/origami/steps/origami-shirt-diagram-step-4.jpg",
      },
      {
        stepNumber: 5,
        title: "Step 5",
        instruction: "Again, fold the left and right edges to the centerline, using the creases made in Step 3.",
        tip: "Tuck firmly so the bottom edge stays in place.",
        svgImage: "/images/origami/steps/origami-shirt-diagram-step-5.jpg",
      },
            {
        stepNumber: 6,
        title: "Step 6",
        instruction: "Mountain fold along the tip of the white triangle. Then, unfold.",
        tip: "Tuck firmly so the bottom edge stays in place.",
        svgImage: "/images/origami/steps/origami-shirt-diagram-step-6.jpg",
      },
            {
        stepNumber: 7,
        title: "Step 7",
        instruction: "Open each flap on the left and right, and squash fold using the crease made in Step 6 as a guide.",
        tip: "Tuck firmly so the bottom edge stays in place.",
        svgImage: "/images/origami/steps/origami-shirt-diagram-step-7.jpg",
      },
            {
        stepNumber: 8,
        title: "Step 8",
        instruction: "Mountain fold the top strip back.",
        tip: "Tuck firmly so the bottom edge stays in place.",
        svgImage: "/images/origami/steps/origami-shirt-diagram-step-8.jpg",
      },
            {
        stepNumber: 9,
        title: "Step 9",
        instruction: "Fold the top corners to the center line to create the neckline.",
        tip: "Tuck firmly so the bottom edge stays in place.",
        svgImage: "/images/origami/steps/origami-shirt-diagram-step-9.jpg",
      },
            {
        stepNumber: 10,
        title: "Step 10",
        instruction: "Fold the bottom edge up, tucking tit under the white collar flaps.",
        tip: "Tuck firmly so the bottom edge stays in place.",
        svgImage: "/images/origami/steps/origami-shirt-diagram-step-10.jpg",
      },
    ],
  },
  {
    id: "giraffe",
    slug: "giraffe",
    title: "Giraffe",
    description:
      "A tall, geometric giraffe with clean lines and graceful proportions — an elegant model with one satisfying sink fold.",
    difficulty: "Hard",
    category: "Animals",
    estimatedTime: "10 min",
    paperSize: "15 cm x 15 cm (6 in) Kami or Tant paper",
    thumbnail: "/images/origami/steps/origami-giraffe-paper-fold-completed.jpg",
    finalImage: "/images/origami/steps/origami-giraffe-paper-fold-completed.jpg",
    downloadPdf: "/origami/giraffe/print",
    relatedTutorials: ["dragon", "penguin", "yoshizawa-butterfly"],
    icon: "PawPrint",
steps: [
  {
    stepNumber: 1,
    title: "Step 1",
    instruction: "Start with the colored side facing up in a diamond position. Fold along the vertical diagonal, then unfold.",
    tip: "Keep the crease sharp but don't over-fold.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-1.png",
  },
  {
    stepNumber: 2,
    title: "Step 2",
    instruction: "Fold the bottom left and right edges to the centerline.",
    tip: "Align the edges carefully.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-2.png",
  },
  {
    stepNumber: 3,
    title: "Step 3",
    instruction: "Turn the paper over.",
    tip: "These creases will be used for the sink fold.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-3.png",
  },
  {
    stepNumber: 4,
    title: "Step 4",
    instruction: "Fold the two creases from Step 2 to the centerline.",
    tip: "Don't flatten out the center crease.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-4.png",
  },
  {
    stepNumber: 5,
    title: "Step 5",
    instruction: "Fold the top corner down along the dotted line where the white and colored sides meet. Then, unfold.",
    tip: "Work slowly to avoid tearing the paper.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-5.png",
  },
  {
    stepNumber: 6,
    title: "Step 6",
    instruction: "Repeat on the left side. Then, turn the model over.",
    tip: "Symmetry is important here.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-6.png",
  },
  {
    stepNumber: 7,
    title: "Step 7",
    instruction: "Fold the top left corner down to meet the bottom right edge. The edges on both sides of the corner should align. Only crease from the top corner to the centerline.",
    tip: "Keep the pointed end facing upward.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-7.png",
  },
  {
    stepNumber: 8,
    title: "Step 8",
    instruction: "Repeat on the left side.",
    tip: "Match both sides as closely as possible.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-8.png",
  },
  {
    stepNumber: 9,
    title: "Step 9",
    instruction: "Fold the top corner down along the dotted line from the left to the right corner. Then, unfold.",
    tip: "The open edges should stay on the outside.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-9.png",
  },
  {
    stepNumber: 10,
    title: "Step 10",
    instruction: "Turn the model over.",
    tip: "A slightly steeper angle gives a taller neck.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-10.png",
  },
  {
    stepNumber: 11,
    title: "Step 11",
    instruction: "Fold the bottom left edge up (top layer only) to the nearest line. Only crease from the corner to the centerline.",
    tip: "Open the layer gently before reversing the fold.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-11.png",
  },
  {
    stepNumber: 12,
    title: "Step 12",
    instruction: "Now fold that same edge to the centerline, but only crease from the Step 11 crease to the bottom corner.",
    tip: "Keep the head proportional to the neck.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-12.png",
  },
  {
    stepNumber: 13,
    title: "Step 13",
    instruction: "Repeat Steps 11 and 12 on the right side.",
    tip: "A tiny fold looks more realistic.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-13.png",
  },
  {
    stepNumber: 14,
    title: "Step 14",
    instruction: "Fold the bottom corner up and collapse the model along the creases made in Steps 11 to 13.",
    tip: "The tail should be much shorter than the neck.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-14.png",
  },
  {
    stepNumber: 15,
    title: "Step 15",
    instruction: "Flip the model over, top to bottom.",
    tip: "Angle it slightly backward.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-15.png",
  },
  {
    stepNumber: 16,
    title: "Step 16",
    instruction: "Bring the back flap up and fold along the existing creases. It won’t lie flat—don’t force it.",
    tip: "Ensure all four legs are evenly spaced.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-16.png",
  },
  {
    stepNumber: 17,
    title: "Step 17",
    instruction: "Fold the right side of the model to the back.",
    tip: "Small adjustments make a big difference.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-17.png",
  },
  {
    stepNumber: 18,
    title: "Step 18",
    instruction: "Rotate the model 90° counterclockwise.",
    tip: "Compare both pairs of legs before continuing.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-18.png",
  },
  {
    stepNumber: 19,
    title: "Step 19",
    instruction: "Open the left flaps and bring them up making an outside reverse fold.",
    tip: "Don't over-thin the neck.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-19.png",
  },
  {
    stepNumber: 20,
    title: "Step 20",
    instruction: "Fold down along the dotted line to pre-crease the head. Crease well, then unfold.",
    tip: "Very small folds create cleaner details.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-20.png",
  },
  {
    stepNumber: 21,
    title: "Step 21",
    instruction: "Open the outer flaps and make an outside reverse fold to form the head. The outer layers will form the bottom of the head.",
    tip: "Avoid creating sharp bends.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-21.png",
  },
  {
    stepNumber: 22,
    title: "Step 22",
    instruction: "Inside reverse fold the tip of the head.",
    tip: "This gives the model a more natural appearance.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-22.png",
  },
  {
    stepNumber: 23,
    title: "Step 23",
    instruction: "Bring the right corner inside the model and make a crimp fold along the existing creases.",
    tip: "Balance the model on a flat surface.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-23.png",
  },
  {
    stepNumber: 24,
    title: "Step 24",
    instruction: "Fold the tail along the dotted line where the two layers meet. Then, unfold.",
    tip: "Compare the proportions from all sides.",
    svgImage: "/images/origami/steps/origami-giraffe-diagram-step-24.png",
  },
  {
    stepNumber: 25,
    title: "Finished Giraffe",
    instruction: "Crimp fold the tail using the crease from Step 24. Adjust the angle to your liking.",
    tip: "Use Tant paper for crisp edges and a professional finish.",
    svgImage: "/images/origami/steps/origami-giraffe-paper-fold-completed.jpg",
  },
],
  },
  {
    id: "star",
    slug: "star",
    title: "Lucky Star",
    description:
      "A puffy 3D lucky star folded from a long paper strip — perfect by the dozen for a jar full of wishes.",
    difficulty: "Easy",
    category: "Holiday",
    estimatedTime: "<5 min",
    paperSize: "24 cm x 1 cm (9 in x 0.4 in) paper strip",
    thumbnail: "/images/origami/steps/origami-lucky-star-paper-fold-completed.jpg",
    finalImage: "/images/origami/steps/origami-lucky-star-paper-fold-completed.jpg",
    downloadPdf: "/origami/star/print",
    relatedTutorials: ["heart", "fan", "lily"],
    icon: "Star",
    steps: [
      {
        stepNumber: 1,
        title: "Step 1",
        instruction: "Start with a long, narrow strip of paper.",
        tip: "Every crease here sets up the collapse in the next step.",
        svgImage: "/images/origami/steps/Traditional-Origami-Lucky-Star-Diagram-Step-1.jpg",
      },
      {
        stepNumber: 2,
        title: "Step 2",
        instruction: "The exact measurements are not important.",
        tip: "Push gently at the center so all corners come together evenly.",
        svgImage: "/images/origami/steps/Traditional-Origami-Lucky-Star-Diagram-Step-2.jpg",
      },
      {
        stepNumber: 3,
        title: "Step 3",
        instruction: "Form a loop at one end of the strip.Pull the loop through, leaving only a small strip of paper at the end.",
        tip: "Keep the folds symmetrical for even wings.",
        svgImage: "/images/origami/steps/Traditional-Origami-Lucky-Star-Diagram-Step-3.jpg",
      },
      {
        stepNumber: 4,
        title: "Step 4",
        instruction: "Flatten the loop so that it forms a pentagonal shape.",
        tip: "A soft, rounded fold here gives the wings their natural curve.",
        svgImage: "/images/origami/steps/Traditional-Origami-Lucky-Star-Diagram-Step-4.jpg",
      },
      {
        stepNumber: 5,
        title: "Step 5",
        instruction: "Tuck the remaining small strip of paper under the two top layers of the loop.",
        tip: "A dab of glue under the top flap helps if your paper is slippery.",
        svgImage: "/images/origami/steps/Traditional-Origami-Lucky-Star-Diagram-Step-5.jpg",
      },
            {
        stepNumber: 6,
        title: "Step 6",
        instruction: "Flip the model around.",
        tip: "A dab of glue under the top flap helps if your paper is slippery.",
        svgImage: "/images/origami/steps/Traditional-Origami-Lucky-Star-Diagram-Step-6.jpg",
      },
            {
        stepNumber: 7,
        title: "Step 7",
        instruction: "Fold the pentagonal portion down, aligning the top left edge with the width of the long strip.",
        tip: "A dab of glue under the top flap helps if your paper is slippery.",
        svgImage: "/images/origami/steps/Traditional-Origami-Lucky-Star-Diagram-Step-7.jpg",
      },
            {
        stepNumber: 8,
        title: "Step 8",
        instruction: "Fold down the pentagonal portion again, aligning the top right edge with the strip. Note that the edge being aligned is different from that of Step 5.",
        tip: "A dab of glue under the top flap helps if your paper is slippery.",
        svgImage: "/images/origami/steps/Traditional-Origami-Lucky-Star-Diagram-Step-8.jpg",
      },
            {
        stepNumber: 9,
        title: "Step 9",
        instruction: "Continue to repeat Steps 5 and 6, alternating the edges that are lined up. Stop when there is only a small strip remaining.",
        tip: "A dab of glue under the top flap helps if your paper is slippery.",
        svgImage: "/images/origami/steps/Traditional-Origami-Lucky-Star-Diagram-Step-9.jpg",
      },
                  {
        stepNumber: 10,
        title: "Step 10",
        instruction: "Tuck the small remaining strip under the top two layers, similar to Step 3.",
        tip: "A dab of glue under the top flap helps if your paper is slippery.",
        svgImage: "/images/origami/steps/Traditional-Origami-Lucky-Star-Diagram-Step-10.jpg",
      },
                  {
        stepNumber: 11,
        title: "Step 11",
        instruction: "And now, the fun part! Pinch at the corners to puff up the star.",
        tip: "A dab of glue under the top flap helps if your paper is slippery.",
        svgImage: "/images/origami/steps/Traditional-Origami-Lucky-Star-Diagram-Step-11.jpg",
      },
    ],
  },
  {
    id: "dragon",
    slug: "dragon",
    title: "Dragon",
    description:
      "A bold dragon with wings, a horn, and a sweeping tail — an accessible take on a fantasy creature with no traditional origami precedent.",
    difficulty: "Hard",
    category: "Animals",
    estimatedTime: "10-15 min",
    paperSize: "15 cm x 15 cm (6 in) Kami or Tant paper",
    thumbnail: "/images/origami/steps/origami-dragon-paper-fold-completed.png",
    finalImage: "/images/origami/steps/origami-dragon-paper-fold-completed.png",
    downloadPdf: "/origami/dragon/print",
    relatedTutorials: ["giraffe", "yoshizawa-butterfly", "penguin"],
    icon: "Flame",
    steps: [
      {
        stepNumber: 1,
        title: "Step 1",
        instruction: "Start with the white side of the paper facing up in a diamond position. Fold and unfold both diagonals. Then, turn the paper over.",
        tip: "Crease lightly through all layers first, then firm up just the top layer.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-1.png",
      },
      {
        stepNumber: 2,
        title: "Step 2",
        instruction: "Fold the top corner down to meet the center point. Lightly pinch at the intersection of the centerline, then unfold..",
        tip: "These partial creases are easy to miss — check both sides match.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-2.png",
      },
      {
        stepNumber: 3,
        title: "Step 3",
        instruction: "Make a pleat by folding the horizontal diagonal to meet the pinch mark from Step 2.",
        tip: "The wings may not lie flat yet — that's expected, don't force them.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-3.png",
      },
      {
        stepNumber: 4,
        title: "Step 4",
        instruction: "Turn the model over.",
        tip: "Work through this stage slowly and check against the previous step often.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-4.png",
      },
      {
        stepNumber: 5,
        title: "Step 5",
        instruction: "Fold the top left edge to the centerline, then unfold.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-5.png",
      },
            {
        stepNumber: 6,
        title: "Step 6",
        instruction: "Fold along the crease from Step 5, bringing the top section downward. Stop when you reach the pinch mark from Step 2, and firmly crease just the middle layer down to the horizontal line.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-6.png",
      },
            {
        stepNumber: 7,
        title: "Step 7",
        instruction: "Unfold Step 6.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-7.png",
      },
            {
        stepNumber: 8,
        title: "Step 8",
        instruction: "Repeat Steps 5 to 7 on the right side.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-8.png",
      },
            {
        stepNumber: 9,
        title: "Step 9",
        instruction: "Fold the bottom left edge to the centerline. Crease only from the center horizontal line to the bottom corner, then unfold. Repeat on the right side.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-9.png",
      },
            {
        stepNumber: 10,
        title: "Step 10",
        instruction: "Align the bottom left edge with the top left edge. Crease from the intersection of the folds made in Steps 5 and 9 to the left corner, then unfold. Repeat on the right side.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-10.png",
      },
            {
        stepNumber: 11,
        title: "Step 11",
        instruction: "Collapse the left side inward along the creases from Steps 5, 9, and 10.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-11.png",
      },
            {
        stepNumber: 12,
        title: "Step 12",
        instruction: "Repeat Step 11 on the right side. This forms the dragon’s wings.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-12.png",
      },
            {
        stepNumber: 13,
        title: "Step 13",
        instruction: "Turn the model over.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-13.png",
      },
            {
        stepNumber: 14,
        title: "Step 14",
        instruction: "Fold the top corner down to meet the nearest horizontal crease.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-14.png",
      },
            {
        stepNumber: 15,
        title: "Step 15",
        instruction: "Fold the flap created in Step 14 in half.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-15.png",
      },
            {
        stepNumber: 16,
        title: "Step 16",
        instruction: "Turn the model over.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-16.png",
      },
            {
        stepNumber: 17,
        title: "Step 17",
        instruction: "Collapse the top section of the model using the creases from Steps 6 and 8 as guides, leaving the flap raised.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-17.png",
      },
            {
        stepNumber: 18,
        title: "Step 18",
        instruction: "Fold the right side of the model backward along the central crease.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-18.png",
      },
            {
        stepNumber: 19,
        title: "Step 19",
        instruction: "Rotate the model 90° counterclockwise.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-19.png",
      },
            {
        stepNumber: 20,
        title: "Step 20",
        instruction: "Slightly open the lower layers and reverse fold the flap under the neck along the dotted lines.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-20.png",
      },
            {
        stepNumber: 21,
        title: "Step 21",
        instruction: "Push the flap from Step 20 upward and fold along the dotted lines so its outer edge aligns with the top edges.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-21.png",
      },
            {
        stepNumber: 22,
        title: "Step 22",
        instruction: "Fold the wing from right to left. Repeat on the other side.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-22.png",
      },
            {
        stepNumber: 23,
        title: "Step 23",
        instruction: "Fold the dragon’s tail down along the dotted line, creasing from where the wings and tail intersect to the bottom edge at a 90° angle. Crease well and unfold.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-23.png",
      },
            {
        stepNumber: 24,
        title: "Step 24",
        instruction: "Open the tail’s layers at the bottom. Using the creases made in Step 23, Crimp fold the tail over the wing on both sides. The two reference points should meet. Then, rotate 25° counterclockwise.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-24.png",
      },
            {
        stepNumber: 25,
        title: "Step 25",
        instruction: "Fold the wing from left to right. Repeat on the back side.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-25.png",
      },
                  {
        stepNumber: 26,
        title: "Step 26",
        instruction: "Fold and unfold the wing down along the dotted line.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-26.png",
      },
                  {
        stepNumber: 27,
        title: "Step 27",
        instruction: "Fold and unfold the top edge of the wing to meet the crease from Step 26.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-27.png",
      },
                  {
        stepNumber: 28,
        title: "Step 28",
        instruction: "Fold and unfold the top edge of the wing to meet the crease from Step 27.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-28.png",
      },
                  {
        stepNumber: 29,
        title: "Step 29",
        instruction: "Repeat Steps 26 to 28 on the other wing.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-29.png",
      },
                  {
        stepNumber: 30,
        title: "Step 30",
        instruction: "Pull the dragon’s head up and fold along the dotted line.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-30.png",
      },
                  {
        stepNumber: 31,
        title: "Step 31",
        instruction: "Pull the snout horn up and fold along the dotted line.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-31.png",
      },
                  {
        stepNumber: 32,
        title: "Step 32",
        instruction: "Fold the right corner of the tail to the point where the tail and wing intersect at the bottom edge. Slightly unfold so the tail points forward.",
        tip: "Curve the tail for extra movement in the finished pose.",
        svgImage: "/images/origami/steps/origami-dragon-diagram-step-32.png",
      },
    ],
  },
];

/** Tutorials shown in the compact homepage preview grid (legacy use, kept for compatibility). */
export const featuredOrigami: OrigamiItem[] = origamiData.slice(0, 6);

/** Difficulty-level metadata used to render the 3 homepage category cards. */
export const difficultyMeta: Record<
  OrigamiDifficulty,
  { label: OrigamiDifficulty; accent: "green" | "orange" | "red"; description: string }
> = {
  Easy: {
    label: "Easy",
    accent: "green",
    description: "Perfect for beginners learning the basics.",
  },
  Medium: {
    label: "Medium",
    accent: "orange",
    description: "Improve your folding skills with intermediate models.",
  },
  Hard: {
    label: "Hard",
    accent: "red",
    description: "Complex and rewarding origami creations.",
  },
};

export function getOrigamiBySlug(slug: string): OrigamiItem | undefined {
  return origamiData.find((item) => item.slug === slug);
}

export function getOrigamiByDifficulty(difficulty: OrigamiDifficulty): OrigamiItem[] {
  return origamiData.filter((item) => item.difficulty === difficulty);
}

export function countByDifficulty(difficulty: OrigamiDifficulty): number {
  return origamiData.filter((item) => item.difficulty === difficulty).length;
}

/** Resolve an item's relatedTutorials id list into full OrigamiItem objects. */
export function getRelatedTutorials(item: OrigamiItem, count = 4): OrigamiItem[] {
  return item.relatedTutorials
    .map((id) => origamiData.find((entry) => entry.id === id))
    .filter((entry): entry is OrigamiItem => Boolean(entry))
    .slice(0, count);
}

/** Parse an estimatedTime string like "20 min" into a number of minutes for sorting/filtering. */
export function parseMinutes(estimatedTime: string): number {
  const match = estimatedTime.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}
