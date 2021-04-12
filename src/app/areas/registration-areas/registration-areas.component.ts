import { Component, OnInit } from '@angular/core';
import {Area} from "../../shared/model/area";
import {AreaService} from "../../shared/services/area.service";

@Component({
  selector: 'app-registration-areas',
  templateUrl: './registration-areas.component.html',
  styleUrls: ['./registration-areas.component.scss']
})
export class RegistrationAreasComponent implements OnInit {

  area: Area;

  constructor(private areaService: AreaService) {
    this.area = new Area();
  }

  ngOnInit(): void {
  }

  createArea(): void {
    this.areaService.create(this.area).subscribe(
      //TERMINAR
      area => console.log(area)
    );
    this.area = new Area();
  }

}
