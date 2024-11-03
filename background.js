chrome.action.onClicked.addListener(() => {
  const width = 800;
  const height = 800;

  chrome.system.display.getInfo((displays) => {
      const display = displays[0];
      const top = Math.round((display.workArea.height - height) / 2);
      const left = Math.round((display.workArea.width - width) / 2);

      chrome.windows.create({
          url: chrome.runtime.getURL("home/home.html"),
          type: "popup",
          width: width,
          height: height,
          top: top,
          left: left
      });
  });
});
