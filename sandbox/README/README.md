<!-- Alunos envolvidos no projeto: Gustavo Carvalho, Gabriel Labarca, Rodrygo e David -->

<body>
    <!-- Título Geral -->
    <h1 align="center">POC5</h1>
    <h3>Alunos: Gustavo Carvalho, Gabriel Labarca, Rodrygo e David</h3>
    <!-- Vantagens de se usar React -->
    <h2>Porque devemos usar o React</h2>
    <p>Essas são as principais vantagens de se usar React: </p>
    <ul>
        <li> Componentes Reutilizáveis </li>
        <li> Virtual DOM: Melhora o desempenho </li>
        <li> Variedades em bibliotecas: Muitas bibliotecas e ferramentas disponíveis </li>
        <li> Fluxo de Dados Unidirecional: Facilita o processo de identificar erros </li>
    </ul>
    <!-- Explicação das pastas -->
    <h2>Explicação das pastas mais importantes: </h2>
    <ul>
        <li>App:</li>
            <p>Esta pasta é um diretório dentro de uma aplicação que contém o código principal relacionado à estrutura e funcionamento da aplicação. Por padrão, ela não é gerada automaticamente em um projeto React, mas pode ser criada pelos desenvolvedores para organizar o código.</p>
        <li>Components:</li>
            <p>O diretório components em um projeto React é geralmente usado para armazenar todos os componentes reutilizáveis da aplicação.Algumas funções principais são modularização, separando diferentes partes da interface de usuário (UI) em componentes menores e reutilizáveis. A reutilização, pode ser reutilizado em diferentes partes da aplicação. Componentes comuns incluem botões, formulários, cabeçalhos, rodapés, e muito mais. Manutenção, melhora a organização e a manutenção do código, pois facilita encontrar, atualizar e depurar partes específicas da interface. Por fim, isolamento de funções pode conter sua própria lógica e estilo, permitindo que cada parte da aplicação funcione de forma independente e modular. </p>
        <li>Assets:</li>
           <p>O diretório assets em um projeto React é normalmente utilizado para armazenar recursos estáticos da aplicação, como imagens, arquivos de astilos e fontes. Em resumo, ele ajuda a organizar todos esses recursos em um único lugar, tornando-os mais fáceis de gerenciar e acessar quando necessário. </p>
        <li>Public: </li>
           <p>A pasta public em projetos React tem a função de armazenar arquivos estáticos que não são processados diretamente pelo Webpack, como imagens, fontes, ícones, e outros recursos que precisam estar disponíveis diretamente na raiz da aplicação. Por conta da disponibilidade global, qualquer arquivo dentro da pasta public pode ser referenciado com uma URL relativa, como "/assets/ferrari-1.webp", e será carregado diretamente quando o React for executado. Isso é útil para arquivos que não mudam e precisam estar disponíveis em todas as partes da aplicação, como um logotipo.</p>
    </ul>
    <!-- Explicação de cada arquivo -->
    <h2> Explicação de cada arquivo: </h2>
    <ul>
        <!-- Poc05.jsx -->
        <li>Poc5.jsx</li>
        <p> Esse arquivo .jsx, presente na pasta components, define um componente básico que pode ser reutilizado em diferentes partes da aplicação, contribuindo para uma estrutura modular e organizada no seu projeto React. Ele utiliza JavaScript estendido, permitindo escrever HTML junto com o código JavaScript.</p>
        <!-- poc5.module.css -->
        <li> poc5.module.css </li>
        <p> Esse arquivo .module.css, é um css modular, seu papel principal é ser um estilo (style) único para o arquivo Poc5.jsx</p>
        <!-- layout.tsx -->
        <li> layout.tsx </li>
        <p> Esse arquivo .tsx, ou jsx, é responsável por definir a estrutura visual e organizacional da aplicação. </p>
        <!-- page.tsx -->
        <li> page.tsx </li>
        <p> Esse arquivo .tsx, ou jsx, é responsável por definir uma página na aplicação. Ele contém tudo o que será exibido quando o usuário acessar uma determinada rota. Neste arquivo, você pode adicionar componentes (sendo nesse caso, adicionado o componente Poc5.jsx), estilos e lógica que tornam a página interativa e funcional. </p>
        <!-- package.json -->
        <li>package.json</li>
        <p> Contém informações sobre o projeto, como dependências, scripts e configurações. É fundamental para gerenciar pacotes </p>
    </ul>
    <!-- ESTILO CSS -->
    <h2>Estilo CSS (global e module)</h2>
    <ul>
        <li>Global</li>
        <p> O arquivo CSS Module, geralmente nomeado como NOME.module.css, é usado para estilizar componentes individuais em React. Ele permite que você defina estilos que são escopados ao componente em que são importados, evitando conflitos de nomes de classes e permitindo que diferentes componentes tenham estilos semelhantes sem interferir entre si. Isso inclui alterações em propriedades como background-color, fonte, entre outras, mas focando sempre na estilização do componente específico, não da página inteira. </p>
        <li>Module</li>
        <p> O CSS global refere-se a estilos que são aplicados a toda a aplicação, em vez de serem limitados a um único componente. Esses estilos são geralmente definidos em arquivos CSS normais (como styles.css) e podem incluir regras que afetam elementos HTML em toda a página, como definições de fontes, cores de fundo e estilos de layout.
    </ul>

</body>
