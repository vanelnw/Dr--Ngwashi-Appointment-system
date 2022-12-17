
"use strict";
class Appointment {
  constructor(
    name,
    code,
    sex,
    address,
    phone,
    email,
    status,
    appointmentDate,
    firstTime,
    requestDate,
    appointmentStatus,
    appointmentTime,
    city,
    notesBefore,
    notesAfter
  ) {
    this.name = name;
    this.code = code;
    this.sex = sex;
    this.phone = phone;
    this.status = status;
    this.email = email;
      
    this.appointmentDate = appointmentDate;
    this.firstTime = firstTime;
    this.requestDate = requestDate;
    this.appointmentStatus = appointmentStatus;
    this.appointmentTime = appointmentTime;

    this.address = address;
    this.city = city;

    this.notesBefore = notesBefore;
    this.notesAfter = notesAfter;
  }
}


export default Appointment;


const record = {
  name: "yaba",
  code: "A1151222",
  sex: "male",
  address:"Yaounde5",
  phone:"678906543",
  email:"yaba@gmail.com",
  appointmentDate:"15/12/22",
  firstTime: true,
  requestDate:"21/12/22",
  appointmentStatus:"resheduled",
  appointmentTime:"12:00",
  city:"yaounde",
  notesBefore:"i really need it",
  notesAfter:"",
};