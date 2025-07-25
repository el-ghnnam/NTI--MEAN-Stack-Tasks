import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datauser } from './datauser';

describe('Datauser', () => {
  let component: Datauser;
  let fixture: ComponentFixture<Datauser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Datauser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datauser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
