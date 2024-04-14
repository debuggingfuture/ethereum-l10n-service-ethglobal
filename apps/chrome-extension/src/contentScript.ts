document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        console.log('content script', document)

        // not availalbe in iife
        //https://github.com/mikesteele/dual-captions/blob/b0ab92e4670100a27b76b2796995ad1be89f1672/content_script/src/index.js#L7
        const notification = document.createElement("div");
        notification.className = 'acho-notification';
        
        document.body.style.backgroundColor = "orange";
        const notificationText = document.createElement('p');
        notification.appendChild(notificationText);
        
        notificationText.innerHTML = 'My .js file is loaded';
        
        // Add to current page.
        document.body.appendChild(notification);
    }
  };

