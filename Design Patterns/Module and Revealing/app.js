// Basic structure

(function () {
    // Declare private variables and functions


    return {
        // Declare public variables and functions
    }

})();

// Standard module pattern
const UICtrol = (function() {
    // This is private
    let text = 'Hello World';
    
    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;

    }

    return {
        // This is public
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }

})();

UICtrol.callChangeText();

// Revealing module pattern

const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item added...') ;

    }

    function get(id) {
        return data.find(item=> {
            return item.id === id;
        })
    }

    return {
        // Reveals private methods
        add: add, 
        get: get
    }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(1));
