import { readFile as fsReadFile, PathOrFileDescriptor } from "fs";

export const readFile = (path: string, options?: any) => {
  return new Promise((resolve, reject) => {
    fsReadFile(path, options as any, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};
