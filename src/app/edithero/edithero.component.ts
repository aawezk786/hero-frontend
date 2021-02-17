import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edithero',
  templateUrl: './edithero.component.html',
  styleUrls: ['./edithero.component.css']
})
export class EditheroComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<EditheroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
