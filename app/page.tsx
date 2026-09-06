import {
  ArrowUpRight,
  AtSign,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  Quote,
  Sparkles,
  Video,
} from 'lucide-react';
import { Typewriter } from '@/components/ui/typewriter';
import { ParallaxScrolling } from '@/components/ui/parallax-scrolling';
import { TatianeSlideshow } from '@/components/ui/tatiane-slideshow';

const whatsappLink =
  'https://wa.me/5511998925541?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.';

const audiences = [
  { number: '01', title: 'Adolescentes', text: 'Identidade, orientação profissional, ansiedade e conflitos familiares.' },
  { number: '02', title: 'Adultos', text: 'Estresse, ansiedade, depressão, transição de carreira e autoestima.' },
  { number: '03', title: 'Idosos', text: 'Envelhecimento ativo, ressignificação, luto e autonomia emocional.' },
];

const relationshipPillars = [
  'Comunicação assertiva e limites claros.',
  'Resolução construtiva de conflitos.',
  'Quebra de padrões repetitivos.',
  'Fortalecimento da autoestima e autonomia.',
  'Apoio em transições e recomeços.',
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
      <ParallaxScrolling />
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

      <section className="hero" id="inicio" data-parallax-section="hero">
        <div className="hero-orb hero-orb--one" data-parallax-hero-orb-one /><div className="hero-orb hero-orb--two" data-parallax-hero-orb-two />
        <div className="hero-copy" data-parallax-hero-copy>
          <p className="eyebrow"><Sparkles size={15} /> Psicologia com escuta e presença</p>
          <h1 className="hero-title">Um espaço para <span className="hero-title__typed"><Typewriter words={['se entender.', 'cuidar de você.', 'viver com mais leveza.']} speed={64} delayBetweenWords={2200} cursor cursorChar="|" /></span></h1>
          <p className="hero-text">Psicoterapia baseada na Terapia Cognitivo-Comportamental para cuidar de você com acolhimento, clareza e caminhos possíveis.</p>
          <div className="hero-actions"><WhatsAppButton /><a className="text-link" href="#sobre">Conheça meu trabalho <ChevronDown size={17} /></a></div>
        </div>
      </section>

      <section className="section about" id="sobre" data-parallax-section="about">
        <div className="section-label" data-parallax-about-label>Quem sou</div>
        <div className="about-grid">
          <div className="about-copy" data-parallax-about-copy><h2>Oi, eu sou Tatiane Camilo Cano.</h2><p className="lead">Psicóloga Clínica, especialista em Terapia Cognitivo-Comportamental (TCC) e Relacionamentos.</p><p className="about-details">Acredito que cada história merece ser ouvida com presença, respeito e cuidado. Meu trabalho é caminhar ao seu lado em um processo de autoconhecimento, organizando emoções, ressignificando experiências e abrindo novos caminhos.</p><div className="credential"><span>CRP</span><strong>06/115779</strong><em>Psicóloga Clínica</em></div></div>
          <TatianeSlideshow />
        </div>
      </section>

      <section className="section section--sage" id="tcc">
        <div className="section-label">Terapia Cognitivo-Comportamental</div>
        <div className="tcc-grid">
          <div><h2>Entender seus pensamentos pode mudar a forma de viver seus dias.</h2></div>
          <div className="tcc-content"><p>Ofereço um trabalho seguro dentro da Terapia Cognitivo-Comportamental: uma abordagem científica, estruturada e focada na colaboração entre terapeuta e paciente. Juntos, vamos identificar como pensamentos, crenças e padrões de comportamento influenciam suas emoções e atitudes no dia a dia.</p><ul><li><Check size={17} /> Compreender dificuldades com mais clareza</li><li><Check size={17} /> Desenvolver ferramentas práticas e habilidades emocionais</li><li><Check size={17} /> Tornar-se agente de mudança da própria vida</li></ul></div>
        </div>
        <div className="relationship-grid"><div><p className="section-label">Especialista em relacionamentos saudáveis</p><h3>Conexões mais autênticas, equilibradas e possíveis.</h3><p>Na psicoterapia individual ou de casal, transformamos a forma como você se relaciona consigo e com o outro.</p></div><ul>{relationshipPillars.map((pillar) => <li key={pillar}><Check size={17} />{pillar}</li>)}</ul></div>
        <p className="audience-intro">Suporte terapêutico especializado para diferentes fases da vida, respeitando as demandas de cada ciclo.</p>
        <div className="audience-grid" aria-label="Públicos atendidos">{audiences.map((audience) => <article className="audience-card" key={audience.title}><span>{audience.number}</span><h3>{audience.title}</h3><p>{audience.text}</p></article>)}</div>
      </section>

      <section className="section testimonials" id="depoimentos">
        <div className="testimonial-intro"><div className="section-label">Depoimentos</div><h2>Histórias de quem escolheu se cuidar.</h2><p>Este é o espaço para inserir os depoimentos recebidos no Google.</p></div>
        <div className="testimonial-grid">{testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.text}><Quote size={28} strokeWidth={1.4} /><p>{testimonial.text}</p><footer><span className="avatar">{testimonial.name.charAt(0)}</span><span><strong>{testimonial.name}</strong><small>{testimonial.detail}</small></span></footer></article>)}</div>
      </section>

      <section className="section care" id="atendimento">
        <div className="section-label">Como funciona</div>
        <div className="care-heading"><h2>O cuidado pode acontecer de onde fizer mais sentido para você.</h2><p>As sessões duram 50 minutos e acontecem nas modalidades presencial e online.</p></div>
        <div className="care-grid">
          <article className="office-card"><img src="/consultorio-terapia.png" alt="Ambiente de consultório acolhedor" /><div className="office-card__copy"><p className="card-kicker"><MapPin size={16} /> Atendimento presencial</p><h3>Um espaço pensado para acolher.</h3><p>CRP Serviços de Psicologia<br />Rua Gomes Carneiro, 1082 — Centro<br />Piracicaba/SP</p></div></article>
          <article className="online-card"><div className="online-icon"><Video size={25} /></div><p className="card-kicker">Atendimento online</p><h3>Terapia onde você estiver.</h3><p>Encontros por videochamada, com a mesma escuta, privacidade e cuidado do atendimento presencial.</p><span>Para todo o Brasil</span></article>
        </div>
      </section>

      <section className="contact" id="contato" data-parallax-section="contact">
        <div data-parallax-contact-copy><p className="eyebrow"><MessageCircle size={15} /> Vamos conversar?</p><h2>Seu processo pode começar com uma mensagem.</h2><p>Estamos prontos para caminhar ao seu lado na busca por uma vida mais equilibrada. Entre em contato para agendar sua consulta.</p></div>
        <div className="contact-action" data-parallax-contact-action><WhatsAppButton /><div className="contact-details"><a href="tel:+5511998925541">WhatsApp: (11) 99892-5541</a><a href="mailto:taty.camilo@hotmail.com"><Mail size={15} /> taty.camilo@hotmail.com</a><a href="https://www.instagram.com/tatianecano_psico/" target="_blank" rel="noreferrer">@tatianecano_psico</a></div></div>
      </section>

      <footer className="footer">
        <div className="footer-top"><a className="brand" href="#inicio"><span className="brand-mark">T</span><span><strong>Tatiane</strong><small>Psicologia</small></span></a><div className="socials" aria-label="Redes sociais"><a href="https://www.instagram.com/tatianecano_psico/" target="_blank" rel="noreferrer" aria-label="Instagram"><AtSign size={19} /></a><a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={19} /></a></div></div>
        <div className="footer-quote"><p>“Caminhar em direção a relações mais leves começa no cuidado que você dedica a si mesmo e ao outro.”</p><span>Um convite ao autoconhecimento e a relações mais saudáveis.</span></div>
        <div className="footer-bottom">© {new Date().getFullYear()} Tatiane Psicologia. Todos os direitos reservados.</div>
      </footer>
    </main>
  );
}
