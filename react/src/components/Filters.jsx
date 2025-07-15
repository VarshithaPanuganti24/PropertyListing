

const locations = ['All', 'Norway', 'Finland', 'Sweden', 'Switzerland']
const propertyTypes = ['', '1 bedroom', '2 bedroom', ]

export default function Filters({
  selectedLocation,
  setSelectedLocation,
  superhostOnly,
  setSuperhostOnly,
  propertyType,
  setPropertyType
}) {
  return (
    <div className="container mx-auto px-4 py-6 flex flex-wrap items-center gap-4 justify-center">
      {locations.map(loc => (
        <button
          key={loc}
          onClick={() => setSelectedLocation(loc)}
          className={`px-4 py-2 rounded-full ${selectedLocation === loc ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {loc}
        </button>
      ))}
      <button
        onClick={() => setSuperhostOnly(prev => !prev)}
        className={`px-4 py-2 rounded-full ${superhostOnly ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        Superhost
      </button>
      <select
        value={propertyType}
        onChange={e => setPropertyType(e.target.value)}
        className="px-4 py-2 rounded-full bg-gray-200"
      >
        <option value="">All Types</option>
        {propertyTypes.filter(type => type !== '').map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  )
}
