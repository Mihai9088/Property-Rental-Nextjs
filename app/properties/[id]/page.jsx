import { APP_NAME } from '@/lib/constants';
import React from 'react';

export const metadata = {
  title: `Property | ${APP_NAME}`,
};

const PropertyPage = ({ params }) => {
  return <div>PropertyPage {params.id}</div>;
};

export default PropertyPage;
