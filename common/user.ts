import { Organization } from './organization';

export interface User {
  id: number;
  orgIds: Array<Organization['id']>;
  name: string;
}
