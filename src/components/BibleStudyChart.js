import React, { useState } from 'react';
import styles from './BibleStudyChart.module.css';

const GOSPELS = [
  {
    key: 'matthew',
    name: '마태복음 (Matthew)',
    chapters: [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20],
  },
  {
    key: 'mark',
    name: '마가복음 (Mark)',
    chapters: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20],
  },
  {
    key: 'luke',
    name: '누가복음 (Luke)',
    chapters: [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53],
  },
  {
    key: 'john',
    name: '요한복음 (John)',
    chapters: [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25],
  },
];

const CHAPTER_GROUPS = [
  {
    key: 'A',
    label: 'A. 복음서 소개',
    highlights: {}, // No highlights for now
  },
  {
    key: 'B',
    label: 'B. 복음서 서론',
    highlights: {
      matthew: [{ chapter: 1, start: 1, end: 17 }],
      mark:    [{ chapter: 1, start: 1, end: 1 }],
      luke:    [{ chapter: 1, start: 1, end: 4 }],
      john:    [{ chapter: 1, start: 1, end: 18 }],
    },
  },
];

function getHighlightMap(selectedGroups) {
  // Returns a map: gospelKey -> {chapterIdx: Set of verseIdx}
  const map = {};
  for (const group of CHAPTER_GROUPS) {
    if (!selectedGroups[group.key]) continue;
    for (const gospelKey in group.highlights) {
      if (!map[gospelKey]) map[gospelKey] = {};
      for (const range of group.highlights[gospelKey]) {
        const chIdx = range.chapter - 1;
        if (!map[gospelKey][chIdx]) map[gospelKey][chIdx] = new Set();
        for (let v = range.start - 1; v < range.end; v++) {
          map[gospelKey][chIdx].add(v);
        }
      }
    }
  }
  return map;
}

export default function BibleStudyChart() {
  const [selectedGroups, setSelectedGroups] = useState({ B: false });

  const highlightMap = getHighlightMap(selectedGroups);

  const handleCheckbox = (key) => {
    setSelectedGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <div className={styles.checkboxRow}>
        {CHAPTER_GROUPS.map((group) => (
          <label key={group.key} className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={!!selectedGroups[group.key]}
              onChange={() => handleCheckbox(group.key)}
            />
            {group.label}
          </label>
        ))}
      </div>
      <div className={styles.gridWrapper}>
        {GOSPELS.map((gospel) => (
          <div key={gospel.key} className={styles.gospelTableWrapper}>
            <div className={styles.gospelTitle}>{gospel.name}</div>
            <table className={styles.gospelTable}>
              <tbody>
                {gospel.chapters.map((verseCount, chapterIdx) => (
                  <tr key={chapterIdx}>
                    <td className={styles.chapterCell}>{chapterIdx + 1}</td>
                    {Array.from({ length: verseCount }, (_, vIdx) => {
                      const isHighlighted =
                        highlightMap[gospel.key] &&
                        highlightMap[gospel.key][chapterIdx] &&
                        highlightMap[gospel.key][chapterIdx].has(vIdx);
                      return (
                        <td
                          key={vIdx}
                          className={
                            styles.verseCell + (isHighlighted ? ' ' + styles.highlight : '')
                          }
                        >
                          {vIdx + 1}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
} 