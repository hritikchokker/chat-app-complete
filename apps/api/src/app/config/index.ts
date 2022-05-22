import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize';

export type ConfigModel = {
  JWT_SECRET: string;
  SALT: number;
  DB_NAME: string;
  DB_DIALECT: Dialect;
  DB_HOST: string;
  DB_PASSWORD: string;
  JWT_ALGORITHM: string;
  JWT_EXPIRES_IN: string;
  MAIL_HOST: string;
  MAIL_PORT: number;
  MAIL_SECURE: boolean;
  MAIL_USERNAME: string;
  MAIL_PASSWORD: string;
  MAIL_FROM_ID: string;
};

export const config = dotenv.config()?.parsed as unknown as ConfigModel;
