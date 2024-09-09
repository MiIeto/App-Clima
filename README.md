
# App Clima

Una aplicacion creada con React.js para ver e clima de diferentes ciudades de paises utilizando una API gratuita para la obtencion de informacion


## Demo

https://app-clima-phi-lemon.vercel.app/


## Run Locally

Clone the project

```bash
  git clone https://github.com/MiIeto/App-Clima.git
```

Go to the project directory

```bash
  cd App-Clima
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm run dev
  or
  pnpm dev
```


## API Reference

https://min-api.cryptocompare.com/

#### Get top 20 cripto currency

```https
  GET /data/top/mktcapfull?limit=20&tsym=USD
```

#### Get value of cripto currency in selected currency

```https
  GET /data/pricemultifull?fsyms=cryptocurrency&tsyms=currency
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cryptocurrency`      | `string` | **Required**. Cripto currency selected |
| `currency`      | `string` | **Required**. Local currency selected |



## Environment Variables

Para usar este proyecto, debes agregar la siguiente variable de entorno a tu archivo .env.local

`VITE_API_KEY`


## Tech Stack

React, Typescript, ZOD, Zustand


## Gratitudes

Muchas Gracias a **@codigoconjuan** por impartir el curso utilizado para crear este proyecto
