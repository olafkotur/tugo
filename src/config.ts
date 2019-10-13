import { FIREBASE_API_KEY } from 'react-native-dotenv';

interface IConfig {
  firebase: { apiKey: string };
}

export const config: IConfig = {
  firebase: { apiKey: FIREBASE_API_KEY || '' },
};
