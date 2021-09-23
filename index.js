function scuberGreetingForFeet(someNumber) {
  if (someNumber === 199) {
    return "This one is on me!";
  }
  if (someNumber === 2001) {
    return "I will gladly take your thirty bucks.";
  }
  if (someNumber === 2501) {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(generous) {
  switch (generous) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
