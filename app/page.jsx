import { APP_NAME } from '@/lib/constants';
import Link from 'next/link';

export const metadata = {
  title: `Home | ${APP_NAME}`,
};
export default function HomePage() {
  return (
    <div>
      <h3 className="3xl">Welcome</h3>
      <Link href="/properties">Go to Properties</Link>
    </div>
  );
}
