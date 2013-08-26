(function($, window){
    
    $(function(){
        
        console.log('app.js');
        $('#js-ajouterPatient').on('click', function(){
            
            var nouveauPatient = {            
                
                'dateDemaneBilan' : $('#js-dateDemandeBilan').val(),
                'nomPatient' : $('#js-nomPatient').val(),
                'prenomPatient' : $('#js-prenomPatient').val(),
                'origineDemande' : $('#js-origineDemande').val(),
                'domaineIntervention' : $('#js-domaineIntervention').val(),
                'telephone' : $('#js-telephone').val(),
                'commentaire' : $('#js-commentaire').val(),
                'dateBilan' : $('#js-dateBilan').val(),
                'disponibilitePatient' : $('#js-disponibilitePatient').val()            
            };
            debugger;     
        });
        
    });
    
})($, window);