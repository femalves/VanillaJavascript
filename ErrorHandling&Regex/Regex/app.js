let re;

re = /hello/;

console.log(re); // /hello/
console.log(re.source); // hello


// exec() - Return result in an array or null

const result = re.exec('word hello world'); 

console.log(result); // ["hello", index: 5, input: "word hello world"] or null if it's not a match

// test() - Returns true or false 
const result = re.test('Hello'); 
console.log(result);// False, because second is uppercase 

// re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global results 

// match() - Return result array or null
const str = 'hello there';
const result = str.match(re);
console.log(result); //["hello", index: 0, input:"hello there" ]


// search() - Returns index of the first match if not found returns -1

const str = 'Brad hello there';
const result = str.search(re);
console.log(result);

// replace() - Return new string with some or all matches of a pattern
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);

//--------------------------------------------------------//

// Metacharacter symbols

// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols

re = /^h/i; // Must start with h, case insensitive
re = /d$/i; // Must end with d, case insensitive
re = /world$/i; // Must end with d, case insensitive
re = /^hello$/i; // Must begin and end with hello, case insensitive
re = /h.llo/; // The . matches any one character
re = /h*llo/; // The * matches any character 0 or more times
re = /gre?a?y/; // The ? represents an optional character. In this case, e or a. 
re = /gre?a?y\?/ // The \ character escapes the last ?


// Brackets [] - Character sets

re = /gr[ae]y/i; // Must be a or e
re = /[GF]ray/; // Must be G or F
re = /[^GF]ray/; // Matches anything except G or F
re = /[A-Z]ray/; // Matches any uppercase letter
re = /[a-z]ray/; // Matches any lowercase letter
re = /[A-Za-z]ray/; // Matches any letter
re = /[0-9]ray/; // Matches any digit

// Braces {} - Quantifiers

re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,}o/i; // Must occur exactly at least {m} amount of times


// Parentheses () - Grouping
re = /([0-9]x){3}$/ // 3x3x3x


// Shorthand character classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // One or more alphanumeric or _
re = /\W/; // Anything BUT alphanumeric or _
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match non-whitespace char
re = /Hell\b/i; // Word boundary


// Assertions
re = /x(?=y)/; // Matches x only if followed by y
re = /x(?!y)/; // Matches x only if not followed by y


// String to match
const str = 'Hello world';
const str = '3x3x3x';

const str = 'Hello, welcome to hell.'

const str = 'Grey';

// Log Results
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
    if(re.text(str)){
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str)

