'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckIcon, ArrowRightIcon } from '@/components/Icons'

const vehicleSizes = [
  { id: 'compact', label: 'Compact / Coupe', examples: 'Civic, BRZ, MX-5, EVO', multiplier: 1.0 },
  { id: 'sedan', label: 'Sedan / Sports Car', examples: 'M3, GT-R, Supra, NSX', multiplier: 1.15 },
  { id: 'suv', label: 'SUV / Crossover', examples: 'Urus, Cayenne, Urus, X5M', multiplier: 1.35 },
  { id: 'truck', label: 'Large Truck / Van', examples: 'F-150, Ram 1500, Sprinter', multiplier: 1.4 },
]

const serviceOptions = [
  {
    id: 'ppf-front',
    name: 'PPF — Full Front Package',
    description: 'Hood, fenders, bumper, mirrors, headlights',
    basePrice: 899,
    category: 'ppf',
  },
  {
    id: 'ppf-full',
    name: 'PPF — Full Body Wrap',
    description: 'Every painted panel, bumper to bumper',
    basePrice: 3200,
    category: 'ppf',
  },
  {
    id: 'ceramic-express',
    name: 'Ceramic Coating — Express',
    description: 'Single-layer SiO₂ coat, 1–2 year protection',
    basePrice: 699,
    category: 'ceramic',
  },
  {
    id: 'ceramic-gold',
    name: 'Ceramic Coating — Gold Package',
    description: 'Multi-layer nano-ceramic system, 5+ year protection',
    basePrice: 1499,
    category: 'ceramic',
  },
  {
    id: 'correction-1',
    name: 'Paint Correction — Stage 1',
    description: 'Light polish, gloss enhancement, minor swirl removal',
    basePrice: 449,
    category: 'correction',
  },
  {
    id: 'correction-2',
    name: 'Paint Correction — Stage 2',
    description: '80–90% defect removal, compound + polish',
    basePrice: 749,
    category: 'correction',
  },
  {
    id: 'correction-3',
    name: 'Paint Correction — Stage 3',
    description: '95%+ defect removal, show-car or pre-PPF prep',
    basePrice: 1199,
    category: 'correction',
  },
  {
    id: 'detail-full',
    name: 'Interior & Exterior Detail',
    description: 'Complete reconditioning, inside and out',
    basePrice: 249,
    category: 'detail',
  },
]

const addOns = [
  { id: 'engine', name: 'Engine Bay Detail', price: 149 },
  { id: 'wheels-ceramic', name: 'Wheel Ceramic Coating (set of 4)', price: 299 },
  { id: 'glass-ceramic', name: 'Glass Ceramic Coating', price: 199 },
  { id: 'interior-protect', name: 'Interior Fabric/Leather Protection', price: 249 },
]

export default function ServiceCalculator() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])

  const vehicleSize = vehicleSizes.find(v => v.id === selectedSize)
  const service = serviceOptions.find(s => s.id === selectedService)
  const multiplier = vehicleSize?.multiplier ?? 1

  const serviceTotal = service ? Math.round(service.basePrice * multiplier / 5) * 5 : 0
  const addOnTotal = addOns
    .filter(a => selectedAddOns.includes(a.id))
    .reduce((sum, a) => sum + a.price, 0)
  const grandTotal = serviceTotal + addOnTotal

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    )
  }

  const isReady = selectedSize && selectedService

  return (
    <div className="bg-white border border-[#E0E0E0] rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(10,10,10,0.04)]">
      {/* Header */}
      <div className="px-6 py-5 border-b border-[#E0E0E0] flex items-center justify-between">
        <div>
          <h3
            className="text-2xl text-[#0A0A0A]"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.04em' }}
          >
            Quote Estimator
          </h3>
          <p className="text-[#888] text-xs mt-0.5">
            Get a ballpark before you book — final price confirmed at inspection
          </p>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Step 1: Vehicle Size */}
        <div>
          <p className="text-[#888] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
            Step 1 · Vehicle Size
          </p>
          <div className="grid grid-cols-2 gap-2">
            {vehicleSizes.map(v => (
              <button
                key={v.id}
                onClick={() => setSelectedSize(v.id)}
                className={`text-left p-3.5 rounded-xl border transition-all ${
                  selectedSize === v.id
                    ? 'bg-[#0A0A0A] border-[#0A0A0A] text-white'
                    : 'bg-white border-[#E0E0E0] text-[#666] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                }`}
              >
                <div className="text-sm font-semibold mb-0.5">{v.label}</div>
                <div className={`text-[10px] leading-tight ${selectedSize === v.id ? 'text-white/60' : 'text-[#888]'}`}>{v.examples}</div>
                {selectedSize === v.id && (
                  <div className="mt-1 text-[10px] text-[#888] font-bold tracking-wider uppercase">
                    {v.multiplier > 1 ? `+${Math.round((v.multiplier - 1) * 100)}% size adj.` : 'Base price'}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Service */}
        <div>
          <p className="text-[#888] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
            Step 2 · Choose a Service
          </p>
          <div className="space-y-2">
            {serviceOptions.map(s => {
              const adjustedPrice = Math.round(s.basePrice * multiplier / 5) * 5
              const selected = selectedService === s.id
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedService(s.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selected
                      ? 'bg-[#0A0A0A] border-[#0A0A0A]'
                      : 'bg-white border-[#E0E0E0] hover:border-[#0A0A0A]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-semibold ${selected ? 'text-white' : 'text-[#0A0A0A]'}`}>
                        {s.name}
                      </div>
                      <div className={`text-[11px] mt-0.5 truncate ${selected ? 'text-white/60' : 'text-[#888]'}`}>{s.description}</div>
                    </div>
                    <div className={`text-right flex-shrink-0 ${selected ? 'text-[#888]' : 'text-[#0A0A0A]'}`}>
                      <div className="text-base font-bold">
                        {selectedSize ? `$${adjustedPrice.toLocaleString()}` : `$${s.basePrice.toLocaleString()}`}
                      </div>
                      {selectedSize && multiplier > 1 && (
                        <div className={`text-[9px] tracking-wider ${selected ? 'text-white/40' : 'text-[#B5B5B5]'}`}>size adjusted</div>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Step 3: Add-ons */}
        <div>
          <p className="text-[#888] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
            Step 3 · Add-Ons <span className="text-[#888] normal-case font-normal">(optional)</span>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {addOns.map(a => {
              const selected = selectedAddOns.includes(a.id)
              return (
                <button
                  key={a.id}
                  onClick={() => toggleAddOn(a.id)}
                  className={`flex items-center justify-between gap-3 p-3.5 rounded-xl border text-left transition-all ${
                    selected
                      ? 'bg-[#F5F5F5] border-[#0A0A0A] text-[#0A0A0A]'
                      : 'bg-white border-[#E0E0E0] text-[#666] hover:border-[#0A0A0A]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-all ${
                      selected
                        ? 'bg-[#0A0A0A] border-[#0A0A0A] text-white'
                        : 'border-[#CCCCCC]'
                    }`}>
                      {selected && <CheckIcon className="w-2.5 h-2.5" strokeWidth={3} />}
                    </div>
                    <span className="text-xs font-medium">{a.name}</span>
                  </div>
                  <span className={`text-xs font-bold flex-shrink-0 ${selected ? 'text-[#0A0A0A]' : 'text-[#888]'}`}>
                    +${a.price}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Total / CTA */}
        <div className={`rounded-xl border p-5 transition-all ${
          isReady
            ? 'bg-[#F5F5F5] border-[#0A0A0A]'
            : 'bg-white border-[#E0E0E0]'
        }`}>
          {isReady ? (
            <>
              <div className="flex items-end justify-between mb-4">
                <div>
                  <div className="text-[#888] text-xs tracking-wider uppercase mb-1">Estimated Total</div>
                  <div
                    className="text-4xl text-[#0A0A0A] leading-none"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    ${grandTotal.toLocaleString()}+
                  </div>
                  <div className="text-[#888] text-[10px] mt-1">
                    Finalized at inspection · Mobile service, we come to you
                  </div>
                </div>
                <div className="text-right">
                  {serviceTotal > 0 && (
                    <div className="text-[#666] text-xs">{service?.name}</div>
                  )}
                  {selectedAddOns.length > 0 && (
                    <div className="text-[#888] text-[10px]">+ {selectedAddOns.length} add-on{selectedAddOns.length > 1 ? 's' : ''}</div>
                  )}
                </div>
              </div>
              <Link
                href={`/book?service=${encodeURIComponent(service?.name ?? '')}&estimate=${grandTotal}`}
                className="flex w-full py-3.5 bg-[#0A0A0A] text-white font-bold text-sm tracking-widest uppercase rounded-lg items-center justify-center gap-2 hover:bg-[#1A1A1A] transition-colors"
              >
                Book This Package
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <p className="text-[#888] text-[10px] text-center mt-2">
                This is a rough estimate — we&apos;ll confirm the final price after inspecting your car.
              </p>
            </>
          ) : (
            <div className="text-center py-2">
              <p className="text-[#888] text-sm">
                Select your vehicle size and a service above to see an estimate
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
