import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModuleMappingComponent } from './usermodulemapping';

describe('UserrolemapingComponent', () => {
  let component: UserModuleMappingComponent;
  let fixture: ComponentFixture<UserModuleMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModuleMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModuleMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
