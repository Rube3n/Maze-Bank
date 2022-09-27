import getElementById from "./getId";

const formInscript = getElementById("form-inscript");
const formDeposit = getElementById("form-deposit");
const formWithdraw = getElementById("form-withdraw");
const formTransfer = getElementById("form-transfer");

export const showInscript = () => {
  if (formInscript.classList.contains("hidden")) {
    formInscript.classList.add("flex");
    formInscript.classList.remove("hidden");
  } else {
    formInscript.classList.add("hidden");
  }
};

export const showDeposit = () => {
  if (
    formDeposit.classList.contains("hidden") &&
    formWithdraw.classList.contains("hidden")
  ) {
    formDeposit.classList.add("flex");
    formDeposit.classList.remove("hidden");
    formWithdraw.classList.add("flex");
    formWithdraw.classList.remove("hidden");
  } else {
    formDeposit.classList.add("hidden");
    formWithdraw.classList.add("hidden");
  }
};

export const showTransfer = () => {
    if (
        formTransfer.classList.contains("hidden")
      ) {
        formTransfer.classList.add("flex");
        formTransfer.classList.remove("hidden");
      } else {
        formTransfer.classList.add("hidden");
      }
}