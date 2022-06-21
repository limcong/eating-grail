import { Organization } from './organization';

export interface Field {
  orgId: Organization['id'];
  id: number;
  name: string;
  // template: A, B, C
  values: string;
  defaultValue: number;
}
