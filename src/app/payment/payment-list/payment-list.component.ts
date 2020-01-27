import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PaymentService } from '../../_services/payment.service';
import { Payment } from "../../_models/payment";
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_auth/auth.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  // private payments: Observable<Payment[]>;
  private payments: any;
  private payment = new Payment();
  private currentUser: User;

  constructor(private paymentService: PaymentService,
    private authenticationService: AuthenticationService,
    private router: Router) {
      this.currentUser = this.authenticationService.currentUser;
      
     }

  ngOnInit() {
    this.reloadData();
  }
  
  reloadData() {
    this.paymentService.getAllUsersPaymentInfo(this.currentUser.userId, this.currentUser.role).subscribe(res=>{
      console.log(res);
      this.payments = res;
      this.payment.id = this.payments.id;
    })
  }

}
