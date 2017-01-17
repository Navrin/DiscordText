/* old code below */

(() => {
    // This (() => {})() is called an immediately invoked function expression.
    // It wraps all the code into a function and calls it as soon as the code is loaded.
    // It stops variables 'leaking' into the global state.

    // const is a type of variable that cannot be changed once defined.
    // assigning the const 'elements' to something else will cause an error
    const elements = {
        primaryInput: document.getElementById('input'),
        primaryOutput: document.getElementById('output'),
    };
    // Maps all the 'special' characters to an object instead of an array;
    const specialCodes = {
        "0": ":zero: ",
        "1": ":one: ",
        "2": ":two: ",
        "3": ":three: ",
        "4": ":four: ",
        "5": ":five: ",
        "6": ":six: ",
        "7": ":seven: ",
        "8": ":eight: ",
        "9": ":nine: ",
        "#": ":hash: ",
        "*": ":asterisk: ",
    };

    // this () => { } is called a lexically scoped anonymous function.
    // when you use function(), the keyword 'this' changes to the function
    // you're writing. When using () => {}, the 'this' keyword stays the same.
    // In general, use () => {} when writing functions.
    const parseLetter = (letter) => {

        // regex is an extremely powerful pattern matcher.
        // this regex here matches any alphabetical letters
        // [A-Z] means anything from A - Z, same with [a-z]
        // the | lets its match one or the other
        if (/[A-Z]|[a-z]/g.test(letter)) {
            // backticks in javascript are called templates
            // they are basically strings that span across multiple lines
            // and that can have variables inside them if you use ${}.
            // Eg. const x = 10;
            //     `x equals ${x}` would return `x equals 10`
            return `:regional_indicator_${letter}: `
        } else if (specialCodes[letter]) {
            // this simply checks if the letter matches the special codes.
            return specialCodes[letter]
        } else if (letter == " ") {
            // triple pad spaces to make them more noticable.
            return "        ";
        }
        return letter;
    }

    const createOutput = (string) => {
        return string.split("") // splits the string into an array of characters.
            // "hello".split("") will return ['h', 'e', 'l', 'l', 'o']
            .map(letter => parseLetter(letter.toLowerCase()))
            // map is an amazing function, along with filter and reduce
            // map loops through each value in the array, and modifies it 
            // with whatever the return value of the function is.
            // It only modifies the array IN-PLACE, meaning the original
            // array will not be changed.
            .join("");
        // join --- converts the array back to a string with the character you pass
        // to it inbetween array values.
        // so ['h', 'i', '!'].join("a") will return "haia!a"
        // while ['h', 'i', '!'].join("") will return "hi!"
    }

    // Event listeners are the proper way to "connect" to HTML.
    // addEventListener accepts a string for the change type, like
    // how you would do onclick="" for a HTML element, but instead
    // "click". The 2nd argument is the function that will be called
    // when the event is triggered.
    elements.primaryInput.addEventListener("input", (t) => {
        elements.primaryOutput.textContent = createOutput(t.target.value);
    });
})();





// var input;

// function setup() {
//     input = document.getElementById("input");
//     input.onkeyup = translate;
//     input.oncut = translate;
//     input.onpaste = translate;
//     input.onpropertychange = translate;
// };

// var input_chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "#", "*"];
// var output_chars = [":regional_indicator_a: ", ":regional_indicator_b: ", ":regional_indicator_c: ", ":regional_indicator_d: ", ":regional_indicator_e: ", ":regional_indicator_f: ", ":regional_indicator_g: ", ":regional_indicator_h: ", ":regional_indicator_i: ", ":regional_indicator_j: ", ":regional_indicator_k: ", ":regional_indicator_l: ", ":regional_indicator_m: ", ":regional_indicator_n: ", ":regional_indicator_o: ", ":regional_indicator_p: ", ":regional_indicator_q: ", ":regional_indicator_r: ", ":regional_indicator_s: ", ":regional_indicator_t: ", ":regional_indicator_u: ", ":regional_indicator_v: ", ":regional_indicator_w: ", ":regional_indicator_x: ", ":regional_indicator_y: ", ":regional_indicator_z: ", ":zero: ", ":one: ", ":two: ", ":three: ", ":four: ", ":five: ", ":six: ", ":seven: ", ":eight: ", ":nine: ", ":hash: ", ":asterisk:"];

// function translate() {
//     var output = "";
//     if (input.value != null) {
//         var charfromarray;
//         var charfrominput;
//         var location;
//         var found;
//         //for every char in input
//         for (var iterator = 0; iterator < input.value.length; iterator++) {
//             found = false;
//             location = 0;
//             //find corresponding char in known chars
//             while (!found && location < input_chars.length) {
//                 charfromarray = input_chars[location];
//                 charfrominput = input.value.charAt(iterator).toLocaleLowerCase();
//                 if (charfrominput.localeCompare(charfromarray) == 0) {
//                     found = true;
//                 } else {
//                     location++;
//                 }
//             }
//             if (found) {
//                 output = output + output_chars[location];
//             } else if (input.value.charAt(iterator).trim() == '') {
//                 output = output + new Array(6).join("\u00A0");
//             } else {
//                 output = output + charfrominput;
//             }
//         }
//         document.getElementById("output").innerHTML = output;
//     }
// }