const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';



window.addEventListener('DOMContentLoaded', (event) => {
    const list = document.getElementById('list');
    list.innerHTML = '';
    fetch(url)
        .then((Response) => {
            Response.json().then((responseList) => {
                responseList.forEach((item) => {
                    let listItemTemplate = `                
                        <li class="list-item">
                            <div class="card">
                                <div class="card-image">
                                    <div class="image">
                                        <img src="${item.photo}" alt="imagem-hospedagem" />
                                    </div>
                                    <div class="arrows">
                                        <i class="fas fa-chevron-circle-left"></i>
                                        <i class="fas fa-chevron-circle-right"></i>
                                    </div>
                                    <div class="heart">
                                        <i class="co fas fa-heart"></i>
                                    </div>
                                </div>
                                <div class="card-rating">
                                    <i class="fas fa-star"></i>
                                    <span> 5,0 </span>
                                </div>
                                <div class="card-description">
                                    <p>${item.property_type}</p>
                                    <p>${item.name}</p>
                                </div>
                                <div class="card-price">
                                    <span>R$ ${item.price}</span>
                                </div>
                            </div>
                        </li>`;

                    list.innerHTML += listItemTemplate;
                });
            });
        })
        .catch((err) => {
            console.log('ERRO: ', err);
        });
});

/*
<div class="card-description">
<p>${item.property_type}</p>
<p>${item.name}</p>
</div>
<div class="card-price">
<span>R$ ${item.price}</span>
</div>
*/