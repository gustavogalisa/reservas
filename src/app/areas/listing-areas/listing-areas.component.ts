import { Component, OnInit } from '@angular/core';
import {Area} from "../../shared/model/area";
import {AreaService} from "../../shared/services/area.service";

@Component({
  selector: 'app-listing-areas',
  templateUrl: './listing-areas.component.html',
  styleUrls: ['./listing-areas.component.scss']
})
export class ListingAreasComponent implements OnInit {

  areas: Array<Area>;

  constructor(private areaService: AreaService) {
  }

  ngOnInit(): void {
    this.areaService.list().subscribe(
      areas => this.areas = areas
    );
  }

  removeArea(id: number): void{
    this.areaService.remover(id).subscribe()
    window.location.reload();
  }
}
