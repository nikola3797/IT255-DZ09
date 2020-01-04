import { Component } from '@angular/core';
import { Video } from './models/video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'NikolaVeljic-it255';
  public videos: Video[] = [];
  private _links: string[] = [
    'Z4reQmzuB4M',
    'ak_fyvaFkog',
    'lIlMtVGI5Pg',
    'leJNDpm_G10',
    'BepF4Ljs2Wo',
    'DaTKwchUPoM',
    'zp9DNG5UxNo',
    'uLHqpjW3aDs'
  ];

  constructor(){
    for(let i = 0; i < 6; i++) {
      this.videos.push(new Video(this._generateString(3), this._generateString(100), 'https://www.youtube.com/embed/' + this._links[i], this._generateRandomLength()))
    }
  }

  private _generateString(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  private _generateRandomLength(): number {
    return Math.floor(Math.random() * 240);
  }

  public deleteVideo(video: Video) {
    this.videos = this.videos.filter(item => {
      return item.title !== video.title
    })
  }

  public sort(type: string) {
    this.videos.sort((a, b) => {
      return type == 'asc' ?  a.length - b.length : b.length - a.length;
    });
  }

  public updateVideo(video: Video) {
    let index = this.videos.findIndex(i => i.title === video.title);
    this.videos[index].title = this._generateString(6);
    this.videos[index].description = this._generateString(50);
  }

  public addVideo() {
    this.videos.unshift(new Video(this._generateString(3), this._generateString(100), 'https://www.youtube.com/embed/' + this._links[Math.floor(Math.random() * this._links.length - 1)], this._generateRandomLength()))
  }

}
