let id_display = "global id for which is keyborad using";

function set_id(element){
   id_display = element["id"];

}

function display_keyboard(){
    if( document.getElementById("keyboard").style["display"] == "block"){
        document.getElementById("keyboard").style.display = "none";
    }
    else{
        document.getElementById("keyboard").style.display = "block";
    }
}

function key_1(){
    document.getElementById(id_display).value +=  "1";
}
function key_2(){
    document.getElementById(id_display).value +=  "2";
}
function key_3(){
    document.getElementById(id_display).value +=  "3";
}
function key_4(){
    document.getElementById(id_display).value +=  "4";
}
function key_5(){
    document.getElementById(id_display).value +=  "5";
}
function key_6(){
    document.getElementById(id_display).value +=  "6";
}
function key_7(){
    document.getElementById(id_display).value +=  "7";
}
function key_8(){
    document.getElementById(id_display).value +=  "8";
}
function key_9(){
    document.getElementById(id_display).value +=  "9";
}
function key_0(){
    document.getElementById(id_display).value +=  "0";
}
function key_q(){
    document.getElementById(id_display).value +=  "q";
}
function key_w(){
    document.getElementById(id_display).value +=  "w";
}
function key_e(){
    document.getElementById(id_display).value +=  "e";
}
function key_r(){
    document.getElementById(id_display).value +=  "f";
}
function key_t(){
    document.getElementById(id_display).value +=  "g";
}
function key_z(){
    document.getElementById(id_display).value +=  "z";
}
function key_u(){
    document.getElementById(id_display).value +=  "u";
}
function key_i(){
    document.getElementById(id_display).value +=  "i";
}
function key_o(){
    document.getElementById(id_display).value +=  "o";
}
function key_a(){
    document.getElementById(id_display).value +=  "a";
}
function key_s(){
    document.getElementById(id_display).value +=  "s";
}
function key_d(){
    document.getElementById(id_display).value +=  "d";
}
function key_f(){
    document.getElementById(id_display).value +=  "f";
}
function key_g(){
    document.getElementById(id_display).value +=  "g";
}
function key_h(){
    document.getElementById(id_display).value +=  "h";
}
function key_j(){
    document.getElementById(id_display).value +=  "j";
}
function key_k(){
    document.getElementById(id_display).value +=  "k";
}
function key_l(){
    document.getElementById(id_display).value +=  "l";
}
function key_y(){
    document.getElementById(id_display).value +=  "y";
}
function key_x(){
    document.getElementById(id_display).value +=  "x";
}
function key_c(){
    document.getElementById(id_display).value +=  "c";
}
function key_v(){
    document.getElementById(id_display).value +=  "v";
}
function key_b(){
    document.getElementById(id_display).value +=  "b";
}
function key_n(){
    document.getElementById(id_display).value +=  "n";
}
function key_m(){
    document.getElementById(id_display).value +=  "m";
}
function key_del(){
    document.getElementById(id_display).value =  "";
}
function key_space(){
    document.getElementById(id_display).value +=  " ";
}