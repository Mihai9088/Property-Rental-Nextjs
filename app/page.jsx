import Hero from '@/components/Hero';
import InfoBoxes from '@/components/InfoBoxes';

export const metadata = {
  title: 'Home',
};
export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
    </>
  );
}
