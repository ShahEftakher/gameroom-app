import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const VideoFilter = ({ getPopularVideo, getNewestVideo }) => {
  const tagOptions = [
    {
      key: 'Newest',
      text: 'Newest',
      value: 'Newest',
      label: { color: 'red', empty: true, circular: true },
      onClick: getNewestVideo,
    },
    {
      key: 'Most popular',
      text: 'Most popular',
      value: 'Most popular',
      label: { color: 'blue', empty: true, circular: true },
      onClick: getPopularVideo,
    },
  ];
  return (
    <Dropdown className="me-5" text="Filter Video" multiple icon="filter">
      <Dropdown.Menu>
        <Dropdown.Header icon="tags" content="Sort by" />
        <Dropdown.Menu scrolling>
          {tagOptions.map((option) => (
            <Dropdown.Item key={option.value} {...option} />
          ))}
        </Dropdown.Menu>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default VideoFilter;
