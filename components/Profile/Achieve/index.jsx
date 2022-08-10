import React from 'react';

import styles from './achieve.module.scss';

export default function Achieve({ name = '' }) {
  return (
    <div className={styles.achieve}>
      <svg
        width="115"
        height="115"
        viewBox="0 0 115 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="115" height="115" rx="8" fill="#F1D7EC" />
        <path
          d="M77.9998 24.6667C74.9998 24.6667 71.3332 28 71.3332 31.3333H44.6665C44.6665 28 40.9998 24.6667 37.9998 24.6667H24.6665V54.6667C24.6665 58 27.9998 61.3333 31.3332 61.3333H38.6665C39.9998 68 44.3332 73.6667 54.6665 74.6667V81.6C44.6665 83.1333 44.6665 91.3333 44.6665 91.3333H71.3332C71.3332 91.3333 71.3332 83.1333 61.3332 81.6V74.6667C71.6665 73.6667 75.9998 68 77.3332 61.3333H84.6665C87.9998 61.3333 91.3332 58 91.3332 54.6667V24.6667H77.9998ZM37.9998 54.6667H31.3332V31.3333H37.9998V54.6667ZM84.6665 54.6667H77.9998V31.3333H84.6665V54.6667Z"
          fill="white"
        />
      </svg>

      <p className={styles.name}>{name}</p>
    </div>
  );
}
