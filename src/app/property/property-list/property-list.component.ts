import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/models/Ipropertybase';
import { Property } from 'src/app/models/property';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1;
  properties: IPropertyBase[];
  photos: string;
  //to get todays date
  today = new Date();

  ///For filter
  city = '';
  SearchCity = "";
  SortbyParam = "";
  SortDirection = "asc";



  constructor(private housingService: HousingService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; //means we're on rent-property url else we're on base url
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
        // this.properties.filter(x => x.image === )

        // console.log({ properties: this.properties });

      }, error => {
        console.log(error);
      }
    );
  }


  onCityFilter() {
    this.SearchCity = this.city;
  }

  onCityFilterClear() {
    this.SearchCity = "";
    this.city = "";
  }


  onSortDirection() {
    if (this.SortDirection === "desc") {
      this.SortDirection = "asc";
    } else {
      this.SortDirection = "desc";
    }
  }
}
