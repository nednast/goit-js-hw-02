function getShippingCost(country) {
  let credits;
  switch (country) {
    case "China":
      credits = 100;
      console.log(`Shipping to ${country} will cost ${credits} credits`);
      break;
    case "Chile":
      credits = 250;
      console.log(`Shipping to ${country} will cost ${credits} credits`);
      break;
    case "Australia":
      credits = 170;
      console.log(`Shipping to ${country} will cost ${credits} credits`);
      break;
    case "Jamaica":
      credits = 120;
      console.log(`Shipping to ${country} will cost ${credits} credits`);
      break;

    default:
      console.log("Sorry, there is no delivery to your country");
      break;
  }
}

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
