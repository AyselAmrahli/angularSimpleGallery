import { Component, OnInit, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'ng-image',
  templateUrl: './image.component.html',
  styles: [`
	 img{
	width: 100%;
	height: 300px;
	margin-bottom: 30px;
  object-fit:cover;
}
img:hover{
-webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
}
a:hover{
cursor:pointer;
}
  `]
}
)
export class ImageComponent implements OnInit {
  @Input() image: Image;
  constructor() { }

  ngOnInit() {
  }

}
