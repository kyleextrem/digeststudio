import type { LucideIcon } from 'lucide-react';
import {
  BarChart3,
  Camera,
  CheckCircle2,
  FileText,
  Gauge,
  Layout,
  MapPin,
  Megaphone,
  Newspaper,
  Search,
  Share2,
  Sparkles,
  Target,
  Users,
  Zap,
} from 'lucide-react';

export type OfferAudience = {
  title: string;
  description: string;
};

export type OfferInclusion = {
  title: string;
  description: string;
  icon: LucideIcon;
  highlight?: boolean;
};

export type OfferStep = {
  title: string;
  description: string;
};

export type OfferWhy = {
  title: string;
  description: string;
};

export type OfferProof = {
  name: string;
  role: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  metrics: { value: string; label: string }[];
};

export type OfferFaq = {
  question: string;
  answer: string;
};

export type OfferPageData = {
  slug: string;
  path: string;
  breadcrumbParent: { label: string; href: string };
  name: string;
  eyebrow: string;
  price?: string;
  period?: string;
  seoTitle: string;
  metaDescription: string;
  ogTitle?: string;
  h1: string;
  h1Accent?: string;
  heroSupport: string;
  proofLine: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  audienceIntro: string;
  audiences: OfferAudience[];
  inclusionsIntro: string;
  inclusions: OfferInclusion[];
  steps: OfferStep[];
  why: OfferWhy[];
  proof: OfferProof[];
  faqs: OfferFaq[];
};

const CAL = 'https://cal.com/digest/digest-studio';

export const visibilityBoost: OfferPageData = {
  slug: 'visibility-boost',
  path: '/packages/visibility-boost',
  breadcrumbParent: { label: 'Packages', href: '/services' },
  name: 'Visibility Boost',
  eyebrow: 'Once-off package · $750',
  price: '$750',
  period: 'once-off',
  seoTitle: 'Visibility Boost Newcastle | Digest Studio',
  metaDescription:
    'Fast local visibility wins for Newcastle businesses. GBP optimisation, SEO fixes, social starter pack and a Newcastle Digest spotlight - $750 once-off.',
  h1: 'Get found locally.',
  h1Accent: 'Fast.',
  heroSupport:
    'A focused once-off package that tightens your Google presence, fixes what\'s holding you back, and puts you in front of Newcastle Digest subscribers.',
  proofLine: '7,000+ local subscribers · No lock-in · Usually live within 2 weeks',
  primaryCta: { label: 'Book a Free Strategy Call', href: CAL },
  secondaryCta: { label: 'See all packages', href: '/services' },
  audienceIntro: 'Built for Newcastle businesses that need movement now - not a six-month retainer.',
  audiences: [
    {
      title: 'You\'re invisible on Google Maps',
      description:
        'People search for what you do. Competitors show up. You don\'t - even though your work is better.',
    },
    {
      title: 'Your listing looks unfinished',
      description:
        'Photos are sparse, categories are wrong, posts are dead. Locals bounce before they call.',
    },
    {
      title: 'You need a launch spark',
      description:
        'New offer, new location, or a quiet month. You want a short burst of local attention that actually lands.',
    },
  ],
  inclusionsIntro: 'Everything in the package is chosen to create visible movement - not busywork.',
  inclusions: [
    {
      icon: MapPin,
      title: 'Google Business Profile',
      description: 'Full optimisation so you look open, trusted and ready when locals search.',
    },
    {
      icon: Search,
      title: 'Local SEO priority fixes',
      description: 'We find the gaps that cost you enquiries and fix the ones that matter first.',
    },
    {
      icon: Gauge,
      title: 'Website conversion review',
      description: 'A sharp look at what stops visitors becoming calls, forms or bookings.',
    },
    {
      icon: Share2,
      title: 'Social starter pack',
      description: 'Three ready-to-post pieces so you have something real to publish immediately.',
    },
    {
      icon: Newspaper,
      title: 'Newcastle Digest spotlight',
      description: 'Your business featured to our local subscriber list - distribution most agencies can\'t offer.',
      highlight: true,
    },
    {
      icon: FileText,
      title: 'Next-steps report',
      description: 'Clear priorities after the boost so you know what to do next - with us or on your own.',
    },
  ],
  steps: [
    { title: 'Discovery', description: 'We review your listing, site and local search position.' },
    { title: 'Build', description: 'GBP, SEO fixes, conversion notes and social assets get done.' },
    { title: 'Launch', description: 'Digest spotlight goes out. Your presence looks ready.' },
    { title: 'Grow', description: 'You leave with a prioritised report - not a vague “keep posting” note.' },
  ],
  why: [
    {
      title: 'Built-in distribution',
      description: 'Newcastle Digest puts your offer in local inboxes - not just another Google tweak.',
    },
    {
      title: 'Local expertise',
      description: 'We work Newcastle and the Hunter every day. We know how locals actually search.',
    },
    {
      title: 'Fast turnaround',
      description: 'Designed as a once-off sprint. Most of the work lands inside two weeks.',
    },
    {
      title: 'No lock-in',
      description: 'Pay once. Get the work. Decide later if you want a longer partnership.',
    },
  ],
  proof: [
    {
      name: 'Newcastle Digest',
      role: 'Our brand',
      description: 'The local newsletter we built from scratch - and the audience behind every Digest feature.',
      href: '/brands/newcastle-digest',
      image: '/newcastle-digest.png',
      imageAlt: 'Newcastle Digest homepage',
      metrics: [
        { value: '7,000+', label: 'Subscribers' },
        { value: '60%', label: 'Open rate' },
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does Visibility Boost take?',
      answer: 'Most businesses are through discovery, build and Digest scheduling within two weeks, depending on how quickly we get access to your listings and assets.',
    },
    {
      question: 'Is $750 all-in?',
      answer: 'Yes. The package price covers the inclusions listed. Paid ads spend or a full website rebuild are separate if you want them later.',
    },
    {
      question: 'Do I need a website already?',
      answer: 'A simple site or landing page helps. If you don\'t have one, we\'ll still improve GBP and local presence - and flag website options in your next-steps report.',
    },
    {
      question: 'What does the Digest spotlight include?',
      answer: 'A featured placement in Newcastle Digest reaching our local subscriber list. We write and design it with you so it sounds like your business.',
    },
    {
      question: 'Will this get me to #1 on Google?',
      answer: 'No honest agency can promise that from a once-off. This package removes obvious blockers and creates momentum. Ranking compounds with ongoing work.',
    },
    {
      question: 'Who is this not for?',
      answer: 'National brands that don\'t serve Newcastle, or businesses that need a full rebuild and monthly content engine. Those need Launch Pack or Growth Partner.',
    },
    {
      question: 'Can this lead into a retainer?',
      answer: 'Often. Many clients start here, see the gaps clearly, then move into Growth Partner once the foundation is clean.',
    },
  ],
};

export const localLaunchPack: OfferPageData = {
  slug: 'local-launch-pack',
  path: '/packages/local-launch-pack',
  breadcrumbParent: { label: 'Packages', href: '/services' },
  name: 'Local Launch Pack',
  eyebrow: 'Once-off package · $2,500',
  price: '$2,500',
  period: 'once-off',
  seoTitle: 'Local Launch Pack Newcastle | Digest Studio',
  metaDescription:
    'Launch your Newcastle business with a conversion page, photography, GBP setup and a Newcastle Digest feature. $2,500 once-off.',
  h1: 'Launch with credibility.',
  h1Accent: 'Not a soft open.',
  heroSupport:
    'A conversion-ready presence, real photography, Google setup and a Digest feature - so locals meet you looking established from day one.',
  proofLine: 'Website path included · Digest feature · Photography pack · No lock-in',
  primaryCta: { label: 'Book a Free Strategy Call', href: CAL },
  secondaryCta: { label: 'See website options', href: '/services/website-development' },
  audienceIntro: 'For businesses opening, rebranding, or finally presenting themselves properly online.',
  audiences: [
    {
      title: 'You\'re opening or relocating',
      description: 'You need more than a Facebook post. Locals should find you, trust you, and know how to book.',
    },
    {
      title: 'Your brand looks unfinished online',
      description: 'Great in person. Weak on Google. Stock photos and a tired one-pager are costing you.',
    },
    {
      title: 'You want a real launch, not a quiet drip',
      description: 'One coordinated push: page, photos, GBP and Digest - so the market notices.',
    },
  ],
  inclusionsIntro: 'Built to make you look ready - and reachable - across the channels locals use.',
  inclusions: [
    {
      icon: Layout,
      title: 'Conversion landing page',
      description: 'A clear page that explains what you do and makes the next step obvious.',
    },
    {
      icon: Sparkles,
      title: 'Custom website option',
      description: 'Need more than one page? We map the path into a fuller website build.',
      highlight: true,
    },
    {
      icon: MapPin,
      title: 'Google Business Profile setup',
      description: 'Categories, photos, services and details set so Maps works for you.',
    },
    {
      icon: Camera,
      title: 'Professional photo pack',
      description: '15-20 images of your business - usable across web, social and Digest.',
    },
    {
      icon: Share2,
      title: 'Canva social starter kit',
      description: 'Templates so you can keep posting without starting from a blank canvas.',
    },
    {
      icon: Newspaper,
      title: 'Digest feature article',
      description: 'A proper feature to our Newcastle subscriber list - launch energy with reach.',
      highlight: true,
    },
  ],
  steps: [
    { title: 'Discovery', description: 'Offer, audience, location and launch timing get locked in.' },
    { title: 'Build', description: 'Page, photography, GBP and social kit come together.' },
    { title: 'Launch', description: 'Site goes live. Digest feature schedules with your open.' },
    { title: 'Grow', description: 'You have assets and a presence you can keep building on.' },
  ],
  why: [
    {
      title: 'Distribution on launch day',
      description: 'Most launches shout into the void. Yours reaches Digest subscribers who already live here.',
    },
    {
      title: 'Real photography',
      description: 'Locals can tell stock imagery. We shoot your place, your people, your work.',
    },
    {
      title: 'Website path included',
      description: 'Start with a conversion page. Expand into a custom site when you\'re ready.',
    },
    {
      title: 'No lock-in',
      description: 'Once-off investment. Keep going with us if it feels right.',
    },
  ],
  proof: [
    {
      name: 'Newcastle Digest',
      role: 'Our brand',
      description: 'The channel behind every launch feature - built and grown by Digest Studio.',
      href: '/brands/newcastle-digest',
      image: '/newcastle-digest.png',
      imageAlt: 'Newcastle Digest homepage',
      metrics: [
        { value: '7,000+', label: 'Subscribers' },
        { value: '60%', label: 'Open rate' },
      ],
    },
  ],
  faqs: [
    {
      question: 'What\'s the difference between Launch Pack and Visibility Boost?',
      answer: 'Visibility Boost sharpens an existing presence. Launch Pack builds the foundation - page, photos, GBP and a larger Digest feature - for businesses that need a proper debut.',
    },
    {
      question: 'Is a full website included in $2,500?',
      answer: 'A conversion landing page is included. Multi-page custom websites are scoped separately from $2,500+ depending on size. We\'ll tell you clearly before anything starts.',
    },
    {
      question: 'How long until launch?',
      answer: 'Typically 3-4 weeks from kickoff, depending on photo scheduling and how quickly content approvals come back.',
    },
    {
      question: 'Do you shoot the photos?',
      answer: 'Yes. The photo pack is a professional shoot arranged as part of the package.',
    },
    {
      question: 'Can you work with my existing logo and brand?',
      answer: 'Absolutely. Bring what you have. If branding needs work, we\'ll say so up front - we won\'t invent a rebrand mid-project.',
    },
    {
      question: 'What if I\'m not in Newcastle CBD?',
      answer: 'We work across Newcastle, Lake Macquarie, Port Stephens, Maitland and the wider Hunter.',
    },
    {
      question: 'What happens after launch?',
      answer: 'You can run with the assets yourself, or move into Growth Partner for ongoing SEO, content and Digest distribution.',
    },
  ],
};

export const growthPartner: OfferPageData = {
  slug: 'growth-partner',
  path: '/packages/growth-partner',
  breadcrumbParent: { label: 'Packages', href: '/services' },
  name: 'Growth Partner',
  eyebrow: 'Monthly partnership · $1,999/mo',
  price: '$1,999',
  period: 'monthly',
  seoTitle: 'Growth Partner Plan Newcastle | Digest Studio',
  metaDescription:
    'Month-to-month local growth for Newcastle businesses. SEO, content, reviews, quarterly shoots and Newcastle Digest features. $1,999/month. No lock-in.',
  h1: 'Marketing that compounds.',
  h1Accent: 'Every month.',
  heroSupport:
    'Local SEO, content, reviews and Digest distribution - handled consistently so your visibility builds instead of resetting every campaign.',
  proofLine: 'No lock-in · Testimo included · Quarterly Digest feature · Newcastle-based',
  primaryCta: { label: 'Book a Free Strategy Call', href: CAL },
  secondaryCta: { label: 'See all packages', href: '/services' },
  audienceIntro: 'For operators who want a marketing partner - not a vendor that disappears after the invoice.',
  audiences: [
    {
      title: 'You\'ve tried agencies and got vague retainers',
      description: 'Lots of activity. Thin results. Nobody owning the outcome.',
    },
    {
      title: 'You\'re busy running the business',
      description: 'You shouldn\'t be writing captions at 10pm. You need a team that just delivers.',
    },
    {
      title: 'You want growth that stacks',
      description: 'SEO this month should help next month. Content should compound. Reviews should keep arriving.',
    },
  ],
  inclusionsIntro: 'One monthly partnership covering the work that actually moves local demand.',
  inclusions: [
    {
      icon: MapPin,
      title: 'Local SEO & GBP management',
      description: 'Ongoing optimisation so you stay visible on Search and Maps.',
    },
    {
      icon: Share2,
      title: 'Social content (8-12 posts/mo)',
      description: 'Planned, written and posted - so you stay present between searches.',
    },
    {
      icon: Camera,
      title: 'Quarterly content shoot',
      description: 'Fresh photo and video of your business every quarter. No recycled stock.',
    },
    {
      icon: Newspaper,
      title: 'Quarterly Digest feature',
      description: 'Guaranteed placement to our Newcastle subscriber audience.',
      highlight: true,
    },
    {
      icon: CheckCircle2,
      title: 'Testimo review automation',
      description: 'Our in-house tool to request Google reviews automatically - included.',
      highlight: true,
    },
    {
      icon: BarChart3,
      title: 'Monthly insights + strategy',
      description: 'Clear reporting and quarterly sessions so the plan stays sharp.',
    },
  ],
  steps: [
    { title: 'Discovery', description: 'Audit, priorities and a 90-day plan for your market.' },
    { title: 'Build', description: 'GBP, SEO foundations, content calendar and Testimo setup.' },
    { title: 'Launch', description: 'Publishing rhythm starts. First Digest feature schedules.' },
    { title: 'Grow', description: 'Month by month compounding - reviews, rankings and reach.' },
  ],
  why: [
    {
      title: 'Owned distribution',
      description: 'Quarterly Digest features mean your marketing reaches a real Newcastle audience.',
    },
    {
      title: 'Testimo included',
      description: 'Review generation most agencies charge extra for - built by us, included with you.',
    },
    {
      title: 'No lock-in contracts',
      description: 'Month-to-month. We earn the renewal with results, not fine print.',
    },
    {
      title: 'One team',
      description: 'Strategy and execution under one roof. No subcontract ping-pong.',
    },
  ],
  proof: [
    {
      name: 'Newcastle Digest',
      role: 'Our brand',
      description: 'The distribution engine behind every Growth Partner feature.',
      href: '/brands/newcastle-digest',
      image: '/newcastle-digest.png',
      imageAlt: 'Newcastle Digest homepage',
      metrics: [
        { value: '7,000+', label: 'Subscribers' },
        { value: '60%', label: 'Open rate' },
      ],
    },
    {
      name: 'Testimo',
      role: 'Our brand',
      description: 'Review automation we built for Australian local businesses - included in Growth Partner.',
      href: '/brands/testimo',
      image: '/Testimo.png',
      imageAlt: 'Testimo product',
      metrics: [
        { value: 'Auto', label: 'Review requests' },
        { value: 'Included', label: 'With Growth Partner' },
      ],
    },
  ],
  faqs: [
    {
      question: 'Is there a lock-in contract?',
      answer: 'No. Month-to-month. If it\'s not working, we\'ll say so - and you can leave.',
    },
    {
      question: 'What if I already have a website?',
      answer: 'Fine. Growth Partner works with what you have. If the site needs a rebuild, we scope that separately or fold it into a wider plan.',
    },
    {
      question: 'When will I see results?',
      answer: 'Local SEO and reviews compound over months. Digest features and content can create sooner movement. We set expectations clearly in month one.',
    },
    {
      question: 'Is Testimo really included?',
      answer: 'Yes. Review request automation is part of the partnership - not an upsell.',
    },
    {
      question: 'How many Digest features do I get?',
      answer: 'One guaranteed feature per quarter, planned around your offers and seasonality.',
    },
    {
      question: 'Do you manage paid ads in this plan?',
      answer: 'Paid ads are available as an additional service. Growth Partner focuses on owned and earned local growth.',
    },
    {
      question: 'Who is this for?',
      answer: 'Local service and destination businesses in Newcastle and the Hunter that want consistent marketing without hiring an in-house team.',
    },
    {
      question: 'Can I start with Visibility Boost first?',
      answer: 'Yes. Many clients do a once-off clean-up, then move into Growth Partner once the foundation is ready.',
    },
  ],
};

export const websiteDesign: OfferPageData = {
  slug: 'website-development',
  path: '/services/website-development',
  breadcrumbParent: { label: 'Services', href: '/services' },
  name: 'Website Design',
  eyebrow: 'Custom websites · From $2,500',
  price: 'From $2,500',
  seoTitle: 'Website Design Newcastle | Digest Studio',
  metaDescription:
    'Custom websites for Newcastle businesses. Fast, conversion-focused and built to be found - not dragged out of a template. From $2,500.',
  h1: 'A website that wins enquiries.',
  h1Accent: 'Not just looks good.',
  heroSupport:
    'Custom-coded sites for Newcastle businesses - fast, clear, and built so locals can find you and know what to do next.',
  proofLine: 'Typically live in 14 days · Mobile-first · SEO foundations included',
  primaryCta: { label: 'Book a Free Strategy Call', href: CAL },
  secondaryCta: { label: 'See Launch Pack', href: '/packages/local-launch-pack' },
  audienceIntro: 'For businesses that have outgrown DIY builders - or never had a site that worked.',
  audiences: [
    {
      title: 'Your site is slow or confusing',
      description: 'Visitors land, get lost, leave. You\'re paying for traffic that doesn\'t convert.',
    },
    {
      title: 'You\'re stuck on a template',
      description: 'It looks like everyone else. You can\'t change what matters without breaking it.',
    },
    {
      title: 'You need a site that supports growth',
      description: 'SEO, Digest campaigns and ads only work if the destination is strong.',
    },
  ],
  inclusionsIntro: 'What you get when we build your site - without the agency waffle.',
  inclusions: [
    {
      icon: Layout,
      title: 'Custom design & build',
      description: '4-7 pages coded for your business. No theme you\'ll outgrow in a year.',
    },
    {
      icon: Gauge,
      title: 'Speed by default',
      description: 'Light code. Fast loads. Better for users and Google.',
    },
    {
      icon: Search,
      title: 'SEO-ready structure',
      description: 'Clean URLs, meta, headings and mobile performance from day one.',
    },
    {
      icon: Target,
      title: 'Conversion-focused copy',
      description: 'Clear offers and calls to action - not lorem ipsum dressed as branding.',
    },
    {
      icon: Zap,
      title: 'Forms & booking hooks',
      description: 'Connected to how you actually take enquiries.',
    },
    {
      icon: CheckCircle2,
      title: '14 days post-launch support',
      description: 'Tweaks and fixes after go-live while you settle in.',
    },
  ],
  steps: [
    { title: 'Discovery', description: 'Business, customers, pages and conversion goals.' },
    { title: 'Build', description: 'Design and code with real content - not placeholders.' },
    { title: 'Launch', description: 'Domain, hosting handoff, forms tested, site live.' },
    { title: 'Grow', description: 'Optional SEO, content and Digest distribution next.' },
  ],
  why: [
    {
      title: 'Built for local growth',
      description: 'We design sites knowing they\'ll sit beside SEO, reviews and Digest campaigns.',
    },
    {
      title: 'Fast turnaround',
      description: 'Most custom sites launch in about two weeks when content is ready.',
    },
    {
      title: 'No template lock-in',
      description: 'You own a real site - not a rented theme with monthly surprises.',
    },
    {
      title: 'Same team for what comes next',
      description: 'When you need SEO or Digest reach, you\'re not starting with a new agency.',
    },
  ],
  proof: [
    {
      name: 'Newcastle Digest',
      role: 'Our brand',
      description: 'We build and run real digital products - including Newcastle\'s largest local newsletter.',
      href: '/brands/newcastle-digest',
      image: '/newcastle-digest.png',
      imageAlt: 'Newcastle Digest',
      metrics: [
        { value: '7,000+', label: 'Subscribers' },
        { value: 'From scratch', label: 'Built by us' },
      ],
    },
  ],
  faqs: [
    {
      question: 'How long does a website take?',
      answer: 'Most projects land in around 14 days once we have content and access. Larger sites take longer - we\'ll scope that honestly.',
    },
    {
      question: 'What\'s the starting price?',
      answer: 'Custom builds typically start from $2,500 depending on page count and integrations.',
    },
    {
      question: 'Do you use WordPress or Squarespace?',
      answer: 'We build modern custom sites suited to speed and SEO. We\'ll recommend the right stack for your situation on the call.',
    },
    {
      question: 'Can you migrate my old site?',
      answer: 'Yes. We move what\'s worth keeping and leave the rest behind.',
    },
    {
      question: 'Will it work on mobile?',
      answer: 'Yes. Mobile-first is non-negotiable - most of your visitors are on phones.',
    },
    {
      question: 'Do you write the copy?',
      answer: 'We include conversion-focused copy as part of the build. You approve everything before launch.',
    },
    {
      question: 'What about hosting?',
      answer: 'We set you up on reliable hosting and explain ongoing costs clearly before you commit.',
    },
  ],
};

export const contentMarketing: OfferPageData = {
  slug: 'content-marketing',
  path: '/services/content-marketing',
  breadcrumbParent: { label: 'Services', href: '/services' },
  name: 'Content Marketing',
  eyebrow: 'Content that keeps you visible',
  seoTitle: 'Content Marketing Newcastle | Digest Studio',
  metaDescription:
    'Photography, video, email and social content for Newcastle businesses - made to build trust and drive enquiries.',
  h1: 'Stay top of mind.',
  h1Accent: 'Between searches.',
  heroSupport:
    'Photography, video, email and social that make your business feel present - so when locals need you, they already know your name.',
  proofLine: 'Local shoots · Digest-ready assets · Built for Newcastle audiences',
  primaryCta: { label: 'Book a Free Strategy Call', href: CAL },
  secondaryCta: { label: 'See Growth Partner', href: '/packages/growth-partner' },
  audienceIntro: 'For businesses that go quiet online the moment someone gets busy on the tools.',
  audiences: [
    {
      title: 'You disappear between jobs',
      description: 'Great when you remember to post. Invisible when work picks up.',
    },
    {
      title: 'Your content looks generic',
      description: 'Stock photos and recycled captions. Locals can tell.',
    },
    {
      title: 'You want content that sells',
      description: 'Not vanity metrics - assets that support enquiries, Digest features and SEO.',
    },
  ],
  inclusionsIntro: 'Content as a system - not random posts when inspiration hits.',
  inclusions: [
    {
      icon: Camera,
      title: 'Photography & video',
      description: 'Real shoots of your business, team and work.',
    },
    {
      icon: Share2,
      title: 'Social content',
      description: 'Planned posts that sound like you - not a content farm.',
    },
    {
      icon: FileText,
      title: 'Blogs & email',
      description: 'Useful writing that supports search and keeps customers warm.',
    },
    {
      icon: Newspaper,
      title: 'Digest-ready stories',
      description: 'Assets shaped for Newcastle Digest placements when you advertise with us.',
      highlight: true,
    },
    {
      icon: Users,
      title: 'Audience-first planning',
      description: 'We plan around who you serve in Newcastle - not global trends.',
    },
    {
      icon: Sparkles,
      title: 'Consistent cadence',
      description: 'A rhythm you can rely on, with or without Growth Partner.',
    },
  ],
  steps: [
    { title: 'Discovery', description: 'Offers, seasons and the stories worth telling.' },
    { title: 'Build', description: 'Shoot, write and design the first content set.' },
    { title: 'Launch', description: 'Publish across the channels that matter.' },
    { title: 'Grow', description: 'Refine what works. Retire what doesn\'t.' },
  ],
  why: [
    {
      title: 'We run a media brand',
      description: 'Digest teaches us what Newcastle actually opens and shares.',
    },
    {
      title: 'Content + distribution',
      description: 'We can create the work and put it in front of local subscribers.',
    },
    {
      title: 'Local voice',
      description: 'No corporate filler. Copy that sounds like a Hunter business.',
    },
    {
      title: 'Pairs with Growth Partner',
      description: 'Ongoing content is already baked into the monthly plan if you want the full engine.',
    },
  ],
  proof: [
    {
      name: 'Newcastle Digest',
      role: 'Our brand',
      description: 'Weekly content for thousands of locals - proof we know what holds attention here.',
      href: '/brands/newcastle-digest',
      image: '/newcastle-digest.png',
      imageAlt: 'Newcastle Digest',
      metrics: [
        { value: 'Weekly', label: 'Publish cadence' },
        { value: '60%', label: 'Open rate' },
      ],
    },
  ],
  faqs: [
    {
      question: 'Can I buy content without Growth Partner?',
      answer: 'Yes. Content can be scoped as a project or ongoing package on its own.',
    },
    {
      question: 'Do you shoot on location?',
      answer: 'Yes. We prefer real environments over studios for local businesses.',
    },
    {
      question: 'How many posts do I get?',
      answer: 'Depends on scope. Growth Partner includes 8-12 social posts monthly. Standalone packages are custom.',
    },
    {
      question: 'Will you use AI to write everything?',
      answer: 'We use tools where they help. Final work is edited for your voice and your market.',
    },
    {
      question: 'Can content support SEO?',
      answer: 'Yes - blogs and service pages written to answer how locals search.',
    },
    {
      question: 'Do you manage posting?',
      answer: 'We can create only, or create and publish. Your call.',
    },
  ],
};

export const paidAds: OfferPageData = {
  slug: 'paid-ads',
  path: '/services/paid-ads',
  breadcrumbParent: { label: 'Services', href: '/services' },
  name: 'Paid Ads',
  eyebrow: 'Meta & Google campaigns',
  seoTitle: 'Paid Ads Management Newcastle | Digest Studio',
  metaDescription:
    'Meta and Google ads for Newcastle businesses. Strategy, setup, optimisation and reporting - managed locally.',
  h1: 'Paid attention.',
  h1Accent: 'When organic needs a push.',
  heroSupport:
    'Meta or Google campaigns built for local demand - set up, managed and reported without the agency fog.',
  proofLine: 'Local targeting · Clear reporting · Pairs with Digest & SEO',
  primaryCta: { label: 'Book a Free Strategy Call', href: CAL },
  secondaryCta: { label: 'See all services', href: '/services' },
  audienceIntro: 'For businesses ready to buy reach - with someone watching the numbers.',
  audiences: [
    {
      title: 'You need leads this month',
      description: 'SEO takes time. Ads can fill the gap while organic compounds.',
    },
    {
      title: 'You\'ve burned budget before',
      description: 'Broad targeting, weak creative, no landing page. We fix that stack.',
    },
    {
      title: 'You have a strong offer',
      description: 'Promotions, launches and seasonal peaks deserve paid amplification.',
    },
  ],
  inclusionsIntro: 'Management that treats ad spend like your money - because it is.',
  inclusions: [
    {
      icon: Target,
      title: 'Campaign strategy',
      description: 'Audience, offer and channel chosen for Newcastle demand.',
    },
    {
      icon: Megaphone,
      title: 'Setup & creative direction',
      description: 'Accounts structured cleanly. Ads that say something real.',
    },
    {
      icon: BarChart3,
      title: 'Ongoing optimisation',
      description: 'Kill waste. Scale what converts. Weekly attention, not set-and-forget.',
    },
    {
      icon: Gauge,
      title: 'Landing page alignment',
      description: 'Ads only work if the destination converts - we check that first.',
    },
    {
      icon: FileText,
      title: 'Clear reporting',
      description: 'Cost per lead and what we\'re changing - in plain English.',
    },
    {
      icon: Newspaper,
      title: 'Optional Digest combo',
      description: 'Pair paid reach with owned Digest distribution for launches.',
      highlight: true,
    },
  ],
  steps: [
    { title: 'Discovery', description: 'Offer, margins, geography and success metrics.' },
    { title: 'Build', description: 'Account structure, creative and tracking in place.' },
    { title: 'Launch', description: 'Campaigns live with tight local targeting.' },
    { title: 'Grow', description: 'Optimise weekly. Report clearly. Expand what works.' },
  ],
  why: [
    {
      title: 'Local market fluency',
      description: 'We know Newcastle suburbs, search intent and seasonal patterns.',
    },
    {
      title: 'Not ads in a vacuum',
      description: 'We connect spend to SEO, sites and Digest when it helps.',
    },
    {
      title: 'Honest about fit',
      description: 'If paid isn\'t right yet, we\'ll say so - and point you to a better first step.',
    },
    {
      title: 'Transparent management',
      description: 'You see where budget goes. No mystery retainers.',
    },
  ],
  proof: [
    {
      name: 'Newcastle Digest',
      role: 'Our brand',
      description: 'Owned media experience that informs how we think about attention and creative.',
      href: '/brands/newcastle-digest',
      image: '/newcastle-digest.png',
      imageAlt: 'Newcastle Digest',
      metrics: [
        { value: '7,000+', label: 'Local reach' },
        { value: 'Owned', label: 'Not rented' },
      ],
    },
  ],
  faqs: [
    {
      question: 'Is ad spend included in your fee?',
      answer: 'No. Media spend is yours, paid to Meta or Google. Our fee covers strategy and management.',
    },
    {
      question: 'What\'s a sensible starting budget?',
      answer: 'It depends on your ticket size and market. We\'ll recommend a test budget on the strategy call - not a vanity number.',
    },
    {
      question: 'Meta or Google?',
      answer: 'Whichever matches how your customers decide. Often Google for high-intent services; Meta for awareness and offers.',
    },
    {
      question: 'How fast can we launch?',
      answer: 'Often within 1-2 weeks once accounts, creative and landing pages are ready.',
    },
    {
      question: 'Do you guarantee leads?',
      answer: 'No. We guarantee disciplined management and clear reporting. Markets and offers vary.',
    },
    {
      question: 'Can this sit alongside Growth Partner?',
      answer: 'Yes. Many clients run organic compounding and paid bursts together.',
    },
  ],
};

// Fix accidental `answer` in why for paidAds - I made a typo
// I'll fix in the write by correcting paidAds why item

export const advancedSeo: OfferPageData = {
  slug: 'advanced-seo',
  path: '/services/advanced-seo',
  breadcrumbParent: { label: 'Services', href: '/services' },
  name: 'Advanced SEO',
  eyebrow: 'Authority & search growth',
  seoTitle: 'Advanced SEO Newcastle | Digest Studio',
  metaDescription:
    'Advanced SEO for Newcastle businesses ready to go beyond basic local listings - technical depth, content and authority.',
  h1: 'Rank for the searches',
  h1Accent: 'that pay.',
  heroSupport:
    'Deeper SEO for businesses that have outgrown basics - technical work, content that answers real queries, and authority that compounds.',
  proofLine: 'Local + broader search · Technical & content · Built for the Hunter market',
  primaryCta: { label: 'Book a Free Strategy Call', href: CAL },
  secondaryCta: { label: 'See Local SEO', href: '/local-seo-newcastle-nsw' },
  audienceIntro: 'For businesses that already show up sometimes - and want to own the category.',
  audiences: [
    {
      title: 'You\'re stuck on page two',
      description: 'Basics are done. Competitors still outrank you for the money terms.',
    },
    {
      title: 'You need more than Maps',
      description: 'Service-area pages, comparison queries and content clusters matter now.',
    },
    {
      title: 'You\'ve been burned by “SEO retainers”',
      description: 'Reports full of vanity metrics. Thin work. We scope outcomes, not hours.',
    },
  ],
  inclusionsIntro: 'Serious SEO without the black-box theatre.',
  inclusions: [
    {
      icon: Search,
      title: 'Technical & on-page depth',
      description: 'Structure, speed, indexation and page-level optimisation that holds up.',
    },
    {
      icon: FileText,
      title: 'Content that ranks',
      description: 'Pages and articles aimed at how Newcastle customers actually search.',
    },
    {
      icon: Megaphone,
      title: 'Authority building',
      description: 'Digital PR and link opportunities that make sense for local brands.',
    },
    {
      icon: MapPin,
      title: 'Local + broader coverage',
      description: 'Maps foundations plus the organic terms that drive higher-intent traffic.',
    },
    {
      icon: BarChart3,
      title: 'Measurement that matters',
      description: 'Rankings tied to enquiries - not screenshots of vanity charts.',
    },
    {
      icon: Newspaper,
      title: 'Digest as a signal',
      description: 'Owned media placements that support brand search and awareness.',
      highlight: true,
    },
  ],
  steps: [
    { title: 'Discovery', description: 'Audit, keyword map and competitive reality check.' },
    { title: 'Build', description: 'Technical fixes and priority content go first.' },
    { title: 'Launch', description: 'New pages live. Authority work begins.' },
    { title: 'Grow', description: 'Iterate monthly on what moves enquiries.' },
  ],
  why: [
    {
      title: 'We practice what we sell',
      description: 'We grow Digest and client visibility in the same market we serve.',
    },
    {
      title: 'Local first, always',
      description: 'National SEO playbooks fail here. We plan for Hunter intent.',
    },
    {
      title: 'Honest timelines',
      description: 'SEO compounds. We won\'t sell you a 30-day miracle.',
    },
    {
      title: 'Connects to the rest',
      description: 'Sites, content, reviews and Digest - one system, not siloed tactics.',
    },
  ],
  proof: [
    {
      name: 'Newcastle Digest',
      role: 'Our brand',
      description: 'A media property we grew from zero - proof we understand attention and search demand locally.',
      href: '/brands/newcastle-digest',
      image: '/newcastle-digest.png',
      imageAlt: 'Newcastle Digest',
      metrics: [
        { value: 'From zero', label: 'Audience built' },
        { value: '7,000+', label: 'Subscribers' },
      ],
    },
  ],
  faqs: [
    {
      question: 'How is this different from Local SEO?',
      answer: 'Local SEO focuses on Maps and nearby intent. Advanced SEO goes deeper on technical, content and authority for competitive terms.',
    },
    {
      question: 'How long until results?',
      answer: 'Meaningful movement usually takes months. We share leading indicators early and revenue-tied metrics as they appear.',
    },
    {
      question: 'Do you sell guaranteed rankings?',
      answer: 'No. Anyone who does is guessing or spamming. We sell disciplined work and clear reporting.',
    },
    {
      question: 'Do I need a new website first?',
      answer: 'Sometimes. If the site can\'t support SEO, we\'ll tell you before taking a retainer.',
    },
    {
      question: 'Is link building included?',
      answer: 'Authority work is scoped to your niche. We don\'t buy junk links.',
    },
    {
      question: 'Can this pair with Growth Partner?',
      answer: 'Yes. Growth Partner covers ongoing local foundations; Advanced SEO layers deeper competitive work.',
    },
  ],
};
