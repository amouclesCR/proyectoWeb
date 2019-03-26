import { Injectable } from '@angular/core';
import sites from '../../assets/data/touristic-centres.json';
import {TouristicCentre} from '../interfaces/index';
import {} from '../services/index';
import { DataStorageService } from './data-storage.service.js';
@Injectable({
  providedIn: 'root'
})
export class SiteService {

  sites: TouristicCentre[] = sites;
  showedSites: TouristicCentre[];
  constructor(public _dataStorage: DataStorageService) {
    this.showedSites = [];
   }

  getSite(name: string) {
    if (!name) {
      this.showedSites = Object.assign([],this.sites);
    }
    else {
      name = name.toLowerCase();
      this.showedSites = [];
      this.sites.forEach((site) => {
        if (site.name.toLowerCase().includes(name)) {
          this.showedSites.push(site);
        }
      });
    }
  }

  getSiteById(id: number): TouristicCentre {
    if (id) {
      let list: TouristicCentre[];
      let aux: TouristicCentre;
      list = this._dataStorage.getObjectValue('sites');
      aux = list.find(item => item.idTouristicCentre == id);
      return aux;
    }
    return null;
  }
}
