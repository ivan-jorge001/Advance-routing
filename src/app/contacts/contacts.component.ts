import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contactId:number;
optionalParameter:string
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.contactId= +params['id']
    })
    this.route.queryParams.subscribe((queryparams)=>{
      this.optionalParameter = queryparams['foo']
    })
  }

}
