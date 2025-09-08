import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';
import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from '@/lib/constants';
import Footer from '@/components/Footer';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
