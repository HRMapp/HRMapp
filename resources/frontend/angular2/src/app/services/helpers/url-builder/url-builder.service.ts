import { Injectable } from '@angular/core';
import {PlatformLocation} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UrlBuilderService {

    public base_url: string = ''

  constructor(
      private platform_location: PlatformLocation,
  ) {
        this.base_url = this.platform_location.protocol + '//' + this.platform_location.hostname;
        console.log(this.base_url);
  }
}
