import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BackendService, Contact } from "../services/backend.service";
@Component({
  selector: 'app-email-suscribe',
  templateUrl: './email-suscribe.component.html',
  styleUrls: ['./email-suscribe.component.css']
})
export class EmailSuscribeComponent implements OnInit {

  model:  Contact = { firstName:'',lastName:'',email:''};

  newsletterForm: FormGroup;
  email = new FormControl('', [
    Validators.required,
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
  ]);
  firstName = new FormControl('', [
    Validators.required
  ]);
  lastName = new FormControl('', [
    Validators.required
  ]);

  constructor(private dialog: MatDialog, private backendService:BackendService) {

  }

  subscribe() {
    if (this.newsletterForm.valid) {
      console.log(this.newsletterForm.value);
    }

  }

  ngOnInit(): void {

    this.newsletterForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
    });
  }
  getErrorMessage(key: string) {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError(key) ? 'Not a valid email' : '';
  }

  onSubmit(): void {
    this.backendService.storeContact(this.model);
    console.log("Foda pra caralho");
    console.log(this.model.firstName);
    console.log(this.model.lastName);
    console.log(this.model.email);
  }

}
