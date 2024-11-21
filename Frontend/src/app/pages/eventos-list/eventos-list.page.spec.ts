import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventosListPage } from './eventos-list.page';

describe('EventosListPage', () => {
  let component: EventosListPage;
  let fixture: ComponentFixture<EventosListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
