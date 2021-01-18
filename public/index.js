

readStats()

function readStats(){
    $.ajax({
        url: "/api/stats",
        method: "GET"
    }).then(function(response){
        console.log(response)
        for(let i = 0; i< response.length; i++){
            console.log(response[i].title)
            $(".container").append(
            `<div class="card">
            <div class="title card-header">${response[i].title}</div>
            <div class="cost">${response[i].cost}</div>
            <div class="total">${response[i].total}</div>
            </div>`
            )
        }
    })
}


$(".enter").on("click", function(event){ 
    event.preventDefault()
    $(".container").empty()

    const inpute = {
        title: $(".input-title").val(),
        cost:$(".input-cost").val(),
        total:$(".input-total").val()
    }
    $.ajax({
        url: "/api/stats",
        method: "POST",
        data: inpute,
       success: function(data){$(".container").append(
        `<div class="card">
        <div class="title card-header">${data.title}</div>
        <div class="cost">${data.cost}</div>
        <div class="total">${data.total}</div>
        </div>`
        )}
    })
    readStats()
    $(".input").val("")


})



