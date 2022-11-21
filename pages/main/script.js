var suffragette;
var buddyboy;
var counter=0;
var sum=0;
var sumtext;
window.onload = function() {
    var buddy = document.querySelector("body");
    buddyboy=buddy;
    buddy.appendChild(createhead());
    var dims=createDimensions();
    buddy.appendChild(dims);
    fetch('../../assets/books.json') 
    .then(response => {
        return response.json();
    })
    .then(data => {
        suffragette=data;
        dims.querySelectorAll("div")[0].appendChild(createBooks(data));
        console.log(dims.querySelectorAll("div"));
    });

}
function createhead()
{
    var headiv = document.createElement("div");
    headiv.setAttribute("class","headcontain");
    var hh = document.createElement("h1");
    hh.textContent = "The greatest bookshop ever";
    var imge = document.createElement("img");
    imge.setAttribute("src","../../assets/images/Library.jpg");
    imge.setAttribute("width","300");
    imge.setAttribute("height","200");
    headiv.appendChild(imge);
    headiv.appendChild(hh);
    return headiv;
}

function createBooks(bks)
{
    var headiv = document.createElement("div");
    headiv.setAttribute("class","shelf");
    var i=0;
    for (var book in bks)
    {
        var cdr=document.createElement("div");
        cdr.setAttribute("draggable","true");
        cdr.setAttribute("ondragstart","dragstart_handler(event)");
        cdr.setAttribute("class","book");
        cdr.setAttribute("id",`bbk_${i}`);

        window.addEventListener("DOMContentLoaded", () => {
            // Get the element by id
            const element = document.getElementById(`bbk_${i}`);
            // Add the ondragstart event listener
            element.addEventListener("dragstart", dragstart_handler);
          })


        var imges=document.createElement("img");
        imges.setAttribute("src",bks[book].imageLink);
        imges.setAttribute("width","150");
        imges.setAttribute("height","250");
        cdr.appendChild(imges);
        var othdiv=document.createElement("div");
        othdiv.setAttribute("class","inf");
        var hhh = document.createElement("h3");
        hhh.textContent = bks[book].author;
        othdiv.appendChild(hhh);
        hhh = document.createElement("h2");
        hhh.textContent = bks[book].title;
        othdiv.appendChild(hhh);

        hhh = document.createElement("h4");
        hhh.textContent = bks[book].price + " $";
        othdiv.appendChild(hhh);
        
        var foot = document.createElement("div");
        foot.setAttribute("class","footbook");
        hhh = document.createElement("input");    
        hhh.setAttribute("value","Show more");
        hhh.setAttribute("type","button");
        hhh.setAttribute("class","showmore");
        hhh.setAttribute("id",`showmr_${i}`);
        hhh.setAttribute("onclick",`onshowClicked(id)`);
        
        foot.append(hhh);
        hhh = document.createElement("input");    
        hhh.setAttribute("value","Add to bag");
        hhh.setAttribute("type","button");
        hhh.setAttribute("class","addbag");
        hhh.setAttribute("id",`adbag_${i}`);
        hhh.setAttribute("onclick",`onAddToBagClicked(id)`);
        foot.append(hhh);
        othdiv.appendChild(foot);
        cdr.appendChild(othdiv);
        headiv.appendChild(cdr);
        i++;
    }
    return headiv;
}
function createBag()
{

}
function createDimensions()
{
    var placeholder = document.createElement("div");
    placeholder.setAttribute("class","placeholder");
    
    var catalog = document.createElement("div");
    catalog.setAttribute("class","catalog");
    var hh= document.createElement("h1");
    hh.textContent="Book catalog";
    catalog.appendChild(hh);
    placeholder.appendChild(catalog);

    catalog = document.createElement("div");
    catalog.setAttribute("class","orders");
    var headiv = document.createElement("div");
    headiv.setAttribute("class","shelfer");
    hh= document.createElement("h1");
    hh.textContent="Order Books";
    catalog.appendChild(hh);
    catalog.appendChild(headiv);
    catalog.setAttribute("ondrop","drop_handler(event)");
    catalog.setAttribute("ondragover","dragover_handler(event)");

    var confirmation = document.createElement("input");
    confirmation.setAttribute("value","Confirm");
    confirmation.setAttribute("type","button");
    confirmation.setAttribute("class","confirmo");
    confirmation.setAttribute("onclick",`onConfirmClicked()`);

    var summo = document.createElement("h2");
    summo.textContent=sum+" $";
    sumtext=summo;
    catalog.appendChild(summo);
    catalog.appendChild(confirmation);
    placeholder.appendChild(catalog);
    return placeholder;
}
function onshowClicked(dsd)
{
    var ggg = document.createElement("div");
    ggg.setAttribute("class","popuppy")
    var rer = dsd.split("_");
    var ddd = document.createElement("div");
    ddd.setAttribute("class","popup");
    ddd.textContent= suffragette[parseInt(rer[1])].description + "\n";

    var hhh = document.createElement("input");    
    hhh.setAttribute("value","Close");
    hhh.setAttribute("type","button");
    hhh.setAttribute("class","closure");
    hhh.setAttribute("onclick",`closepopup()`);
    ddd.appendChild(hhh);
    ggg.appendChild(ddd);
    buddyboy.appendChild(ggg);
}
function closepopup()
{
    var edr = document.querySelector(".popuppy");
    edr.remove();
}

function onAddToBagClicked(dsd)
{
    var headiv= document.querySelector(".shelfer");
    console.log('hahahahaha',dsd,suffragette);
    var bag = document.querySelector(".orders");
    var rer = dsd.split("_");
    var magic = rer[1];
    

    var cdr=document.createElement("div");
    cdr.setAttribute("class","booker");
    cdr.setAttribute("id",`beben_${counter}`)
    var imges=document.createElement("img");
    imges.setAttribute("src",suffragette[magic].imageLink);
    imges.setAttribute("width","150");
    imges.setAttribute("height","250");
    cdr.appendChild(imges);

    var othdiv=document.createElement("div");
    othdiv.setAttribute("class","infer");
    var hhh = document.createElement("h3");
    hhh.textContent = suffragette[magic].author;
    othdiv.appendChild(hhh);
    hhh = document.createElement("h2");
    hhh.textContent =suffragette[magic].title;
    othdiv.appendChild(hhh);

    hhh = document.createElement("h4");
    hhh.setAttribute("class","priceless")
    hhh.textContent = suffragette[magic].price + "$";
    othdiv.appendChild(hhh);
    
    hhh = document.createElement("input");    
    hhh.setAttribute("value","Remove");
    hhh.setAttribute("type","button");
    hhh.setAttribute("class","showmore");
    hhh.setAttribute("id",`bebe_${counter}`);
    hhh.setAttribute("onclick",`onrmClicked(id)`);
    
    othdiv.appendChild(hhh);
    cdr.appendChild(othdiv);
    headiv.appendChild(cdr);
    updateSum();
    counter++;
}
function onrmClicked(sd)
{
    console.log(sd);
    var edr = document.querySelector("#beben_" + sd.split("_")[1]);
    edr.remove();
    updateSum();
    console.log("da");
}
function updateSum()
{
    var prices = document.querySelectorAll(".priceless");
    var summa = 0;
    for (var edr in prices)
    {
        var tmp = prices[edr].textContent;
        if (tmp==undefined)
         continue;
        summa+=parseInt(tmp.replace("$",""));
    }
    sumtext.textContent = summa+" $";
}


function dragstart_handler(ev) {
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.dropEffect = "copy";
  }

  function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    onAddToBagClicked(ev.dataTransfer.getData("application/my-app"));
    // const data = ev.dataTransfer.getData("text/plain");
    // ev.target.appendChild(document.getElementById(data));
  }
