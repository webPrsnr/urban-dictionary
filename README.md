<p align="center">
  <img width="377" height="100" src="/__assets/logo.png">
</p>

# [WIP]urban-dictionary

urban-dictionary - это аналог англоязычного сервиса [urbandictionary](https://www.urbandictionary.com/) по поиску значений русскоязычного сленга.

> Проект находится на стадии разработки текущий результат может отличаться от итогового

## features

- всплывающее меню browse, предоставляющее выдачу всех слов из БД по искомой букве
- пагинация доступных слов по искомой букве, `/browse/N` - где N - искомая буква
- отдельная вкладка для каждого слова `/words/id` - где id - идентификатор слова
- на вкладке присутствуют меню по удалению, либо редактированию искомого слова

## available endpoints

| actions                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- |
| [GET http://localhost:8080/api/v1/words](http://localhost:8080/api/v1/words)                                                 |
| [GET http://localhost:8080/api/v1/words/:wordId](http://localhost:8080/api/v1/words/0278ce0d-c06e-429a-9fba-d22f4b315e96)    |
| [POST http://localhost:8080/api/v1/words](http://localhost:8080/api/v1/words)                                                |
| [PATCH http://localhost:8080/api/v1/words/:wordId](http://localhost:8080/api/v1/words/0278ce0d-c06e-429a-9fba-d22f4b315e96)  |
| [DELETE http://localhost:8080/api/v1/words/:wordId](http://localhost:8080/api/v1/words/0278ce0d-c06e-429a-9fba-d22f4b315e96) |

## todo

- кастомные хуки по запросу на сервер - front
- `/words` - показ всех существующих слов в БД с учетом пагинации -front
- поиск нужного слова в `/words` - front, back
- поиск нужного слова в `/home` с последующим редиректом на `/words`- front
- меню создания нового слова в `/words` - front
- оптимизация рендеров (мемоизация) - front
- авторизация и аутентификация для админа - front, back
- работа над внешним видом сайта - front
- `db_init.js` - back
- swagger - back

## quick start

- `git clone git@github.com:webPrsnr/urban-dictionary.git`
- `cd urban-dictionary`
- `npm i`
- `npm run db`
- `npm run dev`
