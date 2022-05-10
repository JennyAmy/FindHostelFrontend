import { Component, Input, OnInit } from '@angular/core';
import { IPropertyBase } from 'src/app/models/Ipropertybase';
import { Property } from 'src/app/models/property';
import { IProperty } from '../IProperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() property!: IPropertyBase;
  @Input() hideIcons: boolean;

  primaryPhotoUrl: string = null;
  constructor() { }

  ngOnInit(): void {
    // this.housingService.getAllCities().subscribe(data => {
    //   this.cityList = data;
    //   console.log({ cityData: data });

    // })
  }


}
