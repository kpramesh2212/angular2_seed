import {Component, OnInit} from '@angular/core';
import {PhotoService} from './photo.service';


@Component({
    template: `
        <h1>Albums</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <ul>
            <li *ngFor="let album of albums">
                <a [routerLink]="['Album', {id: album.id}]">
                  {{ album.title }}
                </a>
            </li>
        </ul>
    `,
    providers: [PhotoService]
})
export class AlbumsComponent implements OnInit {
    isLoading = true;
    albums: string;

    constructor(private _photoService: PhotoService){
    }

    ngOnInit(){
        this._photoService.getAlbums()
            .subscribe(albums => {
                this.isLoading = false;
                this.albums = albums;
            });
    }
}
