// Sheet products database with real Amazon ASINs
const sheetProducts = [
    // HOT SLEEPERS - Cooling/Breathable Options
    {
        id: 1,
        name: "Bedsure Bamboo Cooling Sheets",
        material: "100% Rayon from Bamboo",
        asin: "B07YKCZHGK",
        price: "$39.99",
        threadCount: null,
        weave: "Twill",
        features: [
            "Superior cooling for hot sleepers",
            "Silky-soft feel",
            "Moisture-wicking",
            "Deep pocket up to 16\"",
            "OEKO-TEX certified"
        ],
        bestFor: ["hot", "humid", "all-season"],
        budgetTier: "budget",
        temperatureRating: 5, // 5 = coolest
        softnessRating: 5,
        durabilityRating: 4,
        image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&q=80"
    },
    {
        id: 2,
        name: "Linen Home Cotton Percale Sheets",
        material: "100% Long-Staple Cotton",
        asin: "B07416ZHN9",
        price: "$44.99",
        threadCount: 400,
        weave: "Percale",
        features: [
            "Crisp, cool hotel-quality feel",
            "Gets softer with washing",
            "Breathable for hot sleepers",
            "Deep pocket fits 16\" mattress",
            "Long-staple combed cotton"
        ],
        bestFor: ["hot", "dry", "all-season"],
        budgetTier: "budget",
        temperatureRating: 5,
        softnessRating: 3,
        durabilityRating: 5,
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80"
    },
    {
        id: 3,
        name: "Cosy House Luxury Bamboo Sheets",
        material: "Rayon from Bamboo Blend",
        asin: "B01L2XGQBA",
        price: "$49.95",
        threadCount: null,
        weave: "Sateen",
        features: [
            "Temperature regulating",
            "Softer than silk texture",
            "Hypoallergenic",
            "16\" deep pockets",
            "Moisture-wicking"
        ],
        bestFor: ["hot", "humid", "all-season"],
        budgetTier: "mid",
        temperatureRating: 5,
        softnessRating: 5,
        durabilityRating: 4,
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80"
    },

    // COLD SLEEPERS - Warm/Cozy Options
    {
        id: 4,
        name: "Eddie Bauer Flannel Sheet Set",
        material: "100% Cotton Flannel",
        asin: "B07P7M2G37",
        price: "$49.99",
        threadCount: null,
        weave: "Flannel",
        features: [
            "8-level brushing for softness",
            "Ultra-warm for cold nights",
            "Pill-resistant finish",
            "Fits mattresses up to 18\"",
            "Anti-pilling treatment"
        ],
        bestFor: ["cold", "dry", "cold-climate"],
        budgetTier: "mid",
        temperatureRating: 1, // 1 = warmest
        softnessRating: 5,
        durabilityRating: 4,
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=400&q=80"
    },
    {
        id: 5,
        name: "Pinzon Cotton Flannel Sheets",
        material: "100% Cotton Flannel",
        asin: "B01F2PXKJU",
        price: "$39.99",
        threadCount: null,
        weave: "Flannel",
        features: [
            "Double-napped for softness",
            "Velvety texture",
            "Keeps you warm in winter",
            "Pill-resistant construction",
            "Amazon brand quality"
        ],
        bestFor: ["cold", "dry", "cold-climate"],
        budgetTier: "budget",
        temperatureRating: 1,
        softnessRating: 4,
        durabilityRating: 4,
        image: "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?w=400&q=80"
    },

    // NEUTRAL/ALL-SEASON Options
    {
        id: 6,
        name: "Mellanni Queen Sheets Set",
        material: "Brushed Microfiber",
        asin: "B00NLLUMOE",
        price: "$29.97",
        threadCount: null,
        weave: "Microfiber",
        features: [
            "245,000+ 5-star reviews",
            "Wrinkle & fade resistant",
            "Hotel luxury feel",
            "Easy care - machine washable",
            "6x Good Housekeeping Award"
        ],
        bestFor: ["neutral", "all-season", "humid", "dry"],
        budgetTier: "budget",
        temperatureRating: 3,
        softnessRating: 5,
        durabilityRating: 4,
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&q=80"
    },
    {
        id: 7,
        name: "California Design Den Sateen Sheets",
        material: "100% Cotton Sateen",
        asin: "B074RGBL3J",
        price: "$59.99",
        threadCount: 400,
        weave: "Sateen",
        features: [
            "Silky-smooth sateen finish",
            "400 thread count",
            "OEKO-TEX certified",
            "Fade-proof construction",
            "Deep pocket fitted sheet"
        ],
        bestFor: ["neutral", "cold", "all-season"],
        budgetTier: "mid",
        temperatureRating: 2,
        softnessRating: 5,
        durabilityRating: 5,
        image: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=400&q=80"
    },
    {
        id: 8,
        name: "RUVANTI Cotton Percale Sheets",
        material: "100% Cotton Percale",
        asin: "B08ZM7TT87",
        price: "$36.99",
        threadCount: 300,
        weave: "Percale",
        features: [
            "Crisp and cool feel",
            "OEKO-TEX certified",
            "Natural cooling properties",
            "Gets softer over time",
            "Breathable construction"
        ],
        bestFor: ["hot", "neutral", "dry", "all-season"],
        budgetTier: "budget",
        temperatureRating: 4,
        softnessRating: 3,
        durabilityRating: 5,
        image: "https://images.unsplash.com/photo-1578898886225-c7c894047899?w=400&q=80"
    },

    // PREMIUM OPTIONS
    {
        id: 9,
        name: "Bedsure Queen Sheets - Silver Grey",
        material: "100% Rayon from Bamboo",
        asin: "B08BRS6MHS",
        price: "$44.99",
        threadCount: null,
        weave: "Twill",
        features: [
            "Silky-smooth luxury feel",
            "Temperature regulating",
            "Perfect for hot sleepers",
            "16\" deep pockets",
            "Hypoallergenic"
        ],
        bestFor: ["hot", "humid", "all-season"],
        budgetTier: "mid",
        temperatureRating: 5,
        softnessRating: 5,
        durabilityRating: 4,
        image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=400&q=80"
    },
    {
        id: 10,
        name: "Eddie Bauer Elk Grove Flannel",
        material: "100% Cotton Flannel",
        asin: "B01GLOYD3S",
        price: "$54.99",
        threadCount: null,
        weave: "Flannel",
        features: [
            "Wrinkle resistant",
            "Anti-pilling technology",
            "Extra warm for cold nights",
            "Brushed to perfection",
            "All-season comfort"
        ],
        bestFor: ["cold", "cold-climate"],
        budgetTier: "mid",
        temperatureRating: 1,
        softnessRating: 5,
        durabilityRating: 5,
        image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&q=80"
    }
];

// Material info for recommendations
const materialInfo = {
    bamboo: {
        name: "Bamboo/Rayon",
        pros: ["Extremely cooling", "Silky soft", "Moisture-wicking", "Eco-friendly"],
        cons: ["May wrinkle", "Requires gentle care"],
        bestFor: "Hot sleepers in any climate"
    },
    percale: {
        name: "Cotton Percale",
        pros: ["Crisp feel", "Very breathable", "Durable", "Gets softer with washing"],
        cons: ["May wrinkle more", "Less silky feel"],
        bestFor: "Hot sleepers who like a crisp, cool feel"
    },
    sateen: {
        name: "Cotton Sateen",
        pros: ["Silky-smooth", "Slight sheen", "Wrinkle-resistant", "Warm but breathable"],
        cons: ["Slightly warmer", "May pill over time"],
        bestFor: "Those who want luxury feel with moderate warmth"
    },
    flannel: {
        name: "Cotton Flannel",
        pros: ["Very warm", "Ultra-soft", "Cozy feel", "Perfect for cold nights"],
        cons: ["Too warm for summer", "Can be heavy"],
        bestFor: "Cold sleepers in cool climates"
    },
    microfiber: {
        name: "Microfiber",
        pros: ["Budget-friendly", "Wrinkle-resistant", "Easy care", "Soft"],
        cons: ["Less breathable", "May retain heat"],
        bestFor: "Budget-conscious shoppers wanting soft sheets"
    }
};

// Helper function to generate Amazon affiliate link
function getAmazonLink(asin) {
    return `https://www.amazon.com/dp/${asin}?tag=kcwd-20`;
}
