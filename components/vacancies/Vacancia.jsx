import React from 'react';

import Button from '../Common/Button/Button';

import styles from './vacancies.module.scss';

export default function Vacancia({
  text = '',
  title = '',
  advantages = [],
  price = '',
  image = '',
  y = 'n',
}) {
  return (
    <div className={styles.vacan}>
      <div className={styles.header}>
        <div>
          {!(image.length === 0) ? (
            <img alt="logo" className={styles.logo} src={image} />
          ) : (
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
            >
              <circle cx="20" cy="20" r="20" fill="url(#pattern0)" />
              <circle
                cx="20"
                cy="20"
                r="19.5"
                stroke="#AA139B"
                strokeOpacity="0.15"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_433_919"
                    transform="translate(0 0.336134) scale(0.00840336)"
                  />
                </pattern>
                <image
                  id="image0_433_919"
                  width="119"
                  height="39"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAAnCAMAAAACaSdPAAAAaVBMVEX////mAADlAADoNDTsTk7/+/v3uLj+9PT97+/sUlLweHj3vLztWlrrRUX85ub72dn4wcH1oqLpMDDyjo784ODxgoL2sLDtYmL60tL0nJzwcXHnFxfoJCT0l5f5zc3nERHrPj7uaWn1qKhkSfiMAAADW0lEQVRYhe1XXZejIAyFqGjVqlVRq1Tb/v8fuQRQQzudnTPndB52Jy+Wj+SS5CZQxn7lV/5pKeynHCc19eVPoQ5jbr7VBJxzUD8CHIkDQGjgERWBw+jtqMmp5sANbqm4E4jfjdoosB5qv6/g40bi3Jzm79sWl+ZUfRS54QZbZFnUAw9XYI1b6eij8LSlOm1CR9Zs0gmUrJFSdm5lvlp18NVRer47GLIGQBY20tCwaNwWYTkRWEiJhQ4EfuIQdhnMDFGfOuZLzTeB/M7hELGMo2oeRTmQxR03OQKvdm+10cKeZt98xRwdiDqHyscNyJomV20M61hljIXEEB+YPFuN6Ag2CUYyXD04x/f9N8boqXGqeInL+TTQ+JHza1hYTEVH0pS3tJtKGoyeIInOh+XQfYIryIraVY4xOg8jTjfWHhiOD5Md2SO1xJJafFjuccLHhTtZmHe+jaw15YWV1azkxxQWyzqqDafFg49mKVR/xaWhkBsXGzbUdlCxbD+NZEW9jxqjdHgChryAZ+OPcSakG1cTglWuwkHM1GJ2pHw3cS8U9wW7bWC2TV/k1c32MDWzC0wujWn9QSCdXBOPjIvzNjaVpg+esZe4k4bZmrLxF0tT8nvbnld7Xl5COhijrosdpyE1x4aDOcyQ9nJgL3Eh7wx1rSCB9HHj3Dafs90jCGeh31hmhuhWk6CjOtsnVD+yl0JxQx1SyN2C5jPIKKldU0iu3BJ+g4I+weboRxtOwlK3wvut+CquZrFjZtLjr1bB2iF6R9rYsQnqmJFq27661+ZYVIoD7QaFlPMnuCwF03xKfRNkrMNp0zr1CdYKLG0GA3snreU2rn0CsEcy00DJk2XQV23xGa4GxspZoJ7ZyXmA0yNshW8yHzgr8dXsqcoNd02UNrSWR3zXBfGyfi0NIl37jbbbsnjtAlKIG9joMRtp4NuFWoEtXldi+/MIL0aeZm0xnLUCXF7lF5S7cHJY2SVt2vBanM67zuA9+rT7mLkSaxygJ2+Lhm8Xcv1wDW64oC5r/IvjyiVW3kwDWgLpJaehFImUtdn2QdBn3pOmvZnrfakvT8wOrEN1R15xCSFiPOvHy/eftJFWzx57hsPVwREfrLxXdNPu5/e/lJ9EpT/2h8STdz/Of+U/kz8beibh1c+rSAAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
          )}
        </div>
        <div>{price}</div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.elipses}>
        {advantages.map((item) => (
          <div className={styles.elipse}>{item}</div>
        ))}
      </div>
      <div className={styles.desc}>{text}</div>
      <div className={styles.buttons}>
        {y === 'y' ? (
          <>
            <Button
              className={`${styles.button} ${styles.response} ${styles.good}`}
              type="button"
            >
              Статус: Приглашение
            </Button>
            <Button className={`${styles.button}`} type="button">
              Контакты
            </Button>
          </>
        ) : (
          <>
            <Button className={styles.button} type="button">
              Откликнуться
            </Button>
            <Button
              className={`${styles.button} ${styles.response}`}
              type="button"
            >
              Откликнулось: 0
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
