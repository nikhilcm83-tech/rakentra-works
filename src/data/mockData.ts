export interface Project {
  id: string;
  title: string;
  category: "Commercial" | "Residential" | "Industrial" | "Infrastructure" | "Renovation";
  location: string;
  budget: string;
  completion: string;
  image: string;
  images: string[];
  client: string;
  area: string;
  overview: string;
  timeline: { phase: string; date: string; desc: string }[];
  outcome: string;
  benefits: string[];
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  image: string;
  overview: string;
  benefits: string[];
  process: { step: number; name: string; desc: string }[];
  gallery: string[];
}

export interface Position {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  desc: string;
  requirements: string[];
  responsibilities: string[];
}

export interface BlogItem {
  id: string;
  title: string;
  category: "Trends" | "Case Study" | "News" | "Insights";
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

export const statistics = [
  { value: "18+", label: "Years in Operation", desc: "Delivering excellence since 2008" },
  { value: "650+", label: "Projects Completed", desc: "Across commercial, residential & civil sectors" },
  { value: "320+", label: "Expert Professionals", desc: "HSE-certified engineers and builders" },
  { value: "98%", label: "Client Satisfaction", desc: "Based on post-completion RALA audits" }
];

export const partners = [
  { name: "YIT Group", logoText: "YIT" },
  { name: "Sweco Finland", logoText: "SWECO" },
  { name: "Ramboll Finland", logoText: "RAMBOLL" },
  { name: "Senaatti-kiinteistöt", logoText: "SENAATTI" },
  { name: "WSP Finland", logoText: "WSP" },
  { name: "Helsingin Kaupunki", logoText: "HELSINKI" }
];

export const whyChooseUs = [
  {
    title: "Nordic Winter Safety Protocols",
    desc: "Our zero-accident policy is backed by custom safety training suited for freezing conditions, ice mitigation, and heavy machinery safety operations.",
    icon: "ShieldAlert"
  },
  {
    title: "Uncompromising Quality Control",
    desc: "As a RALA-certified contractor, every project phase goes through stringent material testing, density metrics, and structural integrity reviews.",
    icon: "Award"
  },
  {
    title: "Sustainable Innovation & BIM 3D",
    desc: "We leverage Level 3 Building Information Modeling (BIM) to reduce waste by up to 15%, maximize thermal efficiency, and track carbon offsets.",
    icon: "Laptop"
  },
  {
    title: "On-Time & Within-Budget Guarantee",
    desc: "Integrated scheduling systems sync material supply chains and workforce allocation to guarantee zero project hand-over delays.",
    icon: "Calendar"
  }
];

export const services: Service[] = [
  {
    id: "commercial",
    title: "Commercial Construction",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    overview: "We design and build state-of-the-art office towers, retail centers, business parks, and multi-use developments. Our focus is on modern architectural aesthetics, optimal spatial efficiency, and cutting-edge energy performance.",
    benefits: [
      "LEED & BREEAM green building certifications guaranteed",
      "Flexible architectural structures for future modification",
      "Advanced HVAC and smart lighting automation integration",
      "High thermal envelope efficiency (Nordic insulation standard)"
    ],
    process: [
      { step: 1, name: "Consultation & Feasibility", desc: "Site evaluations, initial sketch designs, and budget projections." },
      { step: 2, name: "BIM Modeling & Architecture", desc: "Detailed 3D design mapping out plumbing, electrics, and structural parameters." },
      { step: 3, name: "Foundation & Core Construction", desc: "Excavation, piling, and precast concrete frame installation." },
      { step: 4, name: "Cladding & Interior Outfit", desc: "Triple-glazed glass installation, partition walls, and smart system routing." },
      { step: 5, name: "Hand-over & Operations", desc: "Final inspections, RALA checklist review, and energy compliance certification." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "residential",
    title: "Residential Development",
    iconName: "Home",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    overview: "From luxury waterfront villas to premium multi-family apartment blocks, Rakentra is synonymous with comfortable, high-end living in Finland. We utilize premium local Finnish materials and modern architectural concepts.",
    benefits: [
      "Custom premium material sourcing (Finnish wood, high-durability slate)",
      "Optimal solar panel orientation and heat-recovery ventilation",
      "Exceptional soundproofing between units exceeding building codes",
      "Extended 10-year structural warranty"
    ],
    process: [
      { step: 1, name: "Architectural Mapping", desc: "Collaboration with leading Finnish designers to create a customized spatial experience." },
      { step: 2, name: "Structural Calculations", desc: "Engineering frames to withstand heavy winter snow loads and wind loads." },
      { step: 3, name: "Framing & Insulation", desc: "Precision assembly of high-density insulation and load-bearing timber/concrete elements." },
      { step: 4, name: "Bespoke Finishing", desc: "High-grade underfloor heating, premium cabinetry, and custom saunas." },
      { step: 5, name: "Quality Auditing", desc: "Independent air-tightness testing to verify heat conservation metrics." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "industrial",
    title: "Industrial & Logistics",
    iconName: "Factory",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    overview: "We engineer heavy-duty manufacturing plants, automated distribution warehouses, and clean-tech energy facilities. We construct structures capable of supporting heavy crane networks and high floor-load tolerances.",
    benefits: [
      "Reinforced concrete slabs with load capacity up to 100kN/m²",
      "Large-span steel truss engineering for vast pillar-free floor space",
      "HSE-compliant custom emergency and hazardous material layouts",
      "Integrated solar roof arrays and geo-thermal heating systems"
    ],
    process: [
      { step: 1, name: "Industrial Workflow Analysis", desc: "Understanding the manufacturing/logistics flow to optimize column placement and door heights." },
      { step: 2, name: "Heavy Structural Planning", desc: "Designing steel truss networks, foundation piles, and machine pads." },
      { step: 3, name: "Erection of Steel Core", desc: "Craning and securing high-grade steel framework elements." },
      { step: 4, name: "Wall Panel and Roofing Install", desc: "Assembling fire-rated sandwich panel cladding and insulated roofs." },
      { step: 5, name: "Specialized Fitout & Delivery", desc: "Installing heavy-duty loading docks, gantry crane rails, and specialized ventilation." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "infrastructure",
    title: "Civil Infrastructure",
    iconName: "Construction",
    image: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=1200&auto=format&fit=crop",
    overview: "Connecting Finland's communities through durable road networks, high-load bridges, rail connections, and public transit terminals. We are committed to building public works that stand the test of time and weather.",
    benefits: [
      "Frost-heave resistant foundation designs specifically for Nordic soils",
      "Premium high-performance concrete designed to resist road salt decay",
      "Minimal environmental footprint design minimizing forest clearing",
      "Decade-long municipal service agreements for durability guarantees"
    ],
    process: [
      { step: 1, name: "Geological Surveying", desc: "Drill testing soil, analyzing bedrock depth, and water flow charts." },
      { step: 2, name: "Environmental Impact Assessment", desc: "Securing public permissions and planning wildlife passages." },
      { step: 3, name: "Bedrock Anchoring & Excavation", desc: "Blasting, clearing, and securing deep tension piles in solid bedrock." },
      { step: 4, name: "Civil Structure Assembly", desc: "Pouring concrete columns, launching pre-stressed bridge beams." },
      { step: 5, name: "Paving & Testing", desc: "Laying wear-resistant asphalt, safety barriers, and strain-gauge telemetry." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "renovation",
    title: "Heritage Renovation",
    iconName: "Drill",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    overview: "Upgrading, restoring, and modernizing existing structures. We specialize in delicate historical building retrofits in city centers, incorporating modern technical amenities without compromising historic facades.",
    benefits: [
      "Collaboration with museum agencies and conservation boards",
      "Non-destructive structural reinforcement techniques",
      "Modern HVAC and fire detection integrated invisibly into classic structures",
      "Upgrading historical buildings to Class-A energy ratings"
    ],
    process: [
      { step: 1, name: "Historical Audit", desc: "Mapping original architecture and detailing areas of deterioration." },
      { step: 2, name: "Conservation Alignment", desc: "Coordinating with city planning authorities to protect designated assets." },
      { step: 3, name: "Stabilization & Stripping", desc: "Securing the facade while carefully stripping deteriorated interior materials." },
      { step: 4, name: "Technical Retrofit", desc: "Drilling utility channels, routing energy-efficient underfloor pipework." },
      { step: 5, name: "Artisanal Refinishing", desc: "Restoring plaster work, masonry, and vintage wood to match original designs." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=600&auto=format&fit=crop"
    ]
  },
  {
    id: "pm",
    title: "Project Management",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop",
    overview: "End-to-end management of complex construction projects. We oversee architecture, procurement, safety audits, subcontractor coordination, and legal licensing to ensure seamless turnkey delivery.",
    benefits: [
      "Single point of contact from blueprint to key handover",
      "Sophisticated ERP tracking for real-time budget updates",
      "Comprehensive liability and risk mitigation planning",
      "Complete regulatory compliance and safety documentation management"
    ],
    process: [
      { step: 1, name: "Project Scoping", desc: "Defining milestones, schedules, procurement strategies, and risk profiles." },
      { step: 2, name: "Contractor Procurement", desc: "Sourcing and vetting top-tier sub-specialists and material vendors." },
      { step: 3, name: "Daily Operations Control", desc: "Coordination of construction crews, daily safety standups, and schedule adjustments." },
      { step: 4, name: "Progress Reporting", desc: "Bi-weekly client dashboards detailing financial and physical progress." },
      { step: 5, name: "Commissioning & Handover", desc: "Coordinating official site inspections, warranty handovers, and documentation package assembly." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "helsinki-innovation-hub",
    title: "Helsinki Innovation Center",
    category: "Commercial",
    location: "Munkkiniemi, Helsinki",
    budget: "€42,500,000",
    completion: "December 2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop"
    ],
    client: "Helsinki Tech Properties Oy",
    area: "14,200 m²",
    overview: "A flagship commercial office park designed for Finnish technology start-ups and multinational research divisions. This development incorporates next-generation glass facades, geothermal climate grids, and flexible modular offices. Constructed using pre-fabricated concrete columns and composite structural steel structures.",
    timeline: [
      { phase: "Excavation and Bedrock Piling", date: "Jan 2024 - Apr 2024", desc: "Clearing soil and drilling 320 support piles into Helsinki granite." },
      { phase: "Concrete Core Assembly", date: "May 2024 - Oct 2024", desc: "Laying precast concrete slabs and central elevator shafts." },
      { phase: "Glass Facade Mounting", date: "Nov 2024 - Mar 2025", desc: "Securing triple-glazed thermal curtain walls." },
      { phase: "HVAC and Smart Automation Routing", date: "Apr 2025 - Sep 2025", desc: "Installing energy recovery ventilation and optical network fiber." },
      { phase: "Commissioning & Handover", date: "Oct 2025 - Dec 2025", desc: "LEED Platinum audit validation and interior inspections." }
    ],
    outcome: "Delivered 2 weeks ahead of schedule. The building has achieved a record-low thermal conductivity index and is certified LEED Platinum. It features solar-shading glass facade systems and an active heat-recycling ventilation network.",
    benefits: [
      "40% reduction in heating costs compared to standard office towers",
      "BREEAM Outstanding and LEED Platinum certified status",
      "Modular partitions allowing office layouts to be reconfigured in 48 hours",
      "Geothermal boreholes supplying 80% of summer cooling demand"
    ]
  },
  {
    id: "tampere-battery-factory",
    title: "Tampere Green Battery Plant",
    category: "Industrial",
    location: "Hervanta, Tampere",
    budget: "€87,000,000",
    completion: "August 2026",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop"
    ],
    client: "Nordic Energy Materials Corp",
    area: "35,000 m²",
    overview: "A highly complex industrial manufacturing plant dedicated to producing lithium-ion battery packs for electric utility fleets. The building features specialized cleanrooms, explosion-resistant storage walls, high-load machinery foundations, and a massive solar array capable of generating 2.4 Megawatts of local clean power.",
    timeline: [
      { phase: "Geological Blasting", date: "Mar 2024 - Jun 2024", desc: "Removing 12,000 m³ of bedrock to level the manufacturing plane." },
      { phase: "High-Load Foundations", date: "Jul 2024 - Oct 2024", desc: "Pouring customized reinforced concrete pads with vibration isolation." },
      { phase: "Steel Frame Erection", date: "Nov 2024 - Apr 2025", desc: "Assembling huge 45-meter span steel roof structures." },
      { phase: "Dryroom & Safety Enclosure Build", date: "May 2025 - Dec 2025", desc: "Structuring airlocked manufacturing chambers with low-humidity controls." },
      { phase: "Process Utilities Installation", date: "Jan 2026 - Jun 2026", desc: "Routing chemical, vacuum, and compressed air pipelines." }
    ],
    outcome: "Currently in the final commissioning phase. The complex integrates a state-of-the-art process scrubbers system to neutralize chemical emissions. Built using local Finnish structural steel with high recycled content.",
    benefits: [
      "Vibration-isolated foundations safeguarding nanoscale calibration equipment",
      "2.4MW rooftop solar installation reducing power grid reliance",
      "Explosion-resistant reinforced concrete separation walls",
      "Smart moisture control systems keeping dryrooms below 1% relative humidity"
    ]
  },
  {
    id: "espoo-marina-residences",
    title: "Espoo Marina Residences",
    category: "Residential",
    location: "Keilaniemi, Espoo",
    budget: "€29,800,000",
    completion: "September 2024",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=600&auto=format&fit=crop"
    ],
    client: "Uudenmaan Asunnot Oy",
    area: "8,500 m²",
    overview: "A premium waterfront residential development comprising 48 luxury apartments. Featuring large triple-glazed balconies overlooking the Gulf of Finland, integrated saunas in every unit, private boat slips, and subterranean car parking equipped with smart electric vehicle chargers.",
    timeline: [
      { phase: "Seawall Shoring", date: "Sep 2022 - Nov 2022", desc: "Installing steel sheet piles to prevent maritime water ingress during build." },
      { phase: "Subterranean Parking Excavation", date: "Dec 2022 - Mar 2023", desc: "Digging and water-sealing the 2-level basement." },
      { phase: "Precast Concrete Frame Build", date: "Apr 2023 - Oct 2023", desc: "Erecting structural columns and hollow-core slabs." },
      { phase: "Facade Glass and Timber Framing", date: "Nov 2023 - Mar 2024", desc: "Mounting weather-treated spruce cladding and sliding glass panels." },
      { phase: "Bespoke Interior Craftsmanship", date: "Apr 2024 - Aug 2024", desc: "Sauna installations, premium oak flooring, and custom acoustic layering." }
    ],
    outcome: "Completed on budget. The building achieved an airtightness rating of n50 = 0.28 (exceeding standard requirements, conserving winter heat). Private boat slips are built with self-adjusting floating pontoon concrete blocks.",
    benefits: [
      "Water-to-water heat pump system tapping sea thermal energy",
      "Acoustic floor insulation dampening up to 58dB of footstep noise",
      "Fully integrated automated smart-home systems (lighting, locks, heating)",
      "Premium local natural spruce wood facade requiring minimal long-term paint upkeep"
    ]
  },
  {
    id: "oulu-light-rail",
    title: "Oulu Transit Bridge & Rail Link",
    category: "Infrastructure",
    location: "Koskikeskus, Oulu",
    budget: "€114,000,000",
    completion: "October 2026",
    image: "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1473163928189-364b2c4e1135?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=600&auto=format&fit=crop"
    ],
    client: "Oulun Kaupunki (City of Oulu)",
    area: "3.2 km track",
    overview: "A vital infrastructure project consisting of a 420-meter pre-stressed concrete transit bridge crossing the Oulujoki river, combined with 2.8 km of new dual-track light rail transit pathways. Engineered to withstand heavy frost action, freezing river current forces, and salt corrosion.",
    timeline: [
      { phase: "Riverbed Pier Foundation", date: "May 2024 - Sep 2024", desc: "Constructing watertight cofferdams and pouring deep-river concrete piers." },
      { phase: "Bridge Span Launching", date: "Oct 2024 - Apr 2025", desc: "Launching pre-fabricated post-tensioned deck segments across river spans." },
      { phase: "Subgrade Rail Stabilization", date: "May 2025 - Oct 2025", desc: "Excavation, gravel grading, and installing geotextile sub-base layers." },
      { phase: "Track and Overhead Power Install", date: "Nov 2025 - May 2026", desc: "Securing concrete sleepers, steel rails, and electrical catenary poles." },
      { phase: "Static Load Testing", date: "Jun 2026 - Sep 2026", desc: "Running heavy test locomotives and analyzing bridge telemetry." }
    ],
    outcome: "Ongoing. Bridge deck segments have been successfully secured. We are utilizing specialized salt-resistant concrete mix (S-30) that offers a design lifespan of 120 years under arctic conditions.",
    benefits: [
      "Reduces vehicle transit times between northern suburbs and Oulu center by 15 mins",
      "Advanced fiber-optic sensors embedded in concrete to monitor stress levels live",
      "Low-profile noise dampening tracks reducing residential noise by 10dB",
      "Designed to accommodate standard pedestrian walkways and bike highway lanes"
    ]
  },
  {
    id: "turku-heritage-hotel",
    title: "Turku Historic Market Palace",
    category: "Renovation",
    location: "Aura Riverfront, Turku",
    budget: "€16,500,000",
    completion: "October 2023",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=600&auto=format&fit=crop"
    ],
    client: "Heritage Hotels Nordic",
    area: "5,400 m²",
    overview: "A meticulous structural conservation and internal overhaul of a Neo-Renaissance landmark built in 1892. Overlooked by the Finnish Heritage Agency, we consolidated sagging timber pile foundations with modern concrete micro-piles, stripped deteriorated internal wiring, and created a premium boutique hotel layout with 75 rooms.",
    timeline: [
      { phase: "Timber Foundation Consolidation", date: "Aug 2022 - Nov 2022", desc: "Drilling and casting 180 concrete micro-piles to replace rotting 19th-century logs." },
      { phase: "Delicate Interior Stripping", date: "Dec 2022 - Feb 2023", desc: "Manual removal of asbestos and damaged wood while preserving plaster molding." },
      { phase: "Structural Steel Frame Insert", date: "Mar 2023 - Jun 2023", desc: "Inserting light-weight structural support beams to level sagging floors." },
      { phase: "Service Integration", date: "Jul 2023 - Aug 2023", desc: "Routing fire sprinkler systems and fan-coil HVAC units inside wall cavities." },
      { phase: "Historical Finish Restorations", date: "Sep 2023 - Oct 2023", desc: "Artisanal gold-leaf stenciling, mosaic restoring, and vintage window sealing." }
    ],
    outcome: "Completed on schedule. The building now possesses class-A fire safety and modern climate control while retaining 100% of its protected external facade. It is now registered as a high-efficiency green historical building.",
    benefits: [
      "Protected historical facade fully preserved with no modern exterior penetrations",
      "Geothermal heating retrofitted into the cellar, providing 90% of heating needs",
      "Advanced automatic fire mist suppression system protecting wooden heritage details",
      "Enhanced wall insulation raising thermal properties to match modern building standards"
    ]
  }
];

export const testimonials = [
  {
    quote: "Rakentra Works exceeded our expectations on the Helsinki Innovation Center. Their application of Level 3 BIM modeling resolved design clashes before framing, saving us weeks of on-site adjustments. A true engineering partner.",
    author: "Hannu Virtanen",
    title: "Director of Infrastructure, Capital City Properties",
    location: "Helsinki"
  },
  {
    quote: "Constructing a battery dryroom facility requires extreme precision. Rakentra's team managed the concrete vibrations isolation and humidity parameters flawlessly. Their Nordic winter safety operations are unmatched.",
    author: "Elina Korhonen",
    title: "VP of Engineering, Suomi Energy Solutions",
    location: "Tampere"
  },
  {
    quote: "The restoration of our Aura Riverfront property was a delicate balance of history and modern utility. Rakentra stabilized the foundation using micro-piles without compromising the protected facade. Highly recommended.",
    author: "Matti Koskinen",
    title: "Head of Project Delivery, Baltic Heritage Hotels Group",
    location: "Turku"
  }
];

export const openPositions: Position[] = [
  {
    id: "site-manager",
    title: "Senior Site Manager (Vastaava Työnjohtaja)",
    department: "Commercial & Residential Construction",
    location: "Helsinki, Finland",
    type: "Full-Time",
    desc: "We are seeking an experienced Senior Site Manager to lead premium multi-family residential and office high-rise construction projects in the Helsinki metropolitan area. You will oversee sub-contractors, enforce safety parameters, and manage material supply schedules.",
    requirements: [
      "Bachelor's or Master's degree in Civil Engineering or Construction Management (Rakennusinsinööri / -mestari)",
      "Minimum 6 years of site management experience in Finland",
      "Fluent in Finnish; professional working proficiency in English",
      "Active RALA safety qualification card (Työturvallisuuskortti)",
      "Strong background in Building Information Modeling (BIM) usage on-site"
    ],
    responsibilities: [
      "Ensure overall safety, schedule adherence, and quality benchmarks on the construction site",
      "Manage daily site meetings and coordinate multi-disciplinary subcontractor teams",
      "Review engineering drawings and clarify inconsistencies using 3D BIM software",
      "Direct municipal inspections and obtain final occupancy licenses"
    ]
  },
  {
    id: "structural-engineer",
    title: "Structural Design Engineer",
    department: "Engineering & Design",
    location: "Tampere, Finland",
    type: "Full-Time / Hybrid",
    desc: "Join our internal engineering division to design reinforced concrete structures and structural steel connections for large-span industrial warehouses and green energy plants.",
    requirements: [
      "M.Sc. in Structural Engineering",
      "3+ years of experience designing load-bearing steel or concrete structures",
      "Proficient in Tekla Structures, FEM-Design, or Robot Structural Analysis",
      "Familiarity with Eurocodes and Finnish national building regulations (Rakentamismääräyskokoelma)",
      "Good team communication skills in English or Finnish"
    ],
    responsibilities: [
      "Create structural calculation packages for foundations, beams, and precast connections",
      "Develop detailed 3D modeling blocks inside Tekla to export to fabricators",
      "Collaborate with architects to optimize structural weight and spatial efficiency",
      "Conduct site visits to verify concrete reinforcing layouts before pours"
    ]
  },
  {
    id: "bim-coordinator",
    title: "BIM Coordinator / Specialist",
    department: "Project Services & Technology",
    location: "Helsinki, Finland",
    type: "Full-Time",
    desc: "Oversee our digital layout framework. You will coordinate BIM workflows across architectural, MEP, and structural engineering disciplines to prevent clash detections and streamline modular pre-fabrication.",
    requirements: [
      "Degree in Architecture, Engineering, or CAD/BIM technologies",
      "Extensive experience with Autodesk Revit, Navisworks, and Solibri Model Checker",
      "Understanding of IFC standards and openBIM principles",
      "Prior experience in clash detection management on large-scale (€20M+) projects"
    ],
    responsibilities: [
      "Merge architectural, structural, and MEP models into federated master files",
      "Conduct clash detection reviews and host design coordination workshops",
      "Audit models for data compliance and spatial accuracy",
      "Assist site managers in leveraging mobile BIM tools on-site"
    ]
  }
];

export const blogArticles: BlogItem[] = [
  {
    id: "winter-construction-protocols",
    title: "Safety Standards in Extreme Nordic Winter Operations",
    category: "Insights",
    date: "January 14, 2026",
    author: "Hannu Rajala (HSE Director)",
    readTime: "5 min read",
    excerpt: "Managing complex structural builds at sub-zero temperatures requires unique protocols. Read about our methods in pre-heating concrete, ice-clearance, and workforce heating.",
    content: "Nordic winter construction introduces unique physical and environmental challenges. At Rakentra Works, our winter operations protocol is built on three pillars: concrete thermal management, workforce microclimate protection, and load bearing calculations on frozen soil. During the pour phase in freezing temperatures, concrete must be maintained at a minimum of +5°C for the first 72 hours. We utilize custom geothermal heating mats and localized insulated enclosures. Additionally, wind chill and ice buildup on high-altitude steel beams require strict harness inspects and automatic crane shutdowns at winds exceeding 12m/s.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "green-concrete-advancements",
    title: "The Future of Low-Carbon Concrete in Finland",
    category: "Trends",
    date: "November 08, 2025",
    author: "Dr. Laura Rissanen (Materials lead)",
    readTime: "7 min read",
    excerpt: "Concrete contributes to 8% of global CO2 emissions. Rakentra is piloting low-carbon blast-furnace slag concrete in industrial foundations to cut carbon footprint by 40%.",
    content: "With Finland's strict target to achieve carbon neutrality by 2035, the construction sector is undergoing a rapid transition. Concrete is the most consumed material on earth, and its manufacturing is carbon-intensive. Rakentra Works, in partnership with local cement manufacturers, has integrated Ground Granulated Blast-Furnace Slag (GGBS)—a byproduct of steel manufacturing—into our structural concrete mixes. GGBS replaces up to 50% of traditional Portland cement, reducing carbon footprint by 40% while enhancing chemical resistance against road salt and groundwater sulfates.",
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "historical-restoration-challenges",
    title: "Modernizing Historic Facades: Case Study on Aura Riverfront",
    category: "Case Study",
    date: "September 20, 2025",
    author: "Eliel Saarinen (Lead Architect)",
    readTime: "8 min read",
    excerpt: "Restoring buildings from the 19th century is a balance of heritage conservation and modern code integration. Learn how we retrofitted steel cores into timber foundations.",
    content: "Renovating historical buildings like the Neo-Renaissance landmark in Turku demands a fusion of traditional craftsmanship and heavy civil engineering. The primary challenge was that the building was settled on decaying pine timber piles. To stabilize the building, we drilled 180 concrete micro-piles directly into the bedrock through the cellars. Inside, we integrated a high-performance variable refrigerant flow (VRF) climate control system within wall hollows, allowing custom heating and cooling in all rooms while keeping the original gold-leaf ceilings untouched.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop"
  },
  {
    id: "tampere-logistics-hub-contract",
    title: "Rakentra Works Awarded Tampere Smart Logistics Hub Contract",
    category: "News",
    date: "July 18, 2026",
    author: "Laura Hämäläinen (COO)",
    readTime: "4 min read",
    excerpt: "We have officially signed the €34.5M contract to construct the structural core and envelope of the upcoming Tampere Smart Logistics Hub.",
    content: "Rakentra Works has officially signed a construction agreement with Tampere Developments Oy for the structural core and envelope of the upcoming Smart Logistics Hub in Hervanta. The €34,500,000 contract includes specialized low-carbon concrete slab foundations, 40-meter span steel truss frameworks, and triple-insulated sandwich panel installations. The project will leverage full level 3 BIM design parameters. Site clearing begins in August 2026, with an estimated delivery timeline of 18 months.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop"
  }
];

export const machineryFleet = [
  { name: "Liebherr LTM 1300 Mobile Crane", category: "Heavy Lifting", spec: "300 ton lift capacity, 78m boom", count: 4 },
  { name: "Caterpillar 349 Excavator", category: "Earthmoving", spec: "53 ton weight, smart GPS grading system", count: 12 },
  { name: "Volvo FMX Tipper Truck Fleet", category: "Logistics", spec: "Heavy-duty 8x4 configuration, Euro 6 fuel-efficient", count: 24 },
  { name: "Putzmeister M38 Concrete Boom Pump", category: "Concrete Placing", spec: "38m vertical reach, 160m³/h delivery", count: 6 },
  { name: "Komatsu D65 Intelligent Bulldozer", category: "Earthmoving", spec: "BIM-integrated grade controller", count: 8 }
];

export const highTechSystems = [
  { name: "BIM Level 3 Collaboration", desc: "Allows real-time coordination between mechanical, electrical, plumbing, and structural engineering to eliminate spatial clashes before production." },
  { name: "Thermal Drone Surveying", desc: "Equipped with high-resolution FLIR cameras to verify thermal insulation completeness and detect heat leaks in building envelopes." },
  { name: "GPS-Guided Precision Excavation", desc: "Excavators directly load CAD grading models, automating excavation depth to an accuracy of +/- 20mm." },
  { name: "IoT Concrete Maturity Sensors", desc: "Sensors embedded in poured concrete transmit hydration temperature data wirelessly, indicating exactly when concrete has reached structural strength." }
];
