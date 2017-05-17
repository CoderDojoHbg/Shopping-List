/* global $ */
/*
    Shoppinglista
*/

// initerar en shoppingkorg 
var shoppingList = [
    {
        // objekten inehåller ett id som är nummret i listan
        // detta för att göra det lättare att göra förändrigar i listan
        // name delen i objektet har shoppinglistgrejen
        id: 0,
        name: "apple"
    },
    {
        id:1,
        name: "pear"
    },
    {
        id: 2,
        name: "tomato"
    }
];

// Presentera listan i webläsaren
// Här börjar programmet som kommer att köras
var appendList = function (array, location) {
    // map är en metod för att lägga till html för varje sak shoppinglistan
    var listHtml = array.map(function (item, id) {
       return '<li class="item" id="' + id + '">' + item.name +'<button class="delete">delete</button><button class="check">check</button></li>'; 
    });
    $(location).html(listHtml);
    
};

var deleteItem = function (array, itemToDelete) {
    // splice tar bort det element som matchar sökningen, i detta fallet idt.
    array.splice(itemToDelete, 1);
    appendList(array, $('.list'));
};

var addItem = function (array, item) {
    array.push({name: item});
};


// unnamed funktion, why?
$(function () {
    // vanilla js document.getElementsByClassName('list');
    // this displays the initial list from the array.
    // list in this case is the classname CSS style
    
    
    appendList(shoppingList, $('.list'));

    // this deletes a specific item from the list (array).
    $('.list').on('click', '.delete', function (event) {
        // itemToDelete blir en siffra som den hämtar från htmltaggen id.
       var itemToDelete = $(event.currentTarget).closest('li').attr('id');
       deleteItem(shoppingList, itemToDelete);
    });

    // this makes the text have a line through it.
    $('.list').on('click', '.check', function () {
        $(this).parent().toggleClass("item-checked");
    });

    // this adds items to the list.
    $('form').submit(function (event) {
        event.preventDefault();
        
        var item = $('input').val();
        
        // if the input is empty, do nothing
        if (item === '') {
            
        } else {
        addItem(shoppingList, item);
        appendList(shoppingList, $('.list'));
        $('input').val('');
        }
    });
});

