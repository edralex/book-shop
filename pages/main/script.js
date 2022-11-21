var suffragette;
window.onload = function() {
    var buddy = document.querySelector("body");
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
        cdr.setAttribute("class","book");
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
        hhh.textContent = bks[book].price + "$";
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
    hh= document.createElement("h1");
    hh.textContent="Order Books";
    catalog.appendChild(hh);
    placeholder.appendChild(catalog);
    return placeholder;
}
function onshowClicked(dsd)
{
console.log('hahahahaha',dsd,suffragette);
}

function onAddToBagClicked(dsd)
{
    console.log('hahahahaha',dsd,suffragette);
}