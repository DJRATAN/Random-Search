document.addEventListener('DOMContentLoaded', function() {
    var openTabsButton = document.getElementById('openTabs');
    openTabsButton.addEventListener('click', function() {
      chrome.tabs.create({ url: "https://www.bing.com/" });
    });
  }, false);
  