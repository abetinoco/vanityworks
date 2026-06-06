import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const baseProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

function Svg({ children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg width="1em" height="1em" {...baseProps} {...props}>
      {children}
    </svg>
  )
}

export function ShieldIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3l8 3v6c0 4.5-3.2 8.3-8 9-4.8-.7-8-4.5-8-9V6l8-3z" />
    </Svg>
  )
}

export function SparkleIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
    </Svg>
  )
}

export function SunIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </Svg>
  )
}

export function CarIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 14l1.6-5.4A2 2 0 018.6 7h6.8a2 2 0 011.95 1.6L19 14M4 14h16v4h-2v-2H6v2H4v-4z" />
      <circle cx="8" cy="17" r="1.3" />
      <circle cx="16" cy="17" r="1.3" />
    </Svg>
  )
}

export function WindIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 8h12a3 3 0 100-6M3 12h17a3 3 0 110 6H15M3 16h8" />
    </Svg>
  )
}

export function SeatIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4" />
      <path d="M3 11a2 2 0 012-2h14a2 2 0 012 2v6H3v-6zM5 17v3M19 17v3" />
    </Svg>
  )
}

export function LayersIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 18l9 5 9-5" />
    </Svg>
  )
}

export function RulerIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2 16L16 2l6 6L8 22l-6-6zM6 14l2 2M9 11l3 3M12 8l3 3M15 5l2 2" />
    </Svg>
  )
}

export function ScissorsIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M20 4L8.5 15.5M20 20L8.5 8.5" />
    </Svg>
  )
}

export function WrenchIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14.7 6.3a4 4 0 015.3 5.3l-4 4-5.3-5.3 4-4zM10.7 10.3L3 18v3h3l7.7-7.7" />
    </Svg>
  )
}

export function TrophyIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 4h10v4a5 5 0 11-10 0V4z" />
      <path d="M7 6H4v2a3 3 0 003 3M17 6h3v2a3 3 0 01-3 3M10 15h4v4M8 19h8" />
    </Svg>
  )
}

export function CameraIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 8h3l2-2h8l2 2h3v11H3V8z" />
      <circle cx="12" cy="13" r="3.5" />
    </Svg>
  )
}

export function GraduationCapIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2 9l10-5 10 5-10 5L2 9z" />
      <path d="M6 11v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5M21 10v5" />
    </Svg>
  )
}

export function AwardIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="9" r="5" />
      <path d="M8.5 13l-1.5 8.5 5-3 5 3-1.5-8.5" />
    </Svg>
  )
}

export function PackageIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 8l9-5 9 5v8l-9 5-9-5V8zM3 8l9 5 9-5M12 13v10" />
    </Svg>
  )
}

export function RefreshIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 12a9 9 0 0115-6.7L21 8M21 3v5h-5M21 12a9 9 0 01-15 6.7L3 16M3 21v-5h5" />
    </Svg>
  )
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 9l6 6 6-6" />
    </Svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  )
}

export function StarIcon(props: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M12 2.5l2.9 6.2 6.8.6-5.2 4.6 1.6 6.7L12 17l-6.1 3.6 1.6-6.7L2.3 9.3l6.8-.6L12 2.5z" />
    </svg>
  )
}

export function HeartIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />
    </Svg>
  )
}

export function PlayIcon(props: IconProps) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      aria-hidden
      {...props}
    >
      <path d="M7 4.5v15a1 1 0 001.5.87l13-7.5a1 1 0 000-1.74l-13-7.5A1 1 0 007 4.5z" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 4h3l2 5-2.5 1.3a11 11 0 005.2 5.2L14 13l5 2v3a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z" />
    </Svg>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 12l5 5L20 6" />
    </Svg>
  )
}

export function XIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Svg>
  )
}

const serviceIcons: Record<string, (props: IconProps) => JSX.Element> = {
  'paint-protection-film': ShieldIcon,
  'ceramic-coating': SparkleIcon,
  'paint-correction': SunIcon,
  'full-detail': CarIcon,
}

export function ServiceIcon({ slug, ...props }: IconProps & { slug: string }) {
  const Icon = serviceIcons[slug] ?? ShieldIcon
  return <Icon {...props} />
}
