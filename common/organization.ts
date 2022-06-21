export enum Version {
  PersonalFree = 0,
}

export interface Organization {
  id: number;
  name: string;
  version: Version;
}
