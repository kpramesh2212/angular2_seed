import { Injectable } from '@angular/core';
import { Archive } from './archive';

export class ArchivesService {

  getArchives(): Archive[] {
    return [{
      year: 2016,
      month: 1
    },
    {
      year: 2016,
      month: 2
    },
    {
      year: 2016,
      month: 3
    },
    {
      year: 2016,
      month: 4
    }
  ];
  }

}
