import images from "../assets/images";
import {
  ReceiptText,
  TrendingUp,
  Users,
  CalendarSearch,
  Wrench,
  ShieldCheck,
  Settings2,
  CalendarCheck,
  LayoutDashboard,
  ShoppingBag,
  Factory,
  SlidersHorizontal,
  Store,
  ClipboardList,
  FileBarChart,
  Building2,
  BadgeCheck,
  Globe2,
  Zap,
  Sparkles,
  Crown
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

// 1. AI Feature Data
export const aiSectionContent = {
  heading: "A Smart Hospitality: AI-Driven",
  highlight: "Hotel Operations",
  description:
    "HotelX AI helps managers understand bookings, guests, revenue, commissions, and daily operations through simple commands.",
};

export const aiFeatures = [
  {
    icon: ReceiptText,
    title: "Instant RevPAR ",
    desc: " Maximize room occupancy and RevPAR instantly. Our intelligent engine adjusts room rates in real time based on local market demand, seasonal shifts, and competitor data across every hotel location. ",
    command: "    Boost occupancy & RevPAR with AI real-time pricing.",
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Stock Forecasting:",
    desc: "Let AI analyze active room occupancy levels and past dining habits to forecast exactly how much stock your cafe and restaurant kitchens need to order,cutting food waste up to 20%.",
    command: "Generate Smart Inventory Plan",
  },
  {
    icon: Users,
    title: "Insights to lower climate control and lighting costs",
    desc: "The platform integrates with smart utility grids. After mobile checkout, Eco Mode automatically reduces lighting and climate control costs.",
    command: "Activate Eco Mode",
  },
  {
    icon: CalendarSearch,
    title: "AI Booking Analysis",
    desc: "Handle up to 75% of routine guest requests—like room service orders, Wi-Fi passwords, and late checkout inquiries—instantly in multiple languages without bothering your front desk.",
    command: "Analyze booking trends for the last 30 days.",
  },
];

// 2. Navbar Data
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "AI", href: "#ai-features" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const navbarCta = {
  label: "Get Started",
  href: "#contact",
};

// 3. Footer Data
export const footerContent = {
  description:
    "A premium hotel management platform built to simplify bookings, billing, housekeeping, reporting, AI automation, and guest care.",
  productLinks: [
    { label: "Features", href: "#features" },
    { label: "AI Assistant", href: "#ai-features" },
    { label: "Dashboard", href: "#header" },
    { label: "Comparison", href: "#comparison" },
    { label: "Pricing", href: "#pricing" },
  ],
  companyLinks: [
    { label: "Clients", href: "#clients" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  legalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Cookies", href: "/cookies" },
  ],
  offices: [
    {
      label: "Pakistan",
      title: "Pakistan Office",
      address: "Johar Town, Lahore, Pakistan",
      phone: "+92 300 1234567",
      email: "pakistan@hotelx.com",
      mapQuery: "Johar+Town+Lahore+Pakistan",
      tel: "+923001234567",
      mailto: "pakistan@hotelx.com",
    },
    {
      label: "Saudi Arabia",
      title: "Saudi Office",
      address: "Riyadh, Saudi Arabia",
      phone: "+966 50 1234567",
      email: "saudi@hotelx.com",
      mapQuery: "Riyadh+Saudi+Arabia",
      tel: "+966501234567",
      mailto: "saudi@hotelx.com",
    },
  ],
  copyright: "© 2026 HotelX. All rights reserved.",
};

export const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Visit HotelX on Facebook",
    icon: FaFacebookF,
  },
  {
    href: "https://instagram.com",
    label: "Visit HotelX on Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://x.com",
    label: "Visit HotelX on X",
    icon: FaXTwitter,
  },
  {
    href: "https://linkedin.com",
    label: "Visit HotelX on LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: "https://youtube.com",
    label: "Visit HotelX on YouTube",
    icon: FaYoutube,
  },
];

// 4. Officials Data
export const officialLogos = [images.iso, images.owasp, images.aws, images.fbrLogo];

export const officialSectionContent = {
  heading: "Enterprise Grade Hospitality",
  highlight: "Compliance and Security",
  description:
    "Our platform integrates perfectly with global travel networks, local tourism boards, and strict data security protocols to protect guest profiles and transaction integrity across every hotel branch.",
};

// 5. Qualities Data
export const qualitiesSectionContent = {
  heading: "Unify Your Entire Hospitality",
  highlight: "Ecosystem in One Dashboard",
  description:
    "Select a module and preview how HotelX keeps your hotel operations elegant, fast, and organized.",
};

export const modules = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    image: images.dashboard,
    heading: "Unified Dashboard",
    desc: [
      "No more isolated restaurant data",
      "Post room charges directly from your cafe or bar point-of-sale",
      "Charges sync straight to the guest's master invoice instantly",
    ],
  },
  {
    title: "Room Booking",
    icon: CalendarCheck,
    image: images.booking,
    heading: "Room Booking",
    desc: [
      "Handle guest arrivals, room assignments, and keys in seconds",
      "Manage sudden split-billing upgrades on the fly",
      "Intuitive, visual drag-and-drop room matrix",
    ],
  },
  {
    title: "Room Maintenance",
    icon: Wrench,
    image: images.maintaining,
    heading: "Room Maintenance",
    desc: [
      "Empower cleaning and maintenance crews with mobile alerts",
      "Rooms marked clean update status instantly",
      "Front desk is instantly cleared to check in the next arrival",
    ],
  },
  {
    title: "Configuration Menu",
    icon: SlidersHorizontal,
    image: images.config,
    heading: "Hotel Configuration",
    desc: [
      "Configure hotel rooms, floors, and amenities",
      "Manage taxes and services from one place",
      "Adjust system settings centrally",
    ],
  },
  {
    title: "User Access",
    icon: ShieldCheck,
    image: images.userAccess,
    heading: "User Access",
    desc: [
      "Control employee permissions with role-based access",
      "Secure sensitive hotel operations",
      "Restrict visibility by staff role",
    ],
  },
  {
    title: "Configuration",
    icon: Settings2,
    image: images.userConfig,
    heading: "Permission Configuration",
    desc: [
      "Manage multiple hotels effortlessly",
      "Switch between hotel branches seamlessly",
      "Audit cross-branch revenue and share guest data profiles",
      "Centralize master configurations",
    ],
  },
  {
    title: "Reports",
    icon: FileBarChart,
    image: images.different,
    heading: "Reports & Analytics",
    desc: [
      "Generate occupancy and booking reports",
      "Track financial and operational performance",
      "Make smarter business decisions with clear data",
    ],
  },
  {
    title: "Product",
    icon: ShoppingBag,
    image: images.product,
    heading: "Products & Inventory",
    desc: [
      "Manage restaurant items and minibar products",
      "Track hotel amenities and pricing",
      "Monitor stock from one inventory system",
    ],
  },
  {
    title: "Vendor",
    icon: Store,
    image: images.vendor,
    heading: "Vendor Management",
    desc: [
      "Upsell high-margin add-ons natively",
      "Track vehicle availability and driver dispatches",
      "Monitor fuel logs and client billing in your master calendar",
    ],
  },
  {
    title: "Manufacturers",
    icon: Factory,
    image: images.manufacturing,
    heading: "Manufacturers",
    desc: [
      "Store manufacturer details for hotel assets",
      "Track equipment, furniture, and appliances",
      "Log vehicle manufacturer information",
    ],
  },
  {
    title: "Maintenance Team",
    icon: ClipboardList,
    image: images.cleaning,
    heading: "Maintenance Team",
    desc: [
      "Organize maintenance staff",
      "Assign work orders across the property",
      "Monitor task completion in real time",
    ],
  },
];

// 6. Testimonials Data
export const testimonials = [
  {
    quote:
      "Before HotelX, our front desk, cafe, and housekeeping teams were on completely separate applications. Unifying everything into one dashboard completely eliminated walk-in room assignment errors .",
    highlight: "Daily operations became faster",
    name: "Ammar Khan",
    role: "Hotel Owner",
    company: "Strgis Hotel",
    initials: "AK",
  },
  {
    quote:
      "The room booking flow is simple, clear, and professional. Our front desk team now handles guest check-ins with much less confusion.",
    highlight: "much less confusion",
    name: "Sarah Ahmed",
    role: "Operations Manager",
    company: "Four seasons Hotel",
    initials: "SA",
  },
  {
    quote:
      "HotelX helped us reduce manual reporting work and gave management better visibility into revenue, occupancy, and room status.",
    highlight: "better visibility",
    name: "Bilal Sheikh",
    role: "Resort Manager",
    company: "Marriott",
    initials: "BS",
  },
];

export const testimonialsSectionContent = {
  title: "Loved by Hotel Teams,",
  highlight: "Trusted by Hospitality Brands",
  description:
    "Hear how hotels and resorts use HotelX to simplify daily operations and deliver a better guest experience.",
};

// 7. FAQ Data
export const faqs = [
  {
    question:
      "Can cafe purchases and car rental charges be added automatically to a guest's final hotel bill?",
    answer:
      "Yes. Our unified architecture automatically routes dining tabs, spa sessions, and car rental expenditures directly to the guest's active digital hotel folio, simplifying checkout down to a single card swipe.",
  },
  {
    question:
      "How does the system sync operations and profiles across multiple hotel branches?",
    answer:
      "The platform houses a centralized database matrix. This lets hotel groups share guest histories and loyalty data across branches while keeping individual branch inventories, accounting files, and tax reporting structures completely distinct.",
  },
  {
    question:
      "Can my housekeeping and maintenance crews update room statuses from their mobile phones?",
    answer:
      "Absolutely. The platform features a responsive, mobile-optimized interface for floor staff. Cleaners can mark a room as \"Cleaned\" or report a maintenance issue, which triggers a live notification at the reception desk instantly.",
  },
  {
    question:
      "How long does it take to train front office personnel on this hospitality software?",
    answer:
      "Because the user interface was designed with modern user experience principles, new staff members can master core front-desk workflows—such as reservation adjustments, guest search, and invoice splitting—in less than two hours.",
  },
  {
    question:
      "Does the food inventory module alert our kitchen manager when stock runs low?",
    answer:
      "Yes. You can define custom minimum stock alert thresholds for critical kitchen and cafe ingredients. When stock dips below these parameters, the system triggers automated reorder notifications to prevent service delays.",
  },
];

export const faqSectionContent = {
  heading: "Everything You need to",
  highlight: "know about HotelX",
  description:
    "Find answers to the most common questions about our hotel management software.",
};

// 8. CTA Data
export const ctaContent = {
  badge: "HotelX by Hashverx",
  heading: "Curated for boutique hotels, luxury resorts, and expanding hospitality chains.",
  highlight: "Want to calculate your operational ROI?",
  description:
    "HotelX puts bookings, rooms, staff, billing, housekeeping, and reporting into a single dashboard designed to make every shift easier.",
  primaryCta: "Book free demo",
  secondaryCta: "Virtual Hotel Tour",
};

// 9. CTA 2 Data
export const ctaTwoContent = {
  badge: "HotelX by Hashverx",
  heading: "Ready to replace",
  highlight: "your fragmented hotel tools with a high-performance system?",
  description:
    "Manage reservations, rooms, guests, billing, housekeeping, and reports from one elegant hotel management system.",
  points: ["Free demo", "Quick setup", "Live support"],
  primaryCta: "Schedule demo",
  secondaryCta: "Virtual Hotel Tour",
};

// 10. Table Data
export const companies = ["HotelX", "Cloudbeds", "Mews", "Hotelogix", "eZee"];

export const comparisonRows = [
  {
    feature: "Native Multi-Branch Control",
    values: [true, false, false, false, false],
  },
  {
    feature: "Integrated Cafe & POS Billing",
    values: [true, true, false, true, false],
  },
  {
    feature: "Car Rental & Amenity Sync",
    values: [true, true, true, false, false],
  },
  {
    feature: "Live Housekeeping Mobile App",
    values: [true, false, false, false, true],
  },
  {
    feature: "Room Booking",
    values: [true, true, true, true, true],
  },
];

export const tableSectionContent = {
  title: "One Software",
  highlight: "All Needs",
  description:
    "A cleaner, smarter hotel management system built for modern hotel operations.",
};

// 11. Counters Data
export const stats = [
  {
    icon: Building2,
    value: 85,
    suffix: "%",
    label: "Front Desk Efficiency",
  },
  {
    icon: BadgeCheck,
    value: 18,
    suffix: "%",
    label: "Revenue Growth",
  },
  {
    icon: Globe2,
    value: 20,
    suffix: "%",
    label: "Kitchen Waste Reduction",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Centralized Hotel Operations",
  },
];

// 12. Hero Data
export const heroContent = {
  badge: "Crafted by Hashverx",
  heading: "The Enterprise Hotel OS: Connect Reception,",
  highlight: "Inventory, and Multi-Branch Hospitality Networks",
  description:
    "Stop losing margins to disconnected hotel software. A single, unified cloud platform built to seamlessly synchronize automated check-ins, staff workflows, food inventory, cafe POS, and car rentals across all your hotel branches.",
  primaryCta: "Schedule a Live Demo",
  secondaryCta: "View System",
  image: images.hotelManagement,
  imageAlt: "Hotel management dashboard",
};

// 13. Pricing Data
export const pricingPlans = [
  {
    name: "Essential Hotel",
    icon: Zap,
    price: "$49",
    period: "/month",
    tag: "For small hotels",
    desc: " Focus: Perfect for independent bed & breakfasts, smaller guesthouses, and boutique hotels looking to digitize their main desk.",
    features: [
      "Core Room Reservation Matrix",
      "Fast Check-In/Out,",
      "Basic Guest Profiles",
      "IHousekeeping Tasks",
      "Single Location",
    ],
    button: "Start Essentials",
  },
  {
    name: "Enterprise Premium",
    icon: Sparkles,
    price: "$99",
    period: "/month",
    tag: "Most Popular",
    desc: "Engineered for high-occupancy hotels, luxury resorts, and growing multi-branch hospitality groups.",
    features: [
      "Everything in Essential + Multi-Branch Management (Up to 3 Locations)",
      "Integrated Cafe POS",
      "Car Rental Fleet Module",
      "AI Dynamic Pricing",
      "Native Guest Self-Service Portal.",
      "Priority support",
    ],
    button: "Choose Premuium",
    popular: true,
  },
  {
    name: "Global Chain Ecosystem",
    icon: Crown,
    price: "Custom",
    period: "",
    tag: "For hotel groups",
    desc: "A Tailored for large hotel groups, franchises, and multi-branch networks requiring deep administrative oversight.",
    features: [
      "Unlimited Hotel Branches",
      "Consolidated Corporate Dashboard",
      "Master Inventory & Shared Procurement",
      "Custom Local Bank API Integrations",
      "Full AI Automation Suite,",
      "24/7 Priority SLA Support.",
    ],
    button: "Contact Sales",
  },
];

export const pricingSectionContent = {
  heading: "Flexible Plans for",
  highlight: "Modern Hospitality",
  description:
    "Pick the right plan for your hotel, your team, and the guest experience you want to deliver",
};

// 14. Client Data
export const clientSectionContent = {
  title: "Trusted by Boutique Hotels,",
  highlight: "Luxury Resorts, and Global Hospitality Chains",
  description:
    "Placeholder row for your actual independent hotel, hospitality group, and resort partner logos",
};

export const clientLogos = [
  images.hotel1,
  images.hotel2,
  images.hotel3,
  images.hotel4,
  images.hotel5,
  images.hotel6,
];
