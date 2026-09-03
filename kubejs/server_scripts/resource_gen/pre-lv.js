
// Crafting Recipes

ServerEvents.recipes((event) => {
    const id = global.id;
    event
        .shaped(Item.of('minecraft:flint'), [
            'SS', 
            'SS'
        ], {
            S: 'kubejs:flint_shard',
        })
        .id('start:shaped/flint');

    event.remove({ id: 'minecraft:coarse_dirt' });
    event
        .shaped(Item.of('minecraft:coarse_dirt', 2), [
            'DF', 
            'FD'
        ], {
            F: 'minecraft:flint',
            D: 'minecraft:dirt',
        })
        .id('start:shaped/coarse_dirt');

    event.recipes.create
        .mixing('2x minecraft:rooted_dirt', ['2x minecraft:dirt', '1x minecraft:mangrove_roots'])
        .id('start:create_mixer/rooted_dirt');
        
    event.recipes.gtceu
        .mixer(id('rooted_dirt_hm'))
        .itemInputs('minecraft:dirt', 'minecraft:mangrove_roots')
        .itemOutputs('2x minecraft:rooted_dirt')
        .duration(100)
        .EUt(4);

    event.recipes.create
        .mixing('3x minecraft:coarse_dirt', ['3x minecraft:dirt', '2x minecraft:flint'])
        .id('start:create_mixer/coarse_dirt_flint');

    const stones = [
        'andesite',
        'basalt',
        'blackstone',
        'deepslate',
        'diorite',
        'granite',
        'tuff',
        'calcite',
        'dripstone',
    ];

    stones.forEach((stone) => {
        event
            .shaped(Item.of(`exnihilosequentia:crushed_${stone}`), [
                'PP', 
                'PP'
            ], {
                P: `exnihilosequentia:${stone}_pebble`,
            })
            .id(`start:shaped/crushed${stone}`);
    });

    event
        .shaped(Item.of('minecraft:cobblestone'), [
            'PP', 
            'PP'
        ], {
            P: 'exnihilosequentia:stone_pebble',
        })
        .id('start:shaped/cobblestone');

    event.recipes.gtceu
        .stone_barrel(id('stone_pebble'))
        .circuit(0)
        .inputFluids('minecraft:lava 10', 'minecraft:water 490')
        .itemOutputs('4x exnihilosequentia:stone_pebble')
        .duration(10);

    event.recipes.gtceu
        .stone_barrel(id('obsidian'))
        .circuit(10)
        .inputFluids('minecraft:lava 1000', 'minecraft:water 1000')
        .itemOutputs('minecraft:obsidian')
        .duration(600);

    const primitive_processing = [
        { primary: 'hematite', secondary: 'magnetite', tertiary: 'nickel' },
        { primary: 'chalcopyrite', secondary: 'pyrite', tertiary: 'gold' },
        { primary: 'sphalerite', secondary: 'copper', tertiary: 'gallium' },
        { primary: 'cassiterite', secondary: 'tin', tertiary: 'bismuth' },
        { primary: 'galena', secondary: 'sulfur', tertiary: 'silver' },
        { primary: 'magnetite', secondary: 'gold', tertiary: 'iron' },
        { primary: 'pyrite', secondary: 'sulfur', tertiary: 'antimony' },
    ];

    primitive_processing.forEach((material) => {
        event.recipes.gtceu
            .primitive_ore_processing(id(`crushed_${material.primary}_ore`))
            .itemInputs(`gtceu:crushed_${material.primary}_ore`, '2x #minecraft:coals')
            .inputFluids('minecraft:water 500')
            .itemOutputs(`gtceu:${material.primary}_dust`)
            .chancedOutput(`gtceu:${material.primary}_dust`, 5000, 0)
            .chancedOutput(`gtceu:${material.secondary}_dust`, 2500, 0)
            .chancedOutput(`gtceu:${material.tertiary}_dust`, 1250, 0)
            .duration(400);
        event.recipes.gtceu
            .steam_ore_processing(id(`crushed_${material.primary}_ore`))
            .itemInputs(`gtceu:crushed_${material.primary}_ore`)
            .inputFluids('minecraft:water 500')
            .itemOutputs(`gtceu:${material.primary}_dust`)
            .chancedOutput(`gtceu:${material.primary}_dust`, 5000, 0)
            .chancedOutput(`gtceu:${material.secondary}_dust`, 2500, 0)
            .chancedOutput(`gtceu:${material.tertiary}_dust`, 1250, 0)
            .duration(320)
            .EUt(GTValues.VA[GTValues.LV]);

        // Chunk Processing
        event.recipes.gtceu
            .primitive_ore_processing(id(`${material.primary}_crushed_ore_chunk`))
            .itemInputs(`3x kubejs:${material.primary}_crushed_ore_chunk`, '2x #minecraft:coals')
            .inputFluids('minecraft:water 500')
            .chancedOutput(`gtceu:${material.primary}_dust`, 9000, 0)
            .chancedOutput(`gtceu:${material.secondary}_dust`, 1500, 0)
            .chancedOutput(`gtceu:${material.tertiary}_dust`, 750, 0)
            .duration(480);
    });

    event.recipes.gtceu
        .barrel(id('slitake'))
        .notConsumable('kubejs:ripened_spores')
        .inputFluids('exnihilosequentia:witch_water 200')
        .chancedOutput('kubejs:ripened_spores', 7000, 0)
        .duration(240);

    event.recipes.gtceu
        .barrel_transformation(id('soul_sand'))
        .itemInputs('minecraft:sand')
        .inputFluids('exnihilosequentia:witch_water 1000')
        .itemOutputs('minecraft:soul_sand')
        .duration(600);

    event.recipes.gtceu
        .barrel_transformation(id('witch_water'))
        .chancedInput('exnihilosequentia:mycelium_spores', 1000, 0)
        .inputFluids('minecraft:water 1000')
        .outputFluids('exnihilosequentia:witch_water 1000')
        .duration(800);

    event.recipes.gtceu
        .barrel_composting(id('dirt'))
        .itemInputs('4x #minecraft:leaves')
        .itemOutputs('1x minecraft:dirt')
        .duration(160);

    event.recipes.gtceu
        .latex_plantation(id(`latex`))
        .chancedInput(`minecraft:bone_meal`, 2500, 0)
        .notConsumable('gtceu:wood_screw')
        .outputFluids(`gtceu:latex 25`)
        .duration(400);
    const latexType = [
        { fuel: 'minecraft:bone_meal', circ: '1' },
        // { fuel: 'thermal:compost', circ: '2' },
        { fuel: 'gtceu:fertilizer', circ: '3' },
    ];
    latexType.forEach((latex) => {
        event.recipes.gtceu
            .latex_plantation(id(`latex_${latex.circ}`))
            .chancedInput(`${latex.fuel}`, 2500, 0)
            .notConsumable('gtceu:iron_screw')
            .circuit(latex.circ)
            .outputFluids(`gtceu:latex ${25 + 25 * latex.circ}`)
            .duration(400);
    });

    // [0, 1, 2, 3, 4].forEach((tier) => {
    //     let PumpTier = tier == 0 ? 'ulv' : tier == 1 ? 'lv' : tier == 2 ? 'mv' : tier == 3 ? 'hv' : 'ev';
    //     event.recipes.gtceu
    //         .industrial_pump(id(`water_${tier}`))
    //         .notConsumable(`gtceu:${PumpTier}_electric_pump`)
    //         .outputFluids(`minecraft:water ${3000 * Math.pow(2, tier)}`)
    //         .duration(20);
    // });

    // event.recipes.gtceu
    //     .assembler(id('industrial_pump'))
    //     .itemInputs(
    //         '1x gtceu:primitive_pump',
    //         '6x gtceu:double_steel_plate',
    //         '2x gtceu:ulv_electric_pump',
    //         '2x #gtceu:circuits/ulv',
    //         '4x gtceu:rubber_ring'
    //     )
    //     .circuit(3)
    //     .inputFluids('gtceu:rubber 288')
    //     .itemOutputs('gtceu:industrial_pump')
    //     .duration(800)
    //     .EUt(8);
});