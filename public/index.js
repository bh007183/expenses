$(".enter").on("click", function(event){
    event.preventDefault()
    $.ajax({
        url: "/api/stats",
        method: "GET"
    }).then(function(response){
        console.log(response)
        for(let i = 0; i< response.length; i++){
            $(".title").text(response[i].title)
            $(".cost").text(response[i].cost)
            $(".total").text(response[i].total)
        }
    })

})



const inpute = {
    title: $(".input-title").val(),
    cost:$(".input-cost").val(),
    total:$(".input-total").val()
}

// $.ajax({
//     url: "/api/stats",
//     method: "POST",
//     data: inpute
// })