import { TestBed } from '@angular/core/testing';

import { AreaFirestoreService } from './area-firestore.service';

describe('UsuarioFirestoreService', () => {
  let service: AreaFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
