let curentSold = -1000;
let overDraft = -1000;

const overDrafte = () => {
  if (curentSold < overDraft) {
    console.log("retrait impossible");
  } else {
    console.log("retrait possible");
  }
};

export default overDrafte;