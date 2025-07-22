import PropertyCard from './PropertyCard'

export default function PropertyListing({ properties }) {
  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {properties.map(prop => (
        <PropertyCard key={prop.id} property={prop} />
      ))}
    </div>
  )
}



