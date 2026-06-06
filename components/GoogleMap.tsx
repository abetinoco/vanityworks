interface GoogleMapProps {
  query?: string
  height?: string
  ariaLabel?: string
}

/**
 * Lightweight Google Maps embed. Uses the public q= URL form which works
 * without an API key. For full Maps JavaScript API features (custom marker,
 * service-radius circle, etc.) swap for @googlemaps/react-wrapper + an API key.
 */
export default function GoogleMap({
  query = 'Chicagoland, IL',
  height = '420px',
  ariaLabel = 'Service area map',
}: GoogleMapProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-[#E0E0E0] bg-[#F5F5F5] shadow-[0_1px_3px_rgba(10,10,10,0.04)]"
      style={{ height }}
    >
      <iframe
        title={ariaLabel}
        src={src}
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  )
}
