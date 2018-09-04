'use strict';

function getBitcoin() {
    let url = 'https://api.coinmarketcap.com/v2/ticker/1/';
      var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.response);
            
            
            // Cryptocurrency name
            var cryptoNameDiv = document.createElement('div');
            var name = document.createTextNode(obj.data.name);
            cryptoNameDiv.appendChild(name);
            document.getElementById('myDiv').appendChild(cryptoNameDiv).style.fontFamily = 'Ubuntu, sans-serif';
            document.getElementById('myDiv').appendChild(cryptoNameDiv).style.color = '#f7931a';
            

            // Bictoin Price
            var cryptoPriceDiv = document.createElement('h1');
            var price = document.createTextNode("USD Price: " + obj.data.quotes.USD.price);
            cryptoPriceDiv.appendChild(price);
            document.getElementById('myDiv').appendChild(cryptoPriceDiv)
            

            // Bitcoin Market Cap
            var cryptoMarketCapDiv = document.createElement('h1');
            var market_cap = document.createTextNode("Market Cap: " + obj.data.quotes.USD.market_cap);
            cryptoMarketCapDiv.appendChild(market_cap);
            document.getElementById('myDiv').appendChild(cryptoMarketCapDiv)
           
            

          }
        };
        xhttp.open("GET", url, true);
        xhttp.send();   
}



getBitcoin();

