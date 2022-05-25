Библиотека для отображения подписей на сайтах созданных компанией panfilov.digital

1. Подпись в футере состоит из двух элементов:
    1. текстовая надпись “**Разработка сайта —**” (с большой буквы, используется длинное тире `&mdash;`)
    2. картинка-логотип panfilov.digital
2. И текст, и картинка находятся внутри тега `<a href=”http://panfilov.digital” target=”_blank”>`

## Установка в Битрикс

CDN адрес для ванильного пакета: https://cdn.jsdelivr.net/gh/quetzal19/panfilov.digital@main/dist/vanilla/index.js

В нужном месте сайта добавляем разметку — контейнер, куда будет добавлен подпись:

```html
<div id="panfilov-sign"></div>
```

Значение атрибута `id` может быть любым, но в примере будет использоваться `panfilov-sign`.x

Добавляем перед закрывающим тегом `body` скрипты:

```html
<script src="https://cdn.jsdelivr.net/gh/quetzal19/panfilov.digital/dist/vanilla/index.js"></script>
<script>
    window.panfilov_digital.PanfilovDigitalSign({
        'el': document.querySelector('#panfilov-sign'),
        'options': {}
    });
</script>
```

Всё, можно перезагрузить страницу и увидеть добавленную там подпись.

Если требуется добавить какие-то специфичные для сайта стили к подписи, то можно ориентироваться на класс `.panfilov-digital-sign`, например:

```html
<div class="footer__copyright">
    <div id="panfilov-sign"></div>
    <style scoped>
        .panfilov-digital-sign {
            color: inherit !important;
            justify-content: flex-end;
            font-size: 12px;
        }
    </style>
    ...
</div>
```

Здесь стили помещены в `scoped`, но можно использовать и обычное размещение.