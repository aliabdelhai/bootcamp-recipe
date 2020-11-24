const express = require('express')
const router = express.Router()
const urllib = require('urllib')


router.get('/sanity', function(req, res){
    res.send('OK')
})


router.get('/recipes/:ingredient', function(req, res){
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err, response){
    const parsingData = JSON.parse(response.toString());
    const ourData = parsingData.results;
    const finalData = ourData.map(fd => ({
        'ingredients': fd.ingredients,
        'title': fd.title,
        'thumbnail': fd.thumbnail,
        'href': fd.href,
        }))

        res.send(finalData)   
    })
    
})

module.exports = router


