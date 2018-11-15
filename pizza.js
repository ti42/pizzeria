
           var items=['Pizza','pizza','Drinks','drinks','Deserts','deserts','Wings','small','medium','large',
           'brownies','choclate lava','fudge brownies','coke','fanta','sprite','boneless','buffolo wings','jalapeno']
           $('#tooltip').autocomplete({source:items});


         var total1, total2, total3, total4, finaltotal;
        
           
          $(document).ready(function(){
           
            $('.dialog').hide();
            $('.important').hide();
          $('.replace1').hide();
            $("#tabs").tabs();
            

            $('#accordion').accordion({
              active:false,
              collapsible:true,
              icons : {
               header: "ui-icon-plus",
              activeHeader: "ui-icon-minus"
                }});

            $('#accord').accordion({
              active:false,
              collapsible:true,
              icons : {
               header: "ui-icon-plus",
              activeHeader: "ui-icon-minus"
                }});
            
   
              

            $('#tootltip,.classbutton').tooltip({
                show: true ,
                hide: 'explode',
                track: true
            });

            $('#button1').click(function(){
              $('#one,#two,#three,#four').hide();
              $('.replace1').show();
            })
            $('#button2').click(function(){
              $('#one,#two,#three,#four').hide();
              $('.replace1').show();
            })
            $('#button3').click(function(){
              $('#one,#two,#three,#four').hide();
              $('.replace1').show();
            })
            $('#button4').click(function(){
              $('#one,#two,#three,#four').hide();
              $('.replace1').show();
            })
            $('#button5').click(function(){
              $('#one,#two,#three,#four').hide();
              $('.replace1').show();
            })
            $('#button6').click(function(){
              $('#one,#two,#three,#four').hide();
              $('.replace1').show();
            })
            $('#button7').click(function(){
              $('#one,#two,#three,#four').hide();
              $('.replace1').show();
            })
            $('#button8').click(function(){
              $('#one,#two,#three,#four').hide();
              $('.replace1').show();
            })
            $('#button9').click(function(){
              $('#one,#two,#three,#four').hide();
              $('.replace1').show();
            })
            $('#button10').click(function(){
              $('#one,#two,#three,#four').hide();
              $('.replace1').show();
            })
            $('#button11').click(function(){
              $('#one,#two,#three,#four').hide();
              $('.replace1').show();
            })
            $('#button12').click(function(){
              $('#one,#two,#three,#four').hide();
              $('.replace1').show();
            })

           $('#goform').click(function(){
             var q = $('#quantity').val();
             var qt= $('#total').val();
             if(q=='' && qt=='')
             {
                 alert('Please enter number in the quantity field and add to cart');

             }
             else
             {
                 $('.replace1').hide();
                $('.important').show();
             }
             
              });
              $('#goform1').click(function(){
                var q1 = $('#quantity1').val();
                var q2 = $('#quantity2').val();
                var qt= $('#total').val();
             var q3 = $('#quantity3').val();
                if(q1==''&& q2==''&& q3=='' && qt=='')
                {
                    alert('Please enter number in the quantity field and add to cart');
   
                }
                else
                {
                    $('.replace1').hide();
                   $('.important').show();
                }
                
                 });
                 $('#goform2').click(function(){
                    var q4 = $('#quantity4').val();
                    var q5 = $('#quantity5').val();
                    var q6 = $('#quantity6').val();
                    var qt= $('#total').val();

                    if(q4=='' && q5=='' && q6=='' && qt=='')
                    {
                        alert('Please enter number in the quantity field');
       
                    }
                    else
                    {
                        $('.replace1').hide();
                       $('.important').show();
                    }
                    
                     });
                     $('#goform3').click(function(){
                        var q7 = $('#quantity7').val();
                        var q8 = $('#quantity8').val();
                        var q9 = $('#quantity9').val();
                        var qt= $('#total').val();

                        if(q7=='' && q8=='' && q9=='' && qt=='')
                        {
                            alert('Please enter number in the quantity field');
           
                        }
                        else
                        {
                            $('.replace1').hide();
                           $('.important').show();
                        }

                        
                         });
                        
                         $('.nav-item').click(function(){
                        
                           $('#one,#two,#three,#four').show();
                         });
                     
                        
                         $('#last').click(function(){
                           $('.cartbutton').effect( "bounce", { times: 3 }, "slow" );
                          var pizzax = $('#quantity').val();
                          
                          var pizzay = $("input[name='size']:checked").val();
                         
                          var tax = 1.16;
                       
                          var pizzatotal= (pizzax * pizzay) * tax;
                          pizzatotal = pizzatotal.toFixed(2);
                          $('#total').val(pizzatotal);
                          $('.dial1').val(pizzatotal);
                           total1 = parseFloat (pizzatotal);
                        
                              $('.dial5').val(total1);
                         
                          });


                         $('#last1').click(function(){
                          $('.cartbutton').effect( "bounce", { times: 3 }, "slow" );

                          var wingsq1 = $('#quantity1').val();
                          var wingsq2 = $('#quantity2').val();
                          var wingsq3 = $('#quantity3').val();
                      
                          var tax = 1.16;
                          var wings = .6;
                           var wingtotal= ((wingsq1 * wings) + (wingsq2 * wings) + (wingsq3 * wings)) * tax;
                       
                             total2 = total1 + parseFloat(wingtotal);
                             wingtotal = wingtotal.toFixed(2);
                           $('#total1').val(wingtotal);
                           $('.dial2').val(wingtotal);
                         
                             total2 = total1 + parseFloat(wingtotal);
                        
                              $('.dial5').val(total2);
                         
                          });

                          $('#last2').click(function(){
                            $('.cartbutton').effect( "bounce", { times: 3 }, "slow",);
                        
                            var b1 = $('#quantity4').val();
                            var b2 = $('#quantity5').val();
                            var b3 = $('#quantity6').val();
                        
                            var tax = 1.16;
                            var cookie = 4.99;
                            var wingtotal= ((b1 * cookie) + (b2 * cookie) + (b3 * cookie)) * tax;
                            
                            wingtotal = wingtotal.toFixed(2);
                            $('#total2').val(wingtotal);
                          $('.dial3').val(wingtotal);
                          total3 = total2 + parseFloat(wingtotal);
                          
                              $('.dial5').val(total3);
                            
                            });
                   
                            $('#last3').click(function(){
                              $('.cartbutton').effect( "bounce", { times: 3 }, "slow" );
                        
                              var d1 = $('#quantity7').val();
                              var d2 = $('#quantity8').val();
                              var d3 = $('#quantity9').val();
                          
                              var tax = 1.16;
                              var drink = 1.99;
                              var wingtotal= ((d1 * drink) + (d2 * drink) + (d3 * drink)) * tax;
                              
                              wingtotal = wingtotal.toFixed(2);
                              $('#total3').val(wingtotal);
                          $('.dial4').val(wingtotal);
                          total4 = total3 + parseFloat(wingtotal);
                      
                              $('.dial5').val(total4);
                         
                              });

                              $('.cartbutton').hover(function(){
                                $(this).css('color','green');
                              },function(){
                                $(this).css('color','inherit');

                              });
                              //dialog box
                              $('.cartbutton').click(function(){
                                $('.dialog').dialog({
                                  draggable: true,
                                  autoopen: false,
                                  resizable: false,
                                  modal: false,
                                  
                                  //show: 'slideDown',
                                 
                                  hide: { effect: 'explode',  delay: 250, duration: 1000, easing:
                                  'easeInQuad' }

                                });
                           
                              })
                              //jquery ui icons
                              $("#shame").button({
                                icons: {
                                    primary: "ui-icon-closethick"
                                },
                                label: 'Close'
                            });

                            $('#shame').click(function(){
                              $('.replace1').hide();
                            $('#one,#two,#three,#four').show();

                            })
                       
                        

                          }); 

       

      