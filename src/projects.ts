import inventoryImage from './assets/inventory-manager.png'
import ledgerImage from './assets/pocket-ledger.png'
import quickCartImage from './assets/quickcart-checkout.png'
import studentImage from './assets/student-performance.png'

export type Project = {
  slug: string
  title: string
  category: string
  description: string
  tags: string[]
  url: string
  featured?: boolean
  image?: string
  challenge: string
  approach: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    slug: 'nesttrack',
    title: 'NestTrack',
    category: 'Product Research · PropTech',
    description: 'A landlord-management platform concept shaped through market research, user needs analysis, and thoughtful PRD development.',
    tags: ['Market Research', 'PRD', 'JavaScript', 'UI Development'],
    url: 'https://nest-trackv2.vercel.app/',
    featured: true,
    challenge: 'Property management involves recurring tasks and information that can be hard to keep organized. NestTrack explores how a focused digital product could make those workflows easier to follow.',
    approach: 'The concept starts with product research and user needs, then translates those findings into product requirements and a clear interface direction.',
    highlights: ['Market and user needs research', 'Product requirements definition', 'A focused property-management interface'],
  },
  {
    slug: 'student-performance-board',
    title: 'Student Performance Board',
    category: 'Education',
    description: 'A clear dashboard for reviewing student outcomes and making performance data easier to understand.',
    tags: ['JavaScript', 'Data UI', 'Responsive'],
    url: 'https://student-performance-board-01.netlify.app/',
    image: studentImage,
    challenge: 'Student records are more useful when progress, attendance, and learning details can be read together instead of searched across disconnected views.',
    approach: 'The board brings class-level summaries and individual student details into one responsive interface, with a clear visual hierarchy for scanning and review.',
    highlights: ['Class performance overview', 'Individual student cards', 'Responsive layout for everyday use'],
  },
  {
    slug: 'quickcart-checkout',
    title: 'QuickCart Checkout Demo',
    category: 'E-commerce',
    description: 'A streamlined checkout experience focused on clarity, speed, and friction-free purchasing.',
    tags: ['Checkout UX', 'JavaScript', 'Forms'],
    url: 'https://quickcart-checkout-demo.netlify.app/',
    image: quickCartImage,
    challenge: 'A checkout flow needs to make key order choices and the result of each step easy to understand before a customer places an order.',
    approach: 'The demo groups product, quantity, delivery, and payment choices beside clear order-status feedback so the process remains legible from start to finish.',
    highlights: ['Simple order configuration', 'Visible availability and payment feedback', 'Clear delivery and completion status'],
  },
  {
    slug: 'tayo-pocket-ledger',
    title: 'Tayo Pocket Ledger',
    category: 'Fintech',
    description: 'A lightweight personal ledger for recording everyday income and expenses with confidence.',
    tags: ['JavaScript', 'Local Storage', 'UI'],
    url: 'https://tayo-pocket-ledger.netlify.app/',
    image: ledgerImage,
    challenge: 'A personal ledger should make the current balance and the flow of money understandable without adding complexity to a small daily task.',
    approach: 'The screen balances a monthly summary with a quick transaction form and a readable activity list, distinguishing income and expenses at a glance.',
    highlights: ['Income and expense summaries', 'Quick transaction entry', 'Recent activity in one view'],
  },
  {
    slug: 'product-inventory-manager',
    title: 'Product Inventory Manager',
    category: 'Business Tools',
    description: 'A practical interface for organizing products and keeping inventory information up to date.',
    tags: ['CRUD', 'JavaScript', 'Responsive'],
    url: 'https://product-inventory-manager-00.netlify.app/',
    image: inventoryImage,
    challenge: 'Keeping product records useful means being able to see what is in stock, what needs attention, and the value of the catalog without losing the individual item details.',
    approach: 'The manager combines inventory totals and stock signals with product cards, while keeping common actions such as adding, filtering, and sorting close at hand.',
    highlights: ['Product and category filtering', 'Stock and inventory summaries', 'Product-level details and actions'],
  },
  {
    slug: 'daymark',
    title: 'Daymark',
    category: 'Productivity',
    description: 'A calm daily planning experience designed to make priorities visible and progress feel tangible.',
    tags: ['Product Design', 'Frontend', 'UX'],
    url: 'https://daymark-tmt.vercel.app/',
    challenge: 'Daily planning works best when priorities are easy to see and the interface helps people focus rather than adding more noise.',
    approach: 'Daymark explores a quieter planning experience, using clear hierarchy and approachable interactions to keep attention on the day ahead.',
    highlights: ['A focused daily planning concept', 'Clear prioritization', 'A calm, approachable interface'],
  },
  {
    slug: 'hub-website-development',
    title: 'Hub Website Development',
    category: 'Open Source · Collaboration',
    description: 'Contributed a Privacy Policy update, Teams and Projects pages, and a more effective GitHub workflow.',
    tags: ['GitHub', 'Team Workflow', 'Web Development'],
    url: 'https://www.orokihub.com.ng/',
    challenge: 'The community website needed clearer supporting pages and a collaborative workflow that made contributions easier to manage.',
    approach: 'Contributed updates to the Privacy Policy and built Teams and Projects pages, working through GitHub to coordinate and deliver the changes.',
    highlights: ['Privacy Policy update', 'Teams and Projects pages', 'GitHub-based collaboration'],
  },
]
