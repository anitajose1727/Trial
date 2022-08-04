import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RegTax } from '../reg-tax';
import { TaxServiceService } from '../service/tax-service.service';

@Component({
  selector: 'app-file-dashboard',
  templateUrl: './file-dashboard.component.html',
  styleUrls: ['./file-dashboard.component.css']
})
export class FileDashboardComponent implements OnInit {
  List: RegTax[] = [];
  constructor(private http: HttpClient, private taxService: TaxServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  

}
