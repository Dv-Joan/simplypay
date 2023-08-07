import React from "react";
import Payment from "./payment";

function Payments() {
  return (
    <div className="mt-5 ">
      <Payment
        companyLogo="https://cdn-icons-png.flaticon.com/128/731/731985.png"
        company="Apple"
        exchange="USDT"
        amount={80.45}
        date="1 minute ago"
      />
      <Payment
        companyLogo="https://cdn-icons-png.flaticon.com/128/11378/11378728.png"
        company="Amazon"
        exchange="PEN"
        amount={170.15}
        date="Today, 10:15 AM"
      />
      <Payment
        companyLogo="https://cdn-icons-png.flaticon.com/128/3669/3669986.png"
        company="Spotify"
        exchange="USDT"
        amount={70.28}
        date="Yesterday"
      />
      <Payment
        companyLogo="https://cdn-icons-png.flaticon.com/128/5969/5969324.png"
        company="Uber"
        exchange="EUR"
        amount={70.28}
        date="Yesterday"
      />
    </div>
  );
}

export default Payments;
