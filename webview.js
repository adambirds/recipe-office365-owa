module.exports = (Franz) => {
    const getMessages = function getMessages() {
        const unreadMail = jQuery("span[title*='Inbox'] + div > span").first().text();
        Franz.setBadge(unreadMail);
    };
    Franz.loop(getMessages);
};