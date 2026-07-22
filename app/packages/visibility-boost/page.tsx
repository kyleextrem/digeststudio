import OfferLandingPage from '@/components/OfferLandingPage';
import { visibilityBoost } from '@/lib/offers';
import { offerMetadata } from '@/lib/offer-metadata';

export const metadata = offerMetadata(visibilityBoost);

export default function VisibilityBoostPage() {
  return <OfferLandingPage offerId="visibility-boost" />;
}
