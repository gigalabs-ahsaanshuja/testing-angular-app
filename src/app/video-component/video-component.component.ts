import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { IElementData } from '../data-table/data-table.component';
import { meetingDataService } from '../meetingData.service';

@Component({
  selector: 'app-video-component',
  templateUrl: './video-component.component.html',
  styleUrls: ['./video-component.component.css'],
})
export class VideoComponentComponent {
  public meetingId: string | undefined;
  public meetingData: IElementData | undefined;
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private service: meetingDataService,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.meetingId = params['id'];
    });
  }

  ngOnInit() {
    if (this.meetingId) {
      this.service
        .getMeetingsDetailById(this.meetingId)
        .subscribe((response) => {
          this.meetingData = response as IElementData;
        });
    }
  }

  onBackClick() {
    this.router.navigate(['/']);
  }
  getSanitizedURL() {
    const sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.meetingData?.videoUrl || ''
    );
    return sanitizedUrl;
  }
}
