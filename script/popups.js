const deleteConf = document.getElementById("deleteConf"),
      //page pedidos
      payTypesPopup = document.getElementById("payTypesPopup"),
      //page menu
      count = document.getElementById("count");



openDeletePP = () => deleteConf.showModal();    //This going to show the Delete popup in user.html

closeDeletePP = () => deleteConf.close();

//page pedidos functionality

openPayTypesPP = () => payTypesPopup.showModal();   //open Pay Types in pedidos.html

closePayTypesPP = () => payTypesPopup.close();

//page count food

openCountPP = () => count.showModal();              //open Count popup in menu.html

closeCountPP = () => count.close();
