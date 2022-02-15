function merhaba(){
    let ad,soyad,yas,adam;
    ad=document.getElementById("txtad").value
    yas=document.getElementById("txtyas").value
    soyad=document.getElementById("txtsoyad").value
    document.getElementById("sonucBaslık").innerHTML=""
    adam=document.getElementById("takımlar").selectedIndex

    if(adam==0){
        
        document.getElementById("logo").setAttribute("src","images/tesla.jpeg")
        document.getElementById("sonucBaslık").innerHTML="MÜHİM OLAN FİKİRLERİMİ CALMALARI DEYİ KENDİ FİKİRLERİ OLMAMASI"
    }
    else if(adam==1){
        document.getElementById("logo").setAttribute("src","images/pavel-nedved.jpg")
        document.getElementById("sonucBaslık").innerHTML="FUTBOLCULAR GİDER ADAMLAR KALIR"
    }
    else{
        
    }
    console.log(adam)
}