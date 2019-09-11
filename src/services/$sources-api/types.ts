import { ISource } from '@Model/sources/types';

export interface ISourcesResponse {
  status: string;
  sources: ISource[];
}
