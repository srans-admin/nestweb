import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Observable } from "rxjs";
import { HostelService } from "../../_services/hostel.service";
import { Hostel } from "../../_models/hostel";
import { Router, ActivatedRoute } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import { Room } from '../../_models/room';
import { environment } from '../../../environments/environment';
import { AlertMessage } from 'src/app/_alerts/alert.message';
import { NIDOSMessages } from 'src/app/_messages/message_eng';
import { AuthenticationService } from 'src/app/_auth/auth.service';
import { User } from 'src/app/_models/user';
 

@Component({
  selector: 'app-list-hostel',
  templateUrl: './list-hostel.component.html',
  styleUrls: ['./list-hostel.component.css']
})
export class ListHostelComponent implements OnInit {
  private currentUser: User; 
  private hostels;
  private hostelImages: Array<Hostel> = [];
  private room: Room = new Room();
  private extendingviews: Observable<Hostel[]>;
  private searchTerm: string;
  private acknoldgmentMsg : string = null; 
  private id: number;
  private hostelId: number;
  private facadeImage: any;
  private extendedViewUrl = environment.appUrl+ '/api/v1/hostels/{id}/extendingviews';

   p: Number = 1;
  count: Number = 5;

  constructor(private hostelService: HostelService,
    private router: Router,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private alertMessage: AlertMessage,
    private nIDOSMessages: NIDOSMessages,
    private http: HttpClient) {
      this.currentUser = this.authenticationService.currentUser;
     }

    ngOnInit() {
      this.reloadData();       
    }

    //Facade
 createImageFromBlobFacade(image: Blob) {
  let reader = new FileReader();
  reader.addEventListener("load", () => {
     this.facadeImage = reader.result;
  }, false); 
  if (image) {
     reader.readAsDataURL(image);
  }
}
  
    reloadData() {

     this.hostelService.getHostelsList(this.currentUser.userId, this.currentUser.role).subscribe(res => { 
        this.hostels = res;
        for(let k = 0; k < this.hostels.length; k++){
          this.hostelId = this.hostels[k].id;        

            //Facade  
            this.hostelService.retriveFile('facade', this.hostelId)
            .subscribe(data => {
              this.createImageFromBlobFacade(data);
              this.facadeImage = data;
              }, error => {
                console.log(error);
            })

      }

      },err =>{ 
        this.alertMessage.showHttpMessage(err);
      });

    }
  
    deleteHostel(id: number) {
      if(window.confirm("Are you to remove the hostel : "+id)){
      this.hostelService.deleteHostel(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
        }
    }
  
    hostelDetails(id: number){
      this.router.navigate(['details', id]);      
    }
  
    updateHostel(id: number){
      this.router.navigate(['update', id]);
    }

    listHostel(id: number){
      this.router.navigate(['floor', id]);
    }

    addNewHostel(){
      let currentUser : any = this.authenticationService.currentUser;
      if(currentUser )
      {
        if(this.hostels.length < currentUser.subscriptions){
          this.router.navigate(['hostels/viewtabs']);
        }else{
          this.alertMessage.showSuccessMsg("Unable to add more than given subscription");
        }
      }
    }

    //  Close the dropdown if the user clicks outside of it
      @HostListener('document:click', ['$event'])
      click = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
      }
    } 

  }
  

