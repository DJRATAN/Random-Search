let timer = 0;

setInterval(() => {
  timer++;
  document.getElementById("timer").innerText = `⏱ ${timer} sec`;
}, 1000);

// get updates even if search already running
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "updateCount") {
    document.getElementById("count").innerText =
      `🔁 Searches: ${msg.count} / 100`;
  }
});
