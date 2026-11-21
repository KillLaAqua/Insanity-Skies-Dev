ServerEvents.recipes((event) => {
    const id = global.id;
    
    // Tool Recipes

    event
        .shapeless(Item.of('minecraft:stick'), ['#forge:tools/saws', '#minecraft:wooden_slabs'])
        .id('insanity_skies:shapeless/stick');

    event
        .shaped(Item.of('gtceu:flisnt_axe'), [
            'FT', 
            'ST'
        ], {
            S: '#forge:string',
            F: 'minecraft:flint',
            T: '#forge:rods/wood',
        })
        .id('insanity_skies:shaped/flisnt_axe');

    event
        .shaped(Item.of('gtceu:flisnt_saw'), [
            'FS', 
            'FT'
        ], {
            S: '#forge:string',
            F: 'minecraft:flint',
            T: '#forge:rods/wood',
        })
        .id('insanity_skies:shaped/flisnt_saw');

    event
        .shaped(Item.of('gtceu:flisnt_knife'), [
            'F', 
            'T'
        ], {
            F: 'minecraft:flint',
            T: '#forge:rods/wood',
        })
        .id('insanity_skies:shaped/flisnt_knife');

    event
        .shaped(Item.of('gtceu:flisnt_shovel'), [
            '  F', 
            ' TS', 
            'T  '
        ], {
            S: '#forge:string',
            F: 'minecraft:flint',
            T: '#forge:rods/wood',
        })
        .id('insanity_skies:shaped/flisnt_shovel');

    event
        .shaped(Item.of('gtceu:flisnt_pickaxe'), [
            'FFF', 
            'RTS', 
            ' T '
        ], {
            S: '#forge:string',
            F: 'minecraft:flint',
            T: '#forge:rods/wood',
            R: 'kubejs:flint_shard',
        })
        .id('insanity_skies:shaped/flisnt_pickaxe');

    event
        .shaped(Item.of('gtceu:flisnt_sword'), [
            ' F ', 
            ' F ', 
            ' T '
        ], {
            F: 'minecraft:flint',
            T: '#forge:rods/wood',
        })
        .id('insanity_skies:shaped/flisnt_sword');

    event
        .shaped(Item.of('gtceu:flisnt_hammer'), [
            'FCF', 
            'CFC', 
            'STS'
        ], {
            S: '#forge:string',
            F: 'minecraft:flint',
            T: '#forge:rods/wood',
            C: '#forge:cobblestone',
        })
        .id('insanity_skies:shaped/flisnt_hammer');

    event
        .shaped(Item.of('gtceu:flisnt_scythe'), [
            'FFT', 
            'RST', 
            '  T'
        ], {
            S: '#forge:string',
            F: 'minecraft:flint',
            T: '#forge:rods/wood',
            R: 'kubejs:flint_shard',
        })
        .id('insanity_skies:shaped/flisnt_scythe');

    event
        .shaped(Item.of('exnihilosequentia:wooden_crook'), [
            'TT', 
            'ST', 
            ' T'
        ], {
            S: '#forge:string',
            T: '#forge:rods/wood',
        })
        .id('insanity_skies:shaped/wooden_crook');

    event
        .shapeless(Item.of('gtceu:long_wood_rod'), ['#forge:tools/files', 'minecraft:stick', 'minecraft:stick'])
        .id('insanity_skies:shapeless/long_wood_rod');

    event
        .shaped(Item.of('kubejs:basic_scavenging_rod'), [
            'SPP', 
            'RLP', 
            'TRS'
        ], {
            S: '#forge:string',
            P: 'minecraft:iron_nugget',
            T: 'gtceu:long_wood_rod',
            R: 'gtceu:sticky_resin',
            L: 'gtceu:wood_plate',
        })
        .id('insanity_skies:shaped/basic_scavenging_rod');

    event
        .shaped(Item.of('kubejs:scavenging_rod'), [
            'SPP', 
            'RLP', 
            'TRH'
        ], {
            S: '#forge:tools/screwdrivers',
            H: '#forge:tools/hammers',
            P: 'gtceu:iron_bolt',
            T: 'gtceu:long_wood_rod',
            R: 'gtceu:iron_screw',
            L: 'gtceu:iron_plate',
        })
        .id('insanity_skies:shaped/scavenging_rod');

    event
        .shapeless(Item.of('2x minecraft:packed_mud'), [
            'minecraft:mud','kubejs:straw','kubejs:straw','minecraft:mud','kubejs:straw'
        ])
        .id('insanity_skies:shapeless/straw_mud_packing');

    event
        .shaped(Item.of('kubejs:canvas'), [
            'SS', 
            'SS'
        ], {
            S: 'kubejs:straw'
        })
        .id('insanity_skies:shaped/canvas');

    event
        .shaped('exnihilosequentia:jungle_crucible', [
            'SWS', 
            'SKS',
            'PSP'
        ], {
            S: 'minecraft:jungle_slab',
            P: 'gtceu:wood_plate',
            W: '#forge:tools/saws',
            K: '#forge:tools/knives'
        })
        .id('insanity_skies:shaped/jungle_crucible');

    // Kiln

    event.remove({ id: 'minecraft:brick' });
    event.remove({ id: 'gtceu:smelting/fireclay_brick' });
    event.remove({ id: 'gtceu:smelting/coke_oven_brick' });

    event.campfireCooking('kubejs:charcoal_pellet', '#minecraft:logs_that_burn', 0, 600);

    [
        { amount: 1, fuel: 'coals', burnMultiplier: 1 },
        { amount: 2, fuel: 'poor_coals', burnMultiplier: 1.2 },
    ].forEach((coal) => {
        const { amount: fuelQuant, fuel, burnMultiplier: burn } = coal;

        event.recipes.gtceu
            .kiln(id(`brick_${fuel}`))
            .itemInputs('4x gtceu:compressed_clay', `${fuelQuant}x #minecraft:${fuel}`)
            .itemOutputs('4x minecraft:brick')
            .duration(400 * burn);

        event.recipes.gtceu
            .kiln(id(`coke_oven_brick_${fuel}`))
            .itemInputs('4x gtceu:compressed_coke_clay', `${fuelQuant}x #minecraft:${fuel}`)
            .itemOutputs('4x gtceu:coke_oven_brick')
            .duration(450 * burn);

        event.recipes.gtceu
            .kiln(id(`firebrick_${fuel}`))
            .itemInputs('4x gtceu:compressed_fireclay', `${fuelQuant}x #minecraft:${fuel}`)
            .itemOutputs('4x gtceu:firebrick')
            .duration(500 * burn);

        event.recipes.gtceu
            .kiln(id(`glass_${fuel}`))
            .itemInputs('2x gtceu:glass_dust', `${fuelQuant}x #minecraft:${fuel}`)
            .itemOutputs('minecraft:glass')
            .duration(600 * burn);

        if (fuel == 'coals') { 
                event
                    .smelting('gtceu:firebrick', 'gtceu:compressed_fireclay')
                    .cookingTime(300)
                    .id(`insanity_skies:smelting/firebrick_manual_only`); 
                event
                    .smelting('gtceu:coke_oven_brick', 'gtceu:compressed_coke_clay')
                    .cookingTime(300)
                    .id(`insanity_skies:smelting/coke_oven_brick_manual_only`); 
                event
                    .smelting('minecraft:brick', 'gtceu:compressed_clay')
                    .cookingTime(300)
                    .id(`insanity_skies:smelting/brick_manual_only`); 
                   
            ['ingot', 'ball'].forEach((MoldType) => {
                event.recipes.gtceu
                    .kiln(id(`${MoldType}_ceramic_casting_mold_firing_${fuel}`))
                    .itemInputs(`kubejs:unfired_${MoldType}_ceramic_casting_mold`, `${fuelQuant}x #minecraft:${fuel}`)
                    .itemOutputs(`kubejs:${MoldType}_ceramic_casting_mold`)
                    .duration(300 * burn);
            });

        }

        // Rugged Alloyer and Chunk Processing
        [
            { ore: 'hematite', metal: 'iron' },
            { ore: 'pyrite', metal: 'iron' },
            { ore: 'magnetite', metal: 'iron' },
            { ore: 'cassiterite', metal: 'tin' },
            { ore: 'sphalerite', metal: 'zinc' },
            { ore: 'chalcopyrite', metal: 'copper' },
            { ore: 'chalcocite', metal: 'copper' },
        ].forEach((chunk) => {
            const { ore, metal } = chunk;
            const mod = metal == 'iron' ? 'minecraft' : 'gtceu';

            event.recipes.gtceu
                .rugged_alloyer(id(`${ore}_chunks_${fuel}`))
                .itemInputs(`2x kubejs:${ore}_crushed_ore_chunk`, `#forge:nuggets/${metal}`, `${2 * fuelQuant}x #minecraft:${fuel}`)
                .itemOutputs(`#forge:ingots/${metal}`, 'gtceu:tiny_ash_dust')
                .duration(200 * burn);

            if (fuel == 'coals') { 
                event
                    .smelting(`2x ${mod}:${metal}_nugget`, `kubejs:${ore}_crushed_ore_chunk`)
                    .id(`insanity_skies:smelting/${ore}_crushed_ore_chunk_manual_only`);
            }
        });

        event.recipes.gtceu
            .rugged_alloyer(id(`andesite_alloy_${fuel}`))
            .itemInputs('4x exnihilosequentia:andesite_pebble', '4x gtceu:zinc_nugget', `${fuelQuant}x #minecraft:${fuel}`)
            .itemOutputs('4x create:andesite_alloy', 'gtceu:tiny_ash_dust')
            .duration(400 * burn);

    });

    event.recipes.create
        .cutting(`2x gtceu:treated_wood_slab`, `gtceu:treated_wood_planks`)
        .id(`insanity_skies:cutting/treated_slab`);

    event.recipes.create.cutting(`gtceu:treated_wood_rod`, `gtceu:treated_wood_slab`).id(`insanity_skies:cutting/treated_stick`);

    event.recipes.create.cutting(`3x create:shaft`, `create:andesite_alloy`).id(`insanity_skies:cutting/shaft`);

    [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'mangrove',
        'cherry',
        'bamboo',
        'crimson',
        'warped',
    ].forEach((log) => {
        event.remove({ output: `exnihilosequentia:${log}_sieve` });
        event
            .shaped(`exnihilosequentia:${log}_sieve`, [
                'S S', 
                'SFS', 
                'NRN'
            ], {
                S: `minecraft:${log}_slab`,
                F: 'gtceu:wood_frame',
                N: `minecraft:${log}_fence`,
                R: '#forge:string',
            })
            .id(`insanity_skies:shaped/ens_${log}_sieve`);

        event.remove({ type: 'minecraft:crafting_shaped', output: `minecraft:${log}_fence` });
        event.shaped(`2x minecraft:${log}_fence`, [
            'PSP', 
            'PSP', 
            'PSP'
        ], {
            P: `minecraft:${log}_planks`,
            S: 'minecraft:stick',
        });

        event.remove({ id: `create:cutting/${log}_log` });
        const log_type = log == 'bamboo' ? 'block' : log == 'crimson' || log == 'warped' ? 'stem' : 'log';
        event.recipes.create
            .cutting([`minecraft:stripped_${log}_${log_type}`, 'kubejs:bark'], `minecraft:${log}_log`)
            .id(`insanity_skies:cutting/stripped_${log}_${log_type}`);
        event.recipes.create
            .cutting(`4x minecraft:${log}_planks`, `minecraft:stripped_${log}_${log_type}`)
            .id(`insanity_skies:cutting/${log}_plank`);
        event.recipes.create
            .cutting(`2x minecraft:${log}_slab`, `minecraft:${log}_planks`)
            .id(`insanity_skies:cutting/${log}_slab`);
        event.recipes.create.cutting(`minecraft:stick`, `minecraft:${log}_slab`).id(`insanity_skies:cutting/stick_${log}`);

        if (log == 'bamboo') return;

        event.remove({ output: `functionalstorage:${log}_1` });
        event
            .shaped(`functionalstorage:${log}_1`, [
                'WSW', 
                'SCS', 
                'WSW'
            ], {
                W: 'gtceu:iron_screw',
                S: `minecraft:${log}_slab`,
                C: 'minecraft:chest',
            })
            .id(`insanity_skies:shaped/funcstor_${log}_drawer_1x`);

        event.remove({ output: `functionalstorage:${log}_2` });
        event.shapeless(`2x functionalstorage:${log}_2`, [`2x functionalstorage:${log}_1`]);

        event.remove({ output: `functionalstorage:${log}_4` });
        event.shapeless(`2x functionalstorage:${log}_4`, [`2x functionalstorage:${log}_2`]);

        event
            .shaped(`4x functionalstorage:${log}_4`, [
                'DD', 
                'DD'
            ], { 
                D: `functionalstorage:${log}_1` })
            .id(`insanity_skies:shaped/${log}_1_alt`);
    });

    event.remove({ output: `minecraft:crafting_table` });
    event.recipes.gtceu.assembler('crafting_table')
        .itemInputs('#minecraft:logs','kubejs:canvas')
        .itemOutputs('minecraft:crafting_table')
        .circuit(0)
        .duration(100)
        .EUt(5);
    event
        .shaped(Item.of('minecraft:crafting_table'), [
            'KCH', 
            'SLA'
        ], {
            C: 'kubejs:canvas',
            L: '#minecraft:logs',
            K: '#forge:tools/knives',
            H: '#forge:tools/hammers',
            S: '#forge:tools/saws',
            A: '#minecraft:axes'
        });

    event.remove({ output: 'gtceu:matchbox' });
    event.remove({ output: 'gtceu:matches' });
    event
        .shaped(Item.of('2x gtceu:matches'), [
            'FR', 
            'S '
        ], {
            R: '#forge:string',
            F: 'gtceu:tiny_flint_dust',
            S: 'gtceu:wood_bolt',
        })
        .id(`insanity_skies:shaped/fire_starter`);

    event.remove({ id: 'minecraft:flint_and_steel' });
    event
        .shapeless(Item.of('minecraft:flint_and_steel'), ['gtceu:steel_ring', 'minecraft:flint'])
        .id('insanity_skies:shapeless/flint_and_steel');

    event
        .shaped(Item.of('gtceu:rugged_alloyer'), [
            'BPB', 
            'RFR', 
            'BPB'
        ], {
            R: 'minecraft:iron_bars',
            B: 'kubejs:reinforced_stone_bricks',
            F: 'minecraft:furnace',
            P: 'gtceu:iron_plate',
        })
        .id('insanity_skies:shaped/rugged_alloyer');

    event.remove({ output: 'minecraft:bowl' });
    event
        .shaped(Item.of('minecraft:bowl', 2), [
            'A', 
            'B'
        ], {
            A: '#forge:tools/knives',
            B: '#minecraft:planks',
        })
        .id(`insanity_skies:shaped/bowls`);

    event
        .shapeless('4x kubejs:concrete_bowl', ['gtceu:concrete_bucket','minecraft:bowl','minecraft:bowl','minecraft:bowl','minecraft:bowl'])
        .replaceIngredient('gtceu:concrete_bucket', 'minecraft:bucket')
        .id('insanity_skies:shapeless/bucket_to_bowls_conrete');

    event
        .shapeless('4x kubejs:water_bowl', ['minecraft:water_bucket','minecraft:bowl','minecraft:bowl','minecraft:bowl','minecraft:bowl'])
        .replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
        .id('insanity_skies:shapeless/bucket_to_bowls_water');

    event
        .shapeless(Item.of('kubejs:plant_fibers'), ['#forge:tools/knives', 'kubejs:straw'])
        .id('insanity_skies:shapeless/plant_fibers');

    event
        .shapeless(Item.of('kubejs:straw'), ['#forge:tools/knives', 'kubejs:bark'])
        .id('insanity_skies:shapeless/straw');

    event.recipes.create.cutting(['kubejs:plant_fibers'], 'kubejs:straw').id('insanity_skies:cutting/plant_fibers');
    event.recipes.create.cutting(['kubejs:straw'], 'kubejs:bark').id('insanity_skies:cutting/straw');

    event.remove({ output: 'exnihilosequentia:string_mesh' });
    event
        .shaped(Item.of('exnihilosequentia:string_mesh'), [
            'SSS', 
            'SCS', 
            'SSS'
        ], {
            S: '#forge:string',
            C: 'kubejs:canvas',
        })
        .id(`insanity_skies:shaped/ens_string_mesh`);

    event.remove({ id: 'minecraft:kjs/gtceu_wood_plate' });

    // Bricks

    ['minecraft:bricks', 'gtceu:firebricks', 'gtceu:coke_oven_bricks', 'minecraft:mud_bricks'].forEach((brick) =>
        event.remove({ output: brick })
    );

    [
        { type: '', modItem: 'minecraft', modBlock: 'minecraft' },
        { type: 'coke_oven_', modItem: 'gtceu', modBlock: 'gtceu' },
        { type: 'fire', modItem: 'gtceu', modBlock: 'gtceu' },
    ].forEach((brick) => {
        const { type, modItem, modBlock } = brick;

        let item = `${modItem}:${type}brick`;
        let block = `${modBlock}:${type}bricks`;
        let fluid = 'gtceu:concrete';
        let buckets = [
            { type: `${fluid}_bucket`, variant: 'bucket' }
        ];

        buckets.forEach((bucket) => {
            event
                .shaped(Item.of(block, 2), [
                    'BBB', 
                    'BCB', 
                    'BBB'
                ], {
                    B: item,
                    C: bucket.type,
                })
                .id(`insanity_skies:shaped/${bucket.variant}_${type}bricks`);
        });

        event.recipes.create
            .compacting(block, [`4x ${item}`, Fluid.of(`${fluid}`, 250)])
            .id(`insanity_skies:compacting/${type}bricks`);

        event.recipes.gtceu
            .assembler(id(`${block.split(':')[1]}`))
            .itemInputs(`4x ${item}`)
            .inputFluids(`${fluid} 200`)
            .itemOutputs(block)
            .circuit(1)
            .duration(80)
            .EUt(6);
    });

    event
        .shaped(Item.of('kubejs:reinforced_stone_bricks', 1), [
            'CBS', 
            'BHB', 
            'SBC'
        ], {
            C: 'kubejs:concrete_bowl',
            B: 'kubejs:stone_brick',
            H: '#forge:tools/hammers',
            S: 'gtceu:iron_screw'
        })
        .replaceIngredient('kubejs:concrete_bowl', 'minecraft:bowl')
        .id('insanity_skies:shaped/reinforced_stone_bricks');

    event
        .shaped(Item.of('kubejs:mud_brick', 6), [
            'CCC', 
            'CMC', 
            'CCC'
        ], {
            C: 'kubejs:packed_mud_ball',
            M: 'gtceu:brick_wooden_form',
        })
        .keepIngredient('gtceu:brick_wooden_form')
        .id('insanity_skies:shaped/mud_brick');

    event
        .shaped(Item.of('gtceu:compressed_clay', 6), [
            'CCC', 
            'CMC', 
            'CCC'
        ], {
            C: 'minecraft:clay_ball',
            M: 'gtceu:brick_wooden_form',
        })
        .keepIngredient('gtceu:brick_wooden_form')
        .id('insanity_skies:shaped/compressed_clay');

    event
        .shaped(Item.of('kubejs:stone_brick', 2), [
            'H  ', 
            ' F ', 
            '  S'
        ], {
            H: '#forge:tools/hammers',
            F: '#forge:tools/files',
            S: 'minecraft:stone_slab',
        })
        .id('insanity_skies:shaped/stone_brick');

    event.recipes.create.cutting(['2x kubejs:stone_brick'], 'minecraft:stone_slab').id('insanity_skies:cutting/stone_brick');

    event.remove({ id: /^gtceu:mixer\/concrete.*/ });
    event.recipes.gtceu.mixer(id('concrete'))
        .itemInputs('12x gtceu:stone_dust', 'gtceu:calcite_dust', 'gtceu:gypsum_dust')
        .inputFluids('minecraft:water 4800')
        .outputFluids('gtceu:concrete 6000')
        .duration(240)
        .EUt(6);

    event
        .shaped('minecraft:bricks', [
            'CC',
            'BB',
            'BB'
        ], {
            C: 'kubejs:concrete_bowl',
            B: 'minecraft:brick'
        })
        .replaceIngredient('kubejs:concrete_bowl', 'minecraft:bowl')
        .id('insanity_skies:shaped/bricks');

    event
        .shaped('2x minecraft:mud_bricks', [
            'BBB',
            'BFB',
            'BBB'
        ], {
            F: 'gtceu:wood_frame',
            B: 'kubejs:mud_brick'
        })
        .id('insanity_skies:shaped/mud_bricks');

    event
        .shapeless('4x kubejs:packed_mud_ball',
            ['minecraft:packed_mud','minecraft:bowl']
        )
        .replaceIngredient('minecraft:bowl', 'minecraft:bowl')

    event
        .shapeless('kubejs:concrete_bowl', [
            'gtceu:small_stone_dust',
            'gtceu:tiny_gypsum_dust',
            'gtceu:tiny_calcite_dust',
            'kubejs:water_bowl'
        ]);

    event
        .shapeless('gtceu:concrete_bucket', [
            'gtceu:small_calcite_dust',
            'gtceu:stone_dust',
            'gtceu:small_calcite_dust',
            'gtceu:small_gypsum_dust',
            'minecraft:water_bucket',
            'gtceu:small_gypsum_dust'
        ])
        .replaceIngredient('minecraft:water_bucket', 'minecraft:air')
        .id('insanity_skies:shaped/liquid_concrete_iron_bucket');

    ['stone', 'gypsum', 'calcite'].forEach((dust) => {
        const pebble = dust == 'gypsum' ? 'dripstone' : dust;

        event
            .shapeless(`gtceu:tiny_${dust}_dust`, ['#forge:tools/mortars', `exnihilosequentia:${pebble}_pebble`])
            .id(`insanity_skies:shapeless/tiny_${dust}_dust`);
        event.recipes.gtceu
            .macerator(id(`small_${dust}_dust`))
            .itemInputs(`exnihilosequentia:${pebble}_pebble`)
            .itemOutputs(`gtceu:small_${dust}_dust`)
            .duration(23)
            .EUt(2);
    });

    event.recipes.create
        .mixing(Fluid.of('gtceu:concrete', 1250), [
            Fluid.of('minecraft:water', 1000),
            'gtceu:stone_dust',
            '2x gtceu:small_calcite_dust',
            '2x gtceu:small_gypsum_dust',
        ])
        .id('insanity_skies:create_mixer/liquid_concrete');

    event
        .shaped(Item.of('minecraft:furnace'), [
            'SCS', 
            'CFC', 
            'BBB'
        ], {
            S: 'minecraft:cobblestone_stairs',
            C: 'minecraft:cobblestone',
            F: 'minecraft:campfire',
            B: 'minecraft:bricks',
        })
        .id('insanity_skies:shaped/furnace');

    event
        .shaped(Item.of('minecraft:composter'), [
            'PMP', 
            'PRP', 
            'WSW'
        ], {
            P: 'gtceu:wood_plate',
            M: '#forge:tools/mallets',
            R: 'gtceu:sticky_resin',
            W: 'gtceu:wood_screw',
            S: '#minecraft:wooden_slabs',
        })
        .id('insanity_skies:shaped/composter');

    event
        .shaped('minecraft:campfire', [
            'STS', 
            'TBT', 
            'LLL'
        ], {
            T: '#balm:wooden_rods',
            B: 'kubejs:bark',
            S: 'kubejs:straw',
            L: '#minecraft:logs',
        })
        .id('insanity_skies:shaped/campfire');

    event.recipes
        .shaped(Item.of('gtceu:kiln'), [
            'RBR', 
            'BFB', 
            'BSB'
        ], {
            B: 'minecraft:mud_bricks',
            R: 'gtceu:wood_frame',
            F: 'minecraft:campfire',
            S: 'minecraft:cobblestone_slab',
        })
        .id('insanity_skies:shaped/kiln');

    // Adjusted Recipes

    event.remove({ output: '#exnihilosequentia:crucibles' });
    event.remove({ output: '#exnihilosequentia:barrels' });
    event.remove({ id: 'gtceu:shaped_fluid_container/treated_wood_planks' });

    event
        .shapeless(Item.of('gtceu:wood_bolt', 2), ['#forge:tools/saws', 'minecraft:stick'])
        .id('insanity_skies:shapeless/wood_bolt');

    event.remove({ id: 'minecraft:clay' });
    event.recipes.create.compacting('minecraft:clay', '4x minecraft:clay_ball').id('insanity_skies:compacting/clay');

    event.recipes.create
        .mixing('minecraft:clay', ['exnihilosequentia:dust', Fluid.of('minecraft:water', 250)])
        .id('insanity_skies:create_mixer/clay');

    event
        .shaped(Item.of('gtceu:wood_gear'), [
            'BBB', 
            'BSB', 
            'BBB'
        ], {
            B: 'gtceu:wood_bolt',
            S: '#minecraft:wooden_slabs',
        })
        .id('insanity_skies:shaped/wood_gear');
});
