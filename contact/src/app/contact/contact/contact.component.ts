import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable,throwError } from 'rxjs';

import { ServiceContactService } from '../../shared/service-contact.service';
import { Contactlist } from '../../shared/contactlist';
//import { Contactlist } from '../../shared/model/contactlist.model';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

declare var M: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ServiceContactService]
})
export class ContactComponent implements OnInit {

  constructor(public ServiceContactService: ServiceContactService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshContactList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.ServiceContactService.selectedContact = {
      _id : "",
      name: "",
      phone: "",
      email: "",
      job: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.ServiceContactService.postContact(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshContactList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.ServiceContactService.putContact(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshContactList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshContactList() {
    this.ServiceContactService.getContactList().subscribe((res) => {
      this.ServiceContactService.contact = res as Contactlist[];
    });
  }

  onEdit(emp: Contactlist) {
    this.ServiceContactService.selectedContact = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.ServiceContactService.deleteContact(_id).subscribe((res) => {
        this.refreshContactList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
