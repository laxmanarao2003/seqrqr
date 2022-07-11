let generate=()=>
{
    let inp1=document.form1.text_val.value;
    let dwn_link=document.getElementById("dwn_link");
    let img=document.getElementById("img");
    if(inp1.length!=0)
    {
        img.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"+inp1;
        dwn_link.href=img.src;
    }
    else
    {
        alert("Input is not valid Enter Valid Text");
    }
    img.addEventListener("load",loading);
}
clear_val=()=>
{
    let inp1=document.form1.text_val;
    inp1.value="";
}