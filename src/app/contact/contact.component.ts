import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ContactService } from '../shared/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('myContactForm') private contactNgForm: NgForm | undefined;
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
    object: ['', [Validators.required, Validators.maxLength(255), Validators.minLength(4)]],
    mail: ['', [Validators.required]],
    tel: ['', [Validators.required,Validators.maxLength(10), Validators.minLength(5)]],
    message: ['', Validators.required],
  });
  constructor(private fb: FormBuilder,
    private contactService: ContactService,) { }

  ngOnInit(): void {
  }

  sendForm() {
    this.contactService.sendEmail(this.contactForm.value).subscribe((data) => {
      if (data.message === 'success') {
        this.contactNgForm?.resetForm();
      } 
    });
  }

}
