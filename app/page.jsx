import { APP_NAME } from '@/lib/constants';
import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';

export const metadata = {
  title: `Home | ${APP_NAME}`,
};
export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
    </>
  );
}
