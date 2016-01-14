document.getElementById('fillForm').addEventListener('click', function() {
    var page_360 = "360_form.html";
    chrome.tabs.create({ url: page_360 });
  });