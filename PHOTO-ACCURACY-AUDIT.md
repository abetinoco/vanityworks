# VanityWorks — Photo Accuracy Pass

Reviewed every photo in `public/portfolio/` against its chip and caption.
Decision applied: **chips describe what is actually visible in the photo** — no
photo claims a service (PPF, ceramic, correction) that isn't pictured.

## Models — verified

All models were checked against the images and are now correct:
McLaren 720S, Porsche 911 (992), Mercedes-AMG G63, Nissan R34 GT-R, Acura NSX,
Nissan R33 GT-R (×2), Lamborghini Gallardo, Honda S2000, Porsche Cayenne,
Toyota Supra MkIV (×2), Mitsubishi Evo, Nissan R34 (bodywork), Ford SVT
Lightning, Jeep Cherokee, VW Atlas, Subaru Outback.

Note: the **red show-floor car** visually reads as a widebody RX-7 FD, but per
your note it's kept labeled **Toyota Supra MkIV**. Easy to flip if needed.

## Service chips — corrected (was → now)

| Car | Was | Now | Why |
|---|---|---|---|
| Porsche 911 (992) | Paint Protection Film | Showcase Detail | Car is parked by the van + an interior shot — no PPF pictured (the one you flagged) |
| McLaren 720S | Ceramic Coating & PPF | Showcase Detail | Exterior, wheel/brake, and cockpit shots only |
| Mercedes-AMG G63 | Ceramic Coating | Exterior & Interior Detail | One exterior + red-leather interior shots |
| Lamborghini Gallardo | Ceramic Coating | Showcase Detail | Exterior + interior, no coating action |
| Honda S2000 | Paint Correction & Detail | Showcase Detail | Exterior, engine bay, interior — no correction shown |
| Acura NSX | Show Build Detail | Showcase Detail | Night exterior + wheel detail |
| Porsche Cayenne | Detail & Interior | Exterior & Interior Detail | Exterior + cabin |
| Nissan R34 (silver) | Paint Work | Bodywork | Mid-build bumper respray |
| SVT Lightning / Jeep / Atlas | Hand Wash & Detail | Hand Wash & Decon | Foam/wash before-after only |
| Silver Supra (2JZ) | Engine Bay Detail | (unchanged — accurate) | Both shots are the 2JZ bay |
| White Evo | Engine Bay Detail | (unchanged — accurate) | 4G63 bay |
| Subaru Outback | Interior Detail | (unchanged — accurate) | Interior before-after |
| R34 GT-R / R33 GT-R | Showcase Detail | (unchanged — accurate) | Exterior showcases |

## Structural fixes

- **Removed 4 duplicate entries** (NSX, purple R33, red R33, Cayenne were each
  listed twice in the data).
- **Homepage "What we do" cards** had invented captions on mismatched photos:
  - Ceramic card showed the **G63's interior cargo area** labeled *"Ceramic cure ·
    Beading test"* → now the G63 exterior, captioned "Mercedes-AMG G63".
  - Correction card showed the **McLaren's rear** labeled *"Before/after · 50/50
    split"* → now a McLaren front shot, "McLaren 720S".
  - PPF card *"PPF install · Porsche 992"* → "Porsche 911 (992)".
- **Service detail pages** previously auto-pulled photos by matching the service
  text, which scattered them. They're now **explicitly curated** per page
  (`SERVICE_SHOWCASE` in `app/services/[slug]/page.tsx`), each tile captioned by
  model only — honest example cars, not staged service claims.

## If you want service-specific labels back

Right now chips describe the photo. If you tell me which car actually got PPF /
ceramic / correction, I'll switch those chips to the real service — that's the
only way to label the service accurately, since it isn't visible in a finished
shot.
