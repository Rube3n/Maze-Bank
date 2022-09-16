const retireeSold = () => {
    let retir = parseInt(retirSold.value);
    curentSold -= retir;
    spanDepo.textContent = curentSold;
    transacError.classList.add("block");
    transacError.textContent = "Transaction Invalide";
    return curentSold;
  };
  btnRetire.addEventListener("click", retireeSold);