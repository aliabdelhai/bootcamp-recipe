class Renderer{
    constructor(){
    }

    render = function(data){
        const source = $('#store-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({data});
        $('.recipes').empty().append(newHTML);
    }
}

