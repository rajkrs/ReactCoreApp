using ReactCore.Api.Core.Enums;
namespace ReactCore.Api.Core.Models
{
    public class Message
    {
        /// <summary>
        /// enum  <see cref="MessageType"/>
        /// </summary>
        public MessageType Type { get; set; }
        /// <summary>
        /// enum  <see cref="MessageCode"/>
        /// </summary>
        public MessageCode Code { get; set; }
        public string Value { get; set; }
    }
}
