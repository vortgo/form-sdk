# form-html

## Разработка

1. Устанавливаем пакеты командой `npm i` (_рабочая версия ноды `v6.7.0`_)
2. Запускаем сборщика и сервер командой `npm run dev`
3. Сервер запустится по адресу http://localhost:8080

## Сборка
1. Устанавливаем пакеты командой `npm i`
2. Запускаем сборку командой `npm run build`

## Создание нового стиля

1. Создать одноименные директории в `src\styles` и `src\templates`
    Например: `src\styles\example` и `src\templates\example`
2. В созданной директории со стилями создать основной файл стиля `index.styl`
    _Структура компонентов стилей внутри данной директории - на усмотрение разработчиков._
3. В созданной директории с шаблонами создать файл шаблона `index.pug`
    Пример:
    
    ```
    extends ../layout.pug
    include ../form.pug
    
    block form
        +form
            +cardNumber
            +expiryDate
            +cardHolder
            +cardCvv
            +cardPin
            +cpf
            +dni
            +personalId
            +address
            +state
            +city
            +zipCode

    ```
    
    **Важно: необходимо строго соблюдать порядок очередности подключаемых миксинов элементов (полей) формы, как в примере!**
4. Для просмотра результата запустить сервер `npm run dev` и открыть в браузере URL по имени созданных директорий `http://localhost:8080/example.html`

## Messaging system

У формы, запущенной внутри iframe, есть возможность коммуникации с родительским окном посредством postMessage.

Доступные типы сообщений:

```
WindowHeight {
  height:integer,
  type:"windowHeight"
}
```

```
OrderStatus {
  response: { ... },
  type:"orderStatus"
}
```