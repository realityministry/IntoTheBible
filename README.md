# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Start

```
npm start
```

## Add Punctuation

```
Please add punctuation to the Bible verses in :::note to make them easier to read:

* Add only appropriate and commonly-used punctuation marks
* Do not change any words or characters - only add punctuation
* Format the result as a numbered list in markdown
* Each verse should be on its own numbered line

Example: original verses:
46   바울과 바나바가 담대히 말하여 이르되 하나님의 말씀을 마땅히 먼저 너희에게 전할 것이로되 너희가 그것을 버리고 영생을 얻기에 합당하지 않은 자로 자처하기로 우리가 이방인에게로 향하노라
47   주께서 이같이 우리에게 명하시되 내가 너를 이방의 빛으로 삼아 너로 땅 끝까지 구원하게 하리라 하셨느니라 하니
48   이방인들이 듣고 기뻐하여 하나님의 말씀을 찬송하며 영생을 주시기로 작정된 자는 다 믿더라

Example: punctuated verses:
46. 바울과 바나바가 담대히 말하여 이르되, "하나님의 말씀을 마땅히 먼저 너희에게 전할 것이로되, 너희가 그것을 버리고 영생을 얻기에 합당하지 않은 자로 자처하기로 우리가 이방인에게로 향하노라.
47. 주께서 이같이 우리에게 명하시되, '내가 너를 이방의 빛으로 삼아 너로 땅 끝까지 구원하게 하리라.' 하셨느니라." 하니,
48. 이방인들이 듣고 기뻐하여 하나님의 말씀을 찬송하며, 영생을 주시기로 작정된 자는 다 믿더라.
```

## 부제

```
짧은 제목과 부제를 작성해 주세요:

Example:
* 본문: 마태복음 1:1-17
* 제목: 예수 그리스도의 계보
* 부졔: 구약과 신약의 연결

Input:
* 본문: 누가복음 1:1-4
* 제목: 복음의 증언
* 부제:
```