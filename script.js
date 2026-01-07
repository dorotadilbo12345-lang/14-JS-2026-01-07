const cryptoWrapper = document.getElementById("crypto-wrapper");

const buildScreen = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  );

  const cryptos = await response.json();
  console.log(cryptos);

  cryptos.sort((a, b) => a.name.localeCompare(b.name));

  cryptos.forEach((c) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.innerText = c.name;

    const price = document.createElement("h4");
    price.innerText = `Price: $${c.current_price}`;

    if (c.current_price > 100) {
      card.style.border = "3px solid gold";
    } else {
      card.style.border = "3px solid silver";
    }

    card.addEventListener("click", () => {
      console.log(c.name);
    });

    card.append(title, price);
    cryptoWrapper.append(card);
  });
};

buildScreen();
