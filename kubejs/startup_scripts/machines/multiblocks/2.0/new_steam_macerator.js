GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('new_steam_macerator', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('gtceu:steam_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('ABBBA', 'ABBBA', 'ABBBA', 'BBBBB') 
            .aisle('BBBBB', 'BCCCB', 'B   B', 'B   B') 
            .aisle('BBBBB', 'BCCCB', 'B   B', 'B   B') 
            .aisle('BBBBB', 'BCCCB', 'B   B', 'B   B') 
            .aisle('ABBBA', 'AB@BA', 'ABBBA', 'BBBBB') 
            .where('A', Predicates.blocks('gtceu:bronze_frame'))
            .where('B', Predicates.blocks('gtceu:steam_machine_casing'))
            .where('C', Predicates.blocks('gtceu:bronze_gearbox'))
            .where(' ', Predicates.any())
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});
