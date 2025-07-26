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
      matthew: [{ chapter: 1, start: 1, end: 17 }],   // 예수 그리스도의 계보
      mark:    [{ chapter: 1, start: 1, end: 1 }],    // 복음의 시작
      luke:    [{ chapter: 1, start: 1, end: 4 }],    // 누가복음 서문
      john:    [
        { chapter: 1, start: 1, end: 5 },             // 태초의 말씀
        { chapter: 1, start: 9, end: 14 },            // 참 빛이신 말씀
        { chapter: 1, start: 16, end: 18 },           // 말씀이 육신이 되심
      ],
    },
  },
  {
    key: 'C',
    label: 'C. 탄생 이야기',
    highlights: {
      luke: [
        { chapter: 1, start: 5, end: 25 },   // 세례 요한의 탄생 예고
        { chapter: 1, start: 26, end: 38 },  // 예수 그리스도의 탄생 예고
        { chapter: 1, start: 39, end: 56 },  // 마리아와 엘리사벳의 만남
        { chapter: 1, start: 57, end: 80 },  // 세례 요한의 탄생
      ],
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

function getVerseHighlightClass(gospelKey, chapterIndex, verseIndex, selectedGroups) {
  const highlightMap = getHighlightMap(selectedGroups);
  if (highlightMap[gospelKey] && 
      highlightMap[gospelKey][chapterIndex] && 
      highlightMap[gospelKey][chapterIndex].has(verseIndex)) {
    return styles.highlighted;
  }
  return '';
}

export default function BibleStudyChart() {
  const [selectedGroups, setSelectedGroups] = useState({ B: false });

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
            <div className={styles.chaptersContainer}>
              {gospel.chapters.map((verseCount, chapterIndex) => {
                // Check if any groups are selected
                const hasSelectedGroups = Object.values(selectedGroups).some(Boolean);
                
                // If groups are selected, check if this chapter should be shown
                if (hasSelectedGroups) {
                  const highlightMap = getHighlightMap(selectedGroups);
                  const shouldShowChapter = highlightMap[gospel.key] && highlightMap[gospel.key][chapterIndex];
                  
                  if (!shouldShowChapter) {
                    return null; // Don't render this chapter
                  }
                }
                
                const verses = [];
                for (let v = 1; v <= verseCount; v++) {
                  verses.push(v);
                }
                
                return (
                  <div key={chapterIndex} className={styles.chapterSection}>
                    <div className={styles.chapterTitle}>Chapter {chapterIndex + 1}</div>
                    <div className={styles.verseContainer}>
                      {verses.map((verse) => (
                        <span 
                          key={verse} 
                          className={`${styles.verse} ${getVerseHighlightClass(gospel.key, chapterIndex, verse - 1, selectedGroups)}`}
                        >
                          {verse}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 