GTCEuStartupEvents.registry('gtceu:machine', (event) => {

    event
        .create('new_steam_hammer', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeType('dummy')
		.appearanceBlock(() => Block.getBlock('kubejs:high_steam_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle('ABBBA', 'ABBBA', '  B  ', '     ') 
            .aisle('BBBBB', 'B   B', 'B   B', '     ') 
            .aisle('BBCBB', 'B   B', 'A C A', ' ACA ') 
            .aisle('BBBBB', 'B   B', 'B   B', '     ') 
            .aisle('ABBBA', 'AB@BA', '  B  ', '     ') 
            .where('A', Predicates.blocks('gtceu:cast_iron_frame'))
            .where('B', Predicates.blocks('kubejs:high_steam_machine_casing'))
            .where(' ', Predicates.any())
            .where('C', Predicates.blocks('gtceu:steel_machine_casing'))
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .build()
        )
        .workableCasingModel('minecraft:block/stone', 'gtceu:block/multiblock/primitive_blast_furnace');
});
