import { PushNotificationScope } from '@generated/graphql';
import axios from 'axios';
import { getAuthToken } from './AuthService';

export default async function sendPushNotification(
  to: string[],
  scopes: PushNotificationScope[],
  payload: any
) {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_ENDPOINT_URL}/notifications/send`,
      {
        ids: to,
        scopes: scopes,
        payload: payload
      },
      {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`
        }
      }
    );
  } catch (e) {
    // swallow
  }
}
