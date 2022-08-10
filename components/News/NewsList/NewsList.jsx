import React from 'react';

import NewsItem from '../NewsItem/NewsItem';

export default function NewsList({ news = [] }) {
  if (news.length === 0 || !news) {
    return <div>Нету кативных мероприятий </div>;
  }
  return (
    <ul>
      {news.map((event) => (
        <NewsItem
          key={event.post_id}
          date={event.time_value}
          description={event.description_value}
          title={event.name_value}
          count={event.volunteers_value}
          tgId={event.telegram_id_value}
          place={event.place_value}
          href={`/news/${event.post_id}`}
        />
      ))}
    </ul>
  );
}
