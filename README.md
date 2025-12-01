# typescript-base

# Links inportantes para estudo
Link 01 - https://www.youtube.com/watch?v=eMtxXnHfOMw --[primeiros passos no TypeScript]
Link 02 - https://gemini.google.com/app/a954b8f3f9319bec --[perguntas ao Gimini]
Link 03 - https://gemini.google.com/app/b41e75faecb0abec --[pesquisa Gimini sobre TypeScript]
Link 04 - https://github.com/franciscodnn/pweb1-2025-2/blob/main/classes/1_environment/README.md --[material apoio prof. Francisco Dantas - PWeb 1]
Link 05 - https://github.com/franciscodnn/pweb1-2025-2/blob/main/classes/README.md --[todas as aulas prof. Dantas - PWeb1]

# Curiosidades
**Para subsstituir todos os termos de um código ao mesmo tempo basta selecionar "Crtl + H" e escrever na caixa 1 o termo antigo e na caixa 2 o noto termo depois selecionar sunstituit tudo.
**Para chamar o "console.log" basta escrever log + Tab.
**Para saber como comentar uma linha de de código click em "Ctrl + ;", idependente de linguaem e IDE.

# Config 01 - Baixar e instalar Node.js no PC, basta seguir os passo de instalação do site
Link Node.js - https://nodejs.org/pt > Latest LTS(Recomendada)
$ npm -v ou $ npm --version --[testar e verificar se Node.js, está instalado, em 10/2025 "8.1.3"]

# Config 02 - Criar WorSpace/SubPasta/PastaBase do Projeto pelo Power Shell e acessar o VSCode
$ mkdir workSpace "wsifpb" --[comando para criar uma pasta]
$ cd wsifpb -----------------[comando para acessar uma pasta]
$ mkdir subPastaProjeto "pweb"
$ cd pweb
$ mkdir pastaBaseProjeto "typeScript"
$ cd typeScript

# Config 03 - Instalar TypeScript na Pasta Base do Projeto pelo Power Shell
$ tsc --version  ou tsc -v -----------[verificar a versão do TypeScript instalado, ***se der erro, não está instalado no projeto***, não está instalado]
$ npm i typescript --global ----------[vai instalar o TypeScript de forma Global no PC]
$ npm install -g typescript ----------[vai instalar o TypeScript de forma Global no PC]
$ npx tsc --version ------------------[verificar a versão do TypeScript instalado, global]
$ npm install typescript --save-dev --[instalar o TypeScript no projeto com todas as dependências necessárias para projeto funcionar]
"npm install" responsável pela biblioteca do TypeScript e cria a pasta "node_modules"
"typescript" responsável por compilar o TypeScript pelo "tsc" e converter os "arquivos.ts" para "arquivos.js"
"--save-dev" responsável por informar ao "npm" como registrar a instalação, registra o Typescript na seção "devDependencies" e no "package.json"
$ tsc -v		       [verificar a versão do TypeScript está instalado, em 10/2025 "5.9.3"]
$ npm ls typescript [verifica a versão do TypeScript nas dependência do projeto] 

# Config 04 - Acessar o VSCode na Pasta Base do Projeto pelo Power Shell
$ cd typeScript
$ code . [comando para acessar o VSCode na pasta so projeto que se encontra]

# Config 05 - Criar arquico "tsconfig.json"
Para abrir um Terminal, basta > Terminal > Novo Terminal, lembra de estar dentro da Pasta Base do Projeto
$ cd typeScript
$ tsc --init ou npx tsc --init [criar arquivo "tsconfig.json" con todas as configurações necessárias para o TypeScript]

# Config 06 - Criar Pasta/Arquino no VSCode
> selecionar icon "arquivo +" --[para criar novo arquivo]
> Nome arquivo: index.ts -------[escrever o código para ser compilado| web1 > index.ts]
> selecionar icon "pasta +" ----[para criar novo pasta]
> Nome pasta: src --------------[web1 > src, para criar arquivo dentro da pasra #Config 04 > Passo 02]

# Config 07 - Compilar/Executar/Rodar código do TypeScript com JavaScript
$ npx tsc --------------------[converte os "arquivos.ts" para "arquivos.js", cria os arquivos necessários para compilar o código]
$ tsc index.js ---------------[para ver o resultado do código no arquivo "index.js", rodar/executar o código dentro da pasta]
$ node nomePasta\arquivo.js --[para rodar o código sem está dentro da pasta]

# Para subsstituir todos os termos de um código ao mesmo tempo basta selecionar "Crtl + H" e escrever na caixa 1 o termo antigo e na caixa 2 o noto termo depois selecionar sunstituit tudo.
$ npx tsc -----------------------------------------[converte os "arquivos.ts" para "arquivos.js", para poder rodar no ".html"]
$ npm install --sace-dev @types/node ts-node tsx --[permite executar o TypeScript direto no Node.js, executar na pasta do projeto]
$ npx tsx arquivo.ts ------------------------------[para executyar "arquivo.ts", sem transformar o "arquivo.ts" em "arquico.js"]
$ tsc arquivo.ts ----------------------------------[para verificar se tem algum erro no código, mas não vai mostrar nada se estiver tudo OK]
$ npx tsx ./pasta/arquivo.ts ----------------------[para executyar "arquivo.ts", sem está  dentro pasta]
