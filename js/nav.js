


function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else{
            x.style.display = "block";
        }
    }

function make_active()
{
    let y=document.getElementById("rel");
    y.classList.add("active_link_over");
    console.log("done");
}

function make_deactive()
{
    let y=document.getElementById("rel");
    y.classList.remove("active_link_over");
    console.log("done");
}

function make_active2()
{
    let y=document.getElementById("rec");
    y.classList.add("active_link_over2");
    console.log("done");
}

function make_deactive2()
{
    let y=document.getElementById("rec");
    y.classList.remove("active_link_over2");
    console.log("done");
}