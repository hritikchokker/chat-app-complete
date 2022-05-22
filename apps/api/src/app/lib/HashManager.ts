import { compareSync, hashSync } from 'bcryptjs';
import { config } from '../config';

export class HashManager {
  createHashValue(password: string): string {
    return hashSync(password, config.SALT);
  }
  decryptHashValue(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }
}
