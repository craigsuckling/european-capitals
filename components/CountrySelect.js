import { useState } from 'react';
import styles from '../styles/Home.module.css';

const COUNTRIES = [
  'France',
  'Germany',
  'Italy',
  'Spain',
  'United Kingdom',
  'Netherlands',
  'Belgium',
  'Portugal',
  'Sweden',
  'Norway'
];

export default function CountrySelect({ onSelect }) {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelect(selectedCountry);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className={styles.select}
        required
      >
        <option value="">Select a country</option>
        {COUNTRIES.map(country => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <button type="submit">Find Capital</button>
    </form>
  );
}
