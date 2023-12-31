const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require('discord.js')

module.exports = {
  name: 'invite',
  description: 'Invite Lucy Radio to your own Server',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],

  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */

  run: async (client, interaction) => {
    await interaction.deferReply({
      ephemeral: false
    })

    const invite = client.config.links.invite
    const color = client.embedColor
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel('Invite')
          .setStyle('LINK')
          .setEmoji('1119915791521955970')
          .setURL(invite)
      )

    const mainPage = new MessageEmbed()
      .setAuthor({ name: `${client.user.username}'s' invite`, iconURL: client.user.displayAvatarURL(), url: 'https://discord.gg/WFfjrQxnfH' })
      .setDescription(`<:invite:1119915791521955970> **Click [Here](${invite}) To Invite Me **`)
      .setColor(color)
    interaction.editReply({ embeds: [mainPage], components: [row] })
  }
}
