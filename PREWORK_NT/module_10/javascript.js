const buttons = Array.from(document.getElementsByTagName('button'));
const box = document.getElementById("box");

const cssRules = {
  1 : {
    "style" : "transform",
    "value" : "scale(2,1)"
  },

  2 : {
    "style" : "background-color",
    "value" : "blue"
  },

  3 : {
    "style" : "opacity",
    "value" : "0"
  },

  4 : function(){
    buttons.forEach(function(val, ind) {
      reset(val,ind);
    });
  }

}

function reset(btn,index){
  if(index < 4) {
    box.style[cssRules[index + 1]["style"]] = "1";
    btn.style[cssRules[index + 1]["style"]] = "";
  }
}


function addEvents(btnArray) {

  btnArray.forEach(function(val) {
    val.addEventListener("click",function(e){
      if(this.id.slice(-1) == 4 ){
        cssRules[4]()
      } else {
        var key = this.id.slice(-1);
        var cssRule = cssRules[key].style;
        var cssVal = cssRules[key].value;
        box.style[cssRule] = cssVal;
        console.log(cssVal,box)
      }
    })
  });

}

addEvents(buttons);
