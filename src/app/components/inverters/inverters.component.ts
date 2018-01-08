import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inverters',
  templateUrl: './inverters.component.html',
  styleUrls: ['./inverters.component.css']
})
export class InvertersComponent implements OnInit {

  title = 'Inverters';


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }


}
