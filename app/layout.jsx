import '@/assets/styles/globals.css';
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from '@/lib/constants';

export const metadata = {
  title: {
    template: '%s | MV Estates',
    default: `${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: 'rental, property, real estate',
  metadataBase: new URL(SERVER_URL),
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
