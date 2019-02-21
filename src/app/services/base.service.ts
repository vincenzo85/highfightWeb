import {ProfilerConstants} from '../_utils/profiler-constants';
import {Injectable} from '@angular/core';

@Injectable()
export class BaseService {
  baseApiUrl = ProfilerConstants.API_URL_PREFIX;

  constructor() { }

  public buildAPiUrl(apiUri: string)  {
    return this.baseApiUrl + apiUri;
  }
}
