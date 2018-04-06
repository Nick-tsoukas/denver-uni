const buttons = Array.from(document.getElementsByTagName('button'));
const cssRules = {
  1 : {
    "style" : "font-size",
    "value" : "1.4em"
  },

  2 : {
    "style" : "color",
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
        val.style[cssRule] = cssVal;
      }
    })
  });

}

addEvents(buttons);
