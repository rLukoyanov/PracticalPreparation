import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from '../components/Common/Input/Input';
import Button from '../components/Common/Button/Button';

export default function Contacts() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
  }, [enteredName, enteredEmail, enteredMessage]);

  const handleSubmit = (e) => {
    if (enteredName && enteredEmail && enteredMessage) {
      setLoading(true);
      axios.post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: 'service_c0h57cc',
        template_id: 'volonteria',
        user_id: 'user_tEiVSWn2tmbfhXnLFHj0G',
        template_params: {
          name: enteredName,
          email: enteredEmail,
          message: enteredMessage,
        },
      });
    } else {
      setError('Заполните поля');
    }
    e.preventDefault();
  };

  return (
    <form style={{ margin: '0 auto' }}>
      <Input
        name="email"
        type="email"
        value={enteredEmail}
        onChange={(e) => setEnteredEmail(e.target.value)}
        placeholder="email"
        required
      />
      <Input
        name="Ваше имя"
        type="text"
        value={enteredName}
        onChange={(e) => setEnteredName(e.target.value)}
        placeholder="имя"
        required
      />
      <Input
        name="Сообщение"
        type="text"
        value={enteredMessage}
        onChange={(e) => setEnteredMessage(e.target.value)}
        placeholder="Сообщение"
        required
      />
      <p style={{ color: 'red' }}>{error}</p>
      <br />
      <Button disabled={loading} type="submit" onClick={handleSubmit}>
        Отправить
      </Button>
    </form>
  );
}
