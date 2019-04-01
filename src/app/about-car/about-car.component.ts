import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-about-car',
  templateUrl: './about-car.component.html',
  styleUrls: ['./about-car.component.css']
})
export class AboutCarComponent implements OnInit {

  id: number;
  name: string;
  year: string;
  color: string;
  hash: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id=+this.route.snapshot.params['id'];
    this.name=this.route.snapshot.params['name'];
    this.year=this.route.snapshot.queryParams['year'];
    this.color=this.route.snapshot.queryParams['color'];
    this.hash=this.route.snapshot.fragment;


    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.name = params['name']
    });

    this.route.queryParams.subscribe((params: Params)=>{
        this.year = params['year'];
        this.color = params['color'];
    });
  }

    openMazda(){
      this.router.navigate(['/cars', 8, 'Mazda'],{
        queryParams:{
          color: 'black',
          year: 1900
        }
      })
    }

}
