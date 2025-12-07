const body = document.getElementById("body");
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2");

const input = {
            InputEmail: document.getElementById("input_email2"),
            InputUser: document.getElementById("input_user2"),
            InputPassword: document.getElementById("input_password2"),
            ConfirmPassword: document.getElementById("input_confirmpassword")
        };

function swap() {
    
    box1.style.visibility = "hidden";
    box2.style.visibility = "visible";
    document.getElementById("BackToLogin").style.visibility = "visible";
    document.getElementById("img").style.visibility = "hidden";
    document.getElementById("kuaitun_finalfrom").style.visibility = "hidden";
    document.getElementById("kuaitun").style.visibility = "hidden";
    body.style.background = "url(picture/skibidi.jpg)";
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";

    box2.style.animation = "none";
    void box2.offsetWidth;
    void body.offsetWidth;
    box2.style.animation = "ScaleUpandFadeIn 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards";

    input.InputEmail.style.borderInline = ""; 
    input.InputEmail.style.boxShadow = "";   

    input.InputPassword.style.borderInline = ""; 
    input.InputPassword.style.boxShadow = "";
        
    input.InputUser.style.borderInline = ""; 
    input.InputUser.style.boxShadow = "";
        
    input.ConfirmPassword.style.borderInline = ""; 
    input.ConfirmPassword.style.boxShadow = "";
}    
    
//Sign in

    let Email;
    let User;
    let Password;
    let confirmPassword;
    
    let Check_email;
    let Check_Password;
    
    let CheckSpace_Email;
    let CheckSpace_User;
    let CheckSpace_Password;

    let ArrayEmail = JSON.parse(localStorage.getItem("SaveDataEmail")) || [];
    let ArrayUser = JSON.parse(localStorage.getItem("SaveDataUser")) || [];
    let ArrayPassword = JSON.parse(localStorage.getItem("SaveDataPassword")) || [];

function loadLatestData() {
    ArrayEmail = JSON.parse(localStorage.getItem("SaveDataEmail")) || [];
    ArrayUser = JSON.parse(localStorage.getItem("SaveDataUser")) || [];
    ArrayPassword = JSON.parse(localStorage.getItem("SaveDataPassword")) || [];
}

function create() {
    Email = document.getElementById("input_email2").value;
    User = document.getElementById("input_user2").value;
    Password = document.getElementById("input_password2").value;
    confirmPassword = document.getElementById("input_confirmpassword").value;

    Check_email = Email.indexOf("@gmail.com"); 
    Check_Password = Password.length;

    CheckSpace_Email = Email.indexOf(" ");
    CheckSpace_User = User.indexOf(" ");
    CheckSpace_Password = Password.indexOf(" ");

    const SlicedomainEmail = Email.slice(Check_email);
    const FindLength = SlicedomainEmail.length;

    input.InputEmail.focus();
    input.InputPassword.focus();
    input.InputUser.focus();
    input.ConfirmPassword.focus();
   
    if (Check_email === -1 || Check_email === 0 && Email === "" || User === "" || Password === "") {
        alert("ใส่Email User กับ Password ให้ครบและ Emailต้องมี gmail.com ##อย่ามาเหลี่ยมแถวนี้");
        
        input.InputEmail.style.borderInline = "2px solid red"; 
        input.InputEmail.style.boxShadow = "red 0px 10px 10px -5px"; 
        
        input.InputEmail.style.borderInline = "2px solid red"; 
        input.InputEmail.style.boxShadow = "red 0px 10px 10px -5px";   

        input.InputPassword.style.borderInline = "2px solid red"; 
        input.InputPassword.style.boxShadow = "red 0px 10px 10px -5px";
        
        input.InputUser.style.borderInline = "2px solid red"; 
        input.InputUser.style.boxShadow = "red 0px 10px 10px -5px";
        
        input.ConfirmPassword.style.borderInline = "2px solid red"; 
        input.ConfirmPassword.style.boxShadow = "red 0px 10px 10px -5px";
        return;
    }
    else if(User === localStorage.getItem("User") && Password === localStorage.getItem("Password") && Email === localStorage.getItem("Email")) {
        alert("User, Password และ Email  มีคนใช้แล้ว");
        document.getElementById("input_email2").value = "";
        document.getElementById("input_user2").value = "";
        document.getElementById("input_password2").value = "";
        document.getElementById("input_confirmpassword").value = "";
        
        input.InputEmail.style.borderInline = "2px solid red"; 
        input.InputEmail.style.boxShadow = "red 0px 10px 10px -5px";   

        input.InputPassword.style.borderInline = "2px solid red"; 
        input.InputPassword.style.boxShadow = "red 0px 10px 10px -5px";
        
        input.InputUser.style.borderInline = "2px solid red"; 
        input.InputUser.style.boxShadow = "red 0px 10px 10px -5px";
        
        input.ConfirmPassword.style.borderInline = "2px solid red"; 
        input.ConfirmPassword.style.boxShadow = "red 0px 10px 10px -5px";
        return;
    }
    else if (FindLength > 10) {
        alert("ใส่gmail.comดีๆไอ้หนู");
        document.getElementById("input_email2").value = "";

        input.InputEmail.style.borderInline = "2px solid red"; 
        input.InputEmail.style.boxShadow = "red 0px 10px 10px -5px"; 
        return;
    }
    else if(Email === localStorage.getItem("Email")) {
        alert("Emailมีคนใช้ไปแล้ว");
        document.getElementById("input_email2").value = "";

        input.InputEmail.style.borderInline = "2px solid red"; 
        input.InputEmail.style.boxShadow = "red 0px 10px 10px -5px"; 
        return;
    }
    else if (User === localStorage.getItem("User")) {
        alert("Userนี้มีคนใช้แล้ว");
        document.getElementById("input_user2").value = "";

        input.InputUser.style.borderInline = "2px solid red"; 
        input.InputUser.style.boxShadow = "red 0px 10px 10px -5px";
        return;
    }
    else if(Password === localStorage.getItem("Password")) {
        alert("Passwordนี้มีคนใช้แล้ว");
        document.getElementById("input_password").value = "";

        input.InputPassword.style.borderInline = "2px solid red"; 
        input.InputPassword.style.boxShadow = "red 0px 10px 10px -5px";
        return;
    }
    else {
        if (CheckSpace_Email !== -1 || CheckSpace_User !== -1 || CheckSpace_Password !== -1) {
            alert("Email User Password ต้องไม่มี space");
            document.getElementById("input_email2").value = "";
            document.getElementById("input_user2").value = "";
            document.getElementById("input_password2").value = "";
            document.getElementById("input_confirmpassword").value = "";

            input.InputEmail.style.borderInline = "2px solid red"; 
            input.InputEmail.style.boxShadow = "red 0px 10px 10px -5px"; 
            return;
        }
        else if (Check_Password < 8) {
            alert("รหัสต้องมี8ตัว");
            document.getElementById("input_password2").value = "";

            input.InputPassword.style.borderInline = "2px solid red"; 
            input.InputPassword.style.boxShadow = "red 0px 10px 10px -5px";
            return;
        }
        else if (Check_Password >= 12) {
            alert("รหัสห้ามเกิน12ตัว");
            document.getElementById("input_password2").value = "";

            input.InputPassword.style.borderInline = "2px solid red"; 
            input.InputPassword.style.boxShadow = "red 0px 10px 10px -5px";
            return;
        }
        else if (confirmPassword !== Password) {
            alert("password ไม่เหมือนกัน");
            document.getElementById("input_password2").value = "";
            document.getElementById("input_confirmpassword").value = "";

            input.ConfirmPassword.style.borderInline = "2px solid red"; 
            input.ConfirmPassword.style.boxShadow = "red 0px 10px 10px -5px";
            return;
        }
        else {
            localStorage.setItem("Email", Email);
            localStorage.setItem("User", User);
            localStorage.setItem("Password", Password);

            ArrayEmail.push(Email);
            localStorage.setItem("SaveDataEmail", JSON.stringify(ArrayEmail));
            ArrayUser.push(User);
            localStorage.setItem("SaveDataUser", JSON.stringify(ArrayUser));
            ArrayPassword.push(Password);
            localStorage.setItem("SaveDataPassword", JSON.stringify(ArrayPassword));
            console.log(ArrayEmail, ArrayUser, ArrayPassword);

            alert("สมัครบัญชีแล้ว");
            box2.style.visibility  = "hidden";
            box1.style.visibility = "visible";
            box1.style.animation = "none";
            void box1.offsetWidth;
            box1.style.animation = "ScaleUpandFadeIn 1s cubic-bezier(0.3, 1.56, 0.64, 1) forwards";
            document.getElementById("BackToLogin").style.visibility = "hidden";
            document.getElementById("kuaitun").style.visibility = "visible";
            body.style.background = "rgb(63, 63, 255)";
        }
    }
}

//Log in

let EnterUser = document.getElementById("input_User1");
let EnterPassword = document.getElementById("input_password1");
let NumberOfKuaitunsFans = parseInt(localStorage.getItem("NumberOfKuaitunsFans")) || 0;

const input1 = {
    input_User1: document.getElementById("input_User1"), 
    input_Password1: document.getElementById("input_password1")
}

    input1["input_User1"].focus();
    input1["input_Password1"].focus();

    input1["input_User1"].style.borderInline = ""; 
    input1["input_User1"].style.boxShadow = "";   

    input1["input_Password1"].style.borderInline = ""; 
    input1["input_Password1"].style.boxShadow = "";
    
function apply() {
    const ValueUser = EnterUser.value;
    const ValuePassword = EnterPassword.value;
    
    const cheakSpace_Password2 = ValuePassword.indexOf(" ");
    const cheakSpace_User2 = ValueUser.indexOf(" ")

    let alreadyClicked = localStorage.getItem(`clicked_${ValueUser}`) === "true";

    const useradmin = "anonymous";
    const passworadmin = "admin";

    const adminpanel = document.getElementById("Admin"); 

    if (ValueUser === useradmin && ValuePassword === passworadmin) {
        loadLatestData();
        adminpanel.style.animation = "none";
        void adminpanel.offsetWidth;
        
        adminpanel.style.visibility = "visible";
        adminpanel.style.animation = "MoveToRight 1s ease-out forwards";
        box1.style.visibility = "hidden";
        document.getElementById("DataEmail").innerText = ArrayEmail.join("\n");
        document.getElementById("DataUser").innerText = ArrayUser.join("\n");
        document.getElementById("DataPassword").innerText = ArrayPassword.join("\n");
        document.getElementById("BackToLogin").style.visibility = "visible";
        document.getElementById("clearALL").style.visibility = "visible";
        body.style.backgroundColor = "#0d1117";
        document.getElementById("Admin").style.background = "linear-gradient(to right, #161b22, #30363d)";
        document.getElementById("img").style.visibility = "hidden";
        document.getElementById("kuaitun_finalfrom").style.visibility = "hidden";
        document.getElementById("kuaitun").style.visibility = "hidden";
    }
    else { 
        if (ValueUser === "" || ValuePassword === "") {
            alert("ใส่UserและPasswordสิครับ");
            
            input1["input_Password1"].style.borderInline = "2px solid red"; 
            input1["input_Password1"].style.boxShadow = "red 0px 10px 10px -5px";

            input1["input_User1"].style.borderInline = "2px solid red"; 
            input1["input_User1"].style.boxShadow = "red 0px 10px 10px -5px";
            return;
        }
        else if (cheakSpace_Password2 !== -1 || cheakSpace_User2 !== -1) {
            alert("User หรือ Password ต้องไม่มีSpace");
            
            input1["input_Password1"].style.borderInline = "2px solid red"; 
            input1["input_Password1"].style.boxShadow = "red 0px 10px 10px -5px";

            input1["input_User1"].style.borderInline = "2px solid red"; 
            input1["input_User1"].style.boxShadow = "red 0px 10px 10px -5px";
            return;
        }
        else if (ValueUser !== localStorage.getItem("User") && ValuePassword !== localStorage.getItem("Password")) {
            alert("User และ Password ไม่ถูกต้อง");
            
            input1["input_Password1"].style.borderInline = "2px solid red"; 
            input1["input_Password1"].style.boxShadow = "red 0px 10px 10px -5px";

            input1["input_User1"].style.borderInline = "2px solid red"; 
            input1["input_User1"].style.boxShadow = "red 0px 10px 10px -5px";
            return;
        }
        else if (ValueUser !== localStorage.getItem("User")) {
            alert("Userไม่ถูกต้อง");

            input1.input_User1.style.borderInline = "2px solid red"; 
            input1.input_User1.style.boxShadow = "red 0px 10px 10px -5px";
            return;
        }
        else if (ValuePassword !== localStorage.getItem("Password")) {
            alert("Passwordไม่ถูกต้อง");

            input1["input_Password1"].style.borderInline = "2px solid red"; 
            input1["input_Password1"].style.boxShadow = "red 0px 10px 10px -5px";
            return;
        }
        else if (alreadyClicked) { 
            alert("คุณมึงจะกดซ้ำทำไมอยากเป็นแฟนไข่ตุ๋นขนาดนั้นเลย"); 
            return;
        }
        else {
            NumberOfKuaitunsFans++
            input1["input_User1"].style.borderInline = ""; 
            input1["input_User1"].style.boxShadow = "";   

            input1["input_Password1"].style.borderInline = ""; 
            input1["input_Password1"].style.boxShadow = "";
            
            localStorage.setItem(`clicked_${ValueUser}`, "true");
            document.getElementById("kuaitun_finalfrom").style.visibility = "visible";
            alert(`คุณ${ValueUser}คือแฟนไข่ตุ๋นคนที่ ${NumberOfKuaitunsFans}`);
        }
    }
}

const ShowPassword1 = document.getElementById("ShowPassword1");
const ShowPassword2 = document.getElementById("ShowPassword2");

//ShowPassword

ShowPassword1.addEventListener("click", () => {
    const type = EnterPassword.getAttribute("type") === "password" ? "text" : "password";
    EnterPassword.setAttribute("type", type);
    ShowPassword1.textContent = type === "password" ? "👁️" : "🙈";
});
ShowPassword2.addEventListener("click", () => {
    const input1 = document.getElementById("input_password2");
    const input2 = document.getElementById("input_confirmpassword");
    const type = input1.getAttribute("type") === "password" ? "text" : "password";
    
    input1.setAttribute("type", type);
    input2.setAttribute("type", type);
    
    ShowPassword2.textContent = type === "password" ? "👁️" : "🙈";
});

function clearALL() {
    localStorage.clear();
    localStorage.removeItem("NumberOfKuaitunsFans");
    ArrayEmail = [];
    ArrayPassword = [];
    ArrayUser = [];
    document.getElementById("DataEmail").innerText = "";
    document.getElementById("DataUser").innerText = "";
    document.getElementById("DataPassword").innerText = "";
}

function BackToLogin() {
    box1.style.visibility = "visible";
    document.getElementById("Admin").style.visibility = "hidden";
    document.getElementById("BackToLogin").style.visibility = "hidden";
    document.getElementById("clearALL").style.visibility = "hidden";
    document.getElementById("box2").style.visibility = "hidden";
    document.getElementById("kuaitun").style.visibility = "visible";
    document.getElementById("body").style.background = "rgb(63, 63, 255)";
    box1.style.animation = "none";
    void box1.offsetWidth;
    box1.style.animation = "ScaleUpandFadeIn 1s cubic-bezier(0.3, 1.56, 0.64, 1) forwards";
    box1.style.transformOrigin = "left center";
}