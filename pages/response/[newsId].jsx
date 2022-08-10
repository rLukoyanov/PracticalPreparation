import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import VolonteerSVG from '../../public/images/events/volonteer.svg';
import DateSVG from '../../public/images/events/date.svg';
import LocationSVG from '../../public/images/events/location.svg';
import TimeSVG from '../../public/images/events/time.svg';
import AuthContext from '../../store/auth-context';
import Button from '../../components/Common/Button/Button';

import styles from '../../components/News/Event.module.scss';

import protocol from '../../protocol';

export default function NewsItemPage({
  time = '',
  description = '',
  timeTable = '',
  volCount = 0,
  newsId = 0,
  hostName = '',
  place = ' ',
  tgId = '',
  target = '',
  err = '',
  name = '',
}) {
  const router = useRouter();
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState(
    'Вы успешно записались на мероприятие!',
  );
  const [isActive, setIsActive] = useState(false);
  const authCtx = useContext(AuthContext);
  const userId = authCtx.userData.id;

  const closeAlert = () => {
    setAlert(false);
  };

  const returnBack = () => {
    router.push('/news');
  };

  console.log(err);

  const onRegOnIvent = async () => {
    setIsActive(true);

    try {
      console.log('start registration on event');

      const { data } = await axios.post(
        `${protocol}${hostName}/api/news/regOnEvent`,
        {
          event_id: Number(newsId),
          user_id: userId,
        },
      );

      if (data === 1) {
        setAlertText('Вы успешно записались на мероприятие!');
        setAlert(true);
      }
      if (data === 'time is out') {
        setAlertText('Время на запись уже прошло.');
        setAlert(true);
      }
      if (data === 'U have been registrated on this event yet') {
        setAlertText('Вы уже записались на мероприятие!');
        setAlert(true);
      }

      console.log(data);
    } catch (err1) {
      console.log('fail to registration on event', err1);
    }
  };

  const year = time[0] + time[1] + time[2] + time[3];
  const mounths = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ];

  const day = time[6] + time[7];
  const PLACE = place.slice(0);
  const TIMETABLE = timeTable.slice(0);

  return (
    <div className={styles.event}>
      <div className={styles.card}>
        <h2>О чем это мероприятие?</h2>
        <p>{description}</p>
        <h2>Какая цель у мероприятия?</h2>
        <p>{target}</p>
        <h2>Требования к волонтерам</h2>
        <ul>
          <li>Возраст от 16 лет;</li>
          <li>открытость;</li>
          <li>коммуникабельность;</li>
          <li> готовность помогать на улице;</li>
          <li>
            отсутствие симптомов ОРВИ/ОРЗ/Covid-19 в дни мероприятия и за 14
            дней до начала.
          </li>
          <li>
            при необходимости быть готовым предоставить результаты
            отрицательного ПЦР-теста.
          </li>
          <li>
            Функции волонтёров – навигация, информирование участников, встреча и
            сопровождения участников, помощь организаторам в сборе подарков для
            детей.
          </li>
        </ul>
        <h2>График участия</h2>
        {timeTable}
        <h2>Адрес</h2>
        <p>{place}</p>
      </div>
      <div className={styles.registrationBlock}>
        <div className={styles.event_name}>{name}</div>
        <ul>
          <p>
            <DateSVG />
            {`${day} ${mounths[Number(time[4] + time[5] - 1)]} ${year}`}
          </p>
          <p>
            <LocationSVG />
            {place.substring(0, 16)}
            {PLACE.length >= 16 ? '...' : ''}
          </p>
          <p>
            <VolonteerSVG />
            Требуется
            <span>{Number(volCount)}</span>
            волонтеров
          </p>
          <p>
            <TimeSVG />
            {timeTable.substring(0, 16)}
            {TIMETABLE.length >= 16 ? '...' : ''}
          </p>
        </ul>
        <Button disabled={isActive} type="button" onClick={onRegOnIvent}>
          Записаться
        </Button>
      </div>
      {alert ? (
        <div className={styles.alertBG}>
          <div className={styles.alert}>
            <h1>Благодарим!</h1>
            <p>
              {alertText}
              <br />
              <a href={tgId}>{tgId}</a>
            </p>
            <div className={styles.buttons}>
              <Button className={styles.alertButton} onClick={returnBack}>
                К событиям
              </Button>
              <Button className={styles.alertButton} onClick={closeAlert}>
                Хорошо
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { newsId } = context.params;
  const { req } = context;
  try {
    const { data } = await axios.get(
      `${protocol}${req.headers.host}/api/news/${newsId}`,
    );
    return {
      props: {
        timeTable: data.event_timetable,
        id: data.event_id,
        time: data.event_time,
        name: data.event_name,
        volCount: data.event_vol,
        tgId: data.telegram_id,
        description: data.event_description,
        newsId,
        hostName: req.headers.host,
        place: data.event_place,
        target: data.event_target,
      },
    };
  } catch (err) {
    return {
      props: {
        err: JSON.stringify(err),
      },
    };
  }
};
