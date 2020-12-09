import { Component, OnInit } from '@angular/core';

// reading item list from JSON - data was not retrieved from URL due to CORS issue 
import SampleJson from '../../api/item-list.json';

import { Item } from '../models/item';
import { ItemListService } from '../item-list.service';

import * as _ from 'underscore';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  result = [];
  collectionSize = 0;

  constructor(private itemListService: ItemListService) { }

  ngOnInit(): void {

    // #### Commented - data was not retrieved from URL due to CORS issue ####
    /* this.itemListService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.result = data;
    }); */

    let itemlist: Array<Item> = [];

    // Populate item list from SampleJson
    _.each(SampleJson, function (item: any) {
      let i: Item = new Item(item);
      itemlist.push(i);
    })

    // remove rows with blank or null values
    itemlist = _.reject(itemlist, function (value: Item) {
      return value.name === null || value.name === "";
    });

    // create group and sortby listId
    let groups = new Set(itemlist.map(item => item.listId)
      .sort((a, b) => (a < b ? -1 : 1)));

    // result to show in UI - groupby and sortby listId, name
    groups.forEach(group =>
      this.result.push({
        groupName: group,
        values: itemlist.filter(i => i.listId === group)
          .sort((a, b) => (a.name < b.name ? -1 : 1))
      }
      ));

    this.collectionSize = itemlist.length;
    //this.refreshItems();
  }

  // page = 1;
  // pageSize = 20;
  // items = [];
  // refreshItems() {
  //   this.items = JSON.parse(JSON.stringify(this.result));
  //   this.items.forEach(element => {
  //     console.log(element.values.length);
  //     element.values = element.values
  //      .map((item, i) => ({ id: i + 1, ...item }))
  //      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  //   });
    
  // }

}
