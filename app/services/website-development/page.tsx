import OfferLandingPage from '@/components/OfferLandingPage';
import { websiteDesign } from '@/lib/offers';
import { offerMetadata } from '@/lib/offer-metadata';

export const metadata = offerMetadata(websiteDesign);

export default function WebsiteDevelopmentPage() {
  return <OfferLandingPage offerId="website-development" />;
}
