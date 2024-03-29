import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumTrackComponent } from './album-track.component';
import { MediaTableModule } from '@angular-spotify/web/shared/ui/media-table';
import { MediaOrderModule } from '@angular-spotify/web/shared/ui/media-order';
import { TrackMainInfoModule } from '@angular-spotify/web/shared/ui/track-main-info';
import { DurationPipeModule } from '@angular-spotify/web/shared/pipes/duration-pipe';
import { LetDirective, PushPipe } from '@ngrx/component';

@NgModule({
  imports: [
    CommonModule,
    MediaTableModule,
    MediaOrderModule,
    TrackMainInfoModule,
    DurationPipeModule,
    LetDirective, PushPipe,
  ],
  declarations: [AlbumTrackComponent],
  exports: [AlbumTrackComponent]
})
export class AlbumTrackModule {}
