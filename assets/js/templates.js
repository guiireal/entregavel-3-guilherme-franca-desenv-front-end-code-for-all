/**
 * Sistema de Templates
 * Cada função retorna o HTML de uma página específica
 */

const Templates = {
  /**
   * Página Inicial
   */
  home: () => {
    return `
            <!-- Hero Section -->
            <section class="bg-primary text-white py-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                            <h1 class="display-4 fw-bold mb-3">
                                Democratizando o acesso à educação em tecnologia
                            </h1>
                            <p class="lead mb-4">
                                Capacitando indivíduos e comunidades através de programas de 
                                tecnologia inclusivos e acessíveis
                            </p>
                            <button type="button" class="btn btn-light btn-lg" 
                                    onclick="window.location.hash = '#/sobre'">
                                Saiba Mais
                            </button>
                        </div>
                        <div class="col-lg-6">
                            <img src="./assets/images/hero.png" 
                                 alt="Pessoas trabalhando juntas em projetos de tecnologia social"
                                 class="img-fluid rounded shadow">
                        </div>
                    </div>
                </div>
            </section>

            <!-- Projetos -->
            <section class="py-5">
                <div class="container">
                    <h2 class="text-center mb-5">Nossos Projetos</h2>
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="card h-100 shadow-sm">
                                <img src="./assets/images/projeto-1.png" 
                                     class="card-img-top" 
                                     alt="Estudantes aprendendo programação">
                                <div class="card-body">
                                    <h5 class="card-title">Educação Digital</h5>
                                    <p class="card-text">
                                        Capacitação em programação e ferramentas digitais 
                                        para jovens de comunidades carentes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card h-100 shadow-sm">
                                <img src="./assets/images/projeto-2.png" 
                                     class="card-img-top" 
                                     alt="Workshop de tecnologia">
                                <div class="card-body">
                                    <h5 class="card-title">Inclusão Tecnológica</h5>
                                    <p class="card-text">
                                        Workshops e cursos gratuitos de tecnologia 
                                        para inclusão digital da comunidade.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card h-100 shadow-sm">
                                <img src="./assets/images/projeto-3.png" 
                                     class="card-img-top" 
                                     alt="Capacitação profissional">
                                <div class="card-body">
                                    <h5 class="card-title">Capacitação Profissional</h5>
                                    <p class="card-text">
                                        Preparação para o mercado de trabalho em 
                                        desenvolvimento de software.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center mt-4">
                        <button type="button" class="btn btn-primary btn-lg" 
                                onclick="window.location.hash = '#/projetos'">
                            Ver Todos os Projetos
                        </button>
                    </div>
                </div>
            </section>

            <!-- Depoimentos -->
            <section class="bg-light py-5">
                <div class="container">
                    <h2 class="text-center mb-5">Depoimentos</h2>
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="card h-100 shadow-sm">
                                <div class="card-body text-center">
                                    <img src="./assets/images/depoimento-1.png" 
                                         class="rounded-circle mb-3" 
                                         width="100" height="100"
                                         alt="Maria Silva">
                                    <h5 class="card-title">Maria Silva</h5>
                                    <p class="card-text text-muted fst-italic">
                                        "O Code for All transformou minha vida! Hoje trabalho 
                                        como desenvolvedora graças aos cursos que fiz."
                                    </p>
                                    <audio controls class="w-100 mt-2">
                                        <source src="./assets/audios/depoimento-1.mp3" type="audio/mpeg">
                                    </audio>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card h-100 shadow-sm">
                                <div class="card-body text-center">
                                    <img src="./assets/images/depoimento-2.png" 
                                         class="rounded-circle mb-3" 
                                         width="100" height="100"
                                         alt="João Santos">
                                    <h5 class="card-title">João Santos</h5>
                                    <p class="card-text text-muted fst-italic">
                                        "Como voluntário, tenho a oportunidade de ajudar 
                                        outras pessoas a realizarem seus sonhos na tecnologia."
                                    </p>
                                    <audio controls class="w-100 mt-2">
                                        <source src="./assets/audios/depoimento-2.mp3" type="audio/mpeg">
                                    </audio>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card h-100 shadow-sm">
                                <div class="card-body text-center">
                                    <img src="./assets/images/depoimento-3.png" 
                                         class="rounded-circle mb-3" 
                                         width="100" height="100"
                                         alt="Ana Costa">
                                    <h5 class="card-title">Ana Costa</h5>
                                    <p class="card-text text-muted fst-italic">
                                        "Aprendi muito mais do que programação. Aprendi a 
                                        acreditar no meu potencial e nas minhas capacidades."
                                    </p>
                                    <audio controls class="w-100 mt-2">
                                        <source src="./assets/audios/depoimento-3.mp3" type="audio/mpeg">
                                    </audio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Vídeos -->
            <section class="py-5">
                <div class="container">
                    <h2 class="text-center mb-5">Vídeos</h2>
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="card h-100 shadow-sm">
                                <div class="ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/iO07RnodPm4" 
                                            title="ONG estimula empreendedorismo usando a tecnologia"
                                            allowfullscreen></iframe>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Empreendedorismo e Tecnologia</h5>
                                    <p class="card-text">
                                        Como ONGs estimulam empreendedorismo através da tecnologia.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card h-100 shadow-sm">
                                <div class="ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/u4u6gq68u64" 
                                            title="Computação quântica"
                                            allowfullscreen></iframe>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Tecnologia e Inovação</h5>
                                    <p class="card-text">
                                        O futuro da tecnologia e seu impacto na sociedade.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card h-100 shadow-sm">
                                <div class="ratio ratio-16x9">
                                    <iframe src="https://www.youtube.com/embed/nqHRXidgI2U" 
                                            title="Software de Gestão para ONGs"
                                            allowfullscreen></iframe>
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title">Gestão de ONGs</h5>
                                    <p class="card-text">
                                        Soluções tecnológicas para gestão de organizações sociais.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Call to Action -->
            <section class="bg-primary text-white py-5">
                <div class="container text-center">
                    <h2 class="mb-4">Junte-se a nós</h2>
                    <p class="lead mb-4">
                        Faça a diferença através do voluntariado ou doações
                    </p>
                    <div class="d-flex gap-3 justify-content-center">
                        <button type="button" class="btn btn-light btn-lg" 
                                onclick="window.location.hash = '#/cadastro'">
                            <i class="bi bi-people me-2"></i>Voluntariar
                        </button>
                        <button type="button" class="btn btn-outline-light btn-lg" 
                                onclick="window.location.hash = '#/doacoes'">
                            <i class="bi bi-heart me-2"></i>Doar
                        </button>
                    </div>
                </div>
            </section>
        `;
  },

  /**
   * Página Sobre Nós
   */
  sobre: () => {
    return `
            <div class="container py-5">
                <h1 class="display-4 text-center mb-5">Sobre a Code for All</h1>

                <!-- Nossa História -->
                <section class="mb-5">
                    <h2 class="mb-3">Nossa História</h2>
                    <p class="lead">
                        Fundada em 2020, a Code for All nasceu do sonho de democratizar o acesso 
                        à educação em tecnologia. Acreditamos que todos merecem a oportunidade 
                        de aprender e crescer através da programação e das ferramentas digitais.
                    </p>
                </section>

                <!-- Nossos Valores -->
                <section class="mb-5">
                    <h2 class="mb-3">Nossos Valores</h2>
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="card border-primary h-100">
                                <div class="card-body text-center">
                                    <i class="bi bi-heart-fill text-primary fs-1 mb-3 d-block"></i>
                                    <h5 class="card-title">Inclusão</h5>
                                    <p class="card-text">
                                        Acreditamos que tecnologia é para todos, independente 
                                        de origem ou condição social.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card border-success h-100">
                                <div class="card-body text-center">
                                    <i class="bi bi-book-fill text-success fs-1 mb-3 d-block"></i>
                                    <h5 class="card-title">Educação</h5>
                                    <p class="card-text">
                                        Comprometidos com o ensino de qualidade e 
                                        capacitação contínua.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card border-warning h-100">
                                <div class="card-body text-center">
                                    <i class="bi bi-people-fill text-warning fs-1 mb-3 d-block"></i>
                                    <h5 class="card-title">Comunidade</h5>
                                    <p class="card-text">
                                        Fortalecemos laços e criamos redes de apoio 
                                        entre nossos beneficiários.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Nossa Equipe -->
                <section class="mb-5">
                    <h2 class="mb-4 text-center">Nossa Equipe</h2>
                    <div class="row g-4">
                        <div class="col-md-3">
                            <div class="card h-100 shadow-sm">
                                <img src="./assets/images/pessoa-1.png" 
                                     class="card-img-top" 
                                     alt="Carlos Mendes">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Carlos Mendes</h5>
                                    <p class="text-muted">Diretor Executivo</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card h-100 shadow-sm">
                                <img src="./assets/images/pessoa-2.png" 
                                     class="card-img-top" 
                                     alt="Fernanda Lima">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Fernanda Lima</h5>
                                    <p class="text-muted">Coordenadora de Projetos</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card h-100 shadow-sm">
                                <img src="./assets/images/pessoa-3.png" 
                                     class="card-img-top" 
                                     alt="Roberto Silva">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Roberto Silva</h5>
                                    <p class="text-muted">Gestor de Voluntários</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card h-100 shadow-sm">
                                <img src="./assets/images/pessoa-4.png" 
                                     class="card-img-top" 
                                     alt="Patricia Santos">
                                <div class="card-body text-center">
                                    <h5 class="card-title">Patricia Santos</h5>
                                    <p class="text-muted">Analista de Comunicação</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Conquistas -->
                <section class="bg-light p-5 rounded mb-5">
                    <h2 class="text-center mb-5">Conquistas e Impacto</h2>
                    <div class="row text-center">
                        <div class="col-md-4">
                            <div class="mb-3">
                                <i class="bi bi-check-circle-fill text-success fs-1"></i>
                            </div>
                            <h3 class="fw-bold text-primary">50+</h3>
                            <p class="text-muted">Projetos Concluídos</p>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <i class="bi bi-people-fill text-primary fs-1"></i>
                            </div>
                            <h3 class="fw-bold text-primary">200+</h3>
                            <p class="text-muted">Voluntários Envolvidos</p>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <i class="bi bi-heart-fill text-danger fs-1"></i>
                            </div>
                            <h3 class="fw-bold text-primary">10.000+</h3>
                            <p class="text-muted">Beneficiários Diretos</p>
                        </div>
                    </div>
                </section>

                <!-- Gráficos -->
                <section class="mb-5">
                    <h2 class="text-center mb-4">Crescimento ao longo dos anos</h2>
                    <div class="card shadow">
                        <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <div>
                                    <h5 class="mb-0">Total de Beneficiários</h5>
                                    <small class="text-muted">Por região</small>
                                </div>
                                <div class="text-end">
                                    <h4 class="mb-0 text-primary">10.000</h4>
                                    <small class="text-success"><i class="bi bi-arrow-up"></i> +15%</small>
                                </div>
                            </div>
                            <canvas id="bar-chart" width="800" height="600"></canvas>
                        </div>
                    </div>
                </section>

                <section class="mb-5">
                    <h2 class="text-center mb-4">Distribuição de Recursos por Projeto</h2>
                    <div class="card shadow">
                        <div class="card-body text-center">
                            <p class="text-muted">
                                Veja como nossos recursos são distribuídos entre os diferentes 
                                projetos sociais.
                            </p>
                            <canvas id="pie-chart" width="800" height="600"></canvas>
                        </div>
                    </div>
                </section>

                <section class="mb-5">
                    <h2 class="text-center mb-4">Evolução de Voluntários ao Longo do Tempo</h2>
                    <div class="card shadow">
                        <div class="card-body text-center">
                            <p class="text-muted">
                                Acompanhe o crescimento do número de voluntários nos últimos anos.
                            </p>
                            <canvas id="line-chart" width="800" height="400"></canvas>
                        </div>
                    </div>
                </section>
            </div>
        `;
  },

  /**
   * Página de Projetos
   */
  projetos: () => {
    return `
            <div class="container py-5">
                <h1 class="display-4 text-center mb-3">Nossos Projetos</h1>
                <p class="lead text-center text-muted mb-5">
                    Explore os projetos que estamos desenvolvendo para transformar 
                    comunidades através da tecnologia.
                </p>

                <!-- Filtros -->
                <div class="d-flex flex-wrap gap-2 justify-content-center mb-5" id="project-filters">
                    <button class="btn btn-primary active" data-filter="all">Todos</button>
                    <button class="btn btn-outline-primary" data-filter="educacao">Educação</button>
                    <button class="btn btn-outline-primary" data-filter="inclusao">Inclusão Digital</button>
                    <button class="btn btn-outline-primary" data-filter="software">Desenvolvimento de Software</button>
                </div>

                <!-- Grid de Projetos -->
                <div class="row g-4" id="projects-grid">
                    <div class="col-md-4 project-card" data-category="educacao">
                        <div class="card h-100 shadow-sm">
                            <img src="./assets/images/projetos-sociais-1.png" 
                                 class="card-img-top" 
                                 alt="Plataforma de Aprendizado Online">
                            <div class="card-body">
                                <span class="badge bg-primary mb-2">Educação</span>
                                <h5 class="card-title">Plataforma de Aprendizado Online</h5>
                                <p class="card-text">
                                    Desenvolvimento de uma plataforma para cursos online 
                                    acessíveis e gratuitos.
                                </p>
                                <button class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" 
                                        data-bs-target="#projectModal">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 project-card" data-category="inclusao">
                        <div class="card h-100 shadow-sm">
                            <img src="./assets/images/projetos-sociais-2.png" 
                                 class="card-img-top" 
                                 alt="Aplicativo de Monitoramento de Saúde">
                            <div class="card-body">
                                <span class="badge bg-success mb-2">Inclusão Digital</span>
                                <h5 class="card-title">Aplicativo de Monitoramento de Saúde</h5>
                                <p class="card-text">
                                    Criação de um aplicativo para monitorar indicadores de 
                                    saúde em comunidades.
                                </p>
                                <button class="btn btn-outline-success btn-sm" data-bs-toggle="modal" 
                                        data-bs-target="#projectModal">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 project-card" data-category="software">
                        <div class="card h-100 shadow-sm">
                            <img src="./assets/images/projetos-sociais-3.png" 
                                 class="card-img-top" 
                                 alt="Sistema de Gestão para ONGs">
                            <div class="card-body">
                                <span class="badge bg-warning text-dark mb-2">Software</span>
                                <h5 class="card-title">Sistema de Gestão para ONGs</h5>
                                <p class="card-text">
                                    Desenvolvimento de um sistema para gerenciar operações 
                                    de organizações sociais.
                                </p>
                                <button class="btn btn-outline-warning btn-sm" data-bs-toggle="modal" 
                                        data-bs-target="#projectModal">
                                    Ver Detalhes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal de Detalhes do Projeto -->
            <div class="modal fade" id="projectModal" tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Detalhes do Projeto</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p>
                                Informações detalhadas sobre o projeto, incluindo objetivos, 
                                metodologia, equipe envolvida e resultados esperados.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-primary" 
                                    onclick="window.location.hash = '#/cadastro'">
                                Quero Participar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
  },

  /**
   * Página de Cadastro de Voluntários
   */
  cadastro: () => {
    return `
            <div class="container py-5">
                <h1 class="display-4 text-center mb-3">Seja um Voluntário</h1>
                <p class="lead text-center text-muted mb-5">
                    Junte-se à nossa comunidade e faça a diferença através da tecnologia.
                </p>

                <!-- Como funciona -->
                <section class="mb-5">
                    <h2 class="text-center mb-4">Como funciona</h2>
                    <div class="row g-4">
                        <div class="col-md-4">
                            <div class="card border-primary h-100 text-center">
                                <div class="card-body">
                                    <i class="bi bi-search fs-1 text-primary mb-3 d-block"></i>
                                    <h5 class="card-title">1. Explore as Oportunidades</h5>
                                    <p class="card-text">
                                        Descubra as diversas vagas de voluntariado em nossos projetos
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card border-success h-100 text-center">
                                <div class="card-body">
                                    <i class="bi bi-pencil-square fs-1 text-success mb-3 d-block"></i>
                                    <h5 class="card-title">2. Inscreva-se</h5>
                                    <p class="card-text">
                                        Preencha o formulário com seus dados e conte-nos sobre suas habilidades
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card border-warning h-100 text-center">
                                <div class="card-body">
                                    <i class="bi bi-star fs-1 text-warning mb-3 d-block"></i>
                                    <h5 class="card-title">3. Faça a Diferença</h5>
                                    <p class="card-text">
                                        Comece a contribuir e transformar vidas através da tecnologia
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Oportunidades -->
                <section class="mb-5">
                    <h2 class="text-center mb-4">Oportunidades atuais</h2>
                    <div class="row g-4">
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <span class="badge bg-primary mb-2">Vaga</span>
                                            <h5 class="card-title">Instrutor de Programação</h5>
                                            <p class="card-text">
                                                Ensine fundamentos de programação para iniciantes 
                                                em workshops semanais.
                                            </p>
                                            <button class="btn btn-primary btn-sm">Ver Detalhes</button>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <img src="./assets/images/vaga-1.png" 
                                             class="img-fluid rounded-end h-100 object-fit-cover" 
                                             alt="Vaga de Instrutor">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <span class="badge bg-success mb-2">Vaga</span>
                                            <h5 class="card-title">Mentor de Carreira</h5>
                                            <p class="card-text">
                                                Oriente jovens profissionais em suas jornadas 
                                                na área de tecnologia.
                                            </p>
                                            <button class="btn btn-success btn-sm">Ver Detalhes</button>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <img src="./assets/images/vaga-2.png" 
                                             class="img-fluid rounded-end h-100 object-fit-cover" 
                                             alt="Vaga de Mentor">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card shadow-sm">
                                <div class="row g-0">
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <span class="badge bg-warning text-dark mb-2">Vaga</span>
                                            <h5 class="card-title">Desenvolvedor Voluntário</h5>
                                            <p class="card-text">
                                                Contribua com o desenvolvimento de projetos 
                                                open source para ONGs.
                                            </p>
                                            <button class="btn btn-warning btn-sm">Ver Detalhes</button>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <img src="./assets/images/vaga-3.png" 
                                             class="img-fluid rounded-end h-100 object-fit-cover" 
                                             alt="Vaga de Desenvolvedor">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Formulário -->
                <section class="mb-5">
                    <h2 class="text-center mb-4">Formulário de Inscrição</h2>
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="card shadow">
                                <div class="card-body p-4">
                                    <form id="cadastroForm" novalidate>
                                        <!-- Dados Pessoais -->
                                        <fieldset class="mb-4">
                                            <legend class="h5 border-bottom pb-2 mb-3">Dados Pessoais</legend>
                                            
                                            <div class="mb-3">
                                                <label for="nome" class="form-label">Nome Completo *</label>
                                                <input type="text" class="form-control" id="nome" name="nome" 
                                                       required minlength="3" maxlength="100"
                                                       pattern="[A-Za-zÀ-ÿ\\s]+"
                                                       placeholder="Digite seu nome completo">
                                                <div class="invalid-feedback">
                                                    Por favor, digite seu nome completo (apenas letras).
                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <label for="email" class="form-label">E-mail *</label>
                                                <input type="email" class="form-control" id="email" name="email" 
                                                       required placeholder="seu@email.com">
                                                <div class="invalid-feedback">
                                                    Por favor, digite um e-mail válido.
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="cpf" class="form-label">CPF *</label>
                                                    <input type="text" class="form-control" id="cpf" name="cpf" 
                                                           required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                                                           placeholder="000.000.000-00">
                                                    <div class="invalid-feedback">
                                                        Digite um CPF válido (000.000.000-00).
                                                    </div>
                                                </div>

                                                <div class="col-md-6 mb-3">
                                                    <label for="telefone" class="form-label">Telefone *</label>
                                                    <input type="tel" class="form-control" id="telefone" name="telefone" 
                                                           required pattern="\\(\\d{2}\\)\\s\\d{5}-\\d{4}"
                                                           placeholder="(00) 00000-0000">
                                                    <div class="invalid-feedback">
                                                        Digite um telefone válido ((00) 00000-0000).
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <label for="dataNascimento" class="form-label">Data de Nascimento *</label>
                                                <input type="date" class="form-control" id="dataNascimento" 
                                                       name="dataNascimento" required>
                                                <div class="invalid-feedback">
                                                    Por favor, selecione sua data de nascimento.
                                                </div>
                                            </div>
                                        </fieldset>

                                        <!-- Endereço -->
                                        <fieldset class="mb-4">
                                            <legend class="h5 border-bottom pb-2 mb-3">Endereço</legend>
                                            
                                            <div class="mb-3">
                                                <label for="cep" class="form-label">CEP *</label>
                                                <input type="text" class="form-control" id="cep" name="cep" 
                                                       required pattern="\\d{5}-\\d{3}"
                                                       placeholder="00000-000">
                                                <div class="invalid-feedback">
                                                    Digite um CEP válido (00000-000).
                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <label for="endereco" class="form-label">Endereço *</label>
                                                <input type="text" class="form-control" id="endereco" name="endereco" 
                                                       required minlength="5" maxlength="200"
                                                       placeholder="Rua, número, complemento">
                                                <div class="invalid-feedback">
                                                    Por favor, digite seu endereço completo.
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-8 mb-3">
                                                    <label for="cidade" class="form-label">Cidade *</label>
                                                    <input type="text" class="form-control" id="cidade" name="cidade" 
                                                           required minlength="2" maxlength="100"
                                                           pattern="[A-Za-zÀ-ÿ\\s]+"
                                                           placeholder="Digite sua cidade">
                                                    <div class="invalid-feedback">
                                                        Digite o nome da cidade (apenas letras).
                                                    </div>
                                                </div>

                                                <div class="col-md-4 mb-3">
                                                    <label for="estado" class="form-label">Estado *</label>
                                                    <select class="form-select" id="estado" name="estado" required>
                                                        <option value="">Selecione...</option>
                                                        <option value="AC">AC</option>
                                                        <option value="AL">AL</option>
                                                        <option value="AP">AP</option>
                                                        <option value="AM">AM</option>
                                                        <option value="BA">BA</option>
                                                        <option value="CE">CE</option>
                                                        <option value="DF">DF</option>
                                                        <option value="ES">ES</option>
                                                        <option value="GO">GO</option>
                                                        <option value="MA">MA</option>
                                                        <option value="MT">MT</option>
                                                        <option value="MS">MS</option>
                                                        <option value="MG">MG</option>
                                                        <option value="PA">PA</option>
                                                        <option value="PB">PB</option>
                                                        <option value="PR">PR</option>
                                                        <option value="PE">PE</option>
                                                        <option value="PI">PI</option>
                                                        <option value="RJ">RJ</option>
                                                        <option value="RN">RN</option>
                                                        <option value="RS">RS</option>
                                                        <option value="RO">RO</option>
                                                        <option value="RR">RR</option>
                                                        <option value="SC">SC</option>
                                                        <option value="SP">SP</option>
                                                        <option value="SE">SE</option>
                                                        <option value="TO">TO</option>
                                                    </select>
                                                    <div class="invalid-feedback">
                                                        Selecione um estado.
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>

                                        <!-- Informações Profissionais -->
                                        <fieldset class="mb-4">
                                            <legend class="h5 border-bottom pb-2 mb-3">Informações Profissionais</legend>
                                            
                                            <div class="mb-3">
                                                <label for="habilidades" class="form-label">Habilidades e Experiências *</label>
                                                <textarea class="form-control" id="habilidades" name="habilidades" 
                                                          rows="4" required minlength="20" maxlength="500"
                                                          placeholder="Descreva suas habilidades e experiências..."></textarea>
                                                <div class="invalid-feedback">
                                                    Por favor, descreva suas habilidades (mínimo 20 caracteres).
                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <label class="form-label d-block">Disponibilidade *</label>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" 
                                                           id="dispMeioPeriodo" name="disponibilidade" value="meio-periodo">
                                                    <label class="form-check-label" for="dispMeioPeriodo">
                                                        Meio período
                                                    </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" 
                                                           id="dispIntegral" name="disponibilidade" value="integral">
                                                    <label class="form-check-label" for="dispIntegral">
                                                        Integral
                                                    </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" 
                                                           id="dispRemoto" name="disponibilidade" value="remoto">
                                                    <label class="form-check-label" for="dispRemoto">
                                                        Remoto
                                                    </label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="checkbox" 
                                                           id="dispFinsSemana" name="disponibilidade" value="fins-de-semana">
                                                    <label class="form-check-label" for="dispFinsSemana">
                                                        Finais de semana
                                                    </label>
                                                </div>
                                                <div class="invalid-feedback d-block" id="disponibilidadeError" style="display: none !important;">
                                                    Selecione pelo menos uma opção de disponibilidade.
                                                </div>
                                            </div>
                                        </fieldset>

                                        <p class="text-muted small">* Campos obrigatórios</p>

                                        <div class="d-grid">
                                            <button type="submit" class="btn btn-primary btn-lg">
                                                <i class="bi bi-send me-2"></i>Enviar Inscrição
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        `;
  },

  // Páginas simplificadas para completar o sistema
  doacoes: () =>
    `<div class="container py-5"><h1>Doações - Em breve</h1></div>`,
  transparencia: () =>
    `<div class="container py-5"><h1>Transparência - Em breve</h1></div>`,
  blog: () => `<div class="container py-5"><h1>Blog - Em breve</h1></div>`,
  contato: () =>
    `<div class="container py-5"><h1>Contato - Em breve</h1></div>`,
};
