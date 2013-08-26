 $(document).ready(function(){
            /*
                $('input').iCheck({
                checkboxClass: 'icheckbox_minimal-grey',
                radioClass: 'iradio_minimal-grey',
                increaseArea: '20%' // optional
              });
              */
            console.log(moment().format());
            moment.lang('fr');
            // You can get and set dates with moment objects
            var picker = new Pikaday(
                {
                    field: document.getElementById('date-bilan'),
                    firstDay: 1,
                    minDate: new Date('2000-01-01'),
                    maxDate: new Date('2020-12-31'),
                    yearRange: [2000,2020],
                    onSelect: function() {
                        var date = document.createTextNode(this.getMoment().format('Do MMMM YYYY') + ' ');
                        document.getElementById('date-bilan-selected').appendChild(date);
                    },
                    i18n: {
                        previousMonth : 'Previous Month',
                        nextMonth     : 'Next Month',
                        months        : ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
                        weekdays      : ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
                        weekdaysShort : ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']
                    }
                });                
            picker.setMoment(moment().dayOfYear(366));
            
            
            //When you click on a link with class of poplight and the href starts with a #
            $('a.poplight').on('click', function() {
                
                var popID = $(this).data('rel'); //Get Popup Name
                var popWidth = $(this).data('width'); //Gets Popup Width
                
                //Fade in the Popup and add close button
                $('#' + popID).fadeIn().css({ 'width': popWidth}).prepend('<a href="#" class="close"><img src="close_pop.png" class="btn_close" title="Close Window" alt="Close" /></a>');
                
                //Define margin for center alignment (vertical + horizontal) - we add 80 to the height/width to accomodate for the padding + border width defined in the css
                var popMargTop = ($('#' + popID).height() + 80) / 2;
                var popMargLeft = ($('#' + popID).width() + 80) / 2;
                
                //Apply Margin to Popup
                $('#' + popID).css({
                    'margin-top' : -popMargTop,
                    'margin-left' : -popMargLeft
                });
                
                //Fade in Background
//                $('body').append('<div id="fade"></div>'); //Add the fade layer to bottom of the body tag.
//                $('#fade').css({'filter' : 'alpha(opacity=80)'}).fadeIn(); //Fade in the fade layer
                
                return false;
            }); 
            
            //Close Popups and Fade Layer
            $('body').on('click', 'a.close, #fade', function() { //When clicking on the close or fade layer...
                $('#fade , .popup_block').fadeOut(function() {
                    $('#fade, a.close').remove();
                }); //fade them both out
                return false;
            }); 
            
        });