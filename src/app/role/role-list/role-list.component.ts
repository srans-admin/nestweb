<<<<<<< HEAD
import { RoleDetailsComponent } from './../role-details/role-details.component';
import { Observable } from "rxjs";
=======
<<<<<<< HEAD
import { RoleDetailsComponent } from './../role-details/role-details.component';
import { Observable } from "rxjs";
=======
// import { HostelDetailsComponent } from './../hostel-details/hostel-details.component';
import { Observable } from "rxjs";
// import { RoleService } from "./../role.service";
>>>>>>> 8318f1ead8305178fd001ae6267372eccec7c4a6
>>>>>>> b852c9545424fbe22a6e2aa60d2499587224cb64
import { RoleService } from '../../role.service';
import { Role } from "../../role";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

<<<<<<< HEAD

=======
>>>>>>> b852c9545424fbe22a6e2aa60d2499587224cb64
@Component({
  selector: "app-role-list",
  templateUrl: "./role-list.component.html",
  styleUrls: ["./role-list.component.css"]
})
export class RoleListComponent implements OnInit {
  roles: Observable<Role[]>;

<<<<<<< HEAD
  constructor(private roleService: RoleService,
    private router: Router) {}


=======
<<<<<<< HEAD

constructor(private roleService: RoleService,
=======
  constructor(private roleService: RoleService,
>>>>>>> 8318f1ead8305178fd001ae6267372eccec7c4a6
    private router: Router) {}

>>>>>>> b852c9545424fbe22a6e2aa60d2499587224cb64
  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.roles = this.roleService.getRolesList();
  }

  deleteRole(id: number) {
    this.roleService.deleteRole(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  roleDetails(id: number){
<<<<<<< HEAD
    this.router.navigate(['rdetails', id]);
  }

  updateRole(id: number){
    this.router.navigate(['rupdate', id]);
  }


=======
    this.router.navigate(['details', id]);
  }

  updateRole(id: number){
    this.router.navigate(['update', id]);
  }
>>>>>>> b852c9545424fbe22a6e2aa60d2499587224cb64
}

