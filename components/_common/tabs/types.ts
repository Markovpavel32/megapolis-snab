import { RouteLocationRaw } from 'vue-router';


export type Tab = {
  title: string;
  key: string;
  path?: string;
  to?: RouteLocationRaw;
};
