import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterState } from '@angular/router';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.css'],
})
export class VideoComponentComponent {
  public meetingData: any;
  constructor(private router: Router, private sanitizer: DomSanitizer) {
    this.meetingData =
      this.router?.getCurrentNavigation()?.extras?.state?.['meetingVideoData'];
    console.log('meetingData', this.meetingData);
  }

  getSanitizedURL() {
    const url = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.meetingData.videoUrl
    );
    console.log(url);
    return url;
  }
}
