chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const activeTab = await chrome.tabs.get(activeInfo.tabId);
  
    // Play video only in the active YouTube tab
    if (activeTab.url && activeTab.url.includes("youtube.com/watch")) {
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: playYouTubeVideo,
      });
    }
  
    // Pause video in all other YouTube tabs
    const tabs = await chrome.tabs.query({});
    tabs.forEach((tab) => {
      if (tab.id !== activeInfo.tabId && tab.url && tab.url.includes("youtube.com/watch")) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: pauseYouTubeVideo,
        });
      }
    });
  });
  
  function pauseYouTubeVideo() {
    const video = document.querySelector("video");
    if (video && !video.paused) {
      video.pause();
    }
  }
  
  function playYouTubeVideo() {
    const video = document.querySelector("video");
    if (video && video.paused) {
      video.play();
    }
  }
  