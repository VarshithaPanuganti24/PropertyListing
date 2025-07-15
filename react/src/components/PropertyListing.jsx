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



// import { useEffect, useState } from "react";
// import { PropertyCard } from "./PropertyCard";

// export default function PropertyListing() {
//   const [properties, setProperties] = useState([]);
//   const [filteredProperties, setFilteredProperties] = useState([]);
//   const [locations, setLocations] = useState([]);
//   const [selectedLocations, setSelectedLocations] = useState([]);
//   const [superHostOnly, setSuperHostOnly] = useState(false);
//   const [bedroomFilter, setBedroomFilter] = useState(0);

//   useEffect(() => {
//     fetch(
//       "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setProperties(data);
//         setFilteredProperties(data);
//         const uniqueLocations = [
//           ...new Set(data.map((property) => property.location)),
//         ];
//         setLocations(uniqueLocations);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   useEffect(() => {
//     let filtered = properties;

//     if (selectedLocations.length > 0) {
//       filtered = filtered.filter((property) =>
//         selectedLocations.includes(property.location)
//       );
//     }

//     if (superHostOnly) {
//       filtered = filtered.filter((property) => property.superHost);
//     }

//     if (bedroomFilter !== 0) {
//       filtered = filtered.filter(
//         (property) => property.bedrooms === bedroomFilter
//       );
//     }

//     setFilteredProperties(filtered);
//   }, [selectedLocations, superHostOnly, bedroomFilter, properties]);

//   const toggleLocation = (location) => {
//     setSelectedLocations((prev) =>
//       prev.includes(location)
//         ? prev.filter((loc) => loc !== location)
//         : [...prev, location]
//     );
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Property Listing</h1>

//       <div className="flex flex-wrap gap-4 mb-6">
//         {locations.map((location) => (
//           <button
//             key={location}
//             onClick={() => toggleLocation(location)}
//             className={`px-3 py-1 rounded-full border ${selectedLocations.includes(location) ? "bg-blue-500 text-white" : "bg-white text-black"}`}
//           >
//             {location}
//           </button>
//         ))}

//         <button
//           onClick={() => setSuperHostOnly(!superHostOnly)}
//           className={`px-3 py-1 rounded-full border ${superHostOnly ? "bg-green-500 text-white" : "bg-white text-black"}`}
//         >
//           Superhost
//         </button>

//         <select
//           value={bedroomFilter}
//           onChange={(e) => setBedroomFilter(Number(e.target.value))}
//           className="px-3 py-1 border rounded"
//         >
//           <option value={0}>All Bedrooms</option>
//           <option value={1}>1 Bedroom</option>
//           <option value={2}>2 Bedrooms</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {filteredProperties.map((property) => (
//           <PropertyCard key={property.id} property={property} />
//         ))}
//       </div>
//     </div>
//   );
// }