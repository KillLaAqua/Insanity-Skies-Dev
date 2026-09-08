ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.create
        .mechanical_crafting(Item.of('create_new_age:carbon_brushes'), [
            'RWPWR', 
            'W C W', 
            'PUsUP', 
            'W C W', 
            'RWPWR'
        ], {
            R: 'gtceu:cast_iron_rod',
            W: 'gtceu:fine_copper_wire',
            P: 'gtceu:cast_iron_plate',
            C: '#minecraft:coals',
            U: '#gtceu:circuits/ulv',
            s: 'create:shaft',
        })
        .id('insanity_skies:mechanical_crafting/carbon_brushes');

    event.recipes.create
        .mechanical_crafting(Item.of('2x create_new_age:electrical_connector'), [
            'WRW', 
            'WDW', 
            'RPR'
        ], {
            W: 'gtceu:fine_copper_wire',
            R: 'gtceu:cast_iron_ring',
            D: 'gtceu:cast_iron_rod',
            P: 'gtceu:cast_iron_plate',
        })
        .id('insanity_skies:mechanical_crafter/electrical_connector');

    event.recipes.create
        .mechanical_crafting(Item.of('2x create_new_age:generator_coil'),[
            'RWWRWWR', 
            'WCPCPCW', 
            'WPWWWPW', 
            'RCWSWCR', 
            'WPWWWPW', 
            'WCPCPCW', 
            'RWWRWWR'
        ], {
            R: 'gtceu:cast_iron_ring',
            W: 'gtceu:fine_copper_wire',
            C: 'create_new_age:electrical_connector',
            P: 'gtceu:cast_iron_plate',
            S: 'create:shaft',
        })
        .id('insanity_skies:mechanical_crafter/generator_coil');

    event.recipes.create
        .compacting('create_new_age:magnetite_block', ['8x gtceu:magnetite_dust', 'gtceu:stone_dust'])
        .id('insanity_skies:compacting/magnetite_block');

    event.recipes.create
        .mechanical_crafting(Item.of('4x create_new_age:redstone_magnet'), [
            'BrB', 
            'rRr', 
            'BrB'
        ], {
            B: 'create_new_age:magnetite_block',
            R: 'minecraft:redstone',
            r: 'minecraft:redstone_block',
        })
        .id('insanity_skies:mechanical_crafter/redstone_magnet');

    event.recipes.create
        .mechanical_crafting(Item.of('3x create_new_age:layered_magnet'), [
            'IGI', 
            'GIG', 
            'RRR', 
            'GIG', 
            'IGI'
        ], {
            R: 'create_new_age:redstone_magnet',
            G: 'create_new_age:overcharged_gold',
            I: 'create_new_age:overcharged_iron',
        })
        .id('insanity_skies:mechanical_crafter/layered_magnet');

    event.recipes.create
        .mechanical_crafting(Item.of('4x create_new_age:fluxuated_magnetite'), [
            'DMDMD', 
            'MLMLM', 
            'DMDMD', 
            'MLMLM', 
            'DMDMD'
        ], {
            L: 'create_new_age:layered_magnet',
            M: 'gtceu:magnetite_dust',
            D: 'create_new_age:overcharged_diamond',
        })
        .id('insanity_skies:mechanical_crafter/fluxuated_magnetite');

    const CNA_wire = (material, energy, output) => {
        event
            .custom({
                type: 'create_new_age:energising',
                energy_needed: energy,
                ingredients: [
                    {
                        item: `gtceu:fine_${material}_wire`,
                    },
                ],
                results: [
                    {
                        item: `create_new_age:${output}`,
                    },
                ],
            })
            .id(`insanity_skies:energising/${output}`);
    };
    CNA_wire('copper', 500, 'copper_wire');
    CNA_wire('iron', 1000, 'overcharged_iron_wire');
    CNA_wire('gold', 2000, 'overcharged_golden_wire');

    const Energiser = (tier, material, prior) => {
        event.recipes.create
            .mechanical_crafting(Item.of(`create_new_age:${tier}_energiser`), [
                'PRP',
                'USU',
                'PGP',
                ' N '
                ], {
                R: 'gtceu:cast_iron_rod',
                P: 'gtceu:cast_iron_plate',
                S: prior,
                U: '#gtceu:circuits/ulv',
                G: material,
                N: 'create_new_age:electrical_connector',
            })
            .id(`insanity_skies:mechanical_crafter/${tier}_energiser`);
    };
    Energiser('basic', 'minecraft:lightning_rod', 'create:shaft');
    Energiser('advanced', 'create_new_age:overcharged_golden_wire', 'create_new_age:basic_energiser');
    Energiser('reinforced', 'create_new_age:overcharged_diamond', 'create_new_age:advanced_energiser');

    event.recipes.create
        .mechanical_crafting(Item.of('create_new_age:basic_motor'), [
            'NRN', 
            'SMP', 
            'NRN'
        ], {
            N: 'create_new_age:overcharged_iron_sheet',
            R: 'gtceu:cast_iron_rod',
            S: 'create:shaft',
            M: 'gtceu:ulv_electric_motor',
            P: 'gtceu:cast_iron_plate',
        })
        .id('insanity_skies:mechanical_crafter/basic_motor');

    event.recipes.create
        .mechanical_crafting(Item.of('create_new_age:advanced_motor'), [
            'NRN', 
            'SMP', 
            'NRN'
        ], {
            N: 'create_new_age:overcharged_golden_sheet',
            R: 'gtceu:cast_iron_rod',
            S: 'gtceu:cast_iron_ring',
            M: 'create_new_age:basic_motor',
            P: 'gtceu:cast_iron_plate',
        })
        .id('insanity_skies:mechanical_crafter/advanced_motor');

    event.recipes.create
        .mechanical_crafting(Item.of('create_new_age:reinforced_motor'), [
            'NRRRN', 
            'SSMFP', 
            'NRRRN'
        ], {
            N: 'gtceu:cast_iron_screw',
            R: 'gtceu:cast_iron_rod',
            S: 'create:shaft',
            F: 'create_new_age:fluxuated_magnetite',
            M: 'create_new_age:basic_motor',
            P: 'gtceu:double_cast_iron_plate',
        })
        .id('insanity_skies:mechanical_crafter/reinforced_motor');


});
