var input;

function setup() {
    input = document.getElementById("input");
    input.onkeyup = translate;
    input.oncut = translate;
    input.onpaste = translate;
    input.onpropertychange = translate;
};

var input_chars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","#","*"];
var output_chars = [":regional_indicator_a: ",":regional_indicator_b: ",":regional_indicator_c: ",":regional_indicator_d: ",":regional_indicator_e: ",":regional_indicator_f: ",":regional_indicator_g: ",":regional_indicator_h: ",":regional_indicator_i: ",":regional_indicator_j: ",":regional_indicator_k: ",":regional_indicator_l: ",":regional_indicator_m: ",":regional_indicator_n: ",":regional_indicator_o: ",":regional_indicator_p: ",":regional_indicator_q: ",":regional_indicator_r: ",":regional_indicator_s: ",":regional_indicator_t: ",":regional_indicator_u: ",":regional_indicator_v: ",":regional_indicator_w: ",":regional_indicator_x: ",":regional_indicator_y: ",":regional_indicator_z: ",":zero: ",":one: ",":two: ",":three: ",":four: ",":five: ",":six: ",":seven: ",":eight: ",":nine: ",":hash: ",":asterisk:"];

function translate() {
    var output = "";
    if(input.value != null) {
        var charfromarray;
        var charfrominput;
        var location;
        var found;
        //for every char in input
        for (var iterator = 0; iterator < input.value.length; iterator++) {
            found = false;
            location = 0;
            //find corresponding char in known chars
            while (!found && location < input_chars.length) {
                charfromarray = input_chars[location];
                charfrominput = input.value.charAt(iterator).toLocaleLowerCase();
                if (charfrominput.localeCompare(charfromarray) == 0) {
                    found = true;
                } else {
                    location++;
                }
            }
            if (found) {
                output = output + output_chars[location];
            } else if (input.value.charAt(iterator).trim() == '') {
                output = output + new Array(6).join("\u00A0");
            } else {
                output = output + charfrominput;
            }
        }
        document.getElementById("output").innerHTML = output;
    }
}