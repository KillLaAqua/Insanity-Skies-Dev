ServerEvents.recipes((event) => {

    event
        .shaped('toms_storage:ts.adv_wireless_terminal', [
            'CPC', 
            'PTP', 
            'CPC'
        ], {
            P: 'gtceu:steel_plate',
            T: 'toms_storage:ts.wireless_terminal',
            C: 'create:transmitter'
        })
        .id('insanity_skies:shaped/advanced_wireless_terminal');

    event
        .shaped(Item.of('toms_storage:ts.trim', 4), [
            'CSC', 
            'SWS', 
            'CSC'
        ], {
            C: 'gtceu:wood_plate',
            W: 'gtceu:wood_crate',
            S: '#minecraft:wooden_slabs',
        })
        .id('insanity_skies:shaped/trim');

    event
        .shaped(Item.of('toms_storage:ts.inventory_proxy'), [
            'THT', 
            'LCL', 
            'THT'
        ], {
            T: '#minecraft:wooden_trapdoors',
            H: 'minecraft:hopper',
            L: 'create:electron_tube',
            C: 'toms_storage:ts.trim',
        })
        .id('insanity_skies:shaped/inventory_proxy');

    event.replaceInput({ output: 'toms_storage:ts.storage_terminal' }, 'minecraft:comparator', 'toms_storage:ts.inventory_proxy');
    event.replaceInput({ output: 'toms_storage:ts.storage_terminal' }, 'minecraft:glowstone', 'kubejs:servo_temp');
    event.replaceInput({ output: 'toms_storage:ts.storage_terminal' }, '#forge:chests/wooden', 'create:precision_mechanism');
    event.replaceInput({ output: 'toms_storage:ts.wireless_terminal' }, 'minecraft:glowstone', 'kubejs:servo_temp');

});