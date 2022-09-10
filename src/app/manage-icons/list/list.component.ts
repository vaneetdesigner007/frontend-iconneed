import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor(private iconService: IconService) {}
  public env = environment;
  public iconList: any[] = [];
  ngOnInit(): void {
    this.getIcons();
  }

  public getIcons() {
    this.iconService.searchIcon().subscribe({
      next: (res: any) => {
        this.iconList = res?.data || [];
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
