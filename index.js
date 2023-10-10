function display(n)
{
    document.getElementById('textarea').value+=n;

}
function calculate(){
    let n=document.getElementById('textarea').value;
    let ans=eval(n);
    document.getElementById('textarea').value=ans;

}
function clr(){
    document.getElementById('textarea').value="";
}
