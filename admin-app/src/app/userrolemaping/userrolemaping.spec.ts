import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRoleMapingComponentt } from './userrolemaping';

describe('UserrolemapingComponent', () => {
  let component: UserRoleMapingComponentt;
  let fixture: ComponentFixture<UserRoleMapingComponentt>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRoleMapingComponentt ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRoleMapingComponentt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
