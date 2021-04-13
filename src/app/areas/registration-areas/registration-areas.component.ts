import { Component, OnInit } from '@angular/core';
import {Area} from "../../shared/model/area";
import {AreaService} from "../../shared/services/area.service";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-registration-areas',
  templateUrl: './registration-areas.component.html',
  styleUrls: ['./registration-areas.component.scss']
})
export class RegistrationAreasComponent implements OnInit {

  area: Area;
  input_name: string;
  input_image: string;
  input_description: string;
  private snackBar: MatSnackBar;


  constructor(
    private areaService: AreaService,
    public dialogRef: MatDialogRef<RegistrationAreasComponent>,
  ) {
    this.area = new Area();
  }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  createArea(): void {
    this.area.id = null;
    this.area.name = this.input_name;
    this.area.image = this.input_image;
    this.area.description = this.input_description;
    this.area.reserves = []
    this.areaService.create(this.area).subscribe(
      area => console.log(area)
    );
    this.area = new Area();
    this.cancel();
    window.location.reload();
  }
}
