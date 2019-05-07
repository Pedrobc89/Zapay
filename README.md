# Zapay

Webscrapping api in Python3/Django/React

Este repositório contem uam solução para o desafio de programação da Zapay

O desafio consite em realizar um webscrapping do website: https://nerdstore.com.br/categoria/especiais/game-of-thrones/
Webscrapping é uma técnica de extração de dados de um webstite, como normalmente quem realiza o scrapping não é dono do website e portanto também não é dono das informações lá contidas a nátureza dessa atividade pode ser considerada um anti-ética.
Devido a essas razões

## Implementação

### Dependências

Para realizar o scrapping primeiramente é necessário obter os dados da internet , para isso podemos utlizar a biblioteca requests.
Para instalar a biblioteca basta usar o comando

```
pip3 install requests
```

### Abordagem

A biblioteca requests retorna todo o conteúdo HTML contifo na página alvo.

```
res requests.get(site)
```

Podemos então passar esse texto para um objeto da biblioteca BeautifulSoup, que vai conseguir processar esse texto HTML, permitindo que façamos busca poelas tags html ou suas classes

```
soup = BeautifulSoup(res.text)
```
