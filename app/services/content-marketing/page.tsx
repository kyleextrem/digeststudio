import OfferLandingPage from '@/components/OfferLandingPage';
import { contentMarketing } from '@/lib/offers';
import { offerMetadata } from '@/lib/offer-metadata';

export const metadata = offerMetadata(contentMarketing);

export default function ContentMarketingPage() {
  return <OfferLandingPage offerId="content-marketing" />;
}
