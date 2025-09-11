import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import PropertyCard from '@/components/PropertyCard';
import PropertySearchForm from '@/components/PropertySearchForm';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import { convertToSerializeableObject } from '@/utils/convertToObject';
import { normalizeString } from '@/utils/normalizeString';

const SearchResultsPage = async (props) => {
  await connectDB();

  // await pe searchParams ca să nu mai urle compilatorul
  const { location = '', propertyType = 'All' } = (await props.searchParams) || {};

  const normalizedLocation = normalizeString(location);

  const propertiesQueryResults = await Property.find().lean();
  const allProperties = convertToSerializeableObject(propertiesQueryResults);

  const properties = allProperties.filter((p) => {
    const haystack = normalizeString(
      `${p.name} ${p.description} ${p.location.street} ${p.location.city} ${p.location.state} ${p.location.zipcode}`
    );

    const matchesLocation = normalizedLocation === '' || haystack.includes(normalizedLocation);

    const matchesType =
      propertyType === 'All' || normalizeString(p.type).includes(normalizeString(propertyType));

    return matchesLocation && matchesType;
  });

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <Link href="/properties" className="flex items-center text-blue-500 hover:underline mb-3">
            <FaArrowAltCircleLeft className="mr-2 mb-1" /> Back To Properties
          </Link>
          <h1 className="text-2xl mb-4">Search Results</h1>
          {properties.length === 0 ? (
            <p>No search results found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default SearchResultsPage;
