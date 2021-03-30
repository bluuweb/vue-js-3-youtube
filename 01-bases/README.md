# Fundamentos

::: tip CURSO EN UDEMY OFERTA!
Aprende desde cero a trabajar con <b>Vue.js y Firebase</b> aquí: [http://curso-vue-js-udemy.bluuweb.cl](http://curso-vue-js-udemy.bluuweb.cl)
<b>Nos vemos en clases!</b>
:::

## Requisitos

- [HTML y CSS](https://www.youtube.com/watch?v=rr2H086z16s&list=PLPl81lqbj-4LKo66cEts5yC_AjOvqKptm)
- [Fundamentos de Javascript](https://www.youtube.com/watch?v=Z4TuS0HEJP8&list=PLPl81lqbj-4I2ZOzryjPKxfhK3BzTlaJ7)
- [DOM Javascript](https://www.youtube.com/watch?v=11MEBKljhFc&list=PLPl81lqbj-4I2ZOzryjPKxfhK3BzTlaJ7&index=3)
- [Más cursos aquí](https://bluuweb.github.io/)

## Extensiones VSC

- [LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
- [vue-vscode-snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets)
- [beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
- [dobri theme](https://marketplace.visualstudio.com/items?itemName=sldobri.bunker)

## ¿Qué es Vue?

- Vue es un framework progresivo para construir interfaces de usuario.
- Diseñado para ser adoptado gradualmente.
- Podemos crear SPA single web application.
- [https://v3.vuejs.org/](https://v3.vuejs.org/guide/introduction.html)

## Composition API

Ya hablaremos de esto más adelante pero estará cubierto en el curso 👌.

## CDN

- [Instalar con CDN](https://v3.vuejs.org/guide/installation.html#cdn)

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>❤ Suscríbete al canal ❤</title>
  </head>
  <body>
    <h1>Hola Vue.js 3!</h1>

    <script src="https://unpkg.com/vue@next"></script>
  </body>
</html>
```

## Renderizar

En terminos simples estamos pintando elementos dinámicos en nuestro sitio web que serán reactivos (cambio de estado interno por medio de eventos). Osea que reaccionan al cambio 🙌 (lo veremos un poco más adelante)

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <h1>Hola Vue.js 3!</h1>

    <div id="app">
      <h1>Counter: {{ counter }}</h1>
    </div>

    <script src="https://unpkg.com/vue@next"></script>
    <script>
      const App = {
        data() {
          return {
            counter: 1,
          };
        },
      };

      Vue.createApp(App).mount("#app");
    </script>
  </body>
</html>
```

## Llaves dobles
- Nos permite escribir expresiones de JS, osea ejecutar Javascript dentro de nuestro HTML.
- En el ejemplo estamos "preguntando" por nuestro dato, lo cual provoca una comunicación directa generando un DOM actualizado, en otras palabras es reactivo.

```html
<h2>{{counter < 10 ? 'Es menor a 10' : 'es mayor o igual a 10'}}</h2>
```

Los datos y el DOM ahora están vinculados y ahora todo es reactivo.

```js
const Counter = {
  data() {
    return {
      counter: 1,
    };
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
};

Vue.createApp(Counter).mount("#counter");
```

Complementando el ejemplo:

```html
<body>
  <h1>Hola Vue.js 3!</h1>

  <div id="counter">
    <h1>Counter: {{ counter }}</h1>
    <h3>{{mensaje}}</h3>
  </div>

  <script src="https://unpkg.com/vue@next"></script>
  <script>
    const Counter = {
      data() {
        return {
          counter: 1,
          mensaje: "Mensaje desde data",
        };
      },
      mounted() {
        setInterval(() => {
          this.counter++;
          if (this.counter === 5) {
            this.mensaje = "llegamos al número 5!";
          }
        }, 1000);
      },
    };

    Vue.createApp(Counter).mount("#counter");
  </script>
</body>
```

## v-on
Para permitir que los usuarios interactúen con su aplicación, podemos usar la directiva ``v-on`` para activar métodos en nuestra instancia.

```html
<body>
    <h1>Hola Vue.js 3!</h1>

    <div id="counter">
        <h1>Counter: {{ counter }}</h1>
        <h3>{{mensaje}}</h3>
        <button v-on:click="reiniciar">Reiniciar v-on</button>
        <button @click="reiniciar">Reiniciar @</button>
    </div>

    <script src="https://unpkg.com/vue@next"></script>
    <script>
        const Counter = {
            data() {
                return {
                    counter: 1,
                    mensaje: 'Mensaje desde data'
                }
            },
            mounted(){
                setInterval(() => {
                    this.counter++
                    if(this.counter === 5){
                        this.mensaje = 'llegamos al número 5!'
                    }
                }, 1000);
            },
            methods: {
                reiniciar(){
                    this.counter = 0
                }
            }
        }

        Vue.createApp(Counter).mount('#counter')
    </script>
</body>
```

## v-model
Estamos trabando para usted: <br>
<img :src="$withBase('/img/trabajar.gif')">
