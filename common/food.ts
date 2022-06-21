import { Organization } from './organization';

export interface Food {
  orgId: Organization['id'];
  id: number;
  name: string;
  // JSON : { [ key: Field['id'] ] : number }
  filters: string;
}
