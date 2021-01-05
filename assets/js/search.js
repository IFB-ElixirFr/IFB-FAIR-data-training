(function() {
    function displaySearchResults(results, store) {
      var searchResults = document.getElementById('search-results');
  
      if (results.length) { 
        var appendString = '';
  
        for (var i = 0; i < results.length; i++) {  
            var index = store.findIndex(function(item, j){
                return item.id === results[i].ref
            });
            var item = store[index];

            appendString += '<a class="noDeco" href="' + item.url + '"><div class="card divShadow">' ;

            if (item.type == "cours") {
              appendString += '<div class="card-header card-footer_cours"><i class="fas fa-book"></i> Cours '+ item.numeroSequence +' Module '+ item.numeroModule +' </div>'
            } else if (item.type == "tp") {
                appendString += '<div class="card-header card-footer_tp"><i class="fas fa-book"></i> TP '+ item.numeroSequence +' Module '+ item.numeroModule +' </div>'
            } else {
              appendString += '<div class="card-header card-footer_cours"><i class="fas fa-book"></i> Cours '+ item.numeroSequence +' Module '+ item.numeroModule +' </div>'
            }

            appendString += '<div class="card-body">' ;
            appendString += '<h5 class="card-title">' + item.title + '</h5> ' ;
            appendString += '<p class="card-text">' + item.description + '</p></div>';
            
            appendString += '<div class="card-footer text-right"><a href="' + item.url + '">Aller à la séquence</a></div>'
            appendString += '</div></a>';
        }
  
        searchResults.innerHTML = appendString;
      } else {
        searchResults.innerHTML = '<h4>No results found</h4>';
      }
    }
  
    function getQueryVariable(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split('&');
  
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
  
        if (pair[0] === variable) {
          return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        }
      }
    }
  
    var searchTerm = getQueryVariable('query');
  
    if (searchTerm) {

      document.getElementById('search-box').value =  searchTerm;

      var idx = lunr(function () {
        this.ref('id');
        this.field('title', { boost: 10 });
        this.field('formateurs');
        this.field('content');
        this.field('tools');
        this.field('type');
        this.field('url');
      
        window.store.forEach(function (doc) {
            this.add(doc)
          }, this)
      })
        var results = idx.search(searchTerm); 
        displaySearchResults(results, window.store); 
    }
  })();
  