import React from 'react';

export default function LastUpdated(props) {
  if (!props.lastUpdatedBy || !props.lastUpdatedAt) return null;

  // Debug: log the value to the browser console
  console.log('lastUpdatedAt:', props.lastUpdatedAt, typeof props.lastUpdatedAt);

  let dateStr = '';
  if (typeof props.lastUpdatedAt === 'number') {
    // Unix timestamp (seconds or milliseconds)
    if (props.lastUpdatedAt > 1000000000000) {
      // Milliseconds
      dateStr = new Date(props.lastUpdatedAt).toISOString().slice(0, 10);
    } else {
      // Seconds
      dateStr = new Date(props.lastUpdatedAt * 1000).toISOString().slice(0, 10);
    }
  } else if (typeof props.lastUpdatedAt === 'string') {
    // Try to parse as date string
    const d = new Date(props.lastUpdatedAt);
    if (!isNaN(d)) {
      dateStr = d.toISOString().slice(0, 10);
    } else {
      dateStr = props.lastUpdatedAt;
    }
  } else {
    dateStr = String(props.lastUpdatedAt);
  }

  return (
    <span>
      Last updated by {props.lastUpdatedBy} on {dateStr}
    </span>
  );
}
