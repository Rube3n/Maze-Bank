import classUser from "./classUser";

class user extends classUser {
  constructor(nameAccount, curentSold, curentIban) {
    super(nameAccount, curentSold, curentIban);
  }
  test = () => {
    return console.log(this.curentSold);
  };
}

export default user;
