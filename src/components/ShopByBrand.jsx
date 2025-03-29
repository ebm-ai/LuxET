import React from "react";
import { Link } from "react-router-dom";
import BrandItem from "./BrandItem";

const brands = [
  {
    id: "acura",
    name: "Acura",
    logoSm:
      "https://static.tcimg.net/vehicles/logo_text/1787x384_full_color/f5cbb4d8eb528d30/Acura.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo_text/1787x384_full_color/f5cbb4d8eb528d30/Acura.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "alfa-romeo",
    name: "Alfa Romeo",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/384x384_full_color/74d84f9942a7d3e8/Alfa_Romeo.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/384x384_full_color/74d84f9942a7d3e8/Alfa_Romeo.png?auto=format&fill=solid&fit=fill&h=40&w=40",
    hasDiscount: true,
  },
  {
    id: "audi",
    name: "Audi",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/1088x384_full_color/0598fce6d069a5a0/Audi.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/1088x384_full_color/0598fce6d069a5a0/Audi.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "bmw",
    name: "BMW",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/384x384_full_color/614861eca7caf1b4/BMW.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/384x384_full_color/614861eca7caf1b4/BMW.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "buick",
    name: "Buick",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/512x384_full_color/dfad2fe862ec6cdf/Buick.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/512x384_full_color/dfad2fe862ec6cdf/Buick.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "cadillac",
    name: "Cadillac",
    logoSm:
      "https://static.tcimg.net/vehicles/logo_text/938x384_full_color/26078ba5f8aba234/Cadillac.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo_text/938x384_full_color/26078ba5f8aba234/Cadillac.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "chevrolet",
    name: "Chevrolet",
    logoSm:
      "https://static.tcimg.net/vehicles/logo_text/743x384_full_color/5391e0d2230f029e/Chevrolet.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo_text/743x384_full_color/5391e0d2230f029e/Chevrolet.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "chrysler",
    name: "Chrysler",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/3658x384_full_color/f8a2454c744fb2af/Chrysler.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/3658x384_full_color/f8a2454c744fb2af/Chrysler.png?auto=format&fill=solid&fit=fill&h=40&w=40",
    hasDiscount: true,
  },
  {
    id: "dodge",
    name: "Dodge",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/2751x384_full_color/0d87acfca3ddd404/Dodge.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/2751x384_full_color/0d87acfca3ddd404/Dodge.png?auto=format&fill=solid&fit=fill&h=40&w=40",
    hasDiscount: true,
  },
  {
    id: "fiat",
    name: "FIAT",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/384x384_full_color/034e8804a56116b8/FIAT.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/384x384_full_color/034e8804a56116b8/FIAT.png?auto=format&fill=solid&fit=fill&h=40&w=40",
    hasDiscount: true,
  },
  {
    id: "ford",
    name: "Ford",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/1067x384_full_color/aa5732acfd1e5b4d/Ford.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/1067x384_full_color/aa5732acfd1e5b4d/Ford.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "genesis",
    name: "Genesis",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/1306x384_full_color/fdb65ec9961d0ea7/Genesis.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/1306x384_full_color/fdb65ec9961d0ea7/Genesis.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "gmc",
    name: "GMC",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/683x384_full_color/3f537ad3fdf9a636/GMC.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/683x384_full_color/3f537ad3fdf9a636/GMC.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "honda",
    name: "Honda",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/605x384_full_color/00fea4dbe4426fc2/Honda.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "hyundai",
    name: "Hyundai",
    logoSm:
      "https://static.tcimg.net/vehicles/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo_text/384x384_full_color/d88259cdbac929b7/Hyundai.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "infiniti",
    name: "INFINITI",
    logoSm:
      "https://static.tcimg.net/vehicles/logo_text/872x384_full_color/4f5ff52d5ce2599a/INFINITI.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo_text/872x384_full_color/4f5ff52d5ce2599a/INFINITI.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "jaguar",
    name: "Jaguar",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/958x384_full_color/4c50d6932ea260bb/Jaguar.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/958x384_full_color/4c50d6932ea260bb/Jaguar.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "jeep",
    name: "Jeep",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/974x384_full_color/a8fcfe1e70a37d25/Jeep.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/974x384_full_color/a8fcfe1e70a37d25/Jeep.png?auto=format&fill=solid&fit=fill&h=40&w=40",
    hasDiscount: true,
  },
  {
    id: "kia",
    name: "Kia",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/1629x384_full_color/638bbde84c5f569e/Kia.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/1629x384_full_color/638bbde84c5f569e/Kia.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "land-rover",
    name: "Land Rover",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/722x384_full_color/2e9c24a2f6e9d190/Land_Rover.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/722x384_full_color/2e9c24a2f6e9d190/Land_Rover.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "lexus",
    name: "Lexus",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/543x384_full_color/c8d23de545755e0d/Lexus.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/543x384_full_color/c8d23de545755e0d/Lexus.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "lincoln",
    name: "Lincoln",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/115x384_full_color/b31e23eab6fd3beb/Lincoln.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/115x384_full_color/b31e23eab6fd3beb/Lincoln.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "maserati",
    name: "Maserati",
    logoSm:
      "https://static.tcimg.net/vehicles/logo/297x384_full_color/4fbfea8890fe1308/Maserati.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo/297x384_full_color/4fbfea8890fe1308/Maserati.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
  {
    id: "mazda",
    name: "Mazda",
    logoSm:
      "https://static.tcimg.net/vehicles/logo_text/410x384_full_color/6f5f5f1c424b52bf/Mazda.png?auto=format&fill=solid&fit=fill&h=33&pad=5&w=66",
    logoMd:
      "https://static.tcimg.net/vehicles/logo_text/410x384_full_color/6f5f5f1c424b52bf/Mazda.png?auto=format&fill=solid&fit=fill&h=40&w=40",
  },
];

const ShopByBrand = () => {
  return (
    <div className="min-h-screen bg-blue-black flex justify-center items-center p-4">
      <div className="container mt-2 px-0 md:px-3">
        <div
          data-test="shopYourFavortieBrandSection"
          className="flex flex-col justify-center rounded py-5 px-3 text-center md:px-0 lg:px-5"
        >
          <h1 className="text-base-content text-2xl md:text-4xl font-bold pt-2 pb-4 md:mt-5 md:pt-3">
            Shop your favorite <span className="block">Brand</span>
          </h1>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 py-4">
            {brands.map((brand) => (
              <BrandItem key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByBrand;
