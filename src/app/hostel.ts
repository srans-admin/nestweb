import { Floor } from './floor';
import { Room } from './room';

export class Hostel {
   
  id: number ;
  hostelName: string = "Hostel-1";
  hostelAddress: string = "Hyderabad";
  hostelType: string = "Women";
  numOfFloors: number = 1;
  floors : Array<Floor> = [];

  addRoom(room: Room){
    
    for(let i=0; i<this.floors.length; i++ ){

        if(this.floors[i].floorName == room.roomName ){
          this.floors[i].rooms.push(room);
        }  
    } 
  }

  addFloors( numOfFloors: number){

    for(let i = 0 ; i < numOfFloors; i++){
      this.floors.push(new Floor(""+i));
    }
  }


}

