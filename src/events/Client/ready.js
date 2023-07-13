const { prefix } = require('../../config.js')

module.exports = {
  name: 'ready',
  run: async (client) => {
    client.logger.log(`${client.user.username} online!`, 'ready')
    client.logger.log(`Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`, 'ready')

    const statuses = ['/lucy & /help', 'Made with 💗', '🚀 | L RMN']
    setInterval(function () {
  	const status = statuses[Math.floor(Math.random() * statuses.length)]
      client.user.setPresence({
        activities: [
          {
            name: status,
            type: 'LISTENING'
          }
        ],
        status: 'idle'
      })
    }, 10000)
  }
}
