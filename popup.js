document.addEventListener('DOMContentLoaded', function() {
    var openTabsButton = document.getElementById('openTabs');
    openTabsButton.addEventListener('click', function() {
      chrome.runtime.sendMessage({ action: "openTabs" });
    });
  });
  