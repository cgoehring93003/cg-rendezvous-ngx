
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { IAppointment, Appointment } from './../appointment';
import { AppointmentService } from './../appointment.service';

import { Component, OnInit } from '@angular/core';
import { HttpModule, Http, Response } from '@angular/http';
import { HttpClient, HttpParams } from "@angular/common/http";

import { DatePipe } from '@angular/common';

import { DateFormatPipe } from './../date-format.pipe';
import { TimeFormatPipe } from './../time-format.pipe';

import { MatFormFieldControl, MatButtonModule, MatCheckboxModule, MatCard, MatFormField, MatSelectModule, MatSelect, MatOption } from '@angular/material';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {

  dbg = true;
  formGroupSearch;
  formsearchmodel;
  formmodel;
  appointment:  IAppointment;
  empdata: any;
  empdataresult: any;

  people: string[]= ["Dave","Jim","Rick","John"] ;


  dfp: DateFormatPipe = new DateFormatPipe('en-US');
  tfp: TimeFormatPipe = new TimeFormatPipe('en-US');

  constructor(private appointmentService: AppointmentService) { 

    console.log('Date: ' + this.dfp.transform(new Date(), '')); // 21 September
    console.log('Time: ' + this.tfp.transform(new Date(), '')); // hh:mm:ss

  }


  ngOnInit() {


    this.appointment = new Appointment(0, 0, 
      '', '',        //first & last
      '',            // place
       new Date(),    // date
      '', '', '', '');

      /*  use of pip in code
      datePipeEn: DatePipe = new DatePipe('en-US')
      datePipeFr: DatePipe = new DatePipe('fr-FR')
      constructor() {
        console.log(this.datePipeEn.transform(new Date(), 'dd MMMM')); // 21 September
        console.log(this.datePipeFr.transform(new Date(), 'dd MMMM')); // 21 septembre
      }
      */

      var dt = new Date(this.appointment.appDate); //);


      console.log('dt date : ' + JSON.stringify(dt));



      /*
      let group:any = {};
      group.firstName =  new FormControl('', Validators.required);
      group.streetAddress = new FormControl('', Validators.required);
      group.zip = new FormControl('', zipValidator);
      group.type = new FormControl('home');

      //this.form = new FormGroup(group);
      */


      this.formmodel = new FormGroup({
        id: new FormControl(this.appointment.id),
        ownerCode: new FormControl(this.appointment.ownerCode),         
        firstName: new FormControl(this.appointment.firstName),      
        lastName: new FormControl(this.appointment.lastName),
        place: new FormControl(this.appointment.place),      
        appDate: new FormControl(new Date(this.appointment.appDate)),
        appTime: new FormControl(
        //??
        this.tfp.transform(this.appointment.appTime, '')
        //this.appointment.appTime
        ),

      appDescription: new FormControl(this.appointment.appDescription),      
      fishName: new FormControl(this.appointment.fishName),
      carBrand: new FormControl(this.appointment.carBrand),
      searchOnNameOrID: new FormControl(""),


      checker: new FormControl(false),
      flipper: new FormControl(true),
      xer: new FormControl(true),


      animals: new FormControl("dog"),

      type: new FormControl('home'),
      guy: new FormControl('guy')

    });

  }


  onSubmit = function(user) {
    console.log(user);
  };

  mySubmit = function() {
    console.log('mySubmit');
  };


  stripIt = function(inputString) {

    // 2017-10-09
    var newFmt = inputString.substr(0,10);

    console.log('inputString: ' + inputString + ' newFmt: ' + newFmt);
    return newFmt;
  }


  swapIt = function(inputString) {

    // 2017-10-09
    var newFmt = inputString.substr(5,2) + "/" + inputString.substr(8,2) + "/" +inputString.substr(0,4) ;

    console.log('inputString: ' + inputString + ' newFmt: ' + newFmt);
    return newFmt;
  }


  save = function() {


    return;
  }

  newRecord = function() {


    return;
  }

  deleteRecord = function() {


    return;
  }



  onSubmitSearch() {
    var searchBox = (<HTMLInputElement>document.getElementById("searchOnNameOrID")); 
    var searchBoxValue  = searchBox.value;


    //console.log("moment().format(): " + moment().format());



    this.appointmentService.getOne(searchBoxValue)
      .debug("ngOnInit: ++++getOne: ")
      .subscribe( 
        (value) => this.appointment = value,
        () =>  { console.log('error')  },
        () =>  { console.log('complete') 
          , console.log(JSON.stringify(this.appointment))
          ,    (this.formmodel.controls['id']).setValue(this.appointment.id, { onlySelf: true })
          ,    (this.formmodel.controls['ownerCode']).setValue(this.appointment.ownerCode, { onlySelf: true })              
          ,    (this.formmodel.controls['firstName']).setValue(this.appointment.firstName, { onlySelf: true })
          ,    (this.formmodel.controls['lastName']).setValue(this.appointment.lastName, { onlySelf: true })
          ,    (this.formmodel.controls['place']).setValue(this.appointment.place, { onlySelf: true })
          ,    (this.formmodel.controls['appDate']).setValue(this.stripIt(this.appointment.appDate), { onlySelf: true })
          ,    (this.formmodel.controls['appTime']).setValue(this.appointment.appTime, { onlySelf: true })
          ,    (this.formmodel.controls['appDescription']).setValue(this.appointment.appDescription, { onlySelf: true })
          ,    (this.formmodel.controls['fishName']).setValue(this.appointment.fishName, { onlySelf: true })
          ,    (this.formmodel.controls['carBrand']).setValue(this.appointment.carBrand, { onlySelf: true })

         }
        );


  }



}
