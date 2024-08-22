chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
    code: `
        var titleElement = document.querySelector('h1[data-test-id="issue.views.issue-base.foundation.summary.heading"]');
        if (titleElement) {
          var title = titleElement.textContent.trim();
          navigator.clipboard.writeText(title).then(function() {
            alert('Jira ticket title copied: ' + title);
          }, function(err) {
            console.error('Failed to copy text: ', err);
          });
        } else {
          alert('Jira ticket title not found. Make sure you are on a Jira ticket page.');
        }
      `,
  });
});
