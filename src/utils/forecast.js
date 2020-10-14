const request = require('request')
const key = "56d4b4b60757133259db11d2eef911e6";
const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${key}&query=${latitude},${longitude}&units=m`

    request({
        url,
        json: true
    }, (error, {
        body
    }) => {
        console.log(body);
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(
                undefined,
                body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike,
                body.current.weather_icons
            )
        }
    })
}

module.exports = forecast