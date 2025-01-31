import { useState } from 'react';
import styles from '../styles/Home.module.css';
import CountrySelect from '../components/CountrySelect';

export default function Home() {
  const [capital, setCapital] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCountrySelect = async (country) => {
    if (!country) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/capital?country=${encodeURIComponent(country)}`);
      const data = await response.json();
      setCapital(data.capital);
    } catch (error) {
      console.error('Error:', error);
      setCapital('Error fetching capital');
    }
    setLoading(false);
  };

  return (
  <div>
    <h1>European Capitals Finder</h1>
    {loading && <p>Loading...</p>}
    {capital && !loading && (
      <div>
        <p>Capital: {capital}</p>
      </div>
    )}
  </div>
);
}
