function hide(num)
    {
        // console.log("working")
        document.getElementById(num+"_service").style.display="none";
        document.getElementById(num+"_OG").style.display="none";
        document.getElementById(num+"_synopsis").style.display="block";
    }
    function show(num)
    {
        // console.log("working")
        document.getElementById(num+"_service").style.display="block";
        document.getElementById(num+"_OG").style.display="block";
        document.getElementById(num+"_synopsis").style.display="none";
        let module=document.getElementById(num+"_OG");
        let z=num;
        let txt="<a onclick='hide("+z+")'> Read More</a>";
        // clamp(z)

    }
    function clamp(num)
    {
        // console.log("clamp fn")
        let clamp_module=document.getElementById(num+"_OG");
        // console.log(clamp_module.innerText)
        let synopsis=clamp_module.innerText
        // console.log(synopsis)
        synopsis=synopsis.substring(0,91)
        // console.log(synopsis)
        let a =document.createElement("a")
        a.setAttribute("onclick","hide("+num+");");
        a.innerText=" Read More ..."
        clamp_module.innerText=synopsis
        clamp_module.appendChild(a)
        // console.log(clamp_module)
    }

  