// Import types and functions
/// <reference path="crud.d.ts" />
import { RowElement } from "./interface";
import * as CRUD from "crud";

// Create row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 30
};

// Call CRUD functions
const newRowID: number = CRUD.insertRow(row);
console.log(`Inserted row with ID: ${newRowID}`);

const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Updated row with ID: ${newRowID}`);

CRUD.deleteRow(newRowID);
console.log(`Deleted row with ID: ${newRowID}`);
