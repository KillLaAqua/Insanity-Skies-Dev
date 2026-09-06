ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.create
        .mechanical_crafting('gtceu:primitive_pump', [
            'TNT', 
            'SVR', 
            'CLC'
        ], {
            N: 'gtceu:wood_normal_fluid_pipe',
            R: 'gtceu:iron_rotor',
            T: 'gtceu:treated_wood_planks',
            L: 'gtceu:wood_large_fluid_pipe',
            C: 'minecraft:cobblestone_slab',
            S: 'gtceu:iron_screw',
            V: 'kubejs:servo_temp',
        })
        .id('insanity_skies:mechanical_crafting/primitive_pump');

    event.remove({ id: /gtceu:.*glass.*_dust_flint.*/ });
    event.recipes.create
        .mixing('2x gtceu:glass_dust', ['2x gtceu:quartz_sand_dust', '1x gtceu:flint_dust'])
        .id('insanity_skies:create_mixer/glass_dust');

    event.recipes.create
        .mixing('2x gtceu:fireclay_dust', ['1x gtceu:clay_dust', '1x gtceu:brick_dust'])
        .id('insanity_skies:create_mixer/fireclay_dust');

    event.recipes.gtceu
        .mixer(id('fireclay'))
        .itemInputs('1x gtceu:clay_dust', '1x gtceu:brick_dust')
        .itemOutputs('2x gtceu:fireclay_dust')
        .duration(80)
        .EUt(6);

    event.recipes.gtceu
        .mixer(id('coke_clay'))
        .itemInputs('4x gtceu:quartz_sand_dust', '4x gtceu:clay_dust')
        .itemOutputs('8x gtceu:coke_clay_dust')
        .duration(240)
        .EUt(6);

    event.recipes.create
        .mixing('8x gtceu:coke_clay_dust', ['4x gtceu:quartz_sand_dust', '4x gtceu:clay_dust'])
        .id('insanity_skies:create_mixer/coke_clay_dust');

    event.recipes.gtceu
        .centrifuge(id('coke_clay'))
        .itemInputs('8x gtceu:coke_clay_dust')
        .itemOutputs('4x gtceu:quartz_sand_dust', '4x gtceu:clay_dust')
        .duration(168)
        .EUt(30);

    event.remove({ id: 'minecraft:charcoal' });

    event.smelting(`kubejs:charcoal_pellet`, `#minecraft:logs_that_burn`)
        .id('kjs:smelting/charcoal_pellet_manual_only')
        .id('insanity_skies:smelting/charcoal_pellet');

    event.recipes.create.crushing([
        '2x kubejs:charcoal_pellet', 
        Item.of('kubejs:charcoal_pellet').withChance(0.5)],
        'minecraft:charcoal'
    );

    event.recipes.create.milling(['gtceu:charcoal_dust'], 'minecraft:charcoal');
    event.recipes.create.milling(['minecraft:sand'], 'minecraft:gravel');
    event.recipes.create.milling(['exnihilosequentia:dust'], 'minecraft:sand');

    // event.remove({ id: 'thermal:rubber_3' });
    event.recipes.create
        .compacting(Fluid.of('gtceu:latex', 20), `10x minecraft:jungle_log`)
        .heatRequirement('lowheated')
        .id('insanity_skies:compacting/latex');

    event.recipes.create
        .mixing(Fluid.of('gtceu:rubber', 288), [Fluid.of('gtceu:latex', 288), '1x gtceu:sulfur_dust'])
        .heatRequirement('superheated')
        .id('insanity_skies:create_mixer/rubber');

    event.recipes.create
        .compacting(`1x gtceu:rubber_ingot`, Fluid.of('gtceu:rubber', 144))
        .id('insanity_skies:compacting/rubber');

    event.recipes.create
        .compacting(`1x gtceu:rubber_plate`, `2x gtceu:rubber_ingot`)
        .id('insanity_skies:compacting/rubber_plate');

    event
        .shapeless(Item.of('gtceu:wood_plate', 2), [
            '#forge:tools/files',
            '#minecraft:planks',
            '#minecraft:planks',
            '#minecraft:planks',
            '#forge:tools/saws',
        ])
        .id('insanity_skies:shapeless/wood_plate');

    event.recipes.create.cutting(['gtceu:wood_plate'], '#minecraft:planks').id('insanity_skies:cutting/wood_plate');

    event
        .shapeless(Item.of('gtceu:treated_wood_plate', 2), [
            '#forge:tools/files',
            '#forge:treated_wood',
            '#forge:treated_wood',
            '#forge:treated_wood',
            '#forge:tools/saws',
        ])
        .id('insanity_skies:shapeless/treated_wood_plate');

    event.recipes.create
        .cutting(['gtceu:treated_wood_plate'], '#forge:treated_wood')
        .id('insanity_skies:cutting/treated_wood_plate');

    event
        .shaped(Item.of('kubejs:saw_blade'), [
            'HPM', 
            'PRP', 
            'WPF'
        ], {
            M: '#forge:tools/mallets',
            W: '#forge:tools/wrenches',
            F: '#forge:tools/files',
            H: '#forge:tools/hammers',
            P: 'gtceu:iron_plate',
            R: 'gtceu:iron_ring'
        })
        .id('insanity_skies:shaped/saw_blade');

    event.recipes.create
        .mechanical_crafting('kubejs:servo_temp', [
            'TPT', 
            ' F ', 
            'TPT'
        ], {
            P: 'gtceu:iron_plate',
            T: 'create:electron_tube',
            F: 'gtceu:fine_copper_wire',
        })
        .id('insanity_skies:mechanical_crafting/redstone_servo');

    event.recipes.create
        .mechanical_crafting('gtceu:ulv_stone_barrel', [
            'PN NP', 
            'NSRSN', 
            ' SCS ', 
            'NSTSN', 
            'PN NP'
        ], {
            R: 'gtceu:iron_rotor',
            S: 'minecraft:stone',
            P: 'gtceu:nickel_plate',
            T: 'kubejs:servo_temp',
            C: 'minecraft:cauldron',
            N: 'gtceu:iron_plate',
        })
        .id('insanity_skies:mechanical_crafting/ulv_stone_barrel');

    event.recipes.create
        .mechanical_crafting('gtceu:primitive_ore_factory', [
            'BPB', 
            'RSR', 
            'BFB'
        ], {
            R: 'gtceu:brass_rod',
            S: 'kubejs:servo_temp',
            P: 'gtceu:brass_plate',
            B: 'gtceu:firebricks',
            F: 'minecraft:furnace',
        })
        .id('insanity_skies:mechanical_crafting/primitive_ore_factory');

    event.remove({ id: 'gtceu:smelting/smelt_dust_bronze_to_ingot' });
    event.remove({ id: 'gtceu:smelting/smelt_dust_brass_to_ingot' });

    event.recipes.create
        .mixing('2x gtceu:brass_dust', ['1x gtceu:zinc_dust', '3x gtceu:copper_dust'])
        .heatRequirement('lowheated')
        .id('insanity_skies:create_mixer/brass_dust');

    event.recipes.create
        .mixing('2x gtceu:bronze_dust', ['1x gtceu:tin_dust', '3x gtceu:copper_dust'])
        .heatRequirement('lowheated')
        .id('insanity_skies:create_mixer/bronze_dust');

    event.recipes.create
        .mixing(Fluid.of('gtceu:brass', 576), ['1x gtceu:zinc_ingot', '3x minecraft:copper_ingot'])
        .heatRequirement('superheated')
        .id('insanity_skies:create_mixer/liquid_brass');

    event.recipes.create
        .mixing(Fluid.of('gtceu:bronze', 576), ['1x gtceu:tin_ingot', '3x minecraft:copper_ingot'])
        .heatRequirement('superheated')
        .id('insanity_skies:create_mixer/liquid_bronze');

    event.recipes.create
        .compacting(`1x gtceu:brass_ingot`, Fluid.of('gtceu:brass', 192))
        .id('insanity_skies:compacting/brass_ingot');

    event.recipes.create
        .compacting(`1x gtceu:bronze_ingot`, Fluid.of('gtceu:bronze', 192))
        .id('insanity_skies:compacting/bronze_ingot');

    event.recipes.create
        .mechanical_crafting('exnihilosequentia:flint_mesh',[
            'FSFSFSF', 
            'SRSRSRS', 
            'FSFSFSF', 
            'SRSRSRS', 
            'FSFSFSF', 
            'SRSRSRS', 
            'FSFSFSF'
        ],{
            F: 'minecraft:flint',
            R: 'gtceu:tin_ring',
            S: '#forge:string',
        })
        .id('insanity_skies:mechanical_crafting/flint_mesh');

    event.recipes.create
        .mechanical_crafting('gtceu:ulv_barrel', [
            'PN NP', 
            'NLRLN', 
            ' LCL ', 
            'NLTLN', 
            'PN NP'
        ], {
            R: 'gtceu:iron_rotor',
            L: '#forge:stripped_logs',
            P: 'gtceu:treated_wood_plate',
            T: 'kubejs:servo_temp',
            C: 'minecraft:cauldron',
            N: 'gtceu:wood_plate',
        })
        .id('insanity_skies:mechanical_crafting/ulv_barrel');

    event.replaceInput({ id: 'gtceu:shaped/coke_oven' }, '#forge:tools/wrenches', 'minecraft:furnace');

    event.remove({ id: 'exnihilosequentia:ens_porcelain_clay' });
    event.recipes.create
        .mixing(Item.of('exnihilosequentia:porcelain_clay', 2), [
            '2x minecraft:clay_ball',
            'minecraft:bone_meal',
            '1x gtceu:small_ash_dust',
        ])
        .id('insanity_skies:create_mixer/porcelain_clay');

    event.recipes.create
        .compacting('kubejs:unfired_raw_ceramic_casting_mold', '4x exnihilosequentia:porcelain_clay')
        .id('insanity_skies:compacting/unfired_raw_ceramic_casting_mold');
    event.recipes.create
        .compacting(
            ['kubejs:unfired_ball_ceramic_casting_mold', 'minecraft:bowl'],
            ['kubejs:unfired_raw_ceramic_casting_mold', 'minecraft:bowl']
        )
        .id('insanity_skies:compacting/unfired_ball_ceramic_casting_mold');
    event.recipes.create
        .compacting(
            ['kubejs:unfired_ingot_ceramic_casting_mold', 'gtceu:wood_plate'],
            ['kubejs:unfired_raw_ceramic_casting_mold', 'gtceu:wood_plate']
        )
        .id('insanity_skies:compacting/unfired_ingot_ceramic_casting_mold');

    ['coals', 'poor_coals'].forEach((fuelType) => {
        let boost = fuelType == 'coals' ? 0.6 : 1;
        // event.recipes.gtceu.auto_scavenger(id(`coarse_dirt_${fuelType}`))
        // 	.notConsumable('minecraft:coarse_dirt')
        // 	.chancedInput(`#minecraft:${fuelType}`, 2500, 0)
        // 	.chancedOutput('1x minecraft:flint', 9500, 0)
        // 	.chancedOutput('1x minecraft:flint', 8000, 0)
        // 	.chancedOutput('1x minecraft:flint', 6500, 0)
        // 	.duration(480);
        event.recipes.gtceu
            .auto_scavenger(id(`coarse_dirt_1_${fuelType}`))
            .notConsumable('minecraft:coarse_dirt')
            .chancedInput('kubejs:basic_scavenging_rod', 40, 0)
            .chancedInput(`#minecraft:${fuelType}`, 2500, 0)
            .chancedOutput('4x minecraft:flint', 8000, 0)
            .chancedOutput('4x minecraft:flint', 6400, 0)
            .chancedOutput('4x minecraft:flint', 4800, 0)
            .chancedOutput('4x minecraft:flint', 3200, 0)
            .chancedOutput('4x minecraft:flint', 1600, 0)
            .chancedOutput('2x minecraft:flint', 8000, 0)
            .chancedOutput('2x minecraft:flint', 6400, 0)
            .chancedOutput('2x minecraft:flint', 4800, 0)
            .chancedOutput('2x minecraft:flint', 3200, 0)
            .chancedOutput('2x minecraft:flint', 1600, 0)
            .duration(600 * boost);
        event.recipes.gtceu
            .auto_scavenger(id(`coarse_dirt_2_${fuelType}`))
            .notConsumable('minecraft:coarse_dirt')
            .chancedInput('kubejs:scavenging_rod', 20, 0)
            .chancedInput(`#minecraft:${fuelType}`, 2500, 0)
            .chancedOutput('4x exnihilosequentia:stone_pebble', 5000, 0)
            .chancedOutput('4x minecraft:flint', 9000, 0)
            .chancedOutput('4x minecraft:flint', 8000, 0)
            .chancedOutput('4x minecraft:flint', 7000, 0)
            .chancedOutput('3x minecraft:flint', 6000, 0)
            .chancedOutput('3x minecraft:flint', 5000, 0)
            .chancedOutput('3x minecraft:flint', 4000, 0)
            .chancedOutput('2x minecraft:flint', 3000, 0)
            .chancedOutput('2x minecraft:flint', 2000, 0)
            .chancedOutput('2x minecraft:flint', 1000, 0)
            .duration(600 * boost);
        event.recipes.gtceu
            .auto_scavenger(id(`grass_1_${fuelType}`))
            .notConsumable('minecraft:grass_block')
            .chancedInput('kubejs:basic_scavenging_rod', 60, 0)
            .chancedInput(`#minecraft:${fuelType}`, 4000, 0)
            .chancedOutput('4x exnihilosequentia:stone_pebble', 400, 0)
            .chancedOutput('4x exnihilosequentia:andesite_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:basalt_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:blackstone_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:deepslate_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:diorite_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:granite_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:tuff_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:calcite_pebble', 1200, 0)
            .chancedOutput('4x exnihilosequentia:dripstone_pebble', 1200, 0)
            .duration(960 * boost);
        event.recipes.gtceu
            .auto_scavenger(id(`grass_2_${fuelType}`))
            .notConsumable('minecraft:grass_block')
            .chancedInput('kubejs:scavenging_rod', 30, 0)
            .chancedInput(`#minecraft:${fuelType}`, 4000, 0)
            .chancedOutput('4x exnihilosequentia:stone_pebble', 750, 0)
            .chancedOutput('4x exnihilosequentia:andesite_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:basalt_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:blackstone_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:deepslate_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:diorite_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:granite_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:tuff_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:calcite_pebble', 1750, 0)
            .chancedOutput('4x exnihilosequentia:dripstone_pebble', 1750, 0)
            .duration(960 * boost);
    });

    event
        .shapeless(Item.of('3x kubejs:flint_shard'), ['minecraft:flint', '#forge:tools/hammers'])
        .id('insanity_skies:shapeless/flint_shard');

    event
        .shaped('gtceu:ulv_auto_scavenger', [
            'TDT', 
            'GFG', 
            'TPT'
        ], {
            G: 'gtceu:small_bronze_gear',
            P: 'create:precision_mechanism',
            F: 'gtceu:brass_frame',
            T: 'gtceu:treated_wood_plate',
            D: 'create:deployer',
        })
        .id('insanity_skies:shaped/ulv_auto_scavenger');

    event.recipes.create
        .mechanical_crafting('gtceu:ulv_advanced_composter', [
            'PRP', 
            'PGP', 
            'ISI'
        ], {
            P: 'gtceu:treated_wood_slab',
            G: 'minecraft:glass',
            R: 'gtceu:iron_gear',
            I: 'gtceu:iron_plate',
            S: 'kubejs:servo_temp',
        })
        .id('insanity_skies:mechanical_crafting/ulv_advanced_composter');

    event.recipes.create
        .mixing('8x minecraft:tuff', ['8x minecraft:gravel', Fluid.of('minecraft:lava', 10)])
        .heatRequirement('superheated')
        .id('insanity_skies:create_mixer/tuff');
});
