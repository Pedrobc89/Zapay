import requests  # mahe http verb actions (get, post, etc)
import bs4      # pull data from HTML / XML
import csv      #


def writeOutputCSV(f, data):

    f_csv = open(f, 'w')
    wrtr = csv.writer(f_csv, delimiter=';', lineterminator='\n')

    line = []
    for d in data:
        wrtr.writerow(d)
    # for count, d in enumerate(data) :
        # line.append(d)
        # if((count+1)%roi_width == 0):
        # wrtr.writerow( line )
        # line = []

    f_csv.close()


if __name__ == '__main__':
    try:
        # Website to be scrapped
        site = 'https://nerdstore.com.br/categoria/especias/game-of-thrones/'
        localhost = 'http://localhost:8000'

        # Make an http request to the website
        res = requests.get(site)

        # Check if request code is valid
        if res.status_code != 200:
            raise Exception(
                'Status code returned is not 200. Status code was {}'.format(res.status_code))

        soup = bs4.BeautifulSoup(res.text, 'lxml')  # parses data through lxml

        # select all HTML tags that have the product class and stores into a list
        products = soup.select('.product')

        print(type(products[0]))

        products_output = []
        for p in products:
            imgs = []
            for c in p.descendants:
                if type(c) == bs4.element.Tag:
                    # print(c.name)
                    if c.name == 'img':
                        # print(c['src'])
                        imgs.append(c['src'])
                    if c.name == 'h2':
                        # print(c.text)
                        name = c.text
                    if 'price' in c['class']:
                        # print(c.text)
                        price = c.text
            data = {"name": name, "price": price, "img": imgs[0]}
            print(data)
            p = requests.post("http://localhost:8000/api/got/", data)
            products_output.append([name, price, imgs])

        # writeOutputCSV('test.csv', products_output)

    except Exception as e:
        print(e)
