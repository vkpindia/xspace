import { Component, OnInit } from '@angular/core';
import { SpaceXService } from '../../../services/space-x.service';
import { filerData, FilterT, FilterQueryParamT } from '../../../models/filter';
import { SpaceXRocordT } from '../../../models/scpacex.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.scss']
})

export class SpaceXComponent implements OnInit {

  public filterData: Array<FilterT>;
  public queryParam: FilterQueryParamT;
  public spaceXProgramList: Array<SpaceXRocordT>;
  public isLoading: boolean;
  public selectedFilter: string;
  public selectedFilterType: string;
  public url: string;

  constructor(private router: Router, private ar: ActivatedRoute, private ss: SpaceXService) {
    this.ar.queryParamMap.subscribe(queryParam => {
      this.url = queryParam['params'].url;
      console.log('this.url ', this.url);
    });
  }

  ngOnInit(): void {
    this.filterData = filerData;
    this.isLoading = true;
    this.queryParam = {
      launch_year: '',
      launch_success: '',
      land_success: ''
    };
    console.log(' this.url', this.url);
    this.getSpaceXData();
  }

  /**
   * @description Method for making query param for api
   * @author Virendra Pandey
   * @date 2020-09-27
   * @returns {void}
   * @memberof SpaceXComponent
   */
  public setQueryParams(type: string, value: any): void {
    this.selectedFilter = value;
    this.selectedFilterType = type;
    this.queryParam[type] = value;
    this.getSpaceXData();
  }

  /**
   * @description Method for getting all launched spaceX data from server
   * @author Virendra Pandey
   * @date 2020-09-27
   * @returns {void}
   * @memberof SpaceXComponent
   */
  public getSpaceXData(): void {
    let url = '';
    if (this.queryParam.launch_success) {
      url = url + '&launch_success=' + this.queryParam.launch_success;
    }
    if (this.queryParam.land_success) {
      url = url + '&land_success=' + this.queryParam.land_success;
    }
    if (this.queryParam.launch_year) {
      url = url + '&launch_year=' + this.queryParam.launch_year;
    }
    if (url) {
      this.router.navigate(['spaceX'], { queryParams: { url: url ? url : this.url } });
    }
    // console.log('url', url);
    this.ss.getSpaceXData(url ? url : this.url).subscribe(data => {
      if (data) {
        this.spaceXProgramList = data;
        this.isLoading = false;
      }
    });
  }
}
