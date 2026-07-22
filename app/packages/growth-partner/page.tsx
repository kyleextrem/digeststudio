import OfferLandingPage from '@/components/OfferLandingPage';
import { growthPartner } from '@/lib/offers';
import { offerMetadata } from '@/lib/offer-metadata';

export const metadata = offerMetadata(growthPartner);

export default function GrowthPartnerPackagePage() {
  return <OfferLandingPage offerId="growth-partner" />;
}
