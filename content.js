class TwitchClaimReward {
  startLoop() {
    setInterval(() => {
      this.getReward();
    }, 120000);
  }

  getButton() {
    const button = document.querySelector(
      ".tw-button.tw-button--success.tw-interactive"
    );

    if (!button) return null;

    const claimeblaBonus = button.querySelector(".claimable-bonus__icon");

    return claimeblaBonus ? button : null;
  }
  getReward() {
    const button = this.getButton();

    if (!button) return;

    console.log(`Claim Reward ${Date()}`);

    button.click();
  }
}

const twitchClaimReward = new TwitchClaimReward();

console.info("Twitch TV claim reward extensions");
console.info("Author: https://github.com/csalexsander");

twitchClaimReward.startLoop();
