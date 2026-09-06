ServerEvents.recipes((event) => {
    const id = global.id;

    event.recipes.create
        .mechanical_crafting(Item.of(`create:chain_conveyor`, 2), [
            'ACNA', 
            'CGC ', 
            'ACNA'
        ], {
            A: 'create:andesite_alloy',
            C: 'create:andesite_casing',
            N: 'gtceu:iron_ring',
            G: 'create:large_cogwheel',
        })
        .id(`insanity_skies:mechanical_crafter/chain_conveyor`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:transmitter`, 4), [
            ' E ', 
            'PPP'
        ], {
            E: 'kubejs:ulv_emitter',
            P: 'gtceu:copper_plate',
        })
        .id(`insanity_skies:mechanical_crafter/transmitter`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:display_link`, 2), [
            ' T ', 
            'GCG'
        ], {
            T: 'create:transmitter',
            C: 'create:brass_casing',
            G: 'gtceu:gold_foil',
        })
        .id(`insanity_skies:mechanical_crafter/display_link`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:package_frogport`, 3), [
            ' G G ', 
            'AFVFA', 
            'ASSSA', 
            'OoCoO'
        ], {
            G: 'gtceu:glass_tube',
            A: 'create:andesite_alloy',
            F: 'gtceu:iron_foil',
            V: 'create:item_vault',
            S: 'minecraft:slime_ball',
            O: 'gtceu:iron_gear',
            o: 'gtceu:small_iron_gear',
            C: 'create:andesite_casing',
        })
        .id(`insanity_skies:mechanical_crafter/package_frogport`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:packager`), [
            'NLN', 
            'AFC', 
            'RBP'
        ], {
            N: 'gtceu:pig_iron_ring',
            L: 'create:andesite_funnel',
            A: 'gtceu:ulv_robot_arm',
            F: 'gtceu:pig_iron_frame',
            C: 'gtceu:ulv_conveyor_module',
            R: 'minecraft:redstone',
            B: 'create:bound_cardboard_block',
            P: 'minecraft:stone_pressure_plate',
        })
        .id(`insanity_skies:mechanical_crafter/packager`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:repackager`), [
            'NLN', 
            'CFA', 
            'PBR'
        ], {
            N: 'gtceu:pig_iron_ring',
            L: 'create:andesite_funnel',
            A: 'gtceu:ulv_robot_arm',
            F: 'gtceu:pig_iron_frame',
            C: 'gtceu:ulv_conveyor_module',
            R: 'minecraft:redstone',
            B: 'create:bound_cardboard_block',
            P: '#minecraft:wooden_pressure_plates',
        })
        .id(`insanity_skies:mechanical_crafter/repackager`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:stock_link`, 2), [
            'UTR', 
            'AVA'
        ], {
            U: '#gtceu:circuits/ulv',
            T: 'create:transmitter',
            R: '#gtceu:resistors',
            A: 'create:andesite_alloy',
            V: 'create:item_vault',
        })
        .id(`insanity_skies:mechanical_crafter/stock_link`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:stock_ticker`), [
            'GGG', 
            'GLG', 
            'PSP'
        ], {
            G: '#forge:glass_panes',
            L: 'create:stock_link',
            P: 'minecraft:paper',
            S: 'gtceu:gold_spring',
        })
        .id(`insanity_skies:mechanical_crafter/stock_ticker`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:factory_gauge`, 4), [
            'PPP', 
            'MLM', 
            'PPP'
        ], {
            M: 'create:precision_mechanism',
            L: 'create:stock_link',
            P: 'minecraft:paper',
        })
        .id(`insanity_skies:mechanical_crafter/factory_gauge`);

    event.recipes.create
        .mechanical_crafting(Item.of(`create:redstone_requester`), [
            'LVC', 
            'PPP'
        ], {
            V: 'create:item_vault',
            L: 'create:stock_link',
            C: 'minecraft:comparator',
            P: 'gtceu:iron_plate',
        })
        .id(`insanity_skies:mechanical_crafter/redstone_requester`);

    event
        .shaped(Item.of('create:redstone_link', 2), [
            'T', 
            'P'
        ], {
            T: 'create:transmitter',
            P: 'gtceu:iron_plate',
        })
        .id(`insanity_skies:shaped/redstone_link`);

    event
        .shaped(Item.of('create:item_hatch', 2), [
            'AT', 
            'AC'
        ], {
            A: 'create:andesite_alloy',
            T: 'minecraft:iron_trapdoor',
            C: 'create:chute',
        })
        .id(`insanity_skies:shaped/item_hatch`);

});
