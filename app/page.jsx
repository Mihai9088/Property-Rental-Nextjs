import { APP_NAME } from '@/lib/constants';

export const metadata = {
  title: `Home | ${APP_NAME}`,
};
export default function HomePage() {
  return <div className="text-red-600">Home Page</div>;
}
