import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Image } from '../../models/image';
import { ImageService } from '../../services/image.service';


@Component({
  selector: 'ng-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
	images: Image[] = [];
	// selectedImage: Image;
  @Output() selectedEvent: EventEmitter<Image> = new EventEmitter<Image>();
  constructor(private imageService: ImageService) { }

  ngOnInit() {

  	this.images = this.imageService.getImages();
  }
  onSelect(image:Image){
  	this.selectedEvent.emit(image);
  }

}
