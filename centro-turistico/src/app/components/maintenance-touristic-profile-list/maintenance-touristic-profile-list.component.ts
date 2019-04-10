import { Component, OnInit } from '@angular/core';
import { SiteService, UserService } from 'src/app/services/index';
import { TouristicCentre, User } from 'src/app/interfaces/index';
import { Router } from '@angular/router';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-maintenance-touristic-profile-list',
  templateUrl: './maintenance-touristic-profile-list.component.html',
  styleUrls: ['./maintenance-touristic-profile-list.component.css']
})
export class MaintenanceTouristicProfileListComponent implements OnInit {

  tour_list: TouristicCentre[];
  user: User;
  constructor(
    private _siteService: SiteService,
    private _userService: UserService,
    private _router: Router,
    private _permission: PermissionService
    ) { }

  getSites() {
    this.tour_list = this._siteService.getSiteByEditor(this.user.idUser);
  }

  addTourProfile() {
    this._router.navigate(['dashboard/mainte-tour-set']);
  }

  updateTourProfile(id: number) {
    this._router.navigate(['dashboard/mainte-tour-up', id]);
  }
  ngOnInit() {
    this.user = this._userService.getUser();
    this.getSites();
  }

}
