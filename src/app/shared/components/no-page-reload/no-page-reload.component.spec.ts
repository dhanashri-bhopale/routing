import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageReloadComponent } from './no-page-reload.component';

describe('NoPageReloadComponent', () => {
  let component: NoPageReloadComponent;
  let fixture: ComponentFixture<NoPageReloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPageReloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPageReloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
