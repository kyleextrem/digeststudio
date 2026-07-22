import OfferLandingPage from '@/components/OfferLandingPage';
import { advancedSeo } from '@/lib/offers';
import { offerMetadata } from '@/lib/offer-metadata';

export const metadata = offerMetadata(advancedSeo);

export default function AdvancedSeoPage() {
  return <OfferLandingPage offerId="advanced-seo" />;
}
