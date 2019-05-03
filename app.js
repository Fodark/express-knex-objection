const express = require('express')
const port = process.env.PORT || 3000

const app = express()

// Endpoints
app.use('/api', require('./api/users').router)

app.listen(port, () => {
	console.log('Listening on port: ' + port)
})
