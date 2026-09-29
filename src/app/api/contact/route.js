import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Função para formatar telefone
function formatPhone(phone) {
  if (!phone) return "Não informado";

  const numbers = phone.replace(/\D/g, "");

  if (numbers.length !== 11) {
    return phone; // retorna original se não tiver 11 dígitos
  }

  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 3)} ${numbers.slice(3, 7)}-${numbers.slice(7)}`;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { nome, telefone, email, area, mensagem } = body;

    if (!nome || !email || !mensagem || !area) {
      return Response.json(
        { error: "Campos obrigatórios faltando" },
        { status: 400 }
      );
    }

    const telefoneFormatado = formatPhone(telefone);

    await resend.emails.send({
      from: "Site Contato <onboarding@resend.dev>",
      to: "contato@seccoeballin.com.br",
      reply_to: email,
      subject: `Novo contato - ${nome}`,
      html: `
<div style="
  background: linear-gradient(180deg,#f5f5f5,#ececec);
  padding:60px 20px;
  font-family: 'Segoe UI', Arial, sans-serif;
">

  <div style="
    max-width:700px;
    margin:auto;
    background:#ffffff;
    border-radius:14px;
    overflow:hidden;
    box-shadow:0 20px 60px rgba(0,0,0,0.15);
    border-top:6px solid #c9a227;
  ">

    <!-- HEADER LUXO -->
    <div style="
      background:#111111;
      padding:40px 30px;
      text-align:center;
      position:relative;
    ">
      
      <div style="
        position:absolute;
        inset:0;
        background: radial-gradient(circle at 50% 0%, rgba(201,162,39,0.25), transparent 70%);
      "></div>

      <h1 style="
        margin:0;
        font-size:28px;
        letter-spacing:4px;
        color:#c9a227;
        position:relative;
      ">
        SECCO & BALLIN
      </h1>

      <div style="
        margin-top:8px;
        font-size:12px;
        letter-spacing:4px;
        color:rgba(255,255,255,0.7);
        position:relative;
      ">
        ADVOGADOS ASSOCIADOS
      </div>

    </div>

    <!-- CONTEÚDO -->
    <div style="padding:40px 45px;color:#333;">

      <div style="
        font-size:20px;
        font-weight:600;
        margin-bottom:25px;
        color:#111;
        border-left:5px solid #c9a227;
        padding-left:14px;
      ">
        Novo contato recebido pelo site institucional
      </div>

      <div style="
        background:#fafafa;
        border-radius:10px;
        padding:25px 28px;
        border:1px solid #eee;
        margin-bottom:25px;
      ">

        <div style="margin-bottom:12px;">
          <strong>Nome:</strong> ${nome}
        </div>

        <div style="margin-bottom:12px;">
          <strong>Telefone:</strong> ${telefoneFormatado}
        </div>

        <div style="margin-bottom:12px;">
          <strong>Email:</strong> ${email}
        </div>

        <div>
          <strong>Área Jurídica:</strong> ${area || "Não informada"}
        </div>

      </div>

      <div style="
        margin-top:25px;
        padding:25px;
        border-radius:10px;
        background:linear-gradient(180deg,#ffffff,#f8f8f8);
        border:1px solid #e6e6e6;
      ">
        <div style="
          font-weight:600;
          margin-bottom:10px;
          color:#111;
        ">
          Mensagem enviada pelo cliente
        </div>

        <div style="
          line-height:1.8;
          color:#444;
          font-size:15px;
        ">
          ${mensagem}
        </div>
      </div>

      <div style="
        margin-top:35px;
        text-align:center;
      ">
        <a href="mailto:${email}" style="
          display:inline-block;
          background:#c9a227;
          color:#111;
          text-decoration:none;
          padding:14px 28px;
          border-radius:6px;
          font-weight:600;
          letter-spacing:1px;
          box-shadow:0 8px 20px rgba(201,162,39,0.4);
        ">
          RESPONDER CLIENTE
        </a>
      </div>

    </div>

    <!-- FOOTER -->
    <div style="
      background:#f3f3f3;
      padding:20px;
      text-align:center;
      font-size:12px;
      color:#777;
      letter-spacing:1px;
    ">
      Comunicação automática enviada pelo site institucional  
      <br/>
      Secco & Ballin – Empresa Jurídica
    </div>

  </div>

</div>
`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Erro ao enviar" }, { status: 500 });
  }
}