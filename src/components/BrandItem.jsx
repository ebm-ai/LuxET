import React from "react";
import { Link } from "react-router-dom";

const BrandItem = ({ brand }) => {
  return (
    <li>
      <Link
        to={`/overview/${brand.id}/`}
        className="linkable card bg-white text-black transition-[transition:box-shadow] shadow-[2px_2px_7px_0_rgba(1,1,1,0.15)] duration-300 ease-[cubic-bezier(0.64,0.04,0.35,1)] hover:shadow-[2px_2px_6px_0_rgba(1,1,1,0.05),2px_4px_9px_0_rgba(1,1,1,0.15)] overflow-hidden md:min-h-[75px]"
        data-test="shopByPopularBrandCard"
        data-test-item={brand.id}
      >
        <div className="card-content relative flex items-center justify-center py-2-5 text-center md:flex-row md:justify-start md:px-5 md:py-5 lg:py-4 xl:pl-6">
          {brand.hasDiscount && (
            <div className="absolute top-[10px] left-[-37px] inline w-[115px] -rotate-45 bg-[#f1fafa] p-1 text-[9px] font-bold text-green md:top-[16px] md:left-[-28px] md:text-xs">
              Save $1K*
            </div>
          )}
          <div className="md:flex md:justify-start md:pr-2 lg:pr-3 xl:justify-center xl:pr-2-5">
            <img
              alt=""
              className="object-contain md:hidden"
              src={brand.logoSm}
              srcSet={`${brand.logoSm} 1x, ${brand.logoSm
                .replace("h=33", "h=66")
                .replace("w=66", "w=132")} 2x`}
              style={{ width: "66px", height: "33px" }}
              role="presentation"
            />
            <img
              alt=""
              className="object-contain hidden md:block"
              src={brand.logoMd}
              srcSet={`${brand.logoMd} 1x, ${brand.logoMd
                .replace("h=40", "h=80")
                .replace("w=40", "w=80")} 2x`}
              style={{ width: "40px", height: "40px" }}
              role="presentation"
            />
          </div>
          <span className="pt-1 md:pt-0 md:text-left">{brand.name}</span>
        </div>
      </Link>
    </li>
  );
};

export default BrandItem;
