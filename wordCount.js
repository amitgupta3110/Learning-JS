let textbox = document.getElementById("textbox");
        textbox.addEventListener('input',function(){
            var text = this.value;
            let char = text.length;
            document.getElementById("char").innerHTML=char;
            text = text.trim();
            let words = text.split(" ");
            let cleanList = words.filter(function(el){
                return el!="";

            });
            document.getElementById("word").innerHTML = cleanList.length;
        });
        textbox.defaultValue="Enter your text here..";