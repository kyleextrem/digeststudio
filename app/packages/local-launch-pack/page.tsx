import OfferLandingPage from '@/components/OfferLandingPage';
import { localLaunchPack } from '@/lib/offers';
import { offerMetadata } from '@/lib/offer-metadata';

export const metadata = offerMetadata(localLaunchPack);

export default function LocalLaunchPackPage() {
  return <OfferLandingPage offerId="local-launch-pack" />;
}
