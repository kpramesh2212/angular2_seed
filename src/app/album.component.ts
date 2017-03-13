import {Component, OnInit, OnDestroy } from '@angular/core';
import {PhotoService} from './photo.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    template: `
        <h1>Album</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <div>
            <h3>Album with id {{id}}</h3>
            <img *ngFor="let photo of photos" src="{{ photo.thumbnailUrl }}">
        </div>
    `,
    providers: [PhotoService]
})
export class AlbumComponent implements OnInit, OnDestroy {
    isLoading = true;
    photos: string;
    id: number;
    subscripiton: Subscription;
    photoSub : Subscription;

    constructor(
      private _photoService: PhotoService,
      private _route: ActivatedRoute) {

    }

    ngOnInit(){
        this. subscripiton = this._route.params.subscribe(param => {
          this.id = +param["id"];
          console.log(this.id);
        })
        this. photoSub = this._photoService.getPhotos(this.id)
            .subscribe(photos => {
                this.isLoading = false;
                this.photos = photos;
            });
    }

    ngOnDestroy() {
      console.log("destroyed");
      this.subscripiton.unsubscribe();
      this.photoSub.unsubscribe();
    }

}
