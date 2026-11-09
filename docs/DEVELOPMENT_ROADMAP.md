# Deshscape Development Roadmap

Baseline audited against `main` at `09d665d000450d3efc4b5a403fb1275d43a6b632` on 2026-11-09.

## Audit summary

### Existing strengths
- Next.js App Router, TypeScript strict mode, React 19.
- 74 destination records with coordinates on mapped entries, a Leaflet map, division filters and search.
- English/Bengali language provider and a large translation dictionary.
- Static destination routes, destination metadata and TouristAttraction structured data.
- Journal pages, accessible gallery/lightbox, saved destinations, contact form validation and Turnstile verification.
- Production deployment currently reports READY.

### Gaps and risks found in source review
1. Trip Planner only filters and copies suggestions; it does not let visitors select places or build a day-by-day shortlist.
2. Saved places are device/browser-local only. The UI discloses this, but the saved list does not actively refresh when another tab changes it.
3. Destination related links are selected by matching experience type, not geographic proximity.
4. The map depends on an external Bangladesh boundary GeoJSON endpoint; pins remain useful if that endpoint fails, but boundary overlays can disappear.
5. Destination gallery searches Wikimedia Commons by destination title. Results may be incomplete or loosely related; retain source links and never imply all results are verified.
6. Contact rate limiting is in-memory per serverless instance, so it is best-effort rather than a strict global limit. A shared store would be needed for stronger enforcement.
7. No dedicated automated UI test suite is documented. Production build and manual journey checks remain necessary.
8. The current source review does not establish real-world transport costs, opening hours, route times, or booking availability; the product must label planning suggestions as estimates/inspiration unless verified from live sources.

## Delivery plan

### Phase 1 — Core experience and UI polish
- Preserve the existing page structure and brand identity.
- Improve interaction feedback, focus states, motion consistency and responsive behavior.
- Respect `prefers-reduced-motion`; avoid animation overrides that defeat accessibility preferences.

### Phase 2 — Destination experience
- Improve nearby-destination recommendations using coordinates where available.
- Keep travel notes, access caveats and external directions clearly distinguished from verified live guidance.
- Improve gallery fallback and source transparency without fabricating photo attribution.

### Phase 3 — Explore map
- Keep the current interactive map and search.
- Add graceful fallback messaging for unavailable boundary data.
- Avoid treating approximate attraction pins as exact navigation coordinates.

### Phase 4 — Trip Planner
- Allow visitors to choose a trip duration and explicitly select destinations.
- Build a simple day-by-day shortlist from those selections.
- Persist the draft locally and support copying it.
- Do not invent prices, opening hours, travel times, or an optimized route.

### Phase 5 — Journal and My Places
- Improve saved-list synchronization across tabs.
- Preserve the explicit browser-local storage disclosure until account-based sync exists.
- Improve related editorial discovery and empty states.

### Phase 6 — Release quality
- Run production build, dependency audit and route/data checks.
- Manually verify desktop/mobile journeys: language switching, search/filter, map, destination detail/gallery, save/remove, planner, Journal, contact and navigation.
- Deploy a preview for review; production release remains a separate approval step.

## Implementation sequence for this branch
1. Multi-day, user-selected Trip Planner with local draft persistence and copyable day plan.
2. Nearby destination ranking using the Haversine distance formula.
3. Saved-place synchronization across tabs and same-tab components.
4. Focused CSS polish for new planner controls and accessible interaction states.
5. Re-run static checks and preview build; record any checks that could not be run.
