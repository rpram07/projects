function display( number )
{
    document.getElementById("box").value += number;
}

function calculate()
{
    ans = eval(document.getElementById("box").value);
    document.getElementById("box").value = ans;
}


function clr()
{
    document.getElementById("box").value = "";
}