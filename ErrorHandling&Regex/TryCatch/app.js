
const user = {email: 'jdoe@gmail.com'};

try {

    // Produce a ReferenceError
    myFunction();

    // Produce a TypeError
    null.myFunction();

    // Produce SyntaxError
    eval('Hello World');

    // Produce URIError
    decodeURIComponent('%');

    if(!user.name) {
        //throw 'User has no name';

        throw new SyntaxError('User has no name');
    }
} catch(e) {
    // console.log(e);
    //console.log(e.message);
    //console.log(e.name);
    // console.log(e instanceof TypeError);

} finally {
    console.log('Runs regardless of result');
}