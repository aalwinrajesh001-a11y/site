function welcome(){
    const storedname=localStorage.getItem('username');
    if (storedname){

        const welcomeEl=document.getElementById('welcome');
        if (welcomeEl){
            welcomeEl.textContent=`WELCOME ${storedname} !`
        }
        

    }


}
welcome();


function calculate(){
    const total=parseInt(document.getElementById('totaldays').value);
    const attended=parseInt(document.getElementById('attended_days').value);
    
    if (!total || !attended){
        document.getElementById('result').textContent=`Please Enter Valid Data in Both Fields !`;
        return;
    }

    const current=Math.floor((attended/total)*100);

    if (current>=85){

        const skipdays=Math.ceil(attended-0.85*total);
        document.getElementById('result').textContent=`You already have ${current.toFixed(1)}% attendance. So you can skip ${skipdays} days(s)`;

    }
    else{
        const x=Math.ceil((17*total-20*attended)/3);
        document.getElementById('result').textContent=`You have ${current.toFixed(1)}% attendance. So you have to attend ${x} more classes without any leave to reach 85%.`;

    }




}