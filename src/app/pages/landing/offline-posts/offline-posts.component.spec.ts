import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinePostsComponent } from './offline-posts.component';

describe('OfflinePostsComponent', () => {
  let component: OfflinePostsComponent;
  let fixture: ComponentFixture<OfflinePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflinePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflinePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
