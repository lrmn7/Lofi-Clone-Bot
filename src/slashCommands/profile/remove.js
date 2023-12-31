const { MessageEmbed, CommandInteraction, Client, MessageActionRow, MessageButton } = require('discord.js')
const db = require('../../schema/playlist')

module.exports = {
  name: 'remove',
  description: 'Remove audio from your collections.',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],
  player: false,
  inVoiceChannel: false,
  sameVoiceChannel: false,
  options: [
    {
      name: 'number',
      description: 'Song Number',
      required: true,
      type: 'STRING'
    }
  ],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
  run: async (client, interaction) => {
    await interaction.deferReply({})

    const Name = 'Favourite'
    const data = await db.findOne({ UserId: interaction.member.user.id, PlaylistName: Name })

    if (!data) {
      return interaction.editReply({
        embeds: [
          new MessageEmbed()
            .setColor(client.embedColor)
            .setDescription('You don\'t have a liked any song yet!')
        ]
      })
    }

    const Options = interaction.options.getString('number')
    if (!Options || isNaN(Options)) {
      return interaction.editReply({
        embeds: [
          new MessageEmbed()
            .setColor(client.embedColor)
            .setDescription(
              'You didn\'t entered track number (the Track you want to remove (ID OF IT))'
            )
        ]
      })
    }
    const tracks = data.Playlist
    if (Number(Options) >= tracks.length || Number(Options) < 0) {
      return interaction.editReply({
        embeds: [
          new MessageEmbed()
            .setColor(client.embedColor)
            .setDescription(
              `Your provided track number is out of Range (\`0\` - ${
                tracks.length - 1
              })\n`
            )
        ]
      })
    }
    await db.updateOne(
      {
        UserId: interaction.user.id,
        PlaylistName: Name
      },
      {
        $pull: {
          Playlist: data.Playlist[Options]
        }
      }
    )
    const embed = new MessageEmbed()
      .setColor(client.embedColor)
      .setDescription(`Removed **${tracks[Options].title}** from \`Liked Collection\``)
    return interaction.editReply({ embeds: [embed] })
  }
}
