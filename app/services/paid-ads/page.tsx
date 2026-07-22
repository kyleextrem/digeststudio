import OfferLandingPage from '@/components/OfferLandingPage';
import { paidAds } from '@/lib/offers';
import { offerMetadata } from '@/lib/offer-metadata';

export const metadata = offerMetadata(paidAds);

export default function PaidAdsPage() {
  return <OfferLandingPage offerId="paid-ads" />;
}
