import React from 'react';
import clsx from 'clsx';

export default function VerseAdmonition({children, title}) {
  return (
    <div className="verse-admonition">
      <div className="verse-admonition-heading">
        <span className="verse-icon">📖</span>
        <span className="verse-title">{title}</span>
      </div>
      <div className="verse-content">
        {children}
      </div>
    </div>
  );
} 