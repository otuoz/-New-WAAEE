import {
  Tractor,
  Droplets,
  Sprout,
  Leaf,
  Beef,
  Fish,
  Factory,
  Snowflake,
  Cpu,
  Sun,
  Wind,
  Zap,
  BatteryCharging,
  Fuel,
  Gauge,
  Building2,
  Landmark,
  Users,
  Handshake,
  Ship,
  Store,
  Banknote,
  FlaskConical,
  Wrench,
  Globe2,
  Boxes,
  Rocket,
  LineChart,
} from "lucide-react";

export const EVENT = {
  dates: "17–19 March 2027",
  heroDates: "Wednesday, March 17 – Friday, March 19, 2027",
  heroLocation: "Blue Roof Event Centre, LTV 8 Premises, Lateef Jakande Road, Alausa Ikeja, Lagos, Nigeria",
  venue: "Blue Roof Event Centre, LTV 8 Premises, Lateef Jakande Road, Alausa Ikeja, Lagos, Nigeria",
  phone1: "+234 706 365 0022",
  phone2: "+234 703 569 7549",
  email: "waaeenig@gmail.com",
  website: "www.waaee.com.ng",
};

export const WHATSAPP_NUMBER = "2348066143724";
export const WHATSAPP_MESSAGE =
  "Hello WAAEE Expo team, I would like to make an enquiry about WAAEE Expo 2027 (17–19 March 2027, Lagos).";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const SECTORS = [
  {
    Icon: Tractor,
    title: "Agricultural Machinery & Mechanisation",
    text: "Tractors, implements, harvesters and workshop equipment for commercial and smallholder operations.",
  },
  {
    Icon: Droplets,
    title: "Irrigation & Water Management",
    text: "Pumps, drip and pivot systems, boreholes and water-efficient field infrastructure.",
  },
  {
    Icon: Sprout,
    title: "Seeds, Fertilizers & Agrochemicals",
    text: "Improved seed varieties, soil nutrition, crop protection and input distribution networks.",
  },
  {
    Icon: Leaf,
    title: "Crop Production & Horticulture",
    text: "Field crops, greenhouse production, protected cultivation and export-grade horticulture.",
  },
  {
    Icon: Beef,
    title: "Livestock & Poultry",
    text: "Breeding stock, feed, animal health, housing systems and processing equipment.",
  },
  {
    Icon: Fish,
    title: "Aquaculture & Fisheries",
    text: "Hatcheries, pond and tank systems, aquafeed, and fish handling technology.",
  },
  {
    Icon: Factory,
    title: "Food Processing & Agro-Processing",
    text: "Milling, extraction, packaging lines and value-addition plant for agro-industry.",
  },
  {
    Icon: Snowflake,
    title: "Cold Chain, Storage & Logistics",
    text: "Cold rooms, silos, refrigerated transport and route-to-market distribution systems.",
  },
  {
    Icon: Cpu,
    title: "Smart Farming & Agricultural Technology",
    text: "Precision agriculture, farm data platforms, drones, sensors and traceability tools.",
  },
  {
    Icon: Sun,
    title: "Solar Energy",
    text: "Solar irrigation, mini-grids, rooftop systems and productive-use solar equipment.",
  },
  {
    Icon: Wind,
    title: "Renewable Energy",
    text: "Wind, hydro, biomass and biogas solutions for rural and industrial demand.",
  },
  {
    Icon: Zap,
    title: "Power Generation & Electricity",
    text: "Generation, transmission, distribution equipment and captive power for industry.",
  },
  {
    Icon: BatteryCharging,
    title: "Battery & Energy Storage",
    text: "Battery systems, inverters and storage infrastructure for reliable supply.",
  },
  {
    Icon: Fuel,
    title: "Oil, Gas & Energy Services",
    text: "Gas-to-power, LPG, fuels distribution and technical services for the energy sector.",
  },
  {
    Icon: Gauge,
    title: "Energy Efficiency & Green Technology",
    text: "Efficiency audits, clean cooking, emissions reduction and climate-smart technology.",
  },
];

export const ZONES = [
  {
    Icon: Tractor,
    name: "Agro Machinery Zone",
    text: "Live equipment displays and mechanisation demonstrations.",
  },
  {
    Icon: Sun,
    name: "Renewable Energy Zone",
    text: "Solar, storage and clean power systems for productive use.",
  },
  {
    Icon: Ship,
    name: "Farm-to-Market Zone",
    text: "Aggregation, cold chain, packaging and distribution.",
  },
  {
    Icon: Rocket,
    name: "Startup & Innovation Zone",
    text: "Emerging agritech and energy ventures seeking capital.",
  },
  {
    Icon: Cpu,
    name: "Smart Farming Zone",
    text: "Precision tools, sensors, drones and farm data platforms.",
  },
  {
    Icon: Factory,
    name: "Agro-Processing Zone",
    text: "Processing lines, packaging and value-addition plant.",
  },
  {
    Icon: LineChart,
    name: "Investment & Finance Zone",
    text: "Financiers, development partners and structured deal rooms.",
  },
  {
    Icon: Landmark,
    name: "Government & Country Pavilions",
    text: "State delegations, agencies and international pavilions.",
  },
];

export const VISITORS = [
  { Icon: Sprout, name: "Farmers", text: "Commercial growers and smallholder cooperatives." },
  { Icon: Building2, name: "Agribusiness Owners", text: "Processors, input dealers and exporters." },
  { Icon: LineChart, name: "Investors", text: "Private capital, funds and development finance." },
  { Icon: Ship, name: "Importers", text: "Equipment and input importers across the region." },
  { Icon: Store, name: "Distributors", text: "Regional dealers and channel partners." },
  { Icon: Banknote, name: "Banks", text: "Commercial and agricultural lending institutions." },
  { Icon: Landmark, name: "Government Agencies", text: "Federal, state and regional authorities." },
  { Icon: FlaskConical, name: "Researchers", text: "Institutes, universities and extension bodies." },
  { Icon: Wrench, name: "Engineers", text: "Energy, mechanisation and process engineers." },
  { Icon: Globe2, name: "International Buyers", text: "Trade missions and offtake partners." },
];

export const WHY_EXHIBIT = [
  {
    Icon: Users,
    title: "Meet Qualified Buyers",
    text: "Three trade days of scheduled meetings with farmers, processors, distributors and procurement teams from across West Africa.",
  },
  {
    Icon: Handshake,
    title: "Appoint Regional Partners",
    text: "Identify dealers, agents and joint-venture partners to establish or expand your route to market in Nigeria and the sub-region.",
  },
  {
    Icon: Tractor,
    title: "Demonstrate Equipment",
    text: "Outdoor and indoor demonstration space for machinery, irrigation systems, processing lines and energy installations.",
  },
  {
    Icon: Landmark,
    title: "Engage Policy Makers",
    text: "Direct access to ministries, agencies and state delegations shaping agricultural and energy investment policy.",
  },
  {
    Icon: Banknote,
    title: "Access Finance",
    text: "Structured introductions to banks, funds and development finance institutions active in agriculture and energy.",
  },
  {
    Icon: Boxes,
    title: "Launch New Products",
    text: "Introduce technology to a concentrated regional audience of buyers, specifiers and technical media.",
  },
];

export const OBJECTIVES = [
  "Establish a dedicated regional trade platform for agriculture and energy in West Africa.",
  "Accelerate agricultural mechanisation and the adoption of modern farming equipment.",
  "Expand access to reliable, affordable energy for farms and agro-industry.",
  "Attract domestic and foreign direct investment into the agricultural value chain.",
  "Strengthen linkages between producers, processors, distributors and buyers.",
  "Promote renewable energy solutions for productive rural and industrial use.",
  "Support food security through improved inputs, yields and post-harvest handling.",
  "Reduce post-harvest losses through cold chain, storage and logistics investment.",
  "Encourage local manufacturing and assembly of agricultural and energy equipment.",
  "Facilitate technology transfer and technical partnerships with international suppliers.",
  "Build market access for exporters through structured buyer meetings.",
  "Support youth and women-led enterprise across agriculture and energy.",
  "Advance smart farming, data and traceability across the value chain.",
  "Create a policy dialogue platform for government, industry and finance.",
  "Position Lagos as the regional meeting point for agricultural and energy trade.",
];
