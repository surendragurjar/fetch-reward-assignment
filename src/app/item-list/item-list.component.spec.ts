import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Item } from '../models/item';

import { ItemListComponent } from './item-list.component';

fdescribe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove blank or null values', () => {
    let itemlist: Item[]= [];
    let item1 = new Item({
      "id": 381,
      "listId": 4,
      "name": ""
    });
    let item2 = new Item({
      "id": 382,
      "listId": 4,
      "name": ""
    });
    let item3 = new Item({
      "id": 383,
      "listId": 4,
      "name": ""
    });
    itemlist.push(item1);
    itemlist.push(item2);
    itemlist.push(item3);
    let filterItemList: Array<Item> = component.filterBlankOrNullValues(itemlist);
    expect(filterItemList.length).toBeLessThanOrEqual(1);
  });



});