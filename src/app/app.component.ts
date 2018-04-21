import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<h2>Basic DataGrid</h2>
  <eui-datagrid [data]="data" style="height:250px">
    <eui-grid-column field="itemid" title="Item ID"></eui-grid-column>
    <eui-grid-column field="name" title="Name"></eui-grid-column>
    <eui-grid-column field="listprice" title="List Price" align="right"></eui-grid-column>
    <eui-grid-column field="unitcost" title="Unit Cost" align="right"></eui-grid-column>
    <eui-grid-column field="attr" title="Attribute" width="30%"></eui-grid-column>
    <eui-grid-column field="status" title="Status" align="center"></eui-grid-column>
  </eui-datagrid>`
})
export class AppComponent {
  data = [
    {"code": "FI-SW-01", "name": "Koi", "unitcost": 10.00, "status": "P", "listprice": 36.50, "attr": "Large", "itemid": "EST-1"},
    {"code": "K9-DL-01", "name": "Dalmation", "unitcost": 12.00, "status": "P", "listprice": 18.50, "attr": "Spotted Adult Female", "itemid": "EST-10"},
    {"code": "RP-SN-01", "name": "Rattlesnake", "unitcost": 12.00, "status": "P", "listprice": 38.50, "attr": "Venomless", "itemid": "EST-11"},
    {"code": "RP-SN-01", "name": "Rattlesnake", "unitcost": 12.00, "status": "P", "listprice": 26.50, "attr": "Rattleless", "itemid": "EST-12"},
    {"code": "RP-LI-02", "name": "Iguana", "unitcost": 12.00, "status": "P", "listprice": 35.50, "attr": "Green Adult", "itemid": "EST-13"},
    {"code": "FL-DSH-01", "name": "Manx", "unitcost": 12.00, "status": "P", "listprice": 158.50, "attr": "Tailless", "itemid": "EST-14"},
    {"code": "FL-DSH-01", "name": "Manx", "unitcost": 12.00, "status": "P", "listprice": 83.50, "attr": "With tail", "itemid": "EST-15"},
    {"code": "FL-DLH-02", "name": "Persian", "unitcost": 12.00, "status": "P", "listprice": 23.50, "attr": "Adult Female", "itemid": "EST-16"},
    {"code": "FL-DLH-02", "name": "Persian", "unitcost": 12.00, "status": "P", "listprice": 89.50, "attr": "Adult Male", "itemid": "EST-17"},
    {"code": "AV-CB-01", "name": "Amazon Parrot", "unitcost": 92.00, "status": "P", "listprice": 63.50, "attr": "Adult Male", "itemid": "EST-18"}
  ];
}
