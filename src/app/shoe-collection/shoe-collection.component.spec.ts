import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeCollectionComponent } from './shoe-collection.component';

describe('ShoeCollectionComponent', () => {
  let component: ShoeCollectionComponent;
  let fixture: ComponentFixture<ShoeCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoeCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
