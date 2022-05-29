import { sign, decode } from 'jsonwebtoken';
import { config } from '../config';
export class TokenManager {
  async createToken(payload): Promise<string> {
    return sign(payload, config.JWT_SECRET, {
      algorithm: config.JWT_ALGORITHM,
      expiresIn: config.JWT_EXPIRES_IN,
    });
    // return new Promise((resolve, reject) => {});
  }
  async decodeToken(token: string): Promise<any> {
    return decode(token, { complete: true })?.payload;
  }
}
