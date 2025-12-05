# TypeScript Base

<<<<<<< HEAD
# --------------------Links inportantes para estudo
=======
# Links inportantes para estudo
<<<<<<< HEAD
>>>>>>> 60ee3cbb79f77730a80155a84332baf4ce7fdaaf
Link 01 - https://www.youtube.com/watch?v=eMtxXnHfOMw --[primeiros passos no TypeScript]
Link 02 - https://gemini.google.com/app/a954b8f3f9319bec --[perguntas ao Gimini]
Link 03 - https://gemini.google.com/app/b41e75faecb0abec --[pesquisa Gimini sobre TypeScript]
Link 04 - https://github.com/franciscodnn/pweb1-2025-2/blob/main/classes/1_environment/README.md --[material apoio prof. Francisco Dantas - PWeb 1]
Link 05 - https://github.com/franciscodnn/pweb1-2025-2/blob/main/classes/README.md --[todas as aulas prof. Dantas - PWeb1]
=======
* Link 01 - [Primeiros passos no TypeScript](https://www.youtube.com/watch?v=eMtxXnHfOMw)
* Link 02 - [Perguntas ao Gimini](https://gemini.google.com/app/a954b8f3f9319bec)
* Link 03 - [Pesquisa Gimini sobre TypeScript](https://gemini.google.com/app/b41e75faecb0abec)
* Link 04 - [Material apoio prof. Francisco Dantas - PWeb 1](https://github.com/franciscodnn/pweb1-2025-2/blob/main/classes/1_environment/README.md)
* Link 05 - [Todas as aulas prof. Dantas - PWeb1](https://github.com/franciscodnn/pweb1-2025-2/blob/main/classes/README.md)
>>>>>>> ea144563376909d82104251033a30293b6ee8b4c

<<<<<<< HEAD
# -------------------Curiosidades
ara subsstituir todos os termos de um código ao mesmo tempo basta selecionar "Crtl + H" e escrever na caixa 1 o termo antigo e na caixa 2 o noto termo depois selecionar sunstituit tudo.
Para chamar o "console.log" basta escrever log + Tab.
Para saber como comentar uma linha de de código click em "Ctrl + ;", idependente de linguaem e IDE.
=======
# Curiosidades
<<<<<<< HEAD
**Para subsstituir todos os termos de um código ao mesmo tempo basta selecionar "Crtl + H" e escrever na caixa 1 o termo antigo e na caixa 2 o noto termo depois selecionar sunstituit tudo.
**Para chamar o "console.log" basta escrever log + Tab.
**Para saber como comentar uma linha de de código click em "Ctrl + ;", idependente de linguaem e IDE.
>>>>>>> 60ee3cbb79f77730a80155a84332baf4ce7fdaaf
=======
* Para subsstituir todos os termos de um código ao mesmo tempo basta selecionar `Crtl + H` e escrever na caixa 1 o termo antigo e na caixa 2 o noto termo depois selecionar sunstituit tudo.
* Para chamar o `console.log` basta escrever `log + Tab`.
* Para saber como comentar uma linha de de código click em `Ctrl + ;`, idependente de linguaem e IDE.
* Para subsstituir todos os termos de um código ao mesmo tempo basta selecionar `Crtl + H` e escrever na caixa 1 o termo antigo e na caixa 2 o noto termo depois selecionar sunstituit tudo.
>>>>>>> ea144563376909d82104251033a30293b6ee8b4c

# Config 01 - Baixar e instalar Node.js no PC, basta seguir os passo de instalação do site
* Link [Node.js](https://nodejs.org/pt) > Latest LTS(Recomendada)
* Testar e verificar se Node.js, está instalado, em 10/2025 "8.1.3"
```bash
  $ npm -v ou $ npm --version
``` 

# Config 02 - Criar WorSpace/SubPasta/PastaBase do Projeto pelo Power Shell e acessar o VSCode
* Comando para criar uma pasta Ex. "wsifpb", "pweb", "typeScript", ...
```bash
  mkdir workSpace 
``` 
* Comando para acessar uma pasta Ex. "wsifpb", "pweb", "typeScript", ...
```bash
  cd wsifpb
```

<<<<<<< HEAD
# ----------Config 03 - Instalar TypeScript na Pasta Base do Projeto pelo Power Shell
$ tsc --version  ou tsc -v --[verificar a versão do TypeScript instalado, ***se der erro, não está instalado no projeto***, não está instalado]
=======
# Config 03 - Instalar TypeScript na Pasta Base do Projeto pelo Power Shell
<<<<<<< HEAD
$ tsc --version  ou tsc -v -----------[verificar a versão do TypeScript instalado, ***se der erro, não está instalado no projeto***, não está instalado]
>>>>>>> 60ee3cbb79f77730a80155a84332baf4ce7fdaaf
$ npm i typescript --global ----------[vai instalar o TypeScript de forma Global no PC]
$ npm install -g typescript ----------[vai instalar o TypeScript de forma Global no PC]
$ npx tsc --version ------------------[verificar a versão do TypeScript instalado, global]
$ npm install typescript --save-dev --[instalar o TypeScript no projeto com todas as dependências necessárias para projeto funcionar]
"npm install" responsável pela biblioteca do TypeScript e cria a pasta "node_modules"
"typescript" responsável por compilar o TypeScript pelo "tsc" e converter os "arquivos.ts" para "arquivos.js"
"--save-dev" responsável por informar ao "npm" como registrar a instalação, registra o Typescript na seção "devDependencies" e no "package.json"
<<<<<<< HEAD
$ tsc -v --[verificar a versão do TypeScript está instalado, em 10/2025 "5.9.3"]
=======
$ tsc -v		       [verificar a versão do TypeScript está instalado, em 10/2025 "5.9.3"]
>>>>>>> 60ee3cbb79f77730a80155a84332baf4ce7fdaaf
$ npm ls typescript [verifica a versão do TypeScript nas dependência do projeto] 
=======
* Verificar a versão do TypeScript instalado, ***se der erro, não está instalado no projeto***, não está instalado
```bash
  tsc --version  ou tsc -v
```
* Vai instalar o TypeScript de forma Global no PC
```bash
 npm i typescript --global
```
* Vai instalar o TypeScript de forma Global no PC
```bash
  npm install -g typescript
```
* Verificar a versão do TypeScript instalado, global
```bash
 npx tsc --version
```
* Instalar o TypeScript no projeto com todas as dependências necessárias para projeto funcionar
```bash
  npm install typescript --save-dev
```
  * `npm install` responsável pela biblioteca do TypeScript e cria a pasta `node_modules`
  * `typescript` responsável por compilar o TypeScript pelo `tsc` e converter os `arquivos.ts` para `arquivos.js`
  * `--save-dev` responsável por informar ao `npm` como registrar a instalação, registra o Typescript na seção `devDependencies` e no `package.json`
* Verificar a versão do TypeScript está instalado, em 10/2025 "5.9.3"
```bash
  tsc -v
```
* Verifica a versão do TypeScript nas dependência do projeto
```bash
  npm ls typescript$ npm install typescript --save-dev
```
>>>>>>> ea144563376909d82104251033a30293b6ee8b4c

# Config 04 - Acessar o VSCode na Pasta Base do Projeto pelo Power Shell
```bash
  npm ls typescript
```
```bash
  npm install typescript --save-dev
```
```bash
  cd typeScript
```
* Comando para acessar o VSCode na pasta so projeto que se encontra
```bash
  code .
```

# Config 05 - Criar arquico `tsconfig.json`
Para abrir um Terminal, basta > Terminal > Novo Terminal, lembra de estar dentro da Pasta Base do Projeto
```bash
  cd typeScript
```
* Criar arquivo "tsconfig.json" con todas as configurações necessárias para o TypeScript
```bash
  tsc --init ou npx tsc --init
```

# Config 06 - Criar Pasta/Arquino no VSCode
* > selecionar icon "arquivo +" --[para criar novo arquivo]
* > Nome arquivo: index.ts -------[escrever o código para ser compilado| web1 > index.ts]
* > selecionar icon "pasta +" ----[para criar novo pasta]
* > Nome pasta: src --------------[web1 > src, para criar arquivo dentro da pasra #Config 04 > Passo 02]

# Config 07 - Compilar/Executar/Rodar código do TypeScript com JavaScript
* Converte os "arquivos.ts" para "arquivos.js", cria os arquivos necessários para compilar o código
```bash
 npx tsc
```
* Para ver o resultado do código no arquivo "index.js", rodar/executar o código dentro da pasta
```bash
  tsc index.js
```
* Para rodar o código sem está dentro da pasta
```bash
  node nomePasta\arquivo.js
```
* Converte os `arquivos.ts` para `arquivos.js`, para poder rodar no ".html"
```bash
  npx tsc
```
* Permite executar o TypeScript direto no Node.js, executar na pasta do projeto
```bash
  npm install --sace-dev @types/node ts-node tsx
```
* Para executyar `arquivo.ts`, sem transformar o `arquivo.ts` em `arquico.js`
```bash
  npx tsx arquivo.ts
```
* Para verificar se tem algum erro no código, mas não vai mostrar nada se estiver tudo OK
```bash
  tsc arquivo.ts
```
* Para executyar "arquivo.ts", sem está  dentro pasta
```bash
  npx tsx ./pasta/arquivo.ts
```
