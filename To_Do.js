var ulid = document.getElementById("todo_list");
function todoValue() {
  var inputVal = document.getElementById("todo_val");

  // Created Li
  var lis = document.createElement("li");
  //lis.setAttribute("id", "li1");
  lis.setAttribute("class", "Lis");
  var liText = document.createTextNode(inputVal.value);

  // Created Delete Button
  var delBtn = document.createElement("button");
  delBtn.setAttribute("onClick", "delli(this)");
  delBtn.setAttribute("Class", "btn btn-danger m-2 rounded-circle");
  delBtn.innerHTML =
    '<svg width="1.2em" height="2em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/></svg>';

  // Created Edit Button
  var editBtn = document.createElement("button");
  editBtn.setAttribute("onClick", "edit(this)");
  editBtn.setAttribute("Class", "btn btn-warning m-2 ml-3 rounded-circle");
  editBtn.innerHTML =
    '<svg width="1.2em" height="2em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>';

  ulid.appendChild(lis);
  lis.appendChild(liText);
  lis.appendChild(editBtn);
  lis.appendChild(delBtn);
  inputVal.value = " ";
}

function delli(lis) {
  var parn = lis.parentNode;
  parn.remove(parn);
}

function edit(edt) {
  var edtParn = edt.parentNode;
  var editTxt = prompt("Edit ur task", edtParn.firstChild.nodeValue);
  edtParn.firstChild.nodeValue = editTxt;
}

function deleteAll() {
  ulid.innerHTML = " ";
}

function Label(l) {
  // var labelTxt = l.;
  var lab = document.getElementById("labelText");
  lab = lab.innerHTML;
  var changeLabel = prompt("Enter your label", lab);
  lab.innerHTML = changeLabel;
  // labelTxt.firstChild.nodeValue = changeLabel;
}
