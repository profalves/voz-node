const TotalVoice = require("totalvoice-node");
const client = new TotalVoice(process.env.KEY);

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
