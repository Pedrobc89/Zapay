# Zapay

Webscrapping api in Python3/Django/React

Este repositório contem uam solução para o desafio de programação da Zapay

O desafio consite em realizar um webscrapping do website: https://nerdstore.com.br/categoria/especiais/game-of-thrones/
Webscrapping é uma técnica de extração de dados de um webstite, como normalmente quem realiza o scrapping não é dono do website e portanto também não é dono das informações lá contidas a nátureza dessa atividade pode ser considerada um anti-ética.
Devido a essas razões os dados obtidos foram armazenados apenas localmente.

## Implementação

### Dependências

Para realizar o scrapping primeiramente é necessário obter os dados da internet , para isso podemos utlizar a biblioteca requests. Em seguida precisamos extrar do texto HTML os dados, essa tarefa é super simples com a biblioteca BeautifulSoup

- [Requests](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) - Verbos HTTP
- [BeautifulSoup](http://www.dropwizard.io/1.0.2/docs/) - HTML parser

  Para instalar essas bibliotecas basta usar os comandos

```
pip3 install requests
pip3 install bs4
```

### Abordagem

A biblioteca requests retorna todo o conteúdo HTML contifo na página alvo.

```
res = requests.get(site)
```

Podemos então passar esse texto para um objeto da biblioteca BeautifulSoup, que vai conseguir processar esse texto HTML, permitindo que façamos busca poelas tags html ou suas classes

```
soup = BeautifulSoup(res.text)
```

Após termos a nossa sopa de tags HTML precisamos olhar o código fonte da página alvo e encontrar padrões para remoção dos dados.
Ao relaizar essa análise, podemos ver que todos os produtos estão organizados em uma lista, e todos os itens dessa lista possuem a classe "product"

Assim podemos selecionar apenas as tags que possuem essa classe:

```
products = soup.select(".products")
```

Esse comando no sretorna uma lista com todas as tags que possuem a classe "product".

Em seguida podemos através de um loop olhar dentro de todas essas tags e procurar os dados solicitados. Podemos pegar as imagens relacionadas olhando o [src] das tags [img]. O nome dos produtos está em uma tag [h2] e o preço uma classe "price".

```
for p in products:
    imgs = []
    for c in p.descendants:
        if type(c) == bs4.element.Tag:
            if c.name == 'img':
                imgs.append(c['src'])
            if c.name == 'h2':
                name = c.text
            if 'price' in c['class']:
                price = c.text
    data = {"name": name, "price": price, "img": imgs[0]}
    requests.post(api, data)
```

Todos os dados solicitados estão armazenados na varíavel data, foi escolhido armazenar essas informações num banco de dados sqlite3, utilizando uma api em django

### Visualização

Criada uma api em Django para armazenar os dados do script em um banco sqlite3

Criado também uma visualização dos dados em React, onde podemos consultar a api e mostar os dados com um diferente layout
