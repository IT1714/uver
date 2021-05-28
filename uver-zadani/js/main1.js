$(function(){
    let uver = {
        delka:10,
        doba: 'Mesic',
        sazba: 0.1,
        castka:40000,
        delkapom:0,
    }
    
    console.log('sdaasdads')
    $('#calc').on('click',function(){
        uver.delka=$('#delka')
       if($('#Mesic').is(':checked')){
           uver.doba='Mesic';
           uver.delkapom=uver.delka.val();
       }else{
            uver.doba='Rok';
            uver.delkapom=uver.delka.val()*12;
       }
       console.log(uver.doba,uver.delkapom)
    })
})