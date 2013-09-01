(function($, window){
    
    function remove(list, listId, index){
        
        var indexOf = _.indexOf(listId, index);
        list.splice(indexOf, 1);
        listId.splice(indexOf, 1);
    }
    
    $(function(){
        
        $('.main').on('click', '#js-enregistrerPatient', function(){
            
            var $this = $('.main');
            var bilans = amplify.store('bilans');
            if(! bilans){
                bilans = [];
            }
            var idBilans = amplify.store('idBilans');
            if(! idBilans){
                idBilans = [];
            }
            var currentId = $('.ajouter-bilan').data('id')
            var newId = bilans.length;
            
            var nouveauPatient = {            
                
                'dateDemandeBilan' : $this.find('#js-dateDemandeBilan').val(),
                'nomPatient' : $this.find('#js-nomPatient').val(),
                'prenomPatient' : $this.find('#js-prenomPatient').val(),
                'origineDemande' : $this.find('#js-origineDemande').val(),
                'domaineIntervention' : $this.find('#js-domaineIntervention').val(),
                'telephone' : $this.find('#js-telephone').val(),
                'anamnese' : $this.find('#js-anamnese').val(),
                'dateBilan' : $this.find('#js-dateBilan').val(),
                'disponibilitePatient' : $this.find('#js-disponibilitePatient').val(),
                'etatBilan' : 'non commencé'
            };
            // add bilan
            if(currentId === ''){
                nouveauPatient.id = newId;
                bilans.push(nouveauPatient);
                amplify.store('bilans', bilans);
                
                idBilans.push(newId);
                amplify.store('idBilans', idBilans);
            }
            // modify bilan
            else {
                var bilans = amplify.store('bilans');
                var idBilans = amplify.store('idBilans');
                var indexOf = _.indexOf(idBilans, currentId);
                
                nouveauPatient.id = currentId;
                bilans[indexOf] = nouveauPatient;
                
                amplify.store('bilans', bilans);                
            }
            my.utils.renderExternalTemplate("bilans", "#main", bilans);
        });
        
        $('.main').on('click', '.infoPatientList', function(){
            
            $(this).toggleClass('list-active');
            $(this).data('id');
            
            var bilansSelected = $('.main').find('.list-active').length;
            if(bilansSelected === 0){
                $('#js-modifierBilan').addClass('hide').removeClass('activate');
                $('#js-supprimerBilan').addClass('hide').removeClass('activate');
            }
            else if(bilansSelected === 1) {
                $('#js-modifierBilan').removeClass('hide');
                $('#js-supprimerBilan').removeClass('hide');
            }
                else {
                    $('#js-modifierBilan').addClass('hide').removeClass('activate');
                    $('#js-supprimerBilan').removeClass('hide');
                }
        });
        
        $('.main').on('click', '#js-modifierBilan', function(e){
            
            var $this = $(this);
            if($this.hasClass('hide')) {                
                e.stopPropagation();
                return false;
            }
            
            var bilans = amplify.store('bilans');
            var idBilans = amplify.store('idBilans');
            
            var id =  $('.main').find('.list-active').data('id');
            var indexOf = _.indexOf(idBilans, id);
            var bilan = bilans[indexOf];
            my.utils.renderExternalTemplate("ajouterBilan", "#main", bilan);
            
            //            amplify.store('bilans', bilans);
            //            amplify.store('idBilans', idBilans);
        });
        
        $('.main').on('click', '#js-supprimerBilan', function(e){
            
            var $this = $(this);
            if($this.hasClass('hide')) {                
                e.stopPropagation();
                return false;
            }
            
            var bilans = amplify.store('bilans');
            var idBilans = amplify.store('idBilans');
            
            $('.main').find('.list-active').each(function(){
                
                $this = $(this);
                var id = $(this).data('id');
                remove(bilans, idBilans, id);
                $this.hide('slow');
                $this.remove();
            });
            amplify.store('bilans', bilans);
            amplify.store('idBilans', idBilans);
        });
        
        $('.main').on('click', '#js-ajouterBilan', function(){
            
            var callback = function(){
                var el = document.getElementById('js-dateDemandeBilan');
                
                var datePickerI18n = {
                    previousMonth : 'mois précédent',
                    nextMonth     : 'mois suivant',
                    months        : ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
                    weekdays      : ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
                    weekdaysShort : ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']
                };
                
                var dateDemandeBilan = document.getElementById('js-dateDemandeBilan');                
                var picker = new Pikaday({
                    field: dateDemandeBilan,
                    firstDay: 1,
                    minDate: new Date('2000-01-01'),
                    maxDate: new Date('2020-12-31'),
                    yearRange: [2000,2020],
                    onSelect: function() {
                        var date = this.getMoment().format('Do MMMM YYYY');
                        $(dateDemandeBilan).val(date);
                        $('#js-nomPatient').focus();
                    },
                    i18n: datePickerI18n
                });     
                //                dateDemandeBilan.setMoment(moment().add('days', 1).calendar());
                
                var dateBilan = document.getElementById('js-dateBilan');                
                var picker = new Pikaday({
                    field: dateBilan,
                    firstDay: 1,
                    minDate: new Date('2000-01-01'),
                    maxDate: new Date('2020-12-31'),
                    yearRange: [2000,2020],
                    onSelect: function() {
                        var date = this.getMoment().format('Do MMMM YYYY');
                        $(dateBilan).val(date);
                        $('#js-disponibilitePatient').focus();
                    },
                    i18n: datePickerI18n
                });     
                
                $('#js-dateDemandeBilan').focus();
            }
            my.utils.renderExternalTemplate("ajouterBilan", "#main", {}, callback);
        });
        
        
    });
    
})($, window);