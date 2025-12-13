export default eventHandler( async (event) => {
    const body = await readBody(event)

    console.log('webhook in da hood')
    console.log('Method:', event.method)
    console.log('Path:', event.path)
    console.log('Body:', body)

    return {
        success: 'true',
        echo: body,
    }
})

// the endpoint I used is this: /api/webhooks/service
// you can test this by yourself just create a tunnel and send a request using postman