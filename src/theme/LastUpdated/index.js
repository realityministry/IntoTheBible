import React from 'react';
import dayjs from 'dayjs';

export default function LastUpdated(props) {
  // Debug: log all props
  console.log('LastUpdated props:', props);

  const { lastUpdatedAt, formattedLastUpdatedAt, lastUpdatedBy } = props;
  let formattedDate = '';
  if (lastUpdatedAt) {
    const ms = lastUpdatedAt > 1000000000000 ? lastUpdatedAt : lastUpdatedAt * 1000;
    formattedDate = dayjs(ms).format('YYYY-MM-DD');
  } else if (formattedLastUpdatedAt) {
    formattedDate = formattedLastUpdatedAt;
  }

  return (
    <span>
      Last updated
      {lastUpdatedBy && <> by {lastUpdatedBy}</>}
      {formattedDate && <> on {formattedDate}</>}
    </span>
  );
}
