import { Service, PortfolioItem, Testimonial } from "./types";

export const services: Service[] = [
  {
    id: "marketing",
    title: "Marketing & Media Production",
    description: "Strategic marketing campaigns and premium media production services tailored for furniture brands seeking market dominance.",
    features: [
      "Brand identity development",
      "Professional photography & videography",
      "Digital marketing campaigns"
    ]
  },
  {
    id: "arvr",
    title: "AR/VR Solutions",
    description: "Revolutionary extended reality tools that transform how customers experience furniture before purchase.",
    features: [
      "AR product visualization",
      "Virtual showroom experiences",
      "Interactive furniture customization"
    ]
  },
  {
    id: "gcc",
    title: "GCC Retail Networking",
    description: "Strategic partnerships and networking solutions connecting Egyptian furniture manufacturers with lucrative GCC markets.",
    features: [
      "Retailer relationship management",
      "Market entry strategies",
      "Distribution channel development"
    ]
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=792&q=80",
    title: "Royal Furnishings",
    category: "Brand identity & marketing campaign"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1628152268185-c507e31e94ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    title: "ModernSpace VR",
    category: "Virtual showroom experience"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b485142?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80",
    title: "Dubai Connect",
    category: "GCC market entry strategy"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=658&q=80",
    title: "Elegance Collection",
    category: "Product photography & catalog design"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    title: "FurniView AR",
    category: "Mobile AR application development"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1633505899118-4ca6fef7eb25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80",
    title: "HomeStyle Digital",
    category: "Social media marketing campaign"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "The AR solution developed by ApeX transformed our showroom experience. Our customers can now visualize our furniture in their homes before purchase, resulting in a 40% increase in conversion rate.",
    name: "Ahmed Hassan",
    title: "CEO",
    company: "Royal Furnishings",
    initials: "AH"
  },
  {
    quote: "Through ApeX's GCC networking program, we've established relationships with major retailers in Dubai and Qatar. Their market knowledge and connections were invaluable for our international expansion.",
    name: "Laila Mohamed",
    title: "Marketing Director",
    company: "EliteCraft",
    initials: "LM"
  },
  {
    quote: "The marketing campaign ApeX designed for our luxury collection exceeded expectations. The professional photography and strategic digital marketing resulted in our highest quarterly sales to date.",
    name: "Karim Salah",
    title: "Owner",
    company: "Elegance Furniture",
    initials: "KS"
  }
];
