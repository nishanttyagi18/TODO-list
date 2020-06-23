var myform = document.getElementById('addForm');
var items = document.getElementById('items');
var filter = document.getElementById('filter');
var firstList = document.getElementById('first-list')
var noitem = document.getElementById('noitem');

items.style.display = 'none'



myform.addEventListener('submit', addItem)
items.addEventListener('click', deleteItem)
filter.addEventListener('keyup',filterItems)


function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete?')){
            var li = e.target.parentElement;
            items.removeChild(li);
        }        
    }    
}



function addItem(e){
    e.preventDefault();
    var inputValue = document.getElementById('item').value;
    if(inputValue == ''){
        alert('Item cannot be Empty')
        return;
    }
    noitem.style.display = 'none'
    items.style.display = 'block';
    firstList.style.display = 'none'
 

    var newList = document.createElement('li')
    newList.className = 'list-group-item';
    newList.appendChild(document.createTextNode(inputValue))


    var deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    newList.appendChild(deleteBtn)


    items.appendChild(newList); 
}

function filterItems(e){
    var textInbox = e.target.value.toLowerCase();

    var listItems = items.getElementsByTagName('li');

    Array.from(listItems).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(textInbox) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }

    })
}