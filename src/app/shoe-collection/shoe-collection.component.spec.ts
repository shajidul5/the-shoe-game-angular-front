import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeCollectionComponent } from './shoe-collection.component';
import { Shoe } from '../shoe';

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

  it('should have a list of shoe objects', () => {
    expect(component.shoeList).toEqual([]);
  });

  it('List should containt object of type shoe', () => {
    //setup
    let shoe = new Shoe;

    //exercise
    component.shoeList.push(shoe);

    //assert
    expect(component.shoeList[0] instanceof Shoe).toBeTruthy();
  })
});
