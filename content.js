function replaceText() {
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let node;
    while (node = walker.nextNode()) {
        node.textContent = node.textContent.replace(/election/gi, 'erection');
    }
}

replaceText();

// Handle dynamic content
const observer = new MutationObserver(replaceText);
observer.observe(document.body, {
    childList: true,
    subtree: true
}); 