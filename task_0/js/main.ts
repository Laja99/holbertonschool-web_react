interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London",
};

const studentsList: Student[] = [student1, student2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement("table");
const tableHead: HTMLTableSectionElement = document.createElement("thead");
const headRow: HTMLTableRowElement = document.createElement("tr");

const th1: HTMLTableCellElement = document.createElement("th");
const th2: HTMLTableCellElement = document.createElement("th");
th1.innerText = "firstName";
th2.innerText = "location";
headRow.appendChild(th1);
headRow.appendChild(th2);
tableHead.appendChild(headRow);
table.appendChild(tableHead);

const tableBody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");
  const cell1: HTMLTableCellElement = document.createElement("td");
  const cell2: HTMLTableCellElement = document.createElement("td");

  cell1.innerText = student.firstName;
  cell2.innerText = student.location;

  row.appendChild(cell1);
  row.appendChild(cell2);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
body.appendChild(table);
