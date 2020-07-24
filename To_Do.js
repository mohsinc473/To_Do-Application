var ulid = document.getElementById("todo_list");
function todoValue() {
  var inputVal = document.getElementById("todo_val");

  // Created Li
  var lis = document.createElement("li");
  lis.setAttribute("id", "li1");
  var liText = document.createTextNode(inputVal.value);

  // Created Delete Button
  var delBtn = document.createElement("button");
  delBtn.setAttribute("onClick", "delli()");
  delBtn.setAttribute("Class", "btn btn-danger m-2");
  var delText = document.createTextNode("Delete");
  delBtn.appendChild(delText);

  // Created Edit Button
  var editBtn = document.createElement("button");
  editBtn.setAttribute("onClick", "edit()");
  editBtn.setAttribute("Class", "btn btn-warning m-2");
  var editText = document.createTextNode("Edit");
  editBtn.appendChild(editText);

  ulid.appendChild(lis);
  lis.appendChild(liText);
  lis.appendChild(editBtn);
  lis.appendChild(delBtn);
  inputVal.value = " ";
}

function delli() {
  var del = document.getElementById("li1");
  del.remove(del);
}

function edit() {
  var edit = document.getElementById("li1");
  var takInp = document.createElement("input");
  takInp.setAttribute("id", "editTxt");
  edit.nodeValue =  edit.appendChild(takInp);
}
