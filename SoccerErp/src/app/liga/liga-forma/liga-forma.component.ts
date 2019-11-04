import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-liga-forma',
  templateUrl: './liga-forma.component.html',
  styleUrls: ['./liga-forma.component.scss']
})
export class LigaFormaComponent implements OnInit {
  sub: any;
  id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
   }

}
