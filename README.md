Home
    *link in header per la pagina di ricerca
    *sezione featured (1 random cocktail con grafica diversa)
    *paginatore A-Z (TODO:con memoria)
    *elenco A-Z
        ordinati alfabeticamente
        TODO:numero dei risultati
        messaggio diverso se 0
Dettaglio
    *scheda
    *link nell'ingrediente per aprire un elenco di cocktail con quell'ingrediente
    TODO:cambio lingua

Ricerca
    *Ricerca per nome + bottone
    *Ricerca per ingrediente + bottone (prepopolare lista degli ingredienti da API)
    *Messaggio iniziale (elenco vuoto)
    *Messaggio dopo la Ricerca
        - elenco vuoto
        - elenco pieno

Ricerca per ingrediente
    titolo e foto ingrediente
    Messaggio iniziale (elenco vuoto)
    *Messaggio dopo la Ricerca
        - elenco vuoto
        - elenco pieno


 Nuova pagina "Ordini"
    *Campo ricerca per nome, collegamento API www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
    - Lista cocktail in formato "bootstrap list"
        - usare immagine "small", come da doc
        - https://getbootstrap.com/docs/5.2/components/list-group/#checkboxes-and-radios
        - https://getbootstrap.com/docs/5.2/components/list-group/#contextual-classes
     elementi selezionabili SONO COMPONENTI con checkbox (usare immagini e non input-checkbox)
     aggiungere classe "primary" ai selected
    - Massimo 5 selezioni (blocco con alert)
    - Minimo due selezioni (warning)
    - Possibile fare più ricerche, 
    - mantenere un array dei selezionati in un elenco a parte con possibilità di rimuovere.
