import { TestBed } from '@angular/core/testing';

import { ProjectStatuesService } from './project-statues.service';

describe('ProjectStatuesService', () => {
  let service: ProjectStatuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectStatuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
