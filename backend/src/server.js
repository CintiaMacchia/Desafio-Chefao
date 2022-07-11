const app = require('./app')

const port = process.env.PORT || 3350
app.listen(port, () => console.log('Servidor no ar!'))

// app.listen(3550, () => {
//     console.log('Servidor conectado')
// })

