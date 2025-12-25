setInterval(() => {
  chrome.storage.local.get(["browserStartTime","searchCount"], data => {

    if (data.browserStartTime) {
      const seconds = Math.floor((Date.now() - data.browserStartTime)/1000);
      document.getElementById("timer").innerText = `⏱ ${seconds} sec`;
    }

    document.getElementById("count").innerText =
      `🔁 Searches: ${data.searchCount || 0} / 100`;
  });
}, 1000);
