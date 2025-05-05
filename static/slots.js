let message = document?.getElementById?.("message");
let coinDisplay = document?.getElementById?.("coins");
const symbols = ["🍒", "🍋", "🍉", "🍊", "⭐", "7️⃣"];

export const state = {
  balance: 1000,
};

export function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

export function updateBalanceDisplay() {
  if (coinDisplay) {
    coinDisplay.textContent = state.balance;
  }
}

export function evaluate([s1, s2, s3], bet) {
  let winAmount = 0;

  if (s1 === s2 && s2 === s3) {
    winAmount = bet * 10;
    if (message) message.textContent = `🎉 JACKPOT! +${winAmount} coins!`;
  } else if (s1 === s2 || s2 === s3 || s1 === s3) {
    winAmount = bet * 2;
    if (message) message.textContent = `👍 Nice match! +${winAmount} coins.`;
  } else {
    if (message) message.textContent = "😢 No match, try again!";
  }

  state.balance += winAmount;
  updateBalanceDisplay();
}
