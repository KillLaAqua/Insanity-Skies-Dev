GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('barrel_multi', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('kubejs:reinforced_stone_bricks'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('ABBBA', 'ABBBA', 'ABBBA', ' BBB ') 
            .aisle('BBBBB', 'BC CB', 'BC CB', 'B   B') 
            .aisle('BBBBB', 'B   B', 'B   B', 'B   B') 
            .aisle('BBBBB', 'BC CB', 'BC CB', 'B   B') 
            .aisle('ABBBA', 'AB@BA', 'ABBBA', ' BBB ') 
            .where('A', Predicates.blocks('gtceu:iron_frame'))
            .where('B', Predicates.blocks('kubejs:reinforced_stone_bricks'))
            .where(' ', Predicates.any())
            .where('C', Predicates.blocks('gtceu:bronze_pipe_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});