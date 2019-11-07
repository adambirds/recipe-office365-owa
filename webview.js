module.exports = (Franz) => {
    const getMessages = function getMessages() {
        // Legacy OWA
        const unreadMail = jQuery("span[title*='Inbox'] + div > span").first().text();

        // "New" OWA (late 2018)
        const unreadMailNew = parseInt(jQuery("div[title*='Inbox'] > span > span").first().contents().first().text(), 10);

        const messageCount = isNaN(unreadMail) ? unreadMailNew : unreadMail;
        Franz.setBadge(messageCount);
    };
    Franz.loop(getMessages);
};
