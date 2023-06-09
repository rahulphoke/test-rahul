import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutCrudComponent } from './prodcut-crud.component';

describe('ProdcutCrudComponent', () => {
  let component: ProdcutCrudComponent;
  let fixture: ComponentFixture<ProdcutCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdcutCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdcutCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
