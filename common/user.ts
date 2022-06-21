import { Organization } from './organization';

export interface User {
  id: number;
  orgId: Organization['id'];
  name: string;
}
