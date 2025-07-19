let username = document.getElementById("username");
        let password = document.getElementById("password");
        let flag = 1;

        function validateForm(){
            if(username.value== ""){
                document.getElementById("UserError").innerHTML = "User Name is Empty";
                flag = 0;
            }
            else if(username.value.length<3){
                document.getElementById("UserError").innerHTML = "Username require minimum 3 characters";
                flag=0;
            }
            else{
                document.getElementById("UserError").innerHTML = "";
                flag=1;

            }
            if(password.value== ""){
                document.getElementById("PassError").innerHTML = "Password is Empty";
                flag=0;
            }
            else{
                document.getElementById("PassError").innerHTML = "";
                flag=1;

            }
            if(flag)
            {
                return true;
            }
            else{
                return false;
            }
        }