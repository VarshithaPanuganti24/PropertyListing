export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <div className="flex justify-between items-center mb-2">
        {property.superhost && <span className="text-xs border border-black rounded-full px-2 py-1 uppercase">Superhost  </span>}
        <span className="text-xs text-gray-500">{property.location}</span>
      </div>
      <h2 className="font-semibold mb-1 truncate" title={property.title}>{property.title}</h2>
      <p className="text-sm text-gray-600 mb-1">{property.description}</p>
      {property.capacity && (

      <p className="text-sm text-gray-600 mb-1">{property.capacity.bedroom} bedroom {property.capacity.people} Guest </p>
      )}
      <p className="text-sm font-semibold">{property.price} • {property.rating} ★ </p>
    </div>
  )
}