import { TestBed } from '@angular/core/testing';

import { ProjectStatusesService } from './project-statuses.service';

describe('ProjectStatuesService', () => {
  let service: ProjectStatusesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectStatusesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
