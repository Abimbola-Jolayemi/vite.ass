const os = require('os');
const fs = require('fs');

const markdownContent = `
# System Information

## Architecture
${os.arch()}

## Uptime
${formatUptime(os.uptime())}

## Home Directory
${os.homedir()}
`;

fs.writeFileSync('./public/system_info.md', markdownContent);

function formatUptime(uptimeInSeconds) {
    const days = Math.floor(uptimeInSeconds / (3600 * 24));
    const hours = Math.floor((uptimeInSeconds % (3600 * 24)) / 3600);
    const seconds = uptimeInSeconds % 60;
    return `${days} days ${hours} hours ${seconds} seconds`;
}
