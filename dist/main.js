
const render = new Renderer()

$('.search').on('click', function(){
    const ingredient = $('.my-input').val().toLowerCase()
    $.get(`/recipes/${ingredient}`, function(data){
        render.render(data)  
    })
})


$('.recipes').on('click', '.recipeImg', function(){
    const firstIngredient  = $(this).closest('.recipe').find('li').first().text()
    alert(firstIngredient)
 
})


const errorImg = function(obj){
    $(obj).attr('src', 'https://www.gourmetsleuth.com/images/default-source/recipes/default-image.gif?sfvrsn=56')
    $(obj).css('width', '60%')
    $(obj).css('margin-top', '20px')
}

const errorVideo = function(obj){
    $(obj).attr('href', 'https://www.youtube.com/watch?v=SpI3QF_Iauc')
    $(obj).attr('target', '_blank')
}