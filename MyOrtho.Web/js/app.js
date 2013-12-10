(function ($, window) {

    var bilans = [];

    //    moment.lang('fr');
    /*
    var callback = function () {
    var el = document.getElementById('js-dateDemandeBilan');
    console.log('callback init');
    var datePickerI18n = {
    previousMonth: 'mois précédent',
    nextMonth: 'mois suivant',
    months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
    };

    var dateDemandeBilan = document.getElementById('js-dateDemandeBilan');
    window.pickerDateDemandeBilan = new Pikaday({
    field: dateDemandeBilan,
    firstDay: 1,
    minDate: new Date('2000-01-01'),
    maxDate: new Date('2020-12-31'),
    yearRange: [2000, 2020],
    onSelect: function () {
    debugger;
    var date = this.getMoment().format('Do/MM/YYYY, h:mm');
    $(dateDemandeBilan).val(date);
    $('#js-nomPatient').focus();
    },
    i18n: datePickerI18n
    });*/
    //                dateDemandeBilan.setMoment(moment().add('days', 1).calendar());
    /*
    var dateBilan = document.getElementById('js-dateBilan');
    window.pickerDateBilan = new Pikaday({
    field: dateBilan,
    firstDay: 1,
    minDate: new Date('2000-01-01'),
    maxDate: new Date('2020-12-31'),
    yearRange: [2000, 2020],
    onSelect: function () {
    var date = this.getMoment().format('MMMM Do YYYY, h:mm');
    $(dateBilan).val(date);
    $('#js-disponibilitePatient').focus();
    },
    i18n: datePickerI18n
    });

    $('#js-dateDemandeBilan').focus();
    };
    */
    //$('#js-dateDemandeBilan').focus();

    $('#main').on('keyup', '#js-dateDemandeBilan, #js-dateBilan', function (e) {

//        console.log(e);
        //        debugger;
        var $this = $(this);
        // backspace
        if (e.keyCode === 8) return;

        // tab
        if (e.keyCode === 9) return;

        // end
        if (e.keyCode === 35) return;

        // home
        if (e.keyCode === 36) return;

        // left
        if (e.keyCode === 37) return;

        // up
        if (e.keyCode === 38) return;

        // right
        if (e.keyCode === 39) return;

        // up
        if (e.keyCode === 40) return;

        // shift
        if (e.keyCode === 16) return;

        // control
        if (e.keyCode === 17) return;

        var slashDay = $this.val().length === 2;
        var slashMonth = $this.val().length === 5;
        if (slashDay || slashMonth) {
            $this.val($this.val() + '/');
        }
        if ($this.val().length === 6) {
            $this.val($this.val() + moment().year());
            setInputSelection(this, 6, 10);
        }
        else if ($this.val().length === 10) {
            $('#js-nomPatient').focus();
        }
    });

    function setInputSelection(input, startPos, endPos) {
        input.focus();
        if (typeof input.selectionStart != "undefined") {
            input.selectionStart = startPos;
            input.selectionEnd = endPos;
        } else if (document.selection && document.selection.createRange) {
            // IE branch
            input.select();
            var range = document.selection.createRange();
            range.collapse(true);
            range.moveEnd("character", endPos);
            range.moveStart("character", startPos);
            range.select();
        }
    }


    $('#js-search').on('keyup', function (e) {
        var input = $(this).val();
        if (input !== "") {
            $('.js-nomPatient:contains(' + input + ')').closest('li').slideDown();
            $('.js-nomPatient:not(:contains(' + input + '))').closest('li').slideUp();
        }
        else {
            $('.infoPatientList').slideDown();
        }
    });

    var ajouterBilan = function () {
        $('#js-dateDemandeBilan').focus();
    };

    $('.js-ajouter-bilan').on('click', function () {
        //                console.log(this);

        my.utils.renderExternalTemplate("ajouterBilan", "#main", null, ajouterBilan);
    });

    $('.js-bilans').on('click', function () {
        var options = {
            type: "GET",
            url: "api/Patients",
            data: "",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                //                console.dir(response);
                bilans = response;
                //debugger;
                my.utils.renderExternalTemplate("bilans", "#main", bilans);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        };
        $.ajax(options);
        //        console.log(bilans);        
    });

    $('#nav a').on('click', function () {

        $('#nav a').parent().addClass('activate-hover');
        $(this).parent().removeClass('activate-hover');
        $('#nav a').removeClass('menu-active');
        $(this).removeClass('is-default').addClass('menu-active');
    });

    $('#nav a').on('hover', function () {
        $(this).toggleClass('is-hover');
    });

    $('.main').on('click', '#js-enregistrerPatient', function () {

        var $this = $('.main');
        var currentId = $('.ajouter-bilan').data('id');
        //                debugger;
        var patient = {

            'Id': $('.ajouter-bilan').data('id'),
            'DateDemandeBilan': $this.find('#js-dateDemandeBilan').val(), //pickerDateDemandeBilan.getDate()
            'Nom': $this.find('#js-nomPatient').val(),
            'Prenom': $this.find('#js-prenomPatient').val(),
            'IdOrigineDemande': $this.find('#js-origineDemande').val(),
            'IdDomaineIntervention': $this.find('#js-domaineIntervention').val(),
            'Telephone': $this.find('#js-telephone').val(),
            'Commentaire': $this.find('#js-commentaire').val(),
            'DateBilan': $this.find('#js-dateBilan').val(), //pickerDateBilan.getDate(), 
            'disponibilitePatient': $this.find('#js-disponibilitePatient').val(),
            'EtatBilan': 'non commencé'
        };
        //        debugger;
        var options;
        // add bilan
        if (currentId === '') {
            options = {
                type: "POST",
                url: "api/Patients",
                data: JSON.stringify(patient),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    $('.js-bilans').click();
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }
            };
            $.ajax(options);
        }
        // modify bilan
        else {

            options = {
                type: "PUT",
                url: "api/Patients",
                data: JSON.stringify(patient),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    $('.js-bilans').click();
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }
            };
            $.ajax(options);

        }
    });

    $('.main').on('click', '.infoPatientList', function () {

        $(this).toggleClass('list-active');
        $(this).data('id');

        var bilansSelected = $('.main').find('.list-active').length;
        if (bilansSelected === 0) {
            $('#js-modifierBilan').addClass('hide').removeClass('activate');
            $('#js-supprimerBilan').addClass('hide').removeClass('activate');
        }
        else if (bilansSelected === 1) {
            $('#js-modifierBilan').removeClass('hide').addClass('activate');
            $('#js-supprimerBilan').removeClass('hide').addClass('activate');
        }
        else {
            $('#js-modifierBilan').addClass('hide').removeClass('activate');
            $('#js-supprimerBilan').removeClass('hide');
        }
    });

    var modifierBilan = function () {
        $('#js-dateDemandeBilan').focus();
        var dateDemandeBilanInput = $('#js-dateDemandeBilan')[0];
        
        setInputSelection(dateDemandeBilanInput, 0, 10);
    };

    $('.main').on('click', '#js-modifierBilan', function (e) {

        var $this = $(this);
        if ($this.hasClass('hide')) {
            e.stopPropagation();
            return false;
        }
        var id = $('.main').find('.list-active').data('id');

        var patient;
        var options = {
            type: "GET",
            url: "api/Patients/" + id,
            data: "",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                debugger;
                //console.dir(response);
                var dateBilan = moment(response.DateBilan).format("L");
                var dateDemandeBilan = moment(response.DateDemandeBilan).format("L");
                response.DateBilan = dateBilan;
                response.DateDemandeBilan = dateDemandeBilan;
                patient = response;
                my.utils.renderExternalTemplate("ajouterBilan", "#main", patient, modifierBilan);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        };
        $.ajax(options);
    });

    $('.main').on('click', '#js-supprimerBilan', function (e) {

        var $this = $(this);
        if ($this.hasClass('hide')) {
            e.stopPropagation();
            return false;
        }

        $('.main').find('.list-active').each(function () {

            $this = $(this);
            var id = $(this).data('id');
            //            remove(bilans, idBilans, id);
            var options = {
                type: "DELETE",
                url: "api/Patients/" + id,
                data: "",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    bilans = response;
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                }
            };
            $.ajax(options);


            $this.hide('slow');
            $this.remove();
        });
    });

    $('.main').on('click', '#js-ajouterBilan', function () {

        my.utils.renderExternalTemplate("ajouterBilan", "#main", {}, ajouterBilan);
    });


})($, window);