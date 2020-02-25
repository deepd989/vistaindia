function next_desk_testimonial()
{
    let x=document.getElementById("page1_testimonials")
    x.style.display="none";
    let y =document.getElementById("page2_testimonials")
    y.style.display="flex"
    console.log("next fn")
}
function prev_desk_testimonial()
{
    let x=document.getElementById("page2_testimonials")
    x.style.display="none";
    let y =document.getElementById("page1_testimonials")
    y.style.display="flex"
    console.log("prev fn")
}

function next_mob_testimonials()
{
    let arr=document.getElementsByClassName("mob_cards")
    // console.log(arr)
    let num=0;
    for(let i=0;i<6;i++)
    { 
        // console.log(arr[i])
        if(arr[i].style.display!="none")
        {
            console.log(arr[i].id[0])
            num=arr[i].id[0];
        }
    }
    console.log(num)
    let x=document.getElementById(num+"_card")
    x.style.display="none";
    nxt=(parseInt(num)+1)
    nxt=nxt%7
    if(nxt==0)
    {
        nxt=1
    }
    console.log(nxt+"_card")
    let y=document.getElementById(nxt+"_card")
    y.style.display="block"

}
function prev_mob_testimonials()
{
    let arr=document.getElementsByClassName("mob_cards")
    // console.log(arr)
    let num=0;
    for(let i=0;i<6;i++)
    { 
        // console.log(arr[i])
        if(arr[i].style.display!="none")
        {
            console.log(arr[i].id[0])
            num=arr[i].id[0];
        }
    }
    // console.log(num)
    let x=document.getElementById(num+"_card")
    x.style.display="none";
    prev=(num-1)%6
    if(prev==0)
    {
        prev=6;
    }
    // console.log(String(prev))
    console.log(prev+"_card")
    let y=document.getElementById(prev+"_card")
    // console.log(y)
    y.style.display="block"

}