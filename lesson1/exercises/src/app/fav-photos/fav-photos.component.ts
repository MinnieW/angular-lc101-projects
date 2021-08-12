import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Too Cool Photos';
  image1 = 'https://w1.pngwing.com/pngs/674/595/png-transparent-beaver-drawing-beaver-attack-american-beaver-seals-snout-bear-wildlife-thumbnail.png';
  image2 = 'https://www.drawingnow.com/file/videos/steps/123662/how-to-draw-panda-dabbing-step-10.jpg';
  image3 = '';

  constructor() { }

  ngOnInit() {
  }

}