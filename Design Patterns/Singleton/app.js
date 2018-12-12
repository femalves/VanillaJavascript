// Singleton - Cannot have more than one instance with this pattern

// Imediate anonymous function that only returns one instance
// Hard to debug
const Singleton  = (function() {
    let instance;

    function createInstance() {
        const object = new Object({name: 'Brad'});
        return object;
    }


    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();


console.log(instanceA === instanceB);