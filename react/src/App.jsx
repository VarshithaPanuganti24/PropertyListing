import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropertyListing from './components/PropertyListing';
import Hero from './components/Hero';
import Filters from './components/Filters';
import { useEffect } from 'react';



function App() {

  const [properties, setProperties] = useState([])
  const [selectedLocation, setSelectedLocation] = useState('All')
  const [superhostOnly, setSuperhostOnly] = useState(false)
  const [propertyType, setPropertyType] = useState('')

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json')
      .then(res => res.json())
      
      .then(data => {console.log('Fetched Data:', data); setProperties(data)})
      
  }, [])

  const filteredProperties = properties
    .filter(prop => selectedLocation === 'All' || prop.location === selectedLocation)
    .filter(prop => !superhostOnly || prop.superhost)
     .filter(prop => {
      if ( propertyType === '' ) return true;
      const bedroomCount =parseInt(propertyType);
      return prop.capacity && prop.capacity.bedroom === bedroomCount;

     })
      

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Filters
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        superhostOnly={superhostOnly}
        setSuperhostOnly={setSuperhostOnly}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
      />
      <PropertyListing properties={filteredProperties} />
    </div>
  )
}


export default App
