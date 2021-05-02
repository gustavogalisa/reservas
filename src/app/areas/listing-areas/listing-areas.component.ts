import { Component, OnInit } from '@angular/core';
import {Area} from '../../shared/model/area';
import {AreaService} from '../../shared/services/area.service';
import { AreaFirestoreService } from '../../shared/services/area-firestore.service';

@Component({
  selector: 'app-listing-areas',
  templateUrl: './listing-areas.component.html',
  styleUrls: ['./listing-areas.component.scss']
})
export class ListingAreasComponent implements OnInit {

  areas: Array<Area>;

  constructor(private areaService: AreaFirestoreService) {
  }

  ngOnInit(): void {
    this.areaService.list().subscribe(
      areas => this.areas = areas
    );
  }

  removeArea(id: string): void{
    this.areaService.remover(id).subscribe();
    // window.location.reload();
  }
}
