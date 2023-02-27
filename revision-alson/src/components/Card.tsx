import React from "react";
import Button from "./Button";

const Card = () => {
  return (
    <div className="mt-5 bg-gray-200 rounded-md shadow-md">
      <div className="px-2 py-4">
        <div className="card_header flex items-center ">
          <img
            className="w-16  h-16 rounded-full"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/04dd95cc-ab8a-4e2f-9a74-1fe56327c9be/devjavu-24769144-c06b-4ee3-bd6d-90026de77e93.png/v1/fill/w_1024,h_1494,q_80,strp/random_guy_by_get_seth_devjavu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5NCIsInBhdGgiOiJcL2ZcLzA0ZGQ5NWNjLWFiOGEtNGUyZi05YTc0LTFmZTU2MzI3YzliZVwvZGV2amF2dS0yNDc2OTE0NC1jMDZiLTRlZTMtYmQ2ZC05MDAyNmRlNzdlOTMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.dxF010uCsQ2z5U-LcCsZcbY2tMCvYFR1Rm5hHpay-Jk"
            alt="person_img"
          />
          <ul className="m-3">
            <li className="text-2xl m-0 p-0">Prasiddha Khadka</li>
            <li className="p-0 m-0 text-pink-400">@prasid_khadka123</li>
          </ul>
        </div>
        <div className="card_body px-8">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
            consequuntur obcaecati atque expedita deserunt praesentium, numquam
            amet, doloremque omnis nemo molestias! Vero corrupti excepturi quo
            numquam voluptatum consequatur inventore voluptates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
