const TotalVoice = require("totalvoice-node");
const client = new TotalVoice("858449d0abc705f56a54cf93a6659476");

(function() {
  const message = "Você realizou uma ligação através do nodejs com sucesso!";
  const options = {
    velocidade: 2,
    tipo_voz: "br-Vitoria"
  };
  client.tts.enviar("75991767045", message, options).then(() => {
    console.log(`O desenvolvedor já foi avisado!`);
  });
})();
