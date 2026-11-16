ServerEvents.recipes((event) => {
    const id = global.id;

    event
        .shapeless('gtceu:wood_screw', [
            '#forge:tools/saws', 
            'gtceu:wood_bolt', 
            'gtceu:wood_bolt'
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
        .shapeless('2x gtceu:iron_rod', [
            'gtceu:iron_plate',
            '#forge:tools/saws',
            '#forge:tools/files'
        ])
        .id('insanity_skies:shapeless_iron_rod');
    
    event
        .shapeless('2x gtceu:iron_bolt', [
            'gtceu:iron_rod',
            '#forge:tools/saws',
            '#forge:tools/files'
        ])
        .id('insanity_skies:shapeless_iron_bolt');

        
    event
        .shapeless('gtceu:iron_screw', [
            '#forge:tools/hammers',
            'gtceu:iron_bolt',
            'gtceu:iron_bolt',
            '#forge:tools/files'
        ])
        .id('insanity_skies:shapeless_iron_screw');

    event
        .shapeless('gtceu:iron_ring', [
            '#forge:tools/hammers',
            'gtceu:iron_rod'
        ])
        .id('insanity_skies:shapeless_iron_ring');

});