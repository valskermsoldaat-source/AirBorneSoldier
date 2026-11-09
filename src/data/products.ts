export const countries = [
  { slug: "united-kingdom", country: "United Kingdom", flag: "🇬🇧", chapter: "01", region: "EUROPE", intro: "A chapter inspired by the people, history and enduring identity of British airborne service.", image: null },
  { slug: "united-states", country: "United States", flag: "🇺🇸", chapter: "02", region: "NORTH AMERICA", intro: "An original streetwear interpretation of American airborne heritage and the brotherhood around it.", image: null },
  { slug: "south-africa", country: "South Africa", flag: "🇿🇦", chapter: "03", region: "SOUTHERN AFRICA", intro: "A considered look at South African airborne history across generations, told through original heritage-inspired design.", image: null },
  { slug: "australia", country: "Australia", flag: "🇦🇺", chapter: "04", region: "OCEANIA", intro: "A chapter celebrating Australian airborne stories, service and community through original artwork.", image: null },
  { slug: "new-zealand", country: "New Zealand", flag: "🇳🇿", chapter: "05", region: "OCEANIA", intro: "A chapter inspired by New Zealand airborne history and the people connected by it.", image: null }
] as const;

export const garmentCategories = [
  { slug: "t-shirts", name: "T-shirts", note: "The everyday standard", number: "01" },
  { slug: "hoodies", name: "Hoodies", note: "Layers for the brotherhood", number: "02" },
  { slug: "sweatshirts", name: "Sweatshirts", note: "The heritage layer", number: "03" },
  { slug: "caps", name: "Caps", note: "The finishing mark", number: "04" }
] as const;

/**
 * Product concepts are deliberately marked as previews.
 * Supplier, SKU, garment model, colour availability, sizes and pricing must be
 * verified with the fulfilment provider before a product can be sold.
 */
export const products = [
  ...countries.flatMap((country) => [
    { slug: country.slug + "-standard-tee", countrySlug: country.slug, country: country.country, flag: country.flag, name: country.country + " Standard Tee", category: "T-shirts", categorySlug: "t-shirts", colour: "To be confirmed", status: "DESIGN PREVIEW", image: null, description: "An AirBorneSoldier T-shirt concept for the " + country.country + " chapter. Final garment, artwork, print placement and specifications are subject to confirmation." },
    { slug: country.slug + "-brotherhood-hoodie", countrySlug: country.slug, country: country.country, flag: country.flag, name: country.country + " Brotherhood Hoodie", category: "Hoodies", categorySlug: "hoodies", colour: "To be confirmed", status: "DESIGN PREVIEW", image: null, description: "A premium hoodie concept for the " + country.country + " chapter. Final garment, artwork, print placement and specifications are subject to confirmation." },
    { slug: country.slug + "-heritage-sweatshirt", countrySlug: country.slug, country: country.country, flag: country.flag, name: country.country + " Heritage Sweatshirt", category: "Sweatshirts", categorySlug: "sweatshirts", colour: "To be confirmed", status: "DESIGN PREVIEW", image: null, description: "A sweatshirt concept for the " + country.country + " chapter. Final garment, artwork, print placement and specifications are subject to confirmation." },
    { slug: country.slug + "-airborne-cap", countrySlug: country.slug, country: country.country, flag: country.flag, name: country.country + " Airborne Cap", category: "Caps", categorySlug: "caps", colour: "To be confirmed", status: "DESIGN PREVIEW", image: null, description: "A cap concept for the " + country.country + " chapter. Final blank, embroidery, colours and specifications are subject to confirmation." }
  ])
] as const;
