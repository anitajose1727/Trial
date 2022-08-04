import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tax-filling-form',
  templateUrl: './tax-filling-form.component.html',
  styleUrls: ['./tax-filling-form.component.css']
})
export class TaxFillingFormComponent implements OnInit {

  public myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      fname: ['', Validators.required],
      dob: ['', Validators.required],
      aadhaar: ['', Validators.required],
      email: ['', Validators.required, Validators.email, Validators.min(1)],
      mobile: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      pin: ['', Validators.required],
    })
  }
  
}



