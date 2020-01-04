import { TenantBooking } from './tenant-booking';
import { Payment } from './payment';

//  import { Hostel } from './hostel';

export class User{
  userId: number;
  userpic: File;
  name: string;
  contactNumber: number;
  fatherName: string;
  fatherphoneNumber: number;
  motherName: string;
  motherphoneNumber: number;
  dob: string;
  bloodGroup: string;
  emergencyContactNumber: number;
  nameOfTheEmployer: string;
  officeAddress: string;
  telephoneNumber: number;
  emailId: string;
  permanentAddress: string;
  idProofpic: string;

  tenantBooking: TenantBooking = new TenantBooking();
  payment: Payment = new Payment();
    // role: any;

    
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    token?: string;

 } 

  export class TmpUsr{
    userId;
    pic:any;
  }

//  export class Hostel {  
//   hostelName: string;  
// }

// export class Floor{
//   floor_name:string;
// }

// export class Room{
  
//   room_facility_type:string;
//   room_share_type: number;
// }
 
// export class Invoice{
//   date:number;
//   name:string;
//   roomName:number;
//   sharing:string;
//   amount:number;
//   depositAmount:number;
//  paymentType:string;
 
 
// }

 