var tl = new TimelineMax();
var eyeBob = '#eyeright, #eyeleft, #sidespots';

TweenMax.set(eyeBob, {
    y: 0
})

var wave1 = $('#feel-the-wave').wavify({
    height: 80,
    bones: 4,
    amplitude: 60,
    color: 'url(#grad-ucgg-generated)',
    speed: .15
});

var wave2 = $('#feel-the-wave-two').wavify({
    height: 60,
    bones: 3,
    amplitude: 40,
    color: '#00699466',
    speed: .25
});


$('#wave_container').height($(window).height() );