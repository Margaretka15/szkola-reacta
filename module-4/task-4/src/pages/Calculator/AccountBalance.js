import React from "react";

function AccountBalance({balance}) {
  return (
    <div className="balance" style={balance < 0 ? {"color": "red"} : {"color": "green"}}>
      <div className="balance__title">Bilans konta:</div>
      <div className="balance__number">
        {balance}
      </div>
    </div>
  );

}

export default AccountBalance;