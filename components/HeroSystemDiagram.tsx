import Image from 'next/image';
import {
  FileText,
  Laptop,
  Layers,
  Megaphone,
  Newspaper,
  Search,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

const topServices = [
  {
    title: 'Strategy',
    body: 'Positioning, strategy and a clear plan.',
    icon: Layers,
  },
  {
    title: 'Websites',
    body: 'Fast, modern websites built to convert.',
    icon: Laptop,
  },
  {
    title: 'SEO',
    body: 'Get found by more local customers.',
    icon: Search,
  },
] as const;

const distribution = [
  {
    title: 'Content',
    body: 'Social, email and campaigns that get attention.',
    icon: FileText,
    emphasis: false,
  },
  {
    title: 'Paid Media',
    body: 'Reach the right people, faster.',
    icon: Megaphone,
    emphasis: false,
  },
  {
    title: 'Newcastle Digest',
    body: '7,500+ local subscribers.',
    icon: Newspaper,
    emphasis: true,
  },
] as const;

function ServiceCard({
  icon: Icon,
  title,
  body,
  emphasis = false,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`flex h-full flex-col rounded-2xl border p-3.5 shadow-[0_12px_28px_-22px_rgba(17,24,39,0.45)] sm:p-4 ${
        emphasis ? 'border-primary/30 bg-[#fff6f1]' : 'border-[#e7e7ea] bg-white'
      }`}
    >
      <Icon className="mb-2.5 h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
      <p className="font-heading text-[14px] font-bold leading-tight tracking-tight text-accent">{title}</p>
      <p className="mt-1 text-[12px] leading-snug text-accent/55">{body}</p>
    </div>
  );
}

function StudioCore() {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#e7e7ea] bg-white px-4 py-3.5 shadow-[0_12px_28px_-22px_rgba(17,24,39,0.45)] sm:gap-4 sm:px-5">
      <Image
        src="/logo-lightning.png"
        alt="Digest Studio"
        width={931}
        height={376}
        className="h-9 w-auto shrink-0 sm:h-10"
      />
      <p className="min-w-0 border-l border-[#ececec] pl-3 text-[14px] font-medium leading-snug text-accent sm:pl-4 sm:text-[15px]">
        A complete marketing system for local businesses.
      </p>
    </div>
  );
}

function ResultCard() {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[#e7e7ea] bg-white p-3.5 shadow-[0_12px_28px_-22px_rgba(17,24,39,0.45)] sm:p-4">
      <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
      <div>
        <p className="font-heading text-[14px] font-bold leading-tight tracking-tight text-accent">
          More local customers
        </p>
        <p className="mt-1 text-[12px] leading-snug text-accent/55">
          A stronger brand and a bigger local audience.
        </p>
      </div>
    </div>
  );
}

function ConnectorRail({ variant }: { variant: 'merge' | 'split' }) {
  const arms = (
    <div className="grid grid-cols-3 gap-3">
      <span className="mx-auto h-3 w-px bg-primary" />
      <span className="mx-auto h-3 w-px bg-primary" />
      <span className="mx-auto h-3 w-px bg-primary" />
    </div>
  );
  const bus = <div className="mx-[calc((100%-1.5rem)/6)] h-px bg-primary" />;
  const stem = (
    <div className="flex justify-center">
      <span className="h-3 w-px bg-primary" />
    </div>
  );

  switch (variant) {
    case 'merge':
      return (
        <>
          {arms}
          {bus}
          {stem}
        </>
      );
    case 'split':
      return (
        <>
          {stem}
          {bus}
          {arms}
        </>
      );
    default: {
      const unreachable: never = variant;
      return unreachable;
    }
  }
}

function Connector({ variant }: { variant: 'merge' | 'split' }) {
  return (
    <div className="py-1" aria-hidden="true">
      <div className="flex justify-center md:hidden">
        <span className="h-5 w-px bg-primary" />
      </div>
      <div className="hidden md:block">
        <ConnectorRail variant={variant} />
      </div>
    </div>
  );
}

export default function HeroSystemDiagram() {
  return (
    <figure className="hero-enter hero-delay-2 min-w-0">
      <figcaption className="sr-only">
        Digest Studio connects strategy, websites and SEO into one marketing system, then uses
        content, paid media and Newcastle Digest to reach more local customers.
      </figcaption>
      <div className="mx-auto w-full max-w-xl md:max-w-none">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {topServices.map((service) => (
            <ServiceCard key={service.title} icon={service.icon} title={service.title} body={service.body} />
          ))}
        </div>
        <Connector variant="merge" />
        <StudioCore />
        <Connector variant="split" />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {distribution.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              body={service.body}
              emphasis={service.emphasis}
            />
          ))}
        </div>
        <Connector variant="merge" />
        <div className="md:mx-auto md:max-w-xs">
          <ResultCard />
        </div>
      </div>
    </figure>
  );
}
