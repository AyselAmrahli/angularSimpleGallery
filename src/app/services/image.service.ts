import { Injectable } from '@angular/core';
import { Image } from '../models/image';

@Injectable()
export class ImageService {
	images: Image[] = [
	new Image ('1', 'Tom Hanks', 'First image description', 'http://static.tumblr.com/a5c75b19ef7c33fdabd15925bf47df11/gyz0vau/LiVoc44ou/tumblr_static_ckj42no121kcckksgk80okwc4.jpg', 'http://static.tumblr.com/a5c75b19ef7c33fdabd15925bf47df11/gyz0vau/LiVoc44ou/tumblr_static_ckj42no121kcckksgk80okwc4.jpg'),
	new Image ('2', 'Park Hyunk Sik', 'First image description', 'https://1.soompi.io/wp-content/uploads/2014/06/park-hyungsik.png', 'https://1.soompi.io/wp-content/uploads/2014/06/park-hyungsik.png'),
	new Image ('3', 'Kivanc Tatlitug', 'First image description', 'https://img.gecce.com/2013/02/15/kivanc-tatli-103319F6.jpg', 'https://img.gecce.com/2013/02/15/kivanc-tatli-103319F6.jpg'),
	new Image ('4', 'Ji Chang Wook', 'First image description', 'https://0.soompi.io/wp-content/uploads/2017/01/24055124/ji-chang-wook3.jpg', 'https://0.soompi.io/wp-content/uploads/2017/01/24055124/ji-chang-wook3.jpg'),
	new Image ('5', 'Yoo Ah In', 'First image description', 'http://2.bp.blogspot.com/-P-hu2TNO28s/Ttcol_i94fI/AAAAAAAACdc/uJEPNFCfhfw/s1600/319154_252129128172197_109967939054984_781243_1009207263_n.jpg', 'http://2.bp.blogspot.com/-P-hu2TNO28s/Ttcol_i94fI/AAAAAAAACdc/uJEPNFCfhfw/s1600/319154_252129128172197_109967939054984_781243_1009207263_n.jpg'),
	new Image ('6', 'Aamir khan', 'First image description', 'http://www.vetogate.com/upload/photo/gallery/218/6/317.jpg', 'http://www.vetogate.com/upload/photo/gallery/218/6/317.jpg'),
];

  constructor() { }
  getImages(){
  	return this.images;
  }
}
