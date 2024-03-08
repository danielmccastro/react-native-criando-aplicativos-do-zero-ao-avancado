import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import notifee, {
  authorizationStatus,
  EventType,
  AndroidImportance,
  TriggerType,
  RepeatFrequency
} from '@notifee/react-native';

export default function App() {
  const [statusNotification, setStatusNotification] = useState(true);

  useEffect(() => {
    async function getPermission() {
      const settings = await notifee.requestPermission();
      if (settings.authorizationStatus >= authorizationStatus.AUTHORIZED) {
        console.log('Permission: ', settings.authorizationStatus);
        setStatusNotification(true);
      } else {
        console.log('Usuario negou a permissao');
        setStatusNotification(false);
      }
    }
    getPermission();
  }, []);

  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('USUARIO DESCARTOU A NOTIFICACAO');
          break;
        case EventType.PRESS:
          console.log('TOCOU: ', detail.notification);
          break;
      }
    });
  }, []);

  notifee.onBackgroundEvent(async ({type, detail}) => {
    const {notification, pressAction} = detail;
    if (type === EventType.PRESS) {
      console.log('Tocou na notificacao background ', pressAction?.id);
      if (notification?.id) {
        await notifee.cancelNotification(notification?.id);
      }
    }
    console.log('Event background');
  });

  async function handleNotification() {
    if (!statusNotification) {
      return;
    }
    const channeld = await notifee.createChannel({
      id: 'lembrete',
      name: 'lembrete',
      vibration: true,
      importance: AndroidImportance.HIGH,
    });
    await notifee.displayNotification({
      id: 'lembrete',
      title: 'Estudar programacao',
      body: 'Lembrete para estudar react nativa amanha',
      android: {
        channelId: channeld,
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  async function handleScheduleNotification() {
    if (!statusNotification) {
      return;
    }

    const date = new Date(Date.now());
    date.setMinutes(date.getMinutes() + 1);
    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
    };

    await notifee.createTriggerNotification(
      {
        title: 'Lembrete Estudo',
        body: 'Estudar JavaScript as 15:30',
        android: {
          channelId: 'lembrete',
          importance: AndroidImportance.HIGH,
          pressAction: {
            id: 'default',
          },
        },
      },
      trigger,
    );
  }

  function handleListNotification() {
    notifee.getTriggerNotificationIds().then(ids => {
      console.log(ids);
    });
  }

  async function handleCancelNotification() {
    await notifee.cancelNotification('');
  }

  async function handleScheduleWeekly() {
    const date = new Date(Date.now());

    date.setMinutes(date.getMinutes() + 1);

    const trigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
      repeatFrquency: RepeatFrequency.WEEKLY
    };

    await notifee.createTriggerNotification(
      {
        title: 'Lembrete JavaScript',
        body: 'Esta na hora estudar JavaScript',
        android: {
          channelId: 'lembrete',
          importance: AndroidImportance.HIGH,
          pressAction: {
            id: 'default',
          },
        },
      },
      trigger,
    );
  }

  return (
    <View style={styles.container}>
      <Text>Notificacoes App</Text>
      <Button title="Enviar notificacao" onPress={handleNotification} />
      <Button
        title="Agendar notificacao"
        onPress={handleScheduleNotification}
      />
      <Button title="Listar notificacoes" onPress={handleListNotification} />
      <Button title="Cancelar notificacao" onPress={handleCancelNotification} />
      <Button title="Agendar semanal" onPress={handleScheduleWeekly} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
