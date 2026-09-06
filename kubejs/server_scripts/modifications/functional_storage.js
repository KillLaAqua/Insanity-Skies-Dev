//requires: functionalstorage
ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove({ mod: 'functionalstorage' });

    event
        .shaped(Item.of('functionalstorage:copper_upgrade'), [
            ' C ', 
            'CTC', 
            ' C '
        ], {
            C: 'gtceu:double_copper_plate',
            T: 'gtceu:tin_plate',
        })
        .id('insanity_skies:shaped/copper_upgrade');

    event
        .shaped(Item.of('functionalstorage:iron_downgrade'), [
            ' C ', 
            'CTC', 
            ' C '
        ], {
            C: 'gtceu:iron_plate',
            T: 'gtceu:tin_plate',
        })
        .id('insanity_skies:shaped/iron_downgrade');

    event
        .shaped(Item.of('functionalstorage:void_upgrade'), [
            ' O ', 
            'OSO', 
            ' O '
        ], {
            O: 'minecraft:obsidian',
            S: 'gtceu:soul_infused_plate',
        })
        .id('insanity_skies:shaped/void_upgrade');

    event
        .shaped(Item.of('functionalstorage:puller_upgrade'), [
            ' C ', 
            'TRT', 
            ' T '
        ], {
            C: 'gtceu:lv_conveyor_module',
            T: 'gtceu:tin_plate',
            R: 'minecraft:redstone',
        })
        .id('insanity_skies:shaped/puller_upgrade');

    event
        .shaped(Item.of('functionalstorage:pusher_upgrade'), [
            ' T ', 
            'TRT', 
            ' C '
        ], {
            C: 'gtceu:lv_conveyor_module',
            T: 'gtceu:tin_plate',
            R: 'minecraft:redstone',
        })
        .id('insanity_skies:shaped/pusher_upgrade');

    event
        .shaped(Item.of('functionalstorage:storage_controller'), [
            'SSS', 
            'GCG', 
            'SSS'
        ], {
            S: 'minecraft:stone',
            G: '#forge:glass',
            C: '#gtceu:circuits/lv',
        })
        .id('insanity_skies:shaped/storage_controller');

    event
        .shaped(Item.of('2x functionalstorage:ender_drawer'), [
            'OOO', 
            'GPG', 
            'OCO'
        ], {
            O: 'minecraft:obsidian',
            G: '#forge:glass',
            P: 'minecraft:ender_pearl',
            C: '#gtceu:circuits/lv',
        })
        .id('insanity_skies:shaped/ender_drawer');

    // global.with_framedblocks(
    //     () => {
    //         ['1', '2', '4'].forEach((size) => {
    //             event.remove({ output: `functionalstorage:framed_${size}` });
    //             event
    //                 .shapeless(`1x functionalstorage:framed_${size}`, [
    //                     `1x #functionalstorage:drawer_size_${size}`,
    //                     'framedblocks:framed_hammer',
    //                 ])
    //                 .id(`insanity_skies:shapeless/framed_drawer_${size}`);
    //         });
    //         event.shapeless('1x functionalstorage:framed_storage_controller', [
    //             'functionalstorage:storage_controller',
    //             'framedblocks:framed_hammer',
    //         ]);
    //     },
    //     () => {
    //         ['1', '2', '4'].forEach((size) => {
    //             event.remove({ output: `functionalstorage:framed_${size}` });
    //             event
    //                 .shapeless(`1x functionalstorage:framed_${size}`, [
    //                     `1x #functionalstorage:drawer_size_${size}`,
    //                     '#forge:tools/hammers',
    //                 ])
    //                 .id(`insanity_skies:shapeless/framed_drawer_${size}`);
    //         });
    //         event.shapeless('1x functionalstorage:framed_storage_controller', [
    //             'functionalstorage:storage_controller',
    //             '#forge:tools/hammers',
    //         ]);
    //     }
    // );

    event
        .shaped('1x functionalstorage:redstone_upgrade', [
            ' R ', 
            'PCP', 
            ' R '
        ], {
            R: '#forge:dusts/redstone',
            C: 'minecraft:comparator',
            P: '#forge:plates/iron',
        })
        .id('insanity_skies:shaped/redstone_upgrade');

    event
        .shapeless('functionalstorage:pusher_upgrade', [
            Item.of('functionalstorage:puller_upgrade'),
            '#forge:tools/screwdrivers',
        ])
        .id('insanity_skies:shapeless/pusher_flip');

    event
        .shapeless('functionalstorage:puller_upgrade', [
            Item.of('functionalstorage:pusher_upgrade'),
            '#forge:tools/screwdrivers',
        ])
        .id('insanity_skies:shapeless/puller_flip');
        
});
