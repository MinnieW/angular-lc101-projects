import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled = false;

  handleTakeOff(){
    let response = confirm('Confirm that the shuttle is ready for takeoff');

    if(response){
        this.message = "Shuttle in flight."
        this.color = 'blue'
        this.height += 10000 
        this.takeOffEnabled = true
    }
  }

  handleLanding(rocketImage){
    alert('The shuttle is landing. Landing gear engaged.')
        this.message = "Shuttle has landed."
        this.color = 'green'
        this.height = 0
        rocketImage.style.bottom = '0px';
        this.takeOffEnabled = false;
  }

  handleAbort(rocketImage){
    let abortResponse = confirm('Confirm that you want to abort the mission.');

        if(abortResponse){
            this.message = "Mission aborted."
            this.color = 'red'
            this.height= 0
            rocketImage.style.bottom = '0px';
            this.takeOffEnabled = false;
            
        }
  }

  moveRocket(rocketImage, direction){
    if (direction === 'right') {
      let movement = parseInt(rocketImage.style.left) + 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width + 10000;
    }

   if (direction === 'left') {
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
    }

    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height += 10000;
      }

    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      if(this.height >0){
      this.height -=10000
        }
      }
  }
 
}
