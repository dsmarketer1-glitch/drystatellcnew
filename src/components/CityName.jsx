import React from 'react';
import { Link } from 'react-router-dom';
import { citySlug, getCityByName } from '../data/locations';

// Renders a city/area name. If a dedicated location page exists for that name,
// it renders a Link to it; otherwise it renders the plain text unchanged.
// Meant to be placed inside an existing <li> or list item.
function CityName({ name, className = '' }) {
  const hasPage = Boolean(getCityByName(name));
  if (!hasPage) return <>{name}</>;
  return (
    <Link to={`/${citySlug(name)}`} className={className}>
      {name}
    </Link>
  );
}

export default CityName;
