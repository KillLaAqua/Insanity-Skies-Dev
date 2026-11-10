ServerEvents.recipes((event) => {
    const id = global.id;

    event
        .shapeless(Item.of('gtceu:wood_screw'), [
            '#forge:tools/files', 'gtceu:wood_bolt', 'gtceu:wood_bolt'
        ])
        .id('insanity_skies:shapeless/wood_screw');

    event
        .shaped(`1x gtceu:iron_plate`, [
            'H', 
            'I', 
            'I'
        ], {
            H: '#forge:tools/hammers',
            I: `minecraft:iron_ingot`
        })
        .id(`insanity_skies:shaped/iron_plate`);

    event
        .shapeless(Item.of('gtceu:iron_rod',2), [
            '#forge:tools/saws',
            'gtceu:iron_plate',
        ])
        .id('insanity_skies:shapeless_iron_rod');
    
    event
        .shapeless(Item.of('gtceu:iron_bolt',2), [
            '#forge:tools/saws',
            'gtceu:iron_rod',
        ])
        .id('insanity_skies:shapeless_iron_bolt');

        
    event
        .shapeless(Item.of('gtceu:iron_screw',1), [
            '#forge:tools/files',
            'gtceu:iron_bolt',
            'gtceu:iron_bolt',
        ])
        .id('insanity_skies:shapeless_iron_screw');

});