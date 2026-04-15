function usersave(){
    const el=document.getElementById('username');
    if (!el){
        alert("input not found");
        return;
    }

    const enteredname=el.value;
    localStorage.setItem('username',enteredname);
    window.location.href="http://localhost:3000/calculator.html";
    }

                