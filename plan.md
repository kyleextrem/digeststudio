# Redesign Plan: Digest Studio Home Page

## Goal
Rebuild the Home Page using Alex Hormozi's "Grand Slam Offer" framework and Jack Roberts' "Speed-First" UI principles, focusing on maximum lead generation.

## 1. Technical Constraints & Design Rules
- **Typography**: strict usage of `Inter` (sans) and `Space Grotesk` (heading) from global config.
- **Colors**:
  - `primary`: `#FF4400`
  - `accent`: `#111827`
  - `background`: `#FFFFFF`
  - `textPrimary`: `#111827`
- **Navigation**: Remove top navigation menu (Landing Page style) to reduce distractions.
- **Mobile First**: Responsive layout with repeat CTAs.

## 2. Layout Structure

### A. Hero Section (Above the Fold)
- **Headline**: "Add 50 Enquiries/Month to Your Newcastle Business in 90 Days" (Dream Outcome).
- **Subheadline**: Specific, time-bound, low effort promise.
- **CTA**: "Get Your Free Newcastle Visibility Audit" (Primary Color #FF4400).
- **Visuals**: Clean, high-impact layout, possibly simple graphic or text-focus for speed.

### B. The "Value Equation" Section
- **Social Proof**: "Newcastle Proof Stacks" - styling placeholders for local business logos and a "Before/After" revenue/ranking chart.
- **"We Do the Work" Cards**:
  1. **We Write & Design**: "You don't lift a finger."
  2. **We Publish & Distribute**: "Access to 6,500+ locals instantly."
  3. **We Track & Optimise**: "You just get the leads."

### C. The Lead Magnet (The Bait)
- **Component**: "Local Visibility Score" Tool.
- **UI**: Interactive-looking "Calculator" or "Input Field".
- **Action**: Input URL -> "Calculate Score" -> Captures Lead (or simulates it for now).

### D. Final CTA (The Close)
- Repeat the "Grand Slam Offer".
- Urgency/Scarcity: "Lock in My Founding Member Rate".

## 3. Implementation Steps

1.  **Modify `App.tsx`**: Conditionally hide `Navbar` on the Home page (or remove it entirely if this is a single-page funnel for now, but user said "Home Hero page", implying the rest of the site exists. Best to conditionally hide or specifically design Home to not have it).
    *   *Decision*: I will likely pass a prop or check location in `App.tsx` (or `Navbar.tsx`) to hide it on `/`.
2.  **Update `components/Hero.tsx`**:
    *   Implement new Copy and CTA.
    *   Apply "Speed-First" clean design.
3.  **Create `components/ValueEquation.tsx`**:
    *   Implement "Proof Stacks" and "We Do the Work" cards.
4.  **Create `components/LeadMagnet.tsx`**:
    *   Implement "Local Visibility Score" UI.
5.  **Update `pages/Home.tsx`**:
    *   Assemble the new sections.
    *   Ensure CTAs are repeated at top, middle, bottom.
    *   Remove old "Problems Section" if it conflicts or integrate it if it fits the "Dream Outcome" narrative (User prompt implies a rebuild).

## 4. Execution Order
1.  `App.tsx` (Nav visibility).
2.  `Hero.tsx` (Redesign).
3.  `ValueEquation.tsx` (New).
4.  `LeadMagnet.tsx` (New).
5.  `Home.tsx` (Assembly).
