ServerEvents.recipes((event) => {
    const id = global.id;

        // Create Recipes
    event.recipes
        .shaped(Item.of('create:item_vault'), [
            'SFS', 
            'FBF', 
            'SFS'
        ], {
            S: 'gtceu:iron_screw',
            B: 'minecraft:barrel',
            F: 'gtceu:iron_foil',
        })
        .id('insanity_skies:shaped/item_vault');

    event.recipes.create
        .mechanical_crafting('create:mechanical_arm', [
            'HAR', 
            ' R ', 
            'RN ', 
            'BPB', 
            'GCG'
        ], {
            G: 'create:cogwheel',
            B: 'gtceu:brass_plate',
            H: 'create:brass_hand',
            R: 'gtceu:brass_rod',
            N: 'gtceu:brass_ring',
            A: 'create:andesite_alloy',
            P: 'create:precision_mechanism',
            C: 'create:brass_casing',
        })
        .id('insanity_skies:shaped/mechanical_arm');

    event.recipes
        .shaped(Item.of('create:spout'), [
            'PPP', 
            'GCG', 
            'RIR'
        ], {
            G: 'minecraft:glass_pane',
            C: 'create:copper_casing',
            P: 'gtceu:copper_plate',
            R: 'gtceu:rubber_ring',
            I: 'gtceu:copper_normal_fluid_pipe',
        })
        .id('insanity_skies:shaped/spout');

    event.shapeless('2x create:shaft', ['#forge:tools/files', '3x create:andesite_alloy']).id('insanity_skies:shapeless/shaft');

    event.recipes
        .shaped(Item.of('create:encased_chain_drive', 2), [
            'SN ', 
            'NCN', 
            ' NS'
        ], {
            S: 'create:shaft',
            C: 'create:andesite_casing',
            N: 'gtceu:iron_ring',
        })
        .id('insanity_skies:shaped/encased_chain_drive');

    event.recipes
        .shaped(Item.of('create:adjustable_chain_gearshift'), [
            'T', 
            'C'
        ], {
            C: 'create:encased_chain_drive',
            T: 'create:electron_tube',
        })
        .id('insanity_skies:shaped/adjustable_chain_gearshift');

    event.recipes
        .shaped(Item.of('create:gearshift'), [
            'RCG'
        ], {
            R: 'minecraft:redstone_torch',
            C: 'create:andesite_casing',
            G: 'create:cogwheel',
        })
        .id('insanity_skies:shaped/gearshift');

    event.recipes
        .shaped(Item.of('create:sequenced_gearshift'), [
            'RCG'
        ], {
            R: 'create:electron_tube',
            C: 'create:brass_casing',
            G: 'create:cogwheel',
        })
        .id('insanity_skies:shaped/sequenced_gearshift');

    event.recipes
        .shaped(Item.of('create:depot'), [
            'APA', 
            'SCS'
        ], {
            P: 'gtceu:iron_plate',
            C: 'create:andesite_casing',
            A: 'create:andesite_alloy',
            S: 'gtceu:iron_screw',
        })
        .id('insanity_skies:shaped/depot');

    event.recipes
        .shaped(Item.of('create:fluid_tank', 3), [
            'PGP', 
            'GCG', 
            'PGP'
        ], {
            G: 'minecraft:glass_pane',
            C: 'create:copper_casing',
            P: 'gtceu:copper_plate',
        })
        .id('insanity_skies:shaped/fluid_tank');

    event.recipes
        .shaped(Item.of('create:weighted_ejector'), [
            'DPA', 
            'GCS'
        ], {
            G: 'create:cogwheel',
            A: 'create:andesite_alloy',
            P: 'minecraft:stone_pressure_plate',
            C: 'create:depot',
            S: 'create:shaft',
            D: 'gtceu:gold_plate',
        })
        .id('insanity_skies:shaped/weighted_ejector');

    event.recipes.create
        .mechanical_crafting('create:steam_engine', [
            'GSG', 
            ' A ', 
            'PAP', 
            'PCP'
        ], {
            G: 'gtceu:gold_ring',
            S: 'create:shaft',
            A: 'create:andesite_alloy',
            P: 'gtceu:copper_plate',
            C: 'create:copper_casing',
        })
        .id('insanity_skies:shaped/steam_engine');

    event
        .shaped(Item.of('create:andesite_casing'), [
            'PMP', 
            'AFA', 
            'PHP'
        ], {
            P: 'gtceu:wood_plate',
            M: '#forge:tools/mallets',
            A: 'create:andesite_alloy',
            F: 'gtceu:wood_frame',
            H: '#forge:tools/hammers',
        })
        .id('insanity_skies:shaped/andesite_casing');

    event
        .shaped(Item.of('create:copper_casing'), [
            'PMP', 
            'RFR', 
            'PHP'
        ], {
            P: 'gtceu:pig_iron_plate',
            M: '#forge:tools/mallets',
            R: 'create:fluid_pipe',
            F: 'gtceu:pig_iron_frame',
            H: '#forge:tools/hammers',
        })
        .id('insanity_skies:shaped/copper_casing');

    event
        .shaped(Item.of('create:brass_casing'), [
            'PMP', 
            'AFA', 
            'PHP'
        ], {
            P: 'gtceu:treated_wood_plate',
            M: '#forge:tools/mallets',
            A: 'gtceu:brass_plate',
            F: 'gtceu:treated_wood_frame',
            H: '#forge:tools/hammers',
        })
        .id('insanity_skies:shaped/brass_casing');

    event
        .shaped(Item.of('create:piston_extension_pole', 3), [
            'P', 
            'A', 
            'P'
        ], {
            P: 'gtceu:wood_plate',
            A: 'create:andesite_alloy',
        })
        .id('insanity_skies:shaped/piston_extension_pole');

    event
        .shaped(Item.of('create:hand_crank'), [
            ' PA', 
            'RPM', 
            'GP '
        ], {
            P: 'gtceu:wood_plate',
            M: '#forge:tools/mallets',
            A: 'create:andesite_alloy',
            R: 'gtceu:sticky_resin',
            G: 'gtceu:wood_gear',
        })
        .id('insanity_skies:shaped/hand_crank');

    event
        .shaped(Item.of('create:mechanical_press'), [
            'PLP', 
            'GCG', 
            'AVA'
        ], {
            C: 'create:andesite_casing',
            P: 'gtceu:wood_plate',
            A: 'create:andesite_alloy',
            L: 'create:piston_extension_pole',
            G: 'gtceu:wood_gear',
            V: 'minecraft:anvil',
        })
        .id('insanity_skies:shaped/mechanical_press');

    event
        .shaped(Item.of('create:mechanical_saw'), [
            'MSW', 
            'ACA'
        ], {
            M: '#forge:tools/mallets',
            W: '#forge:tools/wrenches',
            S: 'kubejs:saw_blade',
            C: 'create:andesite_casing',
            A: 'create:andesite_alloy',
        })
        .id('insanity_skies:shaped/mechanical_saw');

    event
        .shaped(Item.of('create:millstone'), [
            'WCM', 
            'GAG', 
            'SSS'
        ], {
            W: '#forge:tools/wrenches',
            M: '#forge:tools/mallets',
            C: 'create:chute',
            G: 'create:cogwheel',
            A: 'create:andesite_casing',
            S: '#forge:stone',
        })
        .id('insanity_skies:shaped/millstone');

    event.recipes.create
        .mechanical_crafting('create:crushing_wheel', [
            ' SSS ', 
            'SAMAS', 
            'SMFMS', 
            'SAMAS', 
            ' SSS '
        ], {
            S: '#forge:stone',
            A: 'create:andesite_casing',
            F: 'create:shaft',
            M: 'gtceu:wood_frame',
        })
        .id('insanity_skies:shaped/crushing_wheel');

    event
        .shaped(Item.of('create:andesite_funnel', 2), [
            'AIA', 
            'ARA'
        ], {
            R: 'gtceu:rubber_plate',
            A: 'create:andesite_alloy',
            I: 'gtceu:iron_foil',
        })
        .id('insanity_skies:shaped/andesite_funnel');

    event
        .shaped(Item.of('create:brass_funnel', 2), [
            'PEP', 
            'RBR'
        ], {
            P: 'gtceu:brass_foil',
            R: 'gtceu:brass_rod',
            E: 'create:electron_tube',
            B: 'gtceu:rubber_plate',
        })
        .id('insanity_skies:shaped/brass_funnel');

    event
        .shaped(Item.of('create:andesite_tunnel', 4), [
            ' FM', 
            'FCF', 
            'AF '
        ], {
            F: 'create:andesite_funnel',
            C: 'create:andesite_casing',
            A: 'create:andesite_alloy',
            M: '#forge:tools/mallets',
        })
        .id('insanity_skies:shaped/andesite_tunnel');

    event
        .shaped(Item.of('create:brass_tunnel', 4), [
            ' FM', 
            'FCF', 
            'TF '
        ], {
            F: 'create:brass_funnel',
            C: 'create:brass_casing',
            T: 'create:electron_tube',
            M: '#forge:tools/mallets',
        })
        .id('insanity_skies:shaped/brass_tunnel');

    let drill = 'gtceu:double_iron_plate';
    event.recipes.create
        .sequenced_assembly([Item.of('kubejs:drill_head').withChance(1)], drill, [
            event.recipes.createDeploying(drill, [drill, 'create:andesite_alloy']),
            event.recipes.createDeploying(drill, [drill, 'gtceu:cast_iron_plate']),
            event.recipes.createPressing(drill, drill),
            event.recipes.createDeploying(drill, [drill, 'gtceu:wrought_iron_plate']),
            event.recipes.createCutting(drill, drill),
        ])
        .transitionalItem(drill)
        .loops(2)
        .id('insanity_skies:sequenced_assembly/drill_head');

    event
        .shaped(Item.of('create:mechanical_drill'), [
            'MDH', 
            'ACA', 
            'ASA'
        ], {
            M: '#forge:tools/mallets',
            H: '#forge:tools/hammers',
            S: 'create:shaft',
            C: 'create:andesite_casing',
            D: 'kubejs:drill_head',
            A: 'create:andesite_alloy',
        })
        .id('insanity_skies:shaped/mechanical_drill');

    event
        .shaped(Item.of('create:brass_hand'), [
            'BBB', 
            'PPP', 
            'ARA'
        ], {
            B: 'gtceu:brass_bolt',
            P: 'gtceu:brass_plate',
            R: 'gtceu:zinc_ring',
            A: 'create:andesite_alloy',
        })
        .id('insanity_skies:shaped/brass_hand');

    event
        .shaped(Item.of('create:deployer'), [
            'EPE', 
            'SCS', 
            'AHA'
        ], {
            E: 'create:electron_tube',
            P: 'create:piston_extension_pole',
            S: 'create:shaft',
            A: 'create:andesite_alloy',
            C: 'create:andesite_casing',
            H: 'create:brass_hand',
        })
        .id('insanity_skies:shaped/deployer');

    event
        .shaped(Item.of('create:fluid_pipe', 12), [
            'PFP', 
            'FPF'
        ], {
            P: 'gtceu:copper_normal_fluid_pipe',
            F: 'gtceu:copper_foil',
        })
        .id('insanity_skies:shaped/fluid_pipe');

    event.remove({ id: 'create:crafting/kinetics/vertical_gearbox' });
    event.remove({ id: 'create:crafting/kinetics/gearbox' });

    event
        .shaped(Item.of('create:vertical_gearbox'), [
            ' G ', 
            'SCS', 
            ' G '
        ], {
            S: 'create:shaft',
            C: 'create:andesite_casing',
            G: 'create:cogwheel',
        })
        .id('insanity_skies:shaped/vertical_gearbox');

    event
        .shaped(Item.of('create:gearbox'), [
            ' S ', 
            'GCG', 
            ' S '
        ], {
            S: 'create:shaft',
            C: 'create:andesite_casing',
            G: 'create:cogwheel',
        })
        .id('insanity_skies:shaped/gearbox');

    event
        .shaped(Item.of('create:chute', 3), [
            'PCP', 
            'PHP'
        ], {
            P: 'gtceu:iron_plate',
            C: 'minecraft:chest',
            H: 'minecraft:hopper',
        })
        .id('insanity_skies:shaped/chute');

    event
        .shaped(Item.of('create:smart_chute'), [
            'FTF', 
            'FCF'
        ], {
            F: 'gtceu:brass_foil',
            C: 'create:chute',
            T: 'create:electron_tube',
        })
        .id('insanity_skies:shaped/smart_chute');

    event
        .shaped(Item.of('create:water_wheel'), [
            'PPP', 
            'SCS', 
            'PPP'
        ], {
            S: 'create:shaft',
            C: 'create:andesite_casing',
            P: 'gtceu:wood_plate',
        })
        .id('insanity_skies:shaped/water_wheel');

    let w_wheel = 'create:water_wheel';
    event.recipes.create
        .sequenced_assembly([Item.of(`create:large_water_wheel`)], 'create:water_wheel', [
            event.recipes.createDeploying(w_wheel, [w_wheel, 'gtceu:wood_plate']),
            event.recipes.createDeploying(w_wheel, [w_wheel, 'gtceu:wood_bolt']),
            event.recipes.createPressing(w_wheel, w_wheel)
        ])
        .transitionalItem(w_wheel)
        .loops(8)
        .id('insanity_skies:sequenced_assembly/large_water_wheel');

    event
        .shaped(Item.of('create:whisk'), [
            'NWN', 
            'RAR', 
            'RPR'
        ], {
            W: '#forge:tools/wrenches',
            R: 'gtceu:iron_rod',
            P: 'gtceu:iron_plate',
            A: 'create:andesite_alloy',
            N: 'gtceu:iron_ring',
        })
        .id('insanity_skies:shaped/whisk');

    event
        .shaped(Item.of('create:cogwheel', 2), [
            ' SM', 
            'PGP', 
            ' S '
        ], {
            S: 'create:shaft',
            G: 'gtceu:wood_gear',
            P: 'gtceu:wood_plate',
            M: '#forge:tools/mallets',
        })
        .id('insanity_skies:shaped/cogwheel');

    event
        .shaped(Item.of('create:large_cogwheel', 2), [
            ' SM', 
            'PGP', 
            ' S '
        ], {
            S: 'create:shaft',
            G: 'create:cogwheel',
            P: 'gtceu:wood_plate',
            M: '#forge:tools/mallets',
        })
        .id('insanity_skies:shaped/large_cogwheel');

    event
        .shaped(Item.of('create:mechanical_mixer'), [
            'MLW', 
            'GCG', 
            'AHA'
        ], {
            L: 'create:piston_extension_pole',
            M: '#forge:tools/mallets',
            W: '#forge:tools/wrenches',
            G: 'create:cogwheel',
            C: 'create:andesite_casing',
            A: 'create:andesite_alloy',
            H: 'create:whisk',
        })
        .id('insanity_skies:shaped/mechanical_mixer');

    event
        .shaped(Item.of('create:basin'), [
            'A A', 
            'ACA', 
            'PAP'
        ], {
            A: 'create:andesite_alloy',
            C: 'minecraft:cauldron',
            P: 'gtceu:lead_plate',
        })
        .id('insanity_skies:shaped/basin');

    event.remove('createlowheated:basic_burner');
    event
        .shaped('createlowheated:basic_burner', [
            'RRR', 
            'R R', 
            'PAP'
        ], {
            A: 'create:andesite_alloy',
            R: 'gtceu:lead_rod',
            P: 'gtceu:lead_plate',
        })
        .id('insanity_skies:shaped/basic_burner');

    event
        .shaped(Item.of('create:propeller'), [
            'SAR', 
            'ZPZ', 
            'MAS'
        ], {
            P: 'gtceu:pig_iron_rotor',
            A: 'create:andesite_alloy',
            R: '#forge:tools/screwdrivers',
            M: '#forge:tools/mallets',
            Z: 'gtceu:zinc_plate',
            S: 'gtceu:iron_screw',
        })
        .id('insanity_skies:shaped/propeller');

    event
        .shaped(Item.of('create:encased_fan'), [
            'RPR', 
            'SCF', 
            'RPR'
        ], {
            P: 'gtceu:wood_plate',
            R: 'gtceu:zinc_rod',
            F: 'create:propeller',
            S: 'create:shaft',
            C: 'create:andesite_casing',
        })
        .id('insanity_skies:shaped/encased_fan');

    event.remove({ output: /^create:.*sand_paper/ });
    const sandType = ['sand', 'red_sand'];
    sandType.forEach((sand) => {
        event.recipes.create
            .mixing(Item.of(`1x create:${sand}_paper`).withChance(0.9), [
                '1x kubejs:canvas',
                `1x minecraft:${sand}`,
                'gtceu:sticky_resin',
            ])
            .id(`insanity_skies:create_mixer/${sand}_paper`);
    });

    event.recipes.create
        .mixing(`create:pulp`, [
            Fluid.of('minecraft:water', 500),
            '2x createdieselgenerators:wood_chip',
            '2x gtceu:small_paper_dust',
            '2x gtceu:small_wood_dust',
        ])
        .id(`insanity_skies:create_mixer/pulp`);

    event.recipes.create
        .compacting(['create:cardboard', Fluid.of('minecraft:water', 100)], '2x create:pulp')
        .id('insanity_skies:compacting/cardboard');

    event
        .shaped(Item.of('create:electron_tube'), [
            'NNN', 
            'NQN', 
            'BGB'
        ], {
            G: 'gtceu:iron_ring',
            B: 'gtceu:copper_bolt',
            N: 'minecraft:glass_pane',
            Q: 'create:polished_rose_quartz',
        })
        .id('insanity_skies:shaped/electron_tube');

    let prec = 'gtceu:brass_plate';
    event.recipes.create
        .sequenced_assembly([Item.of(`create:precision_mechanism`)], `gtceu:brass_plate`, [
            event.recipes.createDeploying(prec, [prec, `create:cogwheel`]),
            event.recipes.createPressing(prec, prec),
            event.recipes.createDeploying(prec, [prec, `create:large_cogwheel`]),
            event.recipes.createPressing(prec, prec),
            event.recipes.createFilling(prec, [prec, Fluid.of('gtceu:gold', 72)]),            
            event.recipes.createPressing(prec, prec),
            event.recipes.createDeploying(prec, [prec, `gtceu:iron_screw`]),
            event.recipes.createPressing(prec, prec),
        ])
        .transitionalItem(prec)
        .loops(4)
        .id('insanity_skies:sequenced_assembly/precision_mechanism');

    let mech = 'create:brass_casing';
    event.recipes.create
        .sequenced_assembly([Item.of(`create:mechanical_crafter`).withChance(1)], `create:brass_casing`, [
            event.recipes.createDeploying(mech, [mech, `create:cogwheel`]),
            event.recipes.createPressing(mech, mech),
            event.recipes.createDeploying(mech, [mech, `create:precision_mechanism`]),
            event.recipes.createDeploying(mech, [mech, `minecraft:crafting_table`]),
            event.recipes.createPressing(mech, mech),
        ])
        .transitionalItem(mech)
        .loops(1)
        .id('insanity_skies:sequenced_assembly/mechanical_crafter');

    event.recipes.create
        .mechanical_crafting('8x create:flywheel', [
            ' PPP ', 
            'PS SP', 
            'P T P', 
            'PS SP', 
            ' PPP '
        ], {
            T: 'create:shaft',
            P: 'gtceu:brass_rod',
            S: '#forge:rods/wooden',
        })
        .id('insanity_skies:mechanical_crafter/flywheel');

    event.recipes.create
        .mechanical_crafting('create:sticker', [
            'ASA', 
            'DRD'
        ], {
            S: 'minecraft:slime_block',
            A: 'create:andesite_alloy',
            D: 'gtceu:double_iron_plate',
            R: 'minecraft:redstone',
        })
        .id('insanity_skies:mechanical_crafting/sticker');

    event
        .shaped(Item.of('create:nozzle'), [
            'ASA', 
            'SSS', 
            'APA'
        ], {
            A: 'create:andesite_alloy',
            S: '#forge:string',
            P: 'gtceu:iron_plate',
        })
        .id('insanity_skies:shaped/nozzle');

    event
        .shaped(Item.of('create:white_sail', 2), [
            'ASC', 
            'SCS', 
            'CSA'
        ], {
            A: 'create:andesite_alloy',
            S: '#forge:rods/wooden',
            C: 'kubejs:canvas',
        })
        .id('insanity_skies:shaped/white_sail');

    event
        .shaped(Item.of('create:mechanical_bearing'), [
            'RPR', 
            'GCG', 
            'GSG'
        ], {
            R: 'gtceu:sticky_resin',
            G: 'gtceu:wood_gear',
            S: 'create:shaft',
            C: 'create:andesite_casing',
            P: '#minecraft:wooden_slabs',
        })
        .id('insanity_skies:shaped/mechanical_bearing');

    event
        .shaped(Item.of('create:windmill_bearing'), [
            'FRF', 
            'XBW', 
            'FSF'
        ], {
            F: 'create:sail_frame',
            R: 'gtceu:sticky_resin',
            X: '#forge:tools/screwdrivers',
            B: 'create:mechanical_bearing',
            W: '#forge:tools/wrench',
            S: 'create:shaft',
        })
        .id('insanity_skies:shaped/windmill_bearing');

    event
        .shapeless(Item.of('create:clockwork_bearing'), [
            'create:brass_casing',
            'create:mechanical_bearing',
            'create:electron_tube',
        ])
        .id('insanity_skies:shapeless/clockwork_bearing');

    event.recipes.create
        .mechanical_crafting('create:gantry_carriage', [
            ' R ', 
            'SPS', 
            'GCG'
        ], {
            S: 'create:shaft',
            C: 'create:andesite_casing',
            G: 'create:cogwheel',
            P: 'minecraft:piston',
            R: 'gtceu:sticky_resin',
        })
        .id('insanity_skies:mechanical_crafting/gantry_carriage');

    event.recipes.create
        .mechanical_crafting('create:rotation_speed_controller', [
            'RGR', 
            'SMS', 
            'PCP'
        ], {
            R: 'gtceu:brass_ring',
            G: 'create:cogwheel',
            S: 'create:shaft',
            P: 'gtceu:brass_plate',
            C: 'create:brass_casing',
            M: 'create:precision_mechanism',
        })
        .id('insanity_skies:mechanical_crafting/rotation_speed_controller');

    event
        .shaped(Item.of('create:gantry_shaft', 2), [
            ' RP', 
            'RSR', 
            'PR '
        ], {
            R: 'gtceu:small_redstone_dust',
            P: 'gtceu:wood_plate',
            S: 'create:shaft',
        })
        .id('insanity_skies:shaped/gantry_shaft');

    event.remove({ output: 'create:super_glue' });
    event.recipes.create
        .mechanical_crafting('create:super_glue', [
            '  RS', 
            'NGRP', 
            '  RS'
        ], {
            R: 'gtceu:sticky_resin',
            P: 'gtceu:iron_plate',
            N: 'minecraft:iron_nugget',
            S: '#forge:string',
            G: 'gtceu:rubber_ring',
        })
        .id('insanity_skies:mechanical_crafting/super_glue');

    event
        .shaped(Item.of('3x create:belt_connector'), [
            'RRR', 
            'HSW'
        ], {
            R: 'gtceu:rubber_plate',
            H: '#forge:tools/hammers',
            S: '#forge:tools/screwdrivers',
            W: '#forge:tools/wrenches',
        })
        .id('insanity_skies:shaped/belt_connector');

    event.recipes.create
        .mechanical_crafting(Item.of('3x create:belt_connector'), [
            'RRR'
        ], {
            R: 'gtceu:rubber_plate',
        })
        .id('insanity_skies:mechanical_crafter/belt_connector');

    event.recipes.create
        .mechanical_crafting(Item.of('create:mechanical_piston'), [
            'SAP', 
            ' C '
        ], {
            S: 'create:piston_extension_pole',
            A: 'create:andesite_casing',
            P: 'minecraft:piston',
            C: 'create:cogwheel',
        })
        .id('insanity_skies:mechanical_crafter/mechanical_piston');

    event.remove({ id: 'create:crafting/kinetics/speedometer' });
    event.recipes
        .shaped('create:speedometer', [
            'RGR', 
            'SIS', 
            'ACA'
        ], {
            R: 'minecraft:redstone',
            G: 'minecraft:glass_pane',
            S: 'create:shaft',
            I: 'gtceu:iron_rod',
            C: 'create:andesite_casing',
            A: 'create:andesite_alloy',
        })
        .id('insanity_skies:shaped/speedometer');

    const BetterCasings = (type, primary, secondary) => {
        event.recipes.create
            .mechanical_crafting(Item.of(`create:${type}_casing`, 2), [
                'PSP', 
                'SFS', 
                'PSP'
            ], {
                P: `gtceu:${primary}_plate`,
                F: `gtceu:${primary}_frame`,
                S: secondary,
            })
            .id(`insanity_skies:mechanical_crafter/${type}_casing`);

        event.recipes.gtceu
            .assembler(id(`${type}_casing`))
            .itemInputs(`1x gtceu:${primary}_frame`, `4x gtceu:${primary}_plate`, `4x ${secondary}`)
            .itemOutputs(`2x create:${type}_casing`)
            .EUt(2)
            .duration(50);
    };
    BetterCasings('andesite', 'wood', 'create:andesite_alloy');
    BetterCasings('copper', 'pig_iron', 'create:fluid_pipe');
    BetterCasings('brass', 'treated_wood', 'gtceu:brass_plate');

    event
        .shaped(Item.of('create:wrench'), [
            'FDT', 
            'WSG', 
            ' PL'
        ], {
            F: '#forge:tools/files',
            D: 'gtceu:double_gold_plate',
            T: 'minecraft:stick',
            W: '#forge:tools/wrenches',
            S: 'create:shaft',
            G: 'create:cogwheel',
            P: 'gtceu:gold_plate',
            L: 'gtceu:long_wood_rod',
        })
        .id(`insanity_skies:shaped/wrench`);

    event
        .shaped(Item.of('create:redstone_contact'), [
            'B', 
            'O'
        ], {
            O: 'minecraft:observer',
            B: 'minecraft:stone_button',
        })
        .id(`insanity_skies:shaped/redstone_contact`);

    event
        .shaped(Item.of('create:schematicannon'), [
            'SPL', 
            'PGP', 
            'ADA'
        ], {
            S: '#forge:string',
            P: '#minecraft:wooden_slabs',
            L: 'gtceu:lead_small_fluid_pipe',
            G: 'gtceu:cast_iron_gear',
            A: 'create:andesite_alloy',
            D: 'minecraft:dispenser',
        })
        .id(`insanity_skies:shaped/schematicannon`);

    event
        .shaped(Item.of('create:display_board', 3), [
            'APA', 
            'CEC', 
            'APA'
        ], {
            A: 'create:andesite_alloy',
            P: 'minecraft:paper',
            C: 'create:cogwheel',
            E: 'create:electron_tube',
        })
        .id(`insanity_skies:shaped/display_board`);

    event
        .shaped(Item.of('create:brown_toolbox'), [
            'RTR', 
            'GCG', 
            'SSS'
        ], {
            R: 'gtceu:gold_ring',
            T: 'gtceu:treated_wood_rod',
            G: 'create:cogwheel',
            C: 'minecraft:chest',
            S: 'gtceu:treated_wood_slab',
        })
        .id(`insanity_skies:shaped/brown_toolbox`);

    [
        { type: 'hose', casing: 'copper', base: 'create:fluid_pipe' },
        { type: 'elevator', casing: 'brass', base: 'gtceu:iron_plate' },
    ].forEach((pulley) => {
        event.recipes.create
            .mechanical_crafting(Item.of(`create:${pulley.type}_pulley`), [
                'RCR', 
                'SWS', 
                ' B ', 
                ' N '
            ], {
                R: 'gtceu:rubber_plate',
                C: `create:${pulley.casing}_casing`,
                S: 'create:shaft',
                W: '#minecraft:wool',
                B: `${pulley.base}`,
                N: 'gtceu:rubber_ring',
            })
            .id(`insanity_skies:mechanical_crafter/${pulley.type}_pulley`);
    });

});
