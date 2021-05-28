$(function(){
    let uver = {
        delka:36,
        doba:'Mesic',
        sazba:0.01,
        castka:40000,
        pom:36,
        mesicniCastka(){
            return this.castka*this.sazba*(Math.pow(1+(this.sazba),this.pom)/(Math.pow(1+(this.sazba),this.pom)-1))
        }
    }
    $('#vysledek').hide();
    console.log(uver.mesicniCastka())
    $('#calc').on('click',function(){
        uver.delka = $('#delka').val();
        uver.doba = $('#Mesic').prop('checked')?'Mesic':'Rok';
        uver.pom = uver.delka*(uver.doba=="Mesic"?1:12);
        uver.sazba = $('#sazba').val()/(1200);
        uver.castka = $('#uver').val();
        $('#vysledek').show();
        $('#vystup').html('Měsíční splátka ve výši: '+Math.round(uver.mesicniCastka()));
        $('#vystup2').html('Měsíční splátka ve výši: '+((Math.round(Math.round(uver.mesicniCastka()))*uver.pom)-uver.castka));
    })
    
})