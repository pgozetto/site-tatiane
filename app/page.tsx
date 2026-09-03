import {
  ArrowUpRight,
  AtSign,
  Check,
  ChevronDown,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Quote,
  Sparkles,
  Video,
} from 'lucide-react';

const whatsappLink =
  'https://wa.me/5500000000000?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.';

const audiences = [
  { number: '01', title: 'Crianças', text: 'Um espaço de escuta para entender emoções, comportamentos e os desafios que aparecem no desenvolvimento.' },
  { number: '02', title: 'Adolescentes', text: 'Acompanhamento para atravessar mudanças, relações, autoestima, escolhas e a intensidade dessa fase.' },
  { number: '03', title: 'Adultos e idosos', text: 'Cuidado para quem busca novos recursos diante de ansiedade, lutos, transições e histórias de vida.' },
];

const testimonials = [
  { text: '“Um atendimento muito acolhedor. Saio das sessões com mais clareza e ferramentas para o meu dia a dia.”', name: 'Nome do paciente', detail: 'Depoimento do Google' },
  { text: '“A Tatiane criou um espaço seguro para eu falar do que sentia e aprender a lidar melhor com as situações.”', name: 'Nome do paciente', detail: 'Depoimento do Google' },
  { text: '“Profissional atenta, ética e muito humana. O processo fez diferença na forma como eu me enxergo.”', name: 'Nome do paciente', detail: 'Depoimento do Google' },
];

function WhatsAppButton({ compact = false }: { compact?: boolean }) {
  return (
    <a className={compact ? 'button button--compact' : 'button'} href={whatsappLink} target="_blank" rel="noreferrer">
      <MessageCircle size={compact ? 16 : 18} />
      Agendar consulta
      {!compact && <ArrowUpRight size={17} />}
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Tatiane Psicologia — início">
          <span className="brand-mark">T</span>
          <span><strong>Tatiane</strong><small>Psicologia</small></span>
        </a>
        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a><a href="#tcc">TCC</a><a href="#depoimentos">Depoimentos</a><a href="#atendimento">Atendimento</a><a href="#contato">Contato</a>
        </nav>
        <WhatsAppButton compact />
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orb hero-orb--one" /><div className="hero-orb hero-orb--two" />
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} /> Psicologia com escuta e presença</p>
          <h1>Um espaço para você se entender com mais gentileza.</h1>
          <p className="hero-text">Psicoterapia baseada na Terapia Cognitivo-Comportamental para cuidar de você com acolhimento, clareza e caminhos possíveis.</p>
          <div className="hero-actions"><WhatsAppButton /><a className="text-link" href="#sobre">Conheça meu trabalho <ChevronDown size={17} /></a></div>
        </div>
        <div className="hero-note"><HeartHandshake size={22} /><p>Você não precisa passar por tudo sozinha.</p></div>
      </section>

      <section className="section about" id="sobre">
        <div className="section-label">01 — Quem sou</div>
        <div className="about-grid">
          <div><h2>Oi, eu sou Tatiane.</h2><p className="lead">Psicóloga clínica e apaixonada por processos que ajudam pessoas a reconstruírem sua relação consigo mesmas e com o mundo.</p></div>
          <div className="about-card"><p>Meu trabalho é oferecer um encontro seguro, respeitoso e sem julgamentos. Na terapia, cada história ganha o seu tempo, seu contexto e a atenção que merece.</p><div className="credential"><span>CRP</span><strong>00/000000</strong><em>Substitua pelo registro profissional</em></div></div>
        </div>
      </section>

      <section className="section section--sage" id="tcc">
        <div className="section-label">02 — Terapia Cognitivo-Comportamental</div>
        <div className="tcc-grid">
          <div><h2>Entender seus pensamentos pode mudar a forma de viver seus dias.</h2></div>
          <div className="tcc-content"><p>A TCC é uma abordagem prática e colaborativa. Ela ajuda a perceber como pensamentos, emoções e comportamentos se conectam — e a construir respostas mais saudáveis para aquilo que dói.</p><ul><li><Check size={17} /> Mais consciência sobre padrões emocionais</li><li><Check size={17} /> Estratégias para enfrentar dificuldades do cotidiano</li><li><Check size={17} /> Um processo com objetivos construídos em conjunto</li></ul></div>
        </div>
        <div className="audience-grid" aria-label="Públicos atendidos">{audiences.map((audience) => <article className="audience-card" key={audience.title}><span>{audience.number}</span><h3>{audience.title}</h3><p>{audience.text}</p></article>)}</div>
      </section>

      <section className="section testimonials" id="depoimentos">
        <div className="testimonial-intro"><div className="section-label">03 — Depoimentos</div><h2>Histórias de quem escolheu se cuidar.</h2><p>Este é o espaço para inserir os depoimentos recebidos no Google.</p></div>
        <div className="testimonial-grid">{testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.text}><Quote size={28} strokeWidth={1.4} /><p>{testimonial.text}</p><footer><span className="avatar">{testimonial.name.charAt(0)}</span><span><strong>{testimonial.name}</strong><small>{testimonial.detail}</small></span></footer></article>)}</div>
      </section>

      <section className="section care" id="atendimento">
        <div className="section-label">04 — Como funciona</div>
        <div className="care-heading"><h2>O cuidado pode acontecer de onde fizer mais sentido para você.</h2><p>Escolha a modalidade que acompanha sua rotina com mais conforto.</p></div>
        <div className="care-grid">
          <article className="office-card"><img src="/consultorio-terapia.png" alt="Ambiente de consultório acolhedor" /><div className="office-card__copy"><p className="card-kicker"><MapPin size={16} /> Atendimento presencial</p><h3>Um espaço pensado para acolher.</h3><p>Rua do consultório, 000 — Bairro, Cidade/UF</p><span>Substitua pelo endereço completo</span></div></article>
          <article className="online-card"><div className="online-icon"><Video size={25} /></div><p className="card-kicker">Atendimento online</p><h3>Terapia onde você estiver.</h3><p>Encontros por videochamada, com a mesma escuta, privacidade e cuidado do atendimento presencial.</p><span>Para todo o Brasil</span></article>
        </div>
      </section>

      <section className="contact" id="contato">
        <div><p className="eyebrow"><MessageCircle size={15} /> Vamos conversar?</p><h2>Seu processo pode começar com uma mensagem.</h2><p>Entre em contato pelo WhatsApp para tirar dúvidas e encontrar o melhor horário para você.</p></div>
        <div className="contact-action"><WhatsAppButton /><small>WhatsApp: (00) 00000-0000</small></div>
      </section>

      <footer className="footer">
        <div className="footer-top"><a className="brand" href="#inicio"><span className="brand-mark">T</span><span><strong>Tatiane</strong><small>Psicologia</small></span></a><div className="socials" aria-label="Redes sociais"><a href="#" aria-label="Instagram"><AtSign size={19} /></a><a href="#contato" aria-label="WhatsApp"><MessageCircle size={19} /></a></div></div>
        <div className="footer-quote"><p>“Não são as coisas em si que nos perturbam, mas as opiniões que temos sobre elas.”</p><span>Epicteto, <em>Manual</em> — uma ideia que inspira a Terapia Cognitivo-Comportamental</span></div>
        <div className="footer-bottom">© {new Date().getFullYear()} Tatiane Psicologia. Todos os direitos reservados.</div>
      </footer>
    </main>
  );
}
