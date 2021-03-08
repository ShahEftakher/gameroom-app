import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const CategoryFilter = ({
  getVideosByValorant,
  getVideosByR6,
  getVideosCSGO,
}) => {
  const tagOptions = [
    {
      key: 'Valorant',
      text: 'Valorant',
      value: 'Valorant',
      label: { color: 'red', empty: true, circular: true },
      onClick: getVideosByValorant,
    },
    {
      key: 'R6',
      text: 'R6',
      value: 'R6',
      label: { color: 'blue', empty: true, circular: true },
      onClick: getVideosByR6,
    },
    {
      key: 'CSGO',
      text: 'CSGO',
      value: 'CSGO',
      label: { color: 'black', empty: true, circular: true },
      onClick: getVideosCSGO,
    },
  ];
  return (
    <Dropdown className="me-5" text="Category" multiple icon="filter">
      <Dropdown.Menu>
        <Dropdown.Header icon="tags" content="Categories" />
        <Dropdown.Menu scrolling>
          {tagOptions.map((option) => (
            <Dropdown.Item key={option.value} {...option} />
          ))}
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryFilter;
