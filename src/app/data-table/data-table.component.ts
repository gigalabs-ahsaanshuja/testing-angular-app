import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { Router } from '@angular/router';
import { meetingDataService } from '../meetingData.service';
export type IElementData = {
  id: string;
  meetingName: string;
  length: number;
  nrOfParticipants: number;
  score: number;
  date: number;
  videoUrl: string;
};

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class TableBasicExample {
  public posts: IElementData[] | undefined;

  constructor(private router: Router, private service: meetingDataService) {}

  displayedColumn: string[] = [
    'Meeting Name',
    'Length',
    'Number of Participants',
    'Meeting Score',
    'Date',
  ];
  public displayedColumns = [
    {
      title: 'Meeting Name',
      key: 'meetingName',
    },
    {
      title: 'Length',
      key: 'length',
    },
    {
      title: 'Number of Participants',
      key: 'nrOfParticipants',
    },
    {
      title: 'Meeting Score',
      key: 'score',
    },
    {
      title: 'Date',
      key: 'date',
    },
  ];
  ngOnInit() {
    this.service.getMeetingsDetail().subscribe((response) => {
      this.posts = response as IElementData[];
    });
  }

  displayMeetingVideo(data: IElementData) {
    this.router.navigate(['/meeting'], {
      queryParams: { id: data.id },
    });
  }

  formatMeetingVideoLength(date: number) {
    return moment(date).format('hh:mm:ss');
  }
  formatMeetingDate(date: number) {
    return moment(date).format('lll');
  }
}
