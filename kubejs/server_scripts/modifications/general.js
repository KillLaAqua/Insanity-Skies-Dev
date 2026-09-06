ServerEvents.recipes((event) => {
    // Compat fixes
    // event.replaceInput({ input: 'farmersdelight:onion' }, 'farmersdelight:onion', '#forge:crops/onion');

    // event.replaceInput({ input: 'farmersdelight:onion' }, 'farmersdelight:onion', '#forge:crops/onion');

    ['tiled', 'framed', 'horizontal_framed', 'vertical_framed'].forEach((type) => {
        event.remove({ id: `create:smelting/glass_pane_from_${type}_glass_pane` });
    });

    event.replaceInput({ id: 'create:crafting/kinetics/goggles' }, '#forge:plates/gold', 'gtceu:copper_plate');

    event.remove({ id: 'create:splashing/stained_glass' });

    const nuggetFixMod = (mod) => {
        event.replaceOutput({ output: `${mod}:copper_nugget` }, `${mod}:copper_nugget`, `gtceu:copper_nugget`);
        event.replaceOutput({ output: `${mod}:zinc_nugget` }, `${mod}:zinc_nugget`, `gtceu:zinc_nugget`);
        event.replaceOutput({ output: `${mod}:brass_nugget` }, `${mod}:brass_nugget`, `gtceu:brass_nugget`);
        event.replaceInput({ input: `${mod}:copper_nugget` }, `${mod}:copper_nugget`, `gtceu:copper_nugget`);
        event.replaceInput({ input: `${mod}:zinc_nugget` }, `${mod}:zinc_nugget`, `gtceu:zinc_nugget`);
        event.replaceInput({ input: `${mod}:brass_nugget` }, `${mod}:brass_nugget`, `gtceu:brass_nugget`);
    };

    nuggetFixMod('create');
    // nuggetFixMod('thermal');
    nuggetFixMod('exnihilosequentia');

    // Create
    event
        .shapeless('9x create:andesite_alloy', ['create:andesite_alloy_block'])
        .id('insanity_skies:shapeless/andesite_alloy_block_decomp');

    // Drawers
    [1, 2, 4].forEach((size) => {
        event.remove({ id: `functionalstorage:oak_drawer_alternate_x${size}` });
    });

    //Modular Router
    event.replaceInput({ id: 'modularrouters:speed_upgrade' }, 'minecraft:gold_ingot', 'gtceu:electrum_plate');
    event.replaceInput({ id: 'modularrouters:speed_upgrade' }, 'minecraft:blaze_rod', 'minecraft:sugar');

    //Tom's
    event
        .shaped('toms_storage:ts.adv_wireless_terminal', [
            ' P ', 
            'PTP', 
            ' P '
        ], {
            P: 'gtceu:steel_plate',
            T: 'toms_storage:ts.wireless_terminal',
        })
        .id('insanity_skies:shaped/advanced_wireless_terminal');

    // Effortless Building Upgrade Accessibility
    // global.with_effortlessbuilding(() => {
        const reachUpgrade = (type, mat, dye, core) => {
            event.remove({ output: `effortlessbuilding:reach_upgrade${type}` });
            event
                .shaped(Item.of(`effortlessbuilding:reach_upgrade${type}`), [' D ', 'MCM', ' D '], {
                    D: `${dye}`,
                    M: `${mat}`,
                    C: `${core}`,
                })
                .id(`insanity_skies:shaped/reach_upgrade${type}`);
        };

        reachUpgrade('1', 'minecraft:slime_ball', 'minecraft:lime_dye', `minecraft:ender_pearl`);
        reachUpgrade('2', 'minecraft:glowstone_dust', 'minecraft:orange_dye', `effortlessbuilding:reach_upgrade1`);
        reachUpgrade('3', 'minecraft:amethyst_shard', 'minecraft:purple_dye', `effortlessbuilding:reach_upgrade2`);

    // });

});
