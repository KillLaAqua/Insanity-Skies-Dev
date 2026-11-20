GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('new_solidifier', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('gtceu:industrial_steam_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('A B A', 'BBBBB', 'BBBBB', 'BBBBB', '  B  ') 
            .aisle(' BBB ', 'BBBBB', 'BCCCB', 'B   B', ' BBB ') 
            .aisle(' BBB ', 'BC CB', 'B   B', 'B   B', 'ABDBA') 
            .aisle('BBBBB', 'B   B', 'B   B', 'B   B', 'BBDBB') 
            .aisle(' BBB ', 'BC CB', 'B   B', 'B   B', 'ABDBA') 
            .aisle(' BBB ', 'BBBBB', 'BCCCB', 'B   B', ' BBB ') 
            .aisle('A B A', 'BBBBB', 'BB@BB', 'BBBBB', '  B  ') 
            .where('A', Predicates.blocks('gtceu:bronze_frame'))
            .where(' ', Predicates.any())
            .where('B', Predicates.blocks('gtceu:industrial_steam_casing'))
            .where('C', Predicates.blocks('gtceu:bronze_pipe_casing'))
            .where('D', Predicates.blocks('gtceu:tempered_glass'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});